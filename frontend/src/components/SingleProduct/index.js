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

  if (reviews.length > 0) {
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

  let reviewLinks;
  if (sessionUser && thisReviews) {
    thisReviews.forEach((review) => {
      if (sessionUser.id === review.userId) {
        console.log("REVIEW IN SINGLE PRODCUT", review);
        reviewLinks = (
          <div id="buttonsDiv">
            <EditReviewFormModal user={sessionUser} review={review} />
            <DeleteReview user={sessionUser} review={review} />
          </div>
        );
      }
    });
  }

  let newReviewLink;
  if (sessionUser) {
    newReviewLink = (
      <div className="buttonsDiv">
        <NewReviewFormModal user={sessionUser} />
      </div>
    );
  }

  const keys = Object.keys(thisReviews);
  return (
    <>
      {product ? (
        <>
          <div className="singleProductContainer">
            {sessionLinks}
            <div className="singleProduct">
              <h1>{product.title}</h1>
              <img src={product.imageUrl} alt={product.title} />
              <p>{product.description}</p>
            </div>
            {newReviewLink}
            <h2>Discussion:</h2>
            <ul className="reviewsContainer">
              {keys.map((key) => (
                <li className="reviewContainer" key={thisReviews[key].id}>
                  {reviewLinks}
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
    </>
  );
};

export default SingleProduct;
