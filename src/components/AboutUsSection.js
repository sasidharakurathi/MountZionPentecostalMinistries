import React from 'react';
import './AboutUsSection.css';
import AnimateOnScroll from './AnimateOnScroll';

const AboutUsSection = () => {
  const missions = [
    {
      icon: '🔥',
      title: 'Our PASSION',
      desc: 'To love God with our whole heart, mind, soul, and strength — in every worship, prayer and gathering.',
    },
    {
      icon: '🎯',
      title: 'Our PURPOSE',
      desc: 'To love our neighbours, serve our community, and help every believer grow deeper in the Spirit.',
    },
    {
      icon: '📖',
      title: 'We GROW',
      desc: 'Through prayer, studying the Word of God, and worshipping Him — individually and as a congregation.',
    },
    {
      icon: '🤝',
      title: 'Our Ministry',
      desc: 'We provide spiritual care for all and create opportunities for everyone to SERVE, just as Christ instructed.',
    },
  ];

  return (
    <section className="about-section" id="values">
      <div className="container">

        <AnimateOnScroll animation="slide-up">
          <div className="about-heading">
            <h2>About Us</h2>
            <div className="divider"></div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={0.1}>
          <p className="about-intro">
            Here at Mount Zion Pentecostal Ministries we desire to become disciples who make disciples.
            Our Ministry encourages every believer and helps them through difficult times, building a
            community rooted in faith, love and service.
          </p>
        </AnimateOnScroll>

        <div className="mission-grid">
          {missions.map((m, i) => (
            <AnimateOnScroll key={i} animation="scale-in" delay={i * 0.1}>
              <div className="mission-card">
                <div className="mission-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
