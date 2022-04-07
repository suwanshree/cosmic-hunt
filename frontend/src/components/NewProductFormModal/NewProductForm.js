import React, { useState } from "react";
import * as sessionActions from "../../store/product";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function NewProductForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.writeProduct({ title, imageUrl, description }))
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
        <label>
          Image URL
          <input
            id="productForm2"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <div className="descriptionContainer">
          <label htmlFor="descriptionarea">Description</label>
          <textarea
            id="productForm3"
            name="descriptionarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button id="button" type="submit">
          Host Product
        </button>
      </form>
    </div>
  );
}

export default NewProductForm;
