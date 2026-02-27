import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslation();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-bg" aria-hidden="true">
                <img src="/2.png" alt="" className="hero-bg-img" />
                <div className="hero-overlay" />
            </div>

            <div className={`hero-content ${loaded ? 'visible' : ''}`}>
                <h1 className="hero-title">{t('hero.title')}</h1>
                <p className="hero-sub">{t('hero.subtitle')}</p>
                <p className="hero-verse">{t('hero.verse')}</p>

                <div className="hero-actions">
                    <button className="hero-btn primary" onClick={() => scrollTo('#contact')}>
                        {t('hero.cta_primary')}
                    </button>
                    <a
                        className="hero-btn secondary"
                        href="https://www.youtube.com/@MountZionPentecostalMinistries"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ▶ {t('hero.cta_secondary')}
                    </a>
                </div>
            </div>

            <div className="hero-scroll-hint" onClick={() => scrollTo('#about')}>
                <span>{t('hero.scroll')}</span>
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
};

export default HeroSection;
