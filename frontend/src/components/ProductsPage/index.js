import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts, updateCurrentProductId } from "../../store/product";
import "./ProductsPage.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleOnClick = (id) => {
    dispatch(updateCurrentProductId(id));
  };
  const keys = Object.keys(products);
  return (
    <ul className="productsContainer" key={products.id}>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
      {keys
        .slice(0)
        .reverse()
        .map((key) => (
          <li
            className="productContainer"
            key={products[key].id}
            onClick={() => handleOnClick(products[key].id)}
          >
            <NavLink to={`/api/products/${products[key].id}`}>
              {products[key].title}
            </NavLink>
            <NavLink to={`/api/products/${products[key].id}`}>
              {
                <img
                  className="product-image"
                  src={products[key].imageUrl}
                  alt={products[key].title}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://res.cloudinary.com/dn0ocfiva/image/upload/v1653045697/star-yelp/brokenimage_rtafkm.png";
                  }}
                />
              }
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
