import React from "react";
import { useDispatch, useSelector } from "react-redux";
import removeProduct from "../../store/product";
import { useHistory } from "react-router-dom";

function DeleteProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeProduct(product));
    history.push("/products");
  };
  return (
    <>
      <button className="deleteProductButton" onClick={handleSubmit}>
        Delete
      </button>
    </>
  );
}

export default DeleteProduct;
