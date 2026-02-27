import React from 'react';
import { useTranslation } from 'react-i18next';
import './EventsSection.css';
import AnimateOnScroll from './AnimateOnScroll';

const EventsSection = () => {
    const { t } = useTranslation();

    const events = [
        {
            day: '20', month: 'APR', year: '2025',
            titleKey: 'events.e1_title',
            timeKey: 'events.e1_time',
            locKey: 'events.e1_location',
            badgeKey: 'events.special_service',
        },
        {
            day: '27', month: 'APR', year: '2025',
            titleKey: 'events.e2_title',
            timeKey: 'events.e2_time',
            locKey: 'events.e2_location',
            badgeKey: 'events.revival',
        },
        {
            day: '15', month: 'MAY', year: '2025',
            titleKey: 'events.e3_title',
            timeKey: 'events.e3_time',
            locKey: 'events.e3_location',
            badgeKey: 'events.youth',
        },
    ];

    return (
        <section className="events-section" id="events">
            <div className="events-container">
                <AnimateOnScroll animation="slide-up">
                    <div className="events-heading">
                        <h2>{t('events.heading')}</h2>
                        <div className="divider"></div>
                        <p>{t('events.sub')}</p>
                    </div>
                </AnimateOnScroll>

                <div className="events-grid">
                    {events.map((ev, i) => (
                        <AnimateOnScroll key={i} animation="fade-left" delay={i * 0.1}>
                            <div className="event-card">
                                <div className="event-date-box">
                                    <span className="event-day">{ev.day}</span>
                                    <span className="event-month">{ev.month}</span>
                                    <span className="event-year">{ev.year}</span>
                                </div>
                                <div className="event-info">
                                    <span className="event-badge">{t(ev.badgeKey)}</span>
                                    <h3>{t(ev.titleKey)}</h3>
                                    <p className="event-time"><span>🕐</span> {t(ev.timeKey)}</p>
                                    <p className="event-location"><span>📍</span> {t(ev.locKey)}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
