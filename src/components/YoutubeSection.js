import React from 'react';
import { useTranslation } from 'react-i18next';
import './YoutubeSection.css';
import AnimateOnScroll from './AnimateOnScroll';

// Real video IDs from @MountZionPentecostalMinistries channel
const VIDEOS = [
    {
        id: 'cGanoeZOOeI',
        title: 'Christmas Service 2025 — Msg By Brother John J | MZPM',
    },
    {
        id: 'OR5tZGvWWSU',
        title: 'గుండెలో నిండియున్న ప్రేమనే | Live Worship Song | Pas.Joshua Matthew',
    },
    {
        id: 'MG94EYhMURU',
        title: 'జీవదాత ప్రాణనాధా గానము నీకోసమే | Wonderful Worship Song | Pas.Joshua Mathew',
    },
    {
        id: 'UwzUCeZD6ls',
        title: 'Karunasaagara ॥ కరుణాసాగర ॥ Hosanna Ministries 2024 New Album Song',
    },
];

const CHANNEL_URL = 'https://www.youtube.com/@MountZionPentecostalMinistries';

const YoutubeSection = () => {
    const { t } = useTranslation();
    return (
        <section className="youtube-section section-alt" id="sermons">
            <div className="container">

                {/* Heading */}
                <AnimateOnScroll animation="slide-up">
                    <div className="youtube-heading">
                        <h2>{t('youtube.heading')}</h2>
                        <div className="divider"></div>
                        <p>{t('youtube.sub')}</p>
                    </div>
                </AnimateOnScroll>

                {/* Subscribe card */}
                <AnimateOnScroll animation="scale-in" delay={0.15}>
                    <div className="youtube-subscribe-card">
                        <div className="youtube-logo">
                            <svg width="52" height="52" viewBox="0 0 24 24" fill="#FF0000">
                                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
                            </svg>
                        </div>
                        <div className="youtube-channel-info">
                            <h3>@MountZionPentecostalMinistries</h3>
                            <p>{t('youtube.subscribe_info')}</p>
                        </div>
                        <a
                            href={CHANNEL_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="youtube-btn"
                        >
                            {t('youtube.subscribe_btn')}
                        </a>
                    </div>
                </AnimateOnScroll>

                {/* 2×2 Video Grid using real video IDs */}
                <div className="youtube-grid">
                    {VIDEOS.map((video, i) => (
                        <AnimateOnScroll
                            key={video.id}
                            animation={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                            delay={0.1 * (i + 1)}
                        >
                            <div className="youtube-video-item">
                                <div className="iframe-wrapper">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <p className="youtube-video-caption">{video.title}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* See more */}
                <AnimateOnScroll animation="slide-up" delay={0.3}>
                    <div className="youtube-more">
                        <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="youtube-more-btn">
                            View All Videos on YouTube →
                        </a>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
};

export default YoutubeSection;
