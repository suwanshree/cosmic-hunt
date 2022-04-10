import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/product";
import { useHistory } from "react-router-dom";

function ConfirmDelete({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeProduct(product));
    setShowModal(false);
    history.push("/");
    window.location.reload();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="deleteModal">
      <button className="confirmButton" onClick={handleSubmit}>
        Confirm Delete
      </button>
      <button className="editProductButton" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default ConfirmDelete;
