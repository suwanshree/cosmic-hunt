import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReviewForm from "./EditReviewForm";

function EditReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editProductButton" onClick={() => setShowModal(true)}>
        Edit Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;
