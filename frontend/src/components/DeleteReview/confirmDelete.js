import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReview, updateCurrentReviewId } from "../../store/review";
import { useHistory } from "react-router-dom";

function ConfirmDelete({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const reviews = useSelector((state) => state.reviewState.reviews);

  const handleSubmit = (id) => {
    id.preventDefault();
    const review = reviews[id];
    console.log("REVIEW TO DELETE", review);
    dispatch(updateCurrentReviewId(id));
    dispatch(removeReview(review));
    setShowModal(false);
    history.push("/products");
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
