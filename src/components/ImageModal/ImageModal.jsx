import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: { background: "#000000cd" },
        content: {
          borderRadius: "6px",
          width: "650px",
          height: "550px",

          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      onRequestClose={onClose}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      preventScroll={false}
      aria={{
        labelledby: "heading",
        describedby: "full_description",
      }}
    >
      <div className={css.container}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
