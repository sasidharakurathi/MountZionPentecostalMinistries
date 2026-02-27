import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';
import './WorshipSection.css';

const IconSun = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
);

const IconBuilding = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 12 5 12 5 22 19 22 19 12 22 12 12 2" /><rect x="10" y="16" width="4" height="6" /></svg>
);

const IconHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const IconClock = () => (
    <svg className="time-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
);

const SERVICES = [
    {
        id: 'swarangam',
        icon: <IconBuilding />,
        dayKey: 'worship.sunday', // "SUNDAY MORNING"
        serviceKey: 'worship.morning_service',
        branchKey: 'worship.swarangam_branch',
        time: '6:30 AM – 9:30 AM',
        accent: '#6366f1', // Indigo accent
        bgLight: '#eef2ff',
        mapUrl: 'https://maps.google.com/?q=Swarangam,Vijayawada,Andhra+Pradesh',
    },
    {
        id: 'ramavarapadu',
        icon: <IconSun />,
        dayKey: 'worship.sunday', // "SUNDAY MORNING"
        serviceKey: 'worship.morning_service',
        branchKey: 'worship.ramavarapadu_branch',
        time: '11:00 AM – 2:00 PM',
        accent: '#8b5cf6', // Violet accent
        bgLight: '#f5f3ff',
        mapUrl: 'https://maps.google.com/?q=Ramavarapadu,Vijayawada,Andhra+Pradesh',
    },
    {
        id: 'friday',
        icon: <IconHeart />,
        dayKey: 'worship.friday', // "FRIDAY EVENING"
        serviceKey: 'worship.weekly_prayer',
        branchKey: 'worship.all_branches',
        time: '6:30 PM – 8:30 PM', // Assuming a logical time
        accent: '#3b82f6', // Blue accent
        bgLight: '#eff6ff',
        mapUrl: null, // Global event, no map needed
    }
];

const WorshipSection = () => {
    const { t } = useTranslation();

    return (
        <section className="worship-section" id="worship">
            <div className="container">

                <AnimateOnScroll animation="slide-up">
                    <div className="worship-header">
                        <h2>Worship & Prayer Services</h2>
                        <p className="worship-subtitle">Join us in fellowship and experience the presence of God.</p>
                    </div>
                </AnimateOnScroll>

                <div className="worship-cards-grid">
                    {SERVICES.map((svc, i) => (
                        <AnimateOnScroll key={svc.id} animation="slide-up" delay={i * 0.1}>
                            <div
                                className="worship-card"
                                style={{ '--accent': svc.accent, '--bg-light': svc.bgLight }}
                            >
                                <div className="worship-card-top">
                                    <div className="worship-card-icon-wrap">
                                        {svc.icon}
                                    </div>
                                    <span className="worship-card-day">{t(svc.dayKey)}</span>
                                </div>

                                <h3 className="worship-card-service">{t(svc.serviceKey)}</h3>
                                <p className="worship-card-branch">{t(svc.branchKey)}</p>

                                <div className="worship-card-footer">
                                    {svc.time && (
                                        <div className="worship-card-time">
                                            <IconClock />
                                            {svc.time}
                                        </div>
                                    )}

                                    {svc.mapUrl && (
                                        <a
                                            href={svc.mapUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="worship-directions-link"
                                        >
                                            {t('worship.get_directions')} <IconArrowRight />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorshipSection;
