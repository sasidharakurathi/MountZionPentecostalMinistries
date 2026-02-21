import React from 'react';
import './PosterSection.css';

const PosterSection = () => {
  return (
    <div id="poster-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/banner.png" 
               alt="Mount Zion Pentecostal Ministries Banner" />
        </div>
        <div className="hero-text">
          <h1><span>Mount Zion</span> Pentecostal Ministries</h1>
          <div className="hero-buttons">
            <a href="/contact" className="get-involved-btn">Get Involved</a>
          </div>
          <div className="contact-info">
            <p>Call India: <a href="tel:+911234567890">+91 1234567890</a></p>
            <p>USA: <a href="tel:+17036522392">+1 703-652-2392</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterSection;
