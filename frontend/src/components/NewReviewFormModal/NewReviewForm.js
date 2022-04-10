import React, { useState } from "react";
import * as sessionActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NewReviewForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const productId = useSelector((state) => state.productState.currentProductId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.writeReview({ title, review, productId }))
      .then(() => setShowModal(false))
      .then(() => history.push("/products"))
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
          Post Review
        </button>
      </form>
    </div>
  );
}

export default NewReviewForm;
