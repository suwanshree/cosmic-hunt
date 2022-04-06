import { useSelector } from "react-redux";
import "./SingleProduct.css";

const SingleProduct = () => {
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];
  return (
    <>
      {product ? (
        <div className="singleProduct">
          <h1>{product.title}</h1>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default SingleProduct;
