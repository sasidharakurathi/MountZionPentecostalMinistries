import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // We can optionally unobserve after reveal
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useScrollReveal;
