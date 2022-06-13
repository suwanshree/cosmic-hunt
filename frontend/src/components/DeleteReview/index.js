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
        <i className="fa-solid fa-trash-can"></i>
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
