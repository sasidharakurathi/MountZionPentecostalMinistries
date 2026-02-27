import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslation();

    const scrollTo = React.useCallback((id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
        <section className="hero-section" id="home">
            <div className="hero-bg" aria-hidden="true">
                <img src="/2.png" alt="" className="hero-bg-img" loading="lazy" />
                <div className="hero-overlay" />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {t('hero.title')}
                </motion.h1>
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
            </motion.div>

            <div className="hero-scroll-hint" onClick={() => scrollTo('#about')}>
                <span>{t('hero.scroll')}</span>
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
};

export default HeroSection;
