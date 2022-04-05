import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/product";
import "./ProductsPage.css";

const ProductList = ({ setProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.entries);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleOnClick = (product) => {
    setProduct(product);
  };
  const keys = Object.keys(products);
  return (
    <ul className="productsContainer">
      {keys.map((key) => (
        <li
          className="productContainer"
          key={products[key].id}
          onClick={handleOnClick(products[key])}
        >
          <NavLink to={`/products/${products[key].id}`}>
            {products[key].title}
          </NavLink>
          <NavLink to={`/products/${products[key].id}`}>
            {<img src={products[key].imageUrl} alt={products[key].title} />}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
