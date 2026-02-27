import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import './ContactSection.css';
import AnimateOnScroll from '../common/AnimateOnScroll';
import api from '../../services/api';

// Form Validation Schema using Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    message: yup.string().required('Message cannot be empty').min(10, 'Message must be at least 10 characters'),
});

const ContactSection = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // React Hook Form Setup
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Attempt to send data to our backend
            // const response = await api.post('/contact', data);

            // Simulating API call for demonstration since backend isn't up yet
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast.success('Message sent successfully! We will get back to you soon.');
            reset(); // Clear form fields
        } catch (error) {
            toast.error(error.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <label htmlFor="name">{t('contact.name_label')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={t('contact.name_placeholder')}
                                    {...register('name')}
                                    className={errors.name ? 'input-error' : ''}
                                />
                                {errors.name && <span className="error-text">{errors.name.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t('contact.email_label')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={t('contact.email_placeholder')}
                                    {...register('email')}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && <span className="error-text">{errors.email.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact.message_label')}</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder={t('contact.message_placeholder')}
                                    {...register('message')}
                                    className={errors.message ? 'input-error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-text">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : t('contact.submit_btn')}
                            </button>
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
