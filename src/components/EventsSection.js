import React from 'react';
import './EventsSection.css';

const events = [
    {
        day: '20',
        month: 'APR',
        year: '2025',
        title: 'Easter Sunday Service',
        time: '7:00 AM – 12:00 PM',
        location: 'Mount Zion HQ, Vijayawada',
        badge: 'Special Service',
    },
    {
        day: '27',
        month: 'APR',
        year: '2025',
        title: 'Sunday Worship & Prayer',
        time: '10:00 AM – 1:00 PM',
        location: 'Mount Zion HQ, Vijayawada',
        badge: 'Weekly',
    },
    {
        day: '15',
        month: 'MAY',
        year: '2025',
        title: 'Youth Prayer Conference',
        time: '6:00 AM – 6:00 PM',
        location: 'New RR Nagar Branch, Vijayawada',
        badge: 'Conference',
    },
    {
        day: '25',
        month: 'MAY',
        year: '2025',
        title: 'Healing & Deliverance Service',
        time: '6:00 PM – 9:00 PM',
        location: 'Live on YouTube',
        badge: 'Live Stream',
    },
];

const EventsSection = () => {
    return (
        <section className="events-section">
            <div className="events-container">
                <div className="events-heading">
                    <h2>Upcoming Events</h2>
                    <div className="divider"></div>
                    <p>Join us for our upcoming services, conferences and prayer gatherings.</p>
                </div>

                <div className="events-grid">
                    {events.map((ev, i) => (
                        <div className="event-card" key={i}>
                            <div className="event-date-box">
                                <span className="event-day">{ev.day}</span>
                                <span className="event-month">{ev.month}</span>
                                <span className="event-year">{ev.year}</span>
                            </div>
                            <div className="event-info">
                                <span className="event-badge">{ev.badge}</span>
                                <h3>{ev.title}</h3>
                                <p className="event-time">
                                    <span>🕐</span> {ev.time}
                                </p>
                                <p className="event-location">
                                    <span>📍</span> {ev.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
