import { useSelector } from "react-redux";
import EditProductFormModal from "../EditProductFormModal";
import DeleteProduct from "../DeleteProduct";
import "./SingleProduct.css";

const SingleProduct = () => {
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser || product) {
    if (sessionUser.id === product.ownerId) {
      sessionLinks = (
        <div id="buttonsDiv">
          <EditProductFormModal user={sessionUser} />
          <DeleteProduct user={sessionUser} />
        </div>
      );
    }
  }

  return (
    <>
      {product ? (
        <div className="singleProductContainer">
          {sessionLinks}
          <div className="singleProduct">
            <h1>{product.title}</h1>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default SingleProduct;
