import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import ProductsPage from "./components/ProductsPage";
import SingleProduct from "./components/SingleProduct";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/products/:id">
            <SingleProduct product={product} />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/products">
            <ProductsPage setProduct={setProduct} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
