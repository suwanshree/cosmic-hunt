import React, { useState } from "react";
import * as sessionActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

function EditReviewForm({ setShowModal }) {
  // const history = useHistory();
  const dispatch = useDispatch();
  const reviewId = useSelector((state) => state.reviewState.currentReviewId);
  const reviews = useSelector((state) => state.reviewState.reviews);
  const singleReview = reviews[reviewId];
  const [title, setTitle] = useState(singleReview.title);
  const [review, setReview] = useState(singleReview.review);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.updateReview({ reviewId, title, review }))
      .then(() => setShowModal(false))
      // .then(() => history.push(`/products`))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="productFormContainer">
      <form className="productForm" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Title
          <input
            id="productForm1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <div className="descriptionContainer">
          <label htmlFor="descriptionarea">Review</label>
          <textarea
            id="productForm3"
            name="descriptionarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button id="button" type="submit">
          Update Review
        </button>
      </form>
    </div>
  );
}

export default EditReviewForm;
