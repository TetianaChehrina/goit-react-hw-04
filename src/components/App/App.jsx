import { useEffect, useState } from "react";
import fetchImages from "../fetchImages/fetchImages";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImg = async () => {
      const data = await fetchImages("office", 1);
      setImages(data);
      console.log(data);
    };
    fetchImg();
  }, []);
  return <>{images.length > 0 && <ImageGallery listImages={images} />}</>;
}
