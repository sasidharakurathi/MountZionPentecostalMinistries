import React, { useRef, useEffect } from 'react';

const AnimateOnScroll = ({ children, className = '', animation = 'fade-in', delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const defaultOptions = { rootMargin: '0px 0px -50px 0px', threshold: 0.15 };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }, defaultOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${animation} ${className}`}
            style={delay ? { transitionDelay: `${delay}s` } : {}}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
