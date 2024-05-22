import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ listImages }) => {
  return (
    <ul className="css.list">
      {listImages.map((image) => (
        <li className="css.listItem" key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
