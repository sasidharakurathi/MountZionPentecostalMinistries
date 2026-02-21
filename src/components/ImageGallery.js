import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Your actual images from the static folder
  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png'
  ];

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, images.length]);

  const handlePrevImage = () => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setIsAutoScrolling(false);
    setCurrentImageIndex(index);
  };

  return (
    <section id="image-container" className="section-container bg-secondary">
      <div className="section-content">
        <h2 className="section-title">Image Gallery</h2>
        <div id="image-content">
          <button
            id="left-arrow"
            aria-label="Previous image"
            onClick={handlePrevImage}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <img
            id="scroll-image"
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
          />
          <button
            id="right-arrow"
            aria-label="Next image"
            onClick={handleNextImage}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div id="image-gallery">
          <div id="gallery-row">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`gallery-thumb ${index === currentImageIndex ? 'selected' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
