import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { GlobalProvider } from '../../context/GlobalContext';
import useGlobalState from '../../hooks/useGlobalState';

// Test component that reads context
const TestConsumer = () => {
    const { theme, toggleTheme, isLoading } = useGlobalState();
    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="loading">{isLoading.toString()}</span>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

describe('GlobalContext', () => {
    it('provides default theme state as light', () => {
        render(
            <GlobalProvider>
                <TestConsumer />
            </GlobalProvider>
        );
        expect(screen.getByTestId('theme').textContent).toBe('light');
    });

    it('provides default loading state as false', () => {
        render(
            <GlobalProvider>
                <TestConsumer />
            </GlobalProvider>
        );
        expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    it('toggles theme from light to dark on button click', () => {
        render(
            <GlobalProvider>
                <TestConsumer />
            </GlobalProvider>
        );

        const toggleBtn = screen.getByText('Toggle');
        act(() => {
            toggleBtn.click();
        });
        expect(screen.getByTestId('theme').textContent).toBe('dark');
    });
});
