import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
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
