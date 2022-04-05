import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewProductForm from "./NewProductForm";

function NewProductFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signupButton" onClick={() => setShowModal(true)}>
        Host
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewProductForm />
        </Modal>
      )}
    </>
  );
}

export default NewProductFormModal;
