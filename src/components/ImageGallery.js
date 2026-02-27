import React, { useState, useEffect, useCallback } from 'react';
import './ImageGallery.css';
import AnimateOnScroll from './AnimateOnScroll';

const images = [
  { src: '/1.png', alt: 'Ministry Event 1' },
  { src: '/2.png', alt: 'Ministry Event 2' },
  { src: '/3.png', alt: 'Ministry Event 3' },
  { src: '/4.png', alt: 'Ministry Event 4' },
  { src: '/5.png', alt: 'Ministry Event 5' },
  { src: '/6.png', alt: 'Ministry Event 6' },
];

const ImageGallery = () => {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), []);
  const prev = () => { setAuto(false); setCurrent(i => (i - 1 + images.length) % images.length); };
  const goTo = (i) => { setAuto(false); setCurrent(i); };

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [auto, next]);

  return (
    <section className="gallery-section">
      <div className="container">
        <AnimateOnScroll animation="slide-up">
          <div className="gallery-heading">
            <h2>Photo Gallery</h2>
            <div className="divider"></div>
          </div>
        </AnimateOnScroll>

        {/* Main viewer */}
        <AnimateOnScroll animation="scale-in" delay={0.2}>
          <div className="gallery-viewer">
            <button className="gallery-arrow left" aria-label="Previous" onClick={prev}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline stroke="currentColor" points="15 18 9 12 15 6" />
              </svg>
            </button>

            <img src={images[current].src} alt={images[current].alt} />

            <button className="gallery-arrow right" aria-label="Next" onClick={() => { setAuto(false); next(); }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline stroke="currentColor" points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>

        {/* Thumbnails */}
        <AnimateOnScroll animation="fade-in" delay={0.4}>
          <div className="gallery-thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`Thumbnail ${i + 1}`}
                className={`gallery-thumb ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ImageGallery;
