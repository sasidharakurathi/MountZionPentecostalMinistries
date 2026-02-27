import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';
import './PastorSection.css';

const PastorSection = () => {
    const { t } = useTranslation();

    return (
        <section className="pastor-section" id="pastor">
            <div className="container">
                <AnimateOnScroll animation="slide-up">
                    <div className="pastor-card">
                        <div className="pastor-image-wrap">
                            <div className="pastor-image-inner">
                                <img
                                    src="/3.png"
                                    alt="Pastor Joshua Matthew"
                                    className="pastor-img"
                                    style={{ objectPosition: '15% 50%' }}
                                />
                                <div className="pastor-img-overlay"></div>
                            </div>
                        </div>

                        <div className="pastor-content">
                            <span className="pastor-label">Our Pastor</span>
                            <h2 className="pastor-name">Pastor Joshua Matthew</h2>
                            <p className="pastor-title">Senior Pastor, Mount Zion</p>

                            <div className="pastor-divider"></div>

                            <p className="pastor-bio">
                                Welcome to Mount Zion Pentecostal Ministries. Pastor Joshua Matthew has been dedicated to serving the community, preaching the uncompromising Word of God, and leading souls to Christ. What began as a small prayer gathering has blossomed into a vibrant ministry touching thousands of lives.
                            </p>

                            <p className="pastor-bio">
                                His passion is to see families restored, the brokenhearted healed, and the next generation equipped with unwavering faith and spiritual discipline. Under his visionary leadership, the church continues to expand its mission to reach the unreached.
                            </p>

                            <blockquote className="pastor-quote">
                                "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles."
                                <footer>— Isaiah 40:31</footer>
                            </blockquote>

                            <button className="pastor-read-more">Read More</button>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default PastorSection;
