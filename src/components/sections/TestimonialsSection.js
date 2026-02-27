import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialsSection.css';
import AnimateOnScroll from '../common/AnimateOnScroll';

const TestimonialsSection = () => {
    const { t: tr } = useTranslation();
    const [active, setActive] = useState(0);

    // Dynamically create testimonials array from translations
    const testimonials = React.useMemo(() => [
        {
            quote: tr('testimonials.t1_quote'),
            name: tr('testimonials.t1_name'),
            role: tr('testimonials.t1_role'),
            avatar: '🙏',
        },
        {
            quote: tr('testimonials.t2_quote'),
            name: tr('testimonials.t2_name'),
            role: tr('testimonials.t2_role'),
            avatar: '✝️',
        },
        {
            quote: tr('testimonials.t3_quote'),
            name: tr('testimonials.t3_name'),
            role: tr('testimonials.t3_role'),
            avatar: '🕊️',
        },
    ], [tr]);

    const prev = React.useCallback(() => setActive(i => (i - 1 + testimonials.length) % testimonials.length), [testimonials.length]);
    const next = React.useCallback(() => setActive(i => (i + 1) % testimonials.length), [testimonials.length]);

    const t = testimonials[active];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <AnimateOnScroll animation="slide-up">
                    <div className="testimonials-heading">
                        <h2>{tr('testimonials.heading')}</h2>
                        <div className="divider"></div>
                        <p>{tr('testimonials.sub')}</p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="scale-in" delay={0.2}>
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
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default TestimonialsSection;
