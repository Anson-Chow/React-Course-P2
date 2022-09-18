import React from "react";
import "./Modal.css";

const Modal = ({ title, removeModal }) => {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={removeModal}
          >
            Cancel
          </button>
          <button
            className="btn"
            onClick={removeModal}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
};

export default Modal;
