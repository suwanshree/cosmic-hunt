import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewProductForm from "./NewProductForm";

function NewProductFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signupButton" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-plus"></i> Product
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewProductForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default NewProductFormModal;
