import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useGlobalState from '../../hooks/useGlobalState';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', anchor: '#home' },
  { label: 'Worship', anchor: '#worship' },
  { label: 'Sermons', anchor: '#sermons' },
  { label: 'Ministries', anchor: '#ministries' },
  { label: 'Contact', anchor: '#contact' },
];

const Header = () => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useGlobalState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, anchor) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div id="logonav" className="glass-bar">
        <div className="logo-nav-flex">

          {/* Logo */}
          <a href="#home" onClick={e => scrollTo(e, '#home')} className="logo-link">
            <img src="/logo.png" alt="Mount Zion Logo" className="logo-image" />
          </a>

          {/* Nav */}
          <nav className={`navbar ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul className="nav-links">
              {NAV_LINKS.map(({ label, anchor }) => (
                <li key={anchor}>
                  <a href={anchor} onClick={e => scrollTo(e, anchor)}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="nav-right">
            <button className="theme-toggle-btn" onClick={toggleTheme} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px', padding: '6px 10px', marginRight: '10px', cursor: 'pointer' }}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="lang-toggle-btn" onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'te' : 'en')
            }>
              {i18n.language === 'en' ? 'తెలుగు' : 'English'}
            </button>

            <a
              href="#contact"
              onClick={e => scrollTo(e, '#contact')}
              className="plan-visit-btn"
            >
              Plan Your Visit
            </a>

            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
