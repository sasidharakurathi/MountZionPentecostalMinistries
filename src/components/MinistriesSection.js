import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './MinistriesSection.css';

const ministries = [
    {
        icon: '⚡',
        color: '#667EEA',
        gradient: 'linear-gradient(135deg, #667EEA, #764BA2)',
        title: 'Youth Ministry',
        sub: 'For Ages 13–25',
        desc: 'Empowering the next generation with faith, purpose and a deep relationship with God. Bold. Spirit-filled. Future-ready.',
        link: '#contact',
    },
    {
        icon: '🌸',
        color: '#FDA085',
        gradient: 'linear-gradient(135deg, #F6D365, #FDA085)',
        title: "Women's Ministry",
        sub: 'Sisters in Faith',
        desc: 'A safe, anointed space for women to grow, heal and flourish together in the love and grace of Jesus.',
        link: '#contact',
    },
    {
        icon: '🛡️',
        color: '#43E97B',
        gradient: 'linear-gradient(135deg, #43E97B, #38F9D7)',
        title: "Men's Ministry",
        sub: 'Warriors in Prayer',
        desc: 'Raising godly men of integrity, prayer and leadership. Monthly gatherings, mentorship and accountability.',
        link: '#contact',
    },
    {
        icon: '⭐',
        color: '#ff9a9e',
        gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
        title: "Children's Ministry",
        sub: 'Little Lights',
        desc: 'A fun, safe, faith-filled environment where children discover the love of Jesus through stories, songs and play.',
        link: '#contact',
    },
];

const MinistriesSection = () => {
    return (
        <section className="ministries-section" id="ministries">
            <div className="container">
                <AnimateOnScroll animation="slide-up">
                    <div className="section-header">
                        <h2>Our Ministries</h2>
                        <div className="divider"></div>
                        <p>Something meaningful for every member of your family.</p>
                    </div>
                </AnimateOnScroll>

                <div className="ministries-grid">
                    {ministries.map((m, i) => (
                        <AnimateOnScroll key={i} animation="slide-up" delay={i * 0.12}>
                            <div className="ministry-card">
                                <div
                                    className="ministry-icon-wrap"
                                    style={{ background: m.gradient }}
                                >
                                    <span className="ministry-icon">{m.icon}</span>
                                </div>
                                <div className="ministry-body">
                                    <span className="ministry-sub">{m.sub}</span>
                                    <h3>{m.title}</h3>
                                    <p>{m.desc}</p>
                                    <a href={m.link} className="ministry-link" style={{ color: m.color }}>
                                        Get Involved →
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MinistriesSection;
