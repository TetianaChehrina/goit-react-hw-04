import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import fetchImages from "../fetchImages/fetchImages";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;
    async function handleSearch() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(searchTerm, page);
        setImages(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    handleSearch();
  }, [page, searchTerm]);

  const handleChangeTerm = (newValue) => {
    setImages([]);
    setPage(1);
    setSearchTerm(newValue);
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = await fetchImages(searchTerm, page + 1);
      setPage((prevPage) => prevPage + 1);
      setImages((prevImages) => [...prevImages, ...nextPage.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleChangeTerm} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery listImages={images} isOpen={handleOpenModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onChange={handleLoadMore} />}
      {modalImage && (
        <ImageModal
          image={modalImage}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
