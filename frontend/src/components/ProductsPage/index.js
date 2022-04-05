import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import SingleProduct from "../SingleProduct";
import { fetchProducts } from "../../store/product";
import "./ProductsPage.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.entries);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const keys = Object.keys(products);
  return (
    <div>
      <h1>Article List</h1>
      <ul>
        {keys.map((key) => (
          <li key={products[key].id}>
            <NavLink to={`/products/${products[key].id}`}>
              {products[key].title}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path="/products/:id">
          <SingleProduct products={products} />
        </Route>
      </Switch>
    </div>
  );
};

export default ProductList;
