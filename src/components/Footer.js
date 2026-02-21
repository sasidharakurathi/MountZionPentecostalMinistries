import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section-content footer-content">
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/locations">Locations</a>
          <a href="/songs">Mount Zion Songs</a>
          <a href="/events">Events</a>
          <a href="/donate">Donate</a>
        </div>
      </div>
      <div className="section-content footer-bottom">
        <p>Copyright © 2025 Mount Zion Pentecostal Ministries - All Rights Reserved.</p>
        <p>Powered by Mount Zion Ministries</p>
      </div>
    </footer>
  );
};

export default Footer;
