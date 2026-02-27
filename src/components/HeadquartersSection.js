import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';
import './HeadquartersSection.css';

const HIGHLIGHTS = [
  {
    icon: '✨',
    titleKey: 'hq.h1_title',
    descKey: 'hq.h1_desc',
  },
  {
    icon: '✝️',
    titleKey: 'hq.h2_title',
    descKey: 'hq.h2_desc',
  },
  {
    icon: '🌍',
    titleKey: 'hq.h3_title',
    descKey: 'hq.h3_desc',
  },
];

const HeadquartersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hq-section" id="about">

      {/* Soft decorative background shapes */}
      <div className="hq-bg-shape hq-shape-1" aria-hidden="true" />
      <div className="hq-bg-shape hq-shape-2" aria-hidden="true" />

      <div className="container hq-inner">

        {/* LEFT — Video / Media */}
        <AnimateOnScroll animation="fade-left" className="hq-media-col">
          <div className="hq-media-wrap">
            <div className="hq-media-frame">
              <iframe
                src="https://www.youtube.com/embed/OR5tZGvWWSU?rel=0&modestbranding=1"
                title="Mount Zion Ministry Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Floating badge */}
            <div className="hq-media-badge">
              <span className="badge-icon">⛪</span>
              <div>
                <strong>{t('hq.badge_title')}</strong>
                <span>{t('hq.badge_sub')}</span>
              </div>
            </div>
          </div>

          {/* Photo strip below video */}
          <div className="hq-photo-strip">
            {['/1.png', '/3.png', '/4.png'].map((src, i) => (
              <div key={i} className="hq-photo-thumb">
                <img src={src} alt={`Ministry moment ${i + 1}`} />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* RIGHT — Content */}
        <div className="hq-content-col">

          <AnimateOnScroll animation="fade-right" delay={0.1}>
            <span className="hq-eyebrow">{t('hq.eyebrow')}</span>
            <h2 className="hq-heading">
              {t('hq.heading')}
              <span className="hq-gold-line" aria-hidden="true" />
            </h2>
            <p className="hq-body">{t('hq.body')}</p>
          </AnimateOnScroll>

          {/* 3 Highlight points */}
          <div className="hq-highlights">
            {HIGHLIGHTS.map((h, i) => (
              <AnimateOnScroll key={i} animation="fade-right" delay={0.15 + i * 0.12}>
                <div className="hq-highlight-item">
                  <span className="hq-hi-icon">{h.icon}</span>
                  <div>
                    <strong>{t(h.titleKey)}</strong>
                    <p>{t(h.descKey)}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-right" delay={0.45}>
            <a
              href="https://www.youtube.com/@MountZionPentecostalMinistries"
              target="_blank"
              rel="noreferrer"
              className="hq-learn-btn"
            >
              {t('hq.learn_more')} →
            </a>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default HeadquartersSection;
