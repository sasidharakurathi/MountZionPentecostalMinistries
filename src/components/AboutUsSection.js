import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <section className="aboutus-section section-container">
      <div className="section-content">
        <h2 className="section-title">About Us</h2>
        <div className="aboutus-content">
          <div className="aboutus-image">
            <img src="/2.png"
              alt="Community gathering" />
          </div>
          <p>
            Here at Mount Zion Pentecostal Ministries we desire to become disciples who make disciples.
            Our Ministry encourages every believer and helps them through difficult times.
          </p>
          <div className="mission-points">
            <div className="mission-item">
              <h3>Our PASSION</h3>
              <p>is to love God with our whole heart, mind, soul, and strength.</p>
            </div>
            <div className="mission-item">
              <h3>Our PURPOSE</h3>
              <p>is to love our neighbors and help them grow in Spirit.</p>
            </div>
            <div className="mission-item">
              <h3>We strive to GROW</h3>
              <p>in our faith by praying, studying the Word of God, and worshiping Him.</p>
            </div>
            <div className="mission-item">
              <h3>Our Ministry</h3>
              <p>not only provides personal spiritual needs for all, but also gives everyone the opportunity to SERVE and help others as Christ has instructed us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
