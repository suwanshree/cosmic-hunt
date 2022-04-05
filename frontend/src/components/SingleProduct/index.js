import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = ({ products }) => {
  const { id } = useParams();
  // const singleArticle = articles.find(article => article.id === +id);
  const singleProduct = products[id];
  return (
    <>
      {singleProduct ? (
        <div className="singleProduct">
          <h1>{singleProduct.title}</h1>
          <img src={singleProduct.imageUrl} alt={singleProduct.title} />
          <p>{singleProduct.description}</p>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default SingleProduct;
