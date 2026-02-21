import React, { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
    {
        quote: `Mount Zion has transformed our family's faith journey. The Word of God is preached with such power and love here. We are truly blessed to be part of this ministry.`,
        name: 'Br. Samuel Raju',
        role: 'Member since 2015',
        avatar: '🙏',
    },
    {
        quote: `I was going through the darkest time of my life when I walked into Mount Zion. Through the prayers, worship and teachings, God completely restored me. Praise the Lord!`,
        name: 'Sis. Priya Kumari',
        role: 'Member since 2018',
        avatar: '✝️',
    },
    {
        quote: `Pastor's anointed preaching and the spirit-filled worship at Mount Zion have helped me grow immensely in my walk with God. This is truly a house of God.`,
        name: 'Br. Joshua Emmanuel',
        role: 'Member since 2020',
        avatar: '🕊️',
    },
];

const TestimonialsSection = () => {
    const [active, setActive] = useState(0);

    const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setActive(i => (i + 1) % testimonials.length);

    const t = testimonials[active];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-heading">
                    <h2>Testimonies</h2>
                    <div className="divider"></div>
                    <p>Hear what God is doing in the lives of our congregation.</p>
                </div>

                <div className="testimonial-card">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <blockquote className="testimonial-quote">
                        "{t.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                    </div>

                    <div className="testimonial-controls">
                        <button onClick={prev} aria-label="Previous testimony">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <div className="testimonial-dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === active ? 'active' : ''}`}
                                    onClick={() => setActive(i)}
                                    aria-label={`Testimony ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} aria-label="Next testimony">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
