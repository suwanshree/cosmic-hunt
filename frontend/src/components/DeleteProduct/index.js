import React from "react";

function DeleteProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // return
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
