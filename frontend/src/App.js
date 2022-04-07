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

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/api/products/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
