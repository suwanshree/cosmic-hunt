import React from "react";
import { useDispatch } from "react-redux";
import { removeReview } from "../../store/review";
// import { useHistory } from "react-router-dom";

function ConfirmDelete({ setShowModal, review }) {
  const dispatch = useDispatch();
  // const history = useHistory();
  console.log("REVIEW IN DELETE REVIEW", review);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeReview(review));
    setShowModal(false);
    // history.push("/products");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="deleteModal">
      <button className="confirmButton" onClick={handleSubmit()}>
        Confirm Delete
      </button>
      <button className="editProductButton" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default ConfirmDelete;
