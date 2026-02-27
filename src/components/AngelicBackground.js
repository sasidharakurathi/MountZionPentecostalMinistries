import React, { useMemo } from 'react';
import './AngelicBackground.css';

const AngelicBackground = () => {
    // Generate arrays of particles and angels safely
    const particles = useMemo(() => Array.from({ length: 40 }), []);
    const angels = useMemo(() => Array.from({ length: 6 }), []);

    return (
        <div className="angelic-background">
            {/* Glowing Holy Spirit Dust (Particles) */}
            {particles.map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className={`particle particle-${i % 5}`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${15 + Math.random() * 20}s`
                    }}
                ></div>
            ))}

            {/* Ethereal Floating Angels */}
            {angels.map((_, i) => (
                <div
                    key={`angel-${i}`}
                    className={`angel angel-${i % 3}`}
                    style={{
                        left: `${Math.random() * 90}%`,
                        animationDelay: `${Math.random() * 15}s`,
                        animationDuration: `${20 + Math.random() * 15}s`
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2C10.34,2 9,3.34 9,5V6.75C6.1,6.86 3.1,8.3 1,11C3.12,10.66 5.22,10.6 7.22,10.82C7.36,12.75 8.16,14.5 9.5,15.86V21A1,1 0 0,0 10.5,22H13.5A1,1 0 0,0 14.5,21V15.86C15.84,14.5 16.64,12.75 16.78,10.82C18.78,10.6 20.88,10.66 23,11C20.9,8.3 17.9,6.86 15,6.75V5C15,3.34 13.66,2 12,2M12,4A1,1 0 0,1 13,5A1,1 0 0,1 12,6A1,1 0 0,1 11,5A1,1 0 0,1 12,4Z" />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default AngelicBackground;
