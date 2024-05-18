const ImageCard = ({ image: { urls } }) => {
  return (
    <div>
      <img src={urls.small} alt="" />
    </div>
  );
};

export default ImageCard;
