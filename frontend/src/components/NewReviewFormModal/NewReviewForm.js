import React, { useState } from "react";
import * as sessionActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";

function NewReviewForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const productId = useSelector((state) => state.productState.currentProductId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.writeReview({ title, review, productId }))
      .then(() => setShowModal(false))
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
            id="reviewForm1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <div className="descriptionContainer">
          <label htmlFor="descriptionarea">Review</label>
          <textarea
            id="reviewForm2"
            name="descriptionarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button id="button" type="submit">
          Post Review
        </button>
      </form>
    </div>
  );
}

export default NewReviewForm;
