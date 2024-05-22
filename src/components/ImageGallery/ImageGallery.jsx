import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ listImages, onOpen }) => {
  return (
    <ul className={css.list}>
      {listImages.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard image={image} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
