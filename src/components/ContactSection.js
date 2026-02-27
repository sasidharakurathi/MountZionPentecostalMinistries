import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactSection.css';
import AnimateOnScroll from './AnimateOnScroll';

const ContactSection = () => {
    const { t } = useTranslation();
    return (
        <section className="contact-section" id="contact">
            <div className="container">

                <AnimateOnScroll animation="slide-up">
                    <div className="contact-heading">
                        <h2>{t('contact.heading')}</h2>
                        <div className="divider"></div>
                        <p>{t('contact.sub')}</p>
                    </div>
                </AnimateOnScroll>

                <div className="contact-grid">
                    {/* Prayer Request Form */}
                    <AnimateOnScroll animation="fade-right" delay={0.2} className="contact-form-wrapper">
                        <h3>{t('contact.form_title')}</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.name_label')}</label>
                                <input type="text" id="name" placeholder={t('contact.name_placeholder')} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('contact.email_label')}</label>
                                <input type="email" id="email" placeholder={t('contact.email_placeholder')} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact.message_label')}</label>
                                <textarea id="message" rows="5" placeholder={t('contact.message_placeholder')} required></textarea>
                            </div>
                            <button type="submit" className="contact-submit-btn">{t('contact.submit_btn')}</button>
                        </form>
                    </AnimateOnScroll>

                    {/* Google Map & Contact Info */}
                    <AnimateOnScroll animation="fade-left" delay={0.4} className="contact-info-wrapper">
                        <h3>{t('contact.location_title')}</h3>
                        <div className="contact-map-container">
                            <iframe
                                title="Mount Zion Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d80.6!3d16.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzAwLjAiTiA4MMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1611222333444!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="contact-details">
                            <p><strong>Address:</strong> {t('contact.address')}</p>
                            <p><strong>Phone (India):</strong> +91 1234567890</p>
                            <p><strong>Phone (USA):</strong> +1 703-652-2392</p>
                            <p><strong>Email:</strong> contact@mountzionministries.com</p>
                        </div>
                    </AnimateOnScroll>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
