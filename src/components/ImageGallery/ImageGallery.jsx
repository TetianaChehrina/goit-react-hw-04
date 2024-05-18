import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ listImages }) => {
  return (
    <ul>
      {listImages.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
