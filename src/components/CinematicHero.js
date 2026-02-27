import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './CinematicHero.css';

// Pre-computed particle data to avoid random changes on re-render
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 95}%`,
    width: `${8 + (i * 13) % 20}px`,
    height: `${8 + (i * 13) % 20}px`,
    delay: `${(i * 0.7) % 12}s`,
    duration: `${14 + (i * 1.3) % 14}s`,
    type: ['cp-gold', 'cp-blue', 'cp-pink', 'cp-green', 'cp-white'][i % 5],
}));

// Light rays
const RAYS = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    left: `${10 + i * 13}%`,
    duration: `${3 + i * 0.5}s`,
    delay: `${i * 0.4}s`,
}));

const CinematicHero = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ── Scene Opacities ──
    const dawnOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15, 0.22], [1, 1, 0, 0]);
    const dawnScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.06]);

    const worshipOpacity = useTransform(scrollYProgress, [0.12, 0.18, 0.30, 0.37], [0, 1, 1, 0]);
    const worshipY = useTransform(scrollYProgress, [0.12, 0.37], [60, -30]);

    const wordOpacity = useTransform(scrollYProgress, [0.33, 0.40, 0.55, 0.62], [0, 1, 1, 0]);
    const wordX = useTransform(scrollYProgress, [0.33, 0.62], [50, 0]);

    const communityOpacity = useTransform(scrollYProgress, [0.58, 0.65, 0.78, 0.84], [0, 1, 1, 0]);
    const communityScale = useTransform(scrollYProgress, [0.58, 0.84], [0.93, 1.05]);

    const celebOpacity = useTransform(scrollYProgress, [0.82, 0.90, 1], [0, 1, 1]);
    const celebY = useTransform(scrollYProgress, [0.82, 1], [40, 0]);

    // Background gradient morph — single layer
    const bgFilter = useTransform(
        scrollYProgress,
        [0, 0.15, 0.35, 0.62, 0.84, 1],
        [
            'hue-rotate(0deg) brightness(1)',
            'hue-rotate(0deg) brightness(1)',
            'hue-rotate(0deg) brightness(0.9)',
            'hue-rotate(0deg) brightness(1)',
            'hue-rotate(0deg) brightness(1)',
            'hue-rotate(0deg) brightness(1.05)',
        ]
    );

    return (
        <section className="cinematic-container" ref={containerRef}>
            <div className="cinematic-sticky">

                {/* ─── Per-scene gradient background ─── */}
                <motion.div className="cinematic-bg-layer scene-dawn-bg" style={{ opacity: dawnOpacity }} />
                <motion.div className="cinematic-bg-layer scene-worship-bg" style={{ opacity: worshipOpacity }} />
                <motion.div className="cinematic-bg-layer scene-word-bg" style={{ opacity: wordOpacity }} />
                <motion.div className="cinematic-bg-layer scene-community-bg" style={{ opacity: communityOpacity }} />
                <motion.div className="cinematic-bg-layer scene-celebration-bg" style={{ opacity: celebOpacity }} />

                {/* ─── Floating Light Particles ─── */}
                <div className="cinematic-particles">
                    {PARTICLES.map(p => (
                        <div
                            key={p.id}
                            className={`cp ${p.type}`}
                            style={{
                                left: p.left,
                                bottom: '-5%',
                                width: p.width,
                                height: p.height,
                                animationDelay: p.delay,
                                animationDuration: p.duration,
                            }}
                        />
                    ))}
                    {/* Light Rays (subtle) */}
                    {RAYS.map(r => (
                        <div
                            key={r.id}
                            className="light-ray"
                            style={{
                                left: r.left,
                                animationDuration: r.duration,
                                animationDelay: r.delay,
                            }}
                        />
                    ))}
                </div>

                {/* ══════════════════════════════
                    SCENE 1: DAWN OF HOPE (0—15%)
                ══════════════════════════════ */}
                <motion.div
                    className="cinematic-scene scene-center"
                    style={{ opacity: dawnOpacity, scale: dawnScale }}
                >
                    <div className="scene-content">
                        <h1 className="cinematic-title title-dawn">
                            {t('cinematic.call_title', 'Mount Zion Pentecostal Ministries')}
                        </h1>
                        <h2 className="cinematic-sub">
                            {t('cinematic.call_sub', 'Where faith rises with the morning.')}
                        </h2>
                        <p className="cinematic-support">
                            {t('cinematic.call_support', 'A place of worship, word, and transformation.')}
                        </p>
                        <div className="cinematic-actions" style={{ marginTop: '2.5rem' }}>
                            <a href="/visit" className="cinematic-btn primary">
                                {t('nav.plan_visit', 'Plan Your Visit')}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ══════════════════════════════
                    SCENE 2: WORSHIP ENERGY (15—35%)
                ══════════════════════════════ */}
                <motion.div
                    className="cinematic-scene scene-center"
                    style={{ opacity: worshipOpacity, y: worshipY }}
                >
                    <div className="scene-content">
                        <svg className="glowing-cross" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10.5 2h3v6h5v3h-5v11h-3V11h-5V8h5V2z" />
                        </svg>
                        <h1 className="cinematic-title title-worship">
                            {t('cinematic.worship_title', 'Worship with joy.')}
                        </h1>
                        <p className="cinematic-support cinematic-support-light">
                            {t('cinematic.worship_support', 'Spirit-filled praise. Life-changing encounters with the living God.')}
                        </p>
                    </div>
                </motion.div>

                {/* ══════════════════════════════
                    SCENE 3: THE WORD (35—60%)
                ══════════════════════════════ */}
                <motion.div
                    className="cinematic-scene scene-right"
                    style={{ opacity: wordOpacity, x: wordX }}
                >
                    <div className="scene-content">
                        <h1 className="cinematic-title title-word">
                            {t('cinematic.word_title', 'Truth that transforms.')}
                        </h1>
                        <ul className="cinematic-bullets">
                            <li>{t('cinematic.word_bullet_1', 'Practical biblical teaching')}</li>
                            <li>{t('cinematic.word_bullet_2', 'Spirit-led revelation')}</li>
                            <li>{t('cinematic.word_bullet_3', 'Faith for everyday life')}</li>
                        </ul>
                    </div>
                </motion.div>

                {/* ══════════════════════════════
                    SCENE 4: COMMUNITY (60—80%)
                ══════════════════════════════ */}
                <motion.div
                    className="cinematic-scene scene-center"
                    style={{ opacity: communityOpacity, scale: communityScale }}
                >
                    <div className="scene-content">
                        <h1 className="cinematic-title title-community">
                            {t('cinematic.community_title', 'Growing together in Christ.')}
                        </h1>
                        <p className="cinematic-support" style={{ color: '#005440' }}>
                            {t('cinematic.community_support', 'Growing together. Serving together. Standing together.')}
                        </p>
                    </div>
                </motion.div>

                {/* ══════════════════════════════
                    SCENE 5: CELEBRATION CTA (80—100%)
                ══════════════════════════════ */}
                <motion.div
                    className="cinematic-scene scene-center"
                    style={{ opacity: celebOpacity, y: celebY }}
                >
                    <div className="scene-content">
                        <img src="/logo.png" alt="Mount Zion Logo" className="cinematic-logo" />
                        <h1 className="cinematic-title title-invite">
                            {t('cinematic.invitation_title', 'You are welcome here.')}
                        </h1>
                        <div className="cinematic-actions">
                            <a href="/contact" className="cinematic-btn primary">
                                {t('hero.cta_primary', 'Join Us This Sunday')}
                            </a>
                            <a
                                href="https://www.youtube.com/@mountzionpentecostalchurch"
                                target="_blank"
                                rel="noreferrer"
                                className="cinematic-btn secondary"
                            >
                                {t('hero.cta_secondary', 'Watch Live')}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll nudge */}
                <div className="scroll-indicator">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>

            </div>
        </section>
    );
};

export default CinematicHero;
