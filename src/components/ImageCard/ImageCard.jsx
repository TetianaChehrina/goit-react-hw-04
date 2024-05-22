import css from "./ImageCard.module.css";
const ImageCard = ({ image, onOpen }) => {
  return (
    <div className={css.image_Card}>
      <img
        className={css.card_Image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpen(image)}
      />
    </div>
  );
};

export default ImageCard;
