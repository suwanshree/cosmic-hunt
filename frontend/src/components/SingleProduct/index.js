import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProductFormModal from "../EditProductFormModal";
import DeleteProduct from "../DeleteProduct";
import NewReviewFormModal from "../NewReviewFormModal";
import EditReviewFormModal from "../EditReviewFormModal";
import DeleteReview from "../DeleteReview";
import { fetchReviews } from "../../store/review";
import "./SingleProduct.css";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];
  const reviews = useSelector((state) => state.reviewState.reviews);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const thisReviews = [];

  if (reviews !== undefined && reviews.length > 0) {
    reviews?.forEach((review) => {
      if (review) {
        if (productId === review.productId) {
          thisReviews.push(review);
        }
      }
    });
  }

  let sessionLinks;
  if (sessionUser && product) {
    if (sessionUser.id === product.ownerId) {
      sessionLinks = (
        <div id="buttonsDiv">
          <EditProductFormModal user={sessionUser} />
          <DeleteProduct user={sessionUser} />
        </div>
      );
    }
  }

  let newReviewLink;
  let singleUserReview = true;

  if (sessionUser && thisReviews) {
    for (let i = 0; i < thisReviews.length; i++) {
      if (thisReviews[i].userId === sessionUser.id) singleUserReview = false;
    }
  }

  if (sessionUser && sessionUser.id !== product?.ownerId && singleUserReview === true) {
    newReviewLink = (
      <div className="buttonsDiv">
        <NewReviewFormModal user={sessionUser} />
      </div>
    );
  }

  const keys = Object.keys(thisReviews);
  return (
    <div className="singleProductPage">
      {product ? (
        <>
          <div className="singleProductContainer">
            {sessionLinks}
            <div className="singleProduct">
              <h1>{product.title}</h1>
              <img
                src={product.imageUrl}
                alt={product.title}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://res.cloudinary.com/dn0ocfiva/image/upload/v1653045697/star-yelp/brokenimage_rtafkm.png";
                }}
              />
              <p>{product.description}</p>
            </div>
            {newReviewLink}
            <h2>Discussion:</h2>
            <ul className="reviewsContainer" key={thisReviews}>
              {keys.map((key) => (
                <li className="reviewContainer" key={thisReviews[key].id}>
                  {sessionUser && sessionUser.id === thisReviews[key].userId && (
                    <div id="buttonsDiv">
                      <EditReviewFormModal
                        user={sessionUser}
                        reviewObject={thisReviews[key]}
                      />
                      <DeleteReview
                        user={sessionUser}
                        review={thisReviews[key].id}
                      />
                    </div>
                  )}
                  <h2>{thisReviews[key].title}</h2>
                  {thisReviews[key].review}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SingleProduct;
