import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header">
      <div id="banner">
        <h3>WE PREACH CHRIST RESURRECTED</h3>
      </div>

      <div id="logonav">
        <div className="logo-nav-flex">
          <div className="logo-section">
            <img src="/logo.png" alt="Mount Zion Pentecostal Ministries Logo" className="logo-image" />
            <h1>Mount Zion Pentecostal Ministries</h1>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav-container">
              <ul className="nav-links">
                <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="/pastor" onClick={() => setIsMenuOpen(false)}>Pastor</a></li>
                <li><a href="/beliefs" onClick={() => setIsMenuOpen(false)}>Our Beliefs</a></li>
                <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                <li><a href="/locations" onClick={() => setIsMenuOpen(false)}>Locations</a></li>
                <li><a href="/songs" onClick={() => setIsMenuOpen(false)}>Songs</a></li>
                <li><a href="/events" onClick={() => setIsMenuOpen(false)}>Events</a></li>
                <li><a href="/donate" onClick={() => setIsMenuOpen(false)}>Donate</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
