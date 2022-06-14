import React, { useState } from "react";
import * as sessionActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/product";

function EditProductForm({ setShowModal }) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productState.currentProductId);
  const products = useSelector((state) => state.productState.products);
  const product = products[productId];
  const [title, setTitle] = useState(product.title);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [description, setDescription] = useState(product.description);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(
      sessionActions.updateProduct({ productId, title, imageUrl, description })
    )
      .then(() => setShowModal(false))
      .then(() => dispatch(fetchProducts()))
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
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProductForm;
