import React, { useState, useEffect } from 'react';
import './WatchLiveButton.css';

const WatchLiveButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <a
            href="https://www.youtube.com/@MountZionPentecostal"
            target="_blank"
            rel="noreferrer"
            className={`watch-live-btn ${visible ? 'show' : ''}`}
            aria-label="Watch Live on YouTube"
        >
            <span className="watch-live-pulse"></span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
            </svg>
            <span>Watch Live</span>
        </a>
    );
};

export default WatchLiveButton;
