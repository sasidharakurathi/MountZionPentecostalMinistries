import React, { useState } from 'react';
import './WhatsAppButton.css';

// Replace with the actual WhatsApp number (country code without +)
const WHATSAPP_NUMBER = '919177177709';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I found your church website and would like to know more about Mount Zion Pentecostal Ministries.');

const WhatsAppButton = () => {
    const [tooltip, setTooltip] = useState(true);

    return (
        <div className="whatsapp-fab-wrap">
            {tooltip && (
                <div className="whatsapp-tooltip">
                    Chat with us!
                    <button
                        className="tooltip-close"
                        onClick={() => setTooltip(false)}
                        aria-label="Close"
                    >×</button>
                </div>
            )}
            <a
                id="whatsapp-fab"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="whatsapp-fab"
                onClick={() => setTooltip(false)}
            >
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="16" cy="16" r="16" fill="#25D366" />
                    <path d="M23.5 8.5A10.45 10.45 0 0016 5.5a10.5 10.5 0 00-9.07 15.74L5.5 26.5l5.42-1.42A10.5 10.5 0 0016 26.5a10.5 10.5 0 007.5-17.99zm-7.5 16.16a8.71 8.71 0 01-4.44-1.21l-.32-.19-3.22.84.86-3.14-.21-.33a8.73 8.73 0 1116.25-4.63 8.74 8.74 0 01-8.92 8.66zm4.79-6.53c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13s-.67.85-.82 1.03c-.15.18-.3.2-.56.07a7.1 7.1 0 01-2.09-1.29 7.86 7.86 0 01-1.45-1.8c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44l-.5-.01c-.17 0-.45.06-.69.32s-.9.88-.9 2.14.93 2.48 1.05 2.65c.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.63 1.75-1.23.22-.6.22-1.12.15-1.23-.06-.1-.24-.16-.5-.29z" fill="#fff" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
