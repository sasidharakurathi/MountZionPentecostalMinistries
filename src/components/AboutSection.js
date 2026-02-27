import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';
import './AboutSection.css';

const LEADERSHIP_TEAM = [
    {
        l1_name: 'l1_name',
        l1_role: 'l1_role',
        l1_desc: 'l1_desc',
        icon: '📖',
    },
    {
        l1_name: 'l2_name',
        l1_role: 'l2_role',
        l1_desc: 'l2_desc',
        icon: '🙏',
    },
    {
        l1_name: 'l3_name',
        l1_role: 'l3_role',
        l1_desc: 'l3_desc',
        icon: '🎵',
    },
];

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section className="about-section" id="about-us">
            {/* Pastor Section */}
            <div className="about-pastor">
                <div className="container about-pastor-inner">
                    <AnimateOnScroll animation="fade-left" className="about-pastor-image">
                        <div className="pastor-frame">
                            <img src="/pastor.png" alt="Senior Pastor" />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-right" delay={0.2} className="about-pastor-content">
                        <div>
                            <span className="about-eyebrow">{t('about.pastor_title')}</span>
                            <h2 className="about-heading">{t('about.pastor_name')}</h2>
                            <p className="about-bio">{t('about.pastor_bio')}</p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Leadership Team Section */}
            <div className="about-leadership">
                <div className="container">
                    <AnimateOnScroll animation="slide-up">
                        <div className="leadership-header">
                            <h2>{t('about.leadership_heading')}</h2>
                            <p>{t('about.leadership_sub')}</p>
                        </div>
                    </AnimateOnScroll>

                    <div className="leadership-grid">
                        {LEADERSHIP_TEAM.map((member, i) => (
                            <AnimateOnScroll 
                                key={i} 
                                animation="slide-up" 
                                delay={0.1 + i * 0.1}
                            >
                                <div className="leadership-card">
                                    <div className="leader-icon">{member.icon}</div>
                                    <h3>{t(`about.${member.l1_name}`)}</h3>
                                    <p className="leader-role">{t(`about.${member.l1_role}`)}</p>
                                    <p className="leader-desc">{t(`about.${member.l1_desc}`)}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
