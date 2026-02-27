import React, { createContext, useState, useEffect } from 'react';

// 1. Create the Context
export const GlobalContext = createContext();

// 2. Create the Provider Component
export const GlobalProvider = ({ children }) => {
    // Theme State (Default to light)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Sermons Data State
    const [sermons, setSermons] = useState([]);

    // Loading Spinner State
    const [isLoading, setIsLoading] = useState(false);

    // Apply theme class to document body whenever theme changes
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Actions
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const fetchSermons = async () => {
        setIsLoading(true);
        try {
            // Mock API call for now
            // const response = await fetch('/api/sermons');
            setTimeout(() => {
                setSermons([
                    { id: 1, title: 'The Power of Faith', date: '2023-10-15' },
                    { id: 2, title: 'Walking in Love', date: '2023-10-22' }
                ]);
                setIsLoading(false);
            }, 1000); // simulate network delay
        } catch (error) {
            console.error('Failed to fetch sermons:', error);
            setIsLoading(false);
        }
    };

    // Provide state and actions down to children
    return (
        <GlobalContext.Provider
            value={{
                theme,
                toggleTheme,
                sermons,
                fetchSermons,
                isLoading,
                setIsLoading,
            }}
        >
            {/* Optional: Add an overlay spinner when globally loading */}
            {isLoading && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                    <div style={{ color: 'white', fontSize: '24px' }}>Loading...</div>
                </div>
            )}

            {children}
        </GlobalContext.Provider>
    );
};
