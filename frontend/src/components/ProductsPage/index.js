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
