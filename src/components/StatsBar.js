import React, { useEffect, useRef, useState } from 'react';
import './StatsBar.css';

const stats = [
    { value: 10, suffix: '+', label: 'Church Branches' },
    { value: 20, suffix: '+', label: 'Years of Ministry' },
    { value: 500, suffix: '+', label: 'Members Worldwide' },
    { value: 100, suffix: '+', label: 'Services Conducted' },
];

function useCountUp(target, duration = 2000, started) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);
    return count;
}

const StatItem = ({ value, suffix, label, started }) => {
    const count = useCountUp(value, 1800, started);
    return (
        <div className="stat-item">
            <span className="stat-number">{count}<span className="stat-suffix">{suffix}</span></span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const StatsBar = () => {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="stats-bar" ref={ref}>
            <div className="stats-inner">
                {stats.map((s, i) => (
                    <StatItem key={i} {...s} started={started} />
                ))}
            </div>
        </div>
    );
};

export default StatsBar;
