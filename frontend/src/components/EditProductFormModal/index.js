import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProductForm from "./EditProductForm";

function EditProductFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editProductButton" onClick={() => setShowModal(true)}>
        Update
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProductForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProductFormModal;
