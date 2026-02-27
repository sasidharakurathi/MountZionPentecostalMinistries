import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">

          {/* Logo */}
          <div className="footer-logo">
            <img src="/logo.png" alt="Mount Zion Logo" />
            <span>Mount Zion Pentecostal Ministries</span>
          </div>

          {/* Nav links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/contact">Contact</a>
            <a href="/locations">Locations</a>
            <a href="/songs">Songs</a>
            <a href="/events">Events</a>
            <a href="/donate">Donate</a>
            <a href="/pastor">Pastor</a>
            <a href="/beliefs">Our Beliefs</a>
          </nav>

          {/* Social */}
          <div className="footer-social">
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

        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} Mount Zion Pentecostal Ministries — All Rights Reserved.</p>
          <p>Powered by Mount Zion Ministries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
