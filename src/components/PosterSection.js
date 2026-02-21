import React from 'react';
import './PosterSection.css';

const PosterSection = () => {
  return (
    <section id="poster-container">
      <div className="hero-inner">

        {/* LEFT – Poster / service image */}
        <div className="hero-poster">
          <img src="/banner.png" alt="Mount Zion Ministry Sunday Service Poster" />
          <div className="hero-social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src="/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* RIGHT – Ministry info */}
        <div className="hero-info">
          <span className="label">Est. Ministry</span>
          <h1>
            <span>Pentecostal</span>
            Mount Zion Ministries
          </h1>
          <a href="/contact" className="hero-btn">Get Involved</a>
          <div className="hero-contacts">
            <p>Call India: <a href="tel:+911234567890">+91 1234567890</a></p>
            <p>USA: <a href="tel:+17036522392">+1 703-652-2392</a></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PosterSection;
