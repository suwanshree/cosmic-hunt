import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewProductForm from "./NewProductForm";

function NewProductFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signupButton" onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-plus"></i>
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
