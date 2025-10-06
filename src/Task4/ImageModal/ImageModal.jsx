import React from "react";
import "./Modal.css"; // додай стилі
import ReactModal from "react-modal";

ReactModal.setAppElement("#root"); // для accessibility

const ImageModal = ({ image, onClose, isOpen }) => {
  if (!image) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose} // закриває при ESC або кліку поза модалкою
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.alt_description || "No description"}</p>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};

export default ImageModal;
