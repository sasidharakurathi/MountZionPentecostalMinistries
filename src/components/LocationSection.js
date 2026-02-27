import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './LocationSection.css';

const LocationSection = () => (
    <section className="location-section" id="contact">
        <div className="container">

            <AnimateOnScroll animation="slide-up">
                <div className="section-header">
                    <h2>Find Us</h2>
                    <div className="divider" />
                    <p>We'd love to welcome you. Come visit us or reach out any time.</p>
                </div>
            </AnimateOnScroll>

            <div className="location-grid">

                {/* Map embed */}
                <AnimateOnScroll animation="fade-left" delay={0.1} className="location-map-wrap">
                    <iframe
                        title="Mount Zion Pentecostal Ministries Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2e8e8e8e8%3A0x0!2sVijayawada%2C+Andhra+Pradesh+520001!5e0!3m2!1sen!2sin!4v1"
                        width="100%"
                        height="380"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </AnimateOnScroll>

                {/* Contact details */}
                <AnimateOnScroll animation="fade-right" delay={0.2}>
                    <div className="location-details">

                        <div className="location-detail-item">
                            <span className="loc-icon">📍</span>
                            <div>
                                <strong>Address</strong>
                                <p>Mount Zion Pentecostal Ministries<br />Vijayawada, Andhra Pradesh, India</p>
                            </div>
                        </div>

                        <div className="location-detail-item">
                            <span className="loc-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href="tel:+919177177709">+91 91771 77709</a> (India)<br />
                                    <a href="tel:+17036522392">+1 703-652-2392</a> (USA)
                                </p>
                            </div>
                        </div>

                        <div className="location-detail-item">
                            <span className="loc-icon">🕐</span>
                            <div>
                                <strong>Service Times</strong>
                                <p>Sunday: 10:00 AM & 6:00 PM<br />Wednesday: 6:30 PM · Friday: 7:00 PM</p>
                            </div>
                        </div>

                        <div className="location-detail-item">
                            <span className="loc-icon">✉️</span>
                            <div>
                                <strong>Email</strong>
                                <p><a href="mailto:mountzionpentecostalministries@gmail.com">mountzionpentecostalministries@gmail.com</a></p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919177177709?text=Hello%21%20I%20found%20your%20church%20website%20and%20would%20like%20to%20know%20more."
                            target="_blank"
                            rel="noreferrer"
                            className="whatsapp-contact-btn"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                                <path d="M17.5 14.19c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13s-.67.85-.82 1.03c-.15.18-.3.2-.56.07a7.1 7.1 0 01-2.09-1.29 7.86 7.86 0 01-1.45-1.8c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44l-.5-.01c-.17 0-.45.06-.69.32s-.9.88-.9 2.14.93 2.48 1.05 2.65c.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.63 1.75-1.23.22-.6.22-1.12.15-1.23-.06-.1-.24-.16-.5-.29zM12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 01-4.07-1.12l-.29-.17-3 .79.8-2.93-.19-.3A8 8 0 1112 20z" />
                            </svg>
                            Chat on WhatsApp
                        </a>

                    </div>
                </AnimateOnScroll>

            </div>
        </div>
    </section>
);

export default LocationSection;
