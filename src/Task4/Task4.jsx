import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import { fetchImagesWithTopic } from "./images.api";
import ImageGallery from "./ImageGallery/ImageGallery";
import "./index.css";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

const Task4 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (newTopic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      setTopic(newTopic);

      setPage(1);
      const data = await fetchImagesWithTopic(newTopic, 1);
      console.log(data);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      setLoading(true);

      const data = await fetchImagesWithTopic(topic, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error loading more:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
      {error && (
        <p className="error-message">Сталася помилка. Спробуйте ще раз 🛠️</p>
      )}
    </div>
  );
};

export default Task4;
