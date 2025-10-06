import React from "react";
import ImageCard from "./ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li
          className="image-gallery-item"
          onClick={() => onImageClick(image)}
          key={image.id}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
