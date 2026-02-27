import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './PrayerSection.css';

const PrayerSection = () => {
    const [form, setForm] = useState({ name: '', phone: '', request: '' });
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // Build WhatsApp message with prayer request
        const msg = encodeURIComponent(
            `🙏 New Prayer Request\n\nName: ${form.name}\nPhone: ${form.phone}\n\nRequest:\n${form.request}`
        );
        window.open(`https://wa.me/919177177709?text=${msg}`, '_blank');
        setSent(true);
        setForm({ name: '', phone: '', request: '' });
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <section className="prayer-section" id="prayer">
            <div className="container prayer-inner">

                {/* Icon + heading */}
                <AnimateOnScroll animation="slide-up">
                    <div className="prayer-header">
                        <div className="prayer-icon-wrap">🙏</div>
                        <h2>Submit a Prayer Request</h2>
                        <p>
                            We believe in the power of prayer. Share your request and our
                            pastoral team will pray with you personally.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Form card */}
                <AnimateOnScroll animation="scale-in" delay={0.15}>
                    <div className="prayer-card">
                        {sent ? (
                            <div className="prayer-success">
                                <span>✅</span>
                                <h3>Prayer Request Received!</h3>
                                <p>Our team will be praying for you. God bless you! 🙌</p>
                            </div>
                        ) : (
                            <form className="prayer-form" onSubmit={handleSubmit}>
                                <div className="pf-row">
                                    <div className="pf-group">
                                        <label htmlFor="pr-name">Your Name *</label>
                                        <input
                                            id="pr-name"
                                            name="name"
                                            type="text"
                                            placeholder="e.g. Ravi Kumar"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="pf-group">
                                        <label htmlFor="pr-phone">Phone Number</label>
                                        <input
                                            id="pr-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="pf-group">
                                    <label htmlFor="pr-request">Your Prayer Request *</label>
                                    <textarea
                                        id="pr-request"
                                        name="request"
                                        rows="5"
                                        placeholder="Share what is on your heart. We are here to pray with you…"
                                        value={form.request}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="prayer-submit-btn">
                                    🙏 Submit Prayer Request
                                </button>
                            </form>
                        )}
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
};

export default PrayerSection;
