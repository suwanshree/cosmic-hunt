import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ConfirmDelete from "./confirmDelete";

function DeleteReview({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="deleteProductButton"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete setShowModal={setShowModal} review={review} />
        </Modal>
      )}
    </>
  );
}

export default DeleteReview;