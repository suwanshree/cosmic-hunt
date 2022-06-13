import React, { useState } from "react";
import * as sessionActions from "../../store/review";
import { useDispatch } from "react-redux";
import { fetchReviews } from "../../store/review";

function EditReviewForm({ setShowModal, reviewObject }) {
  const dispatch = useDispatch();
  const id = reviewObject.id;
  const [title, setTitle] = useState(reviewObject.title);
  const [review, setReview] = useState(reviewObject.review);
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.updateReview({ id, title, review }))
      .then(() => setShowModal(false))
      .then(dispatch(fetchReviews()))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="productFormContainer">
      <form className="productForm" onSubmit={handleSubmit}>
        <ul className="errors">
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
