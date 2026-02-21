import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className="navbar">
            <div className="nav-container">
              <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/pastor">Pastor</a></li>
                <li><a href="/beliefs">Our Beliefs</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/locations">Locations</a></li>
                <li><a href="/songs">Mount Zion Songs</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/donate">Donate</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
