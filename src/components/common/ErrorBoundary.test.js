import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

// A component that throws an error
const BrokenComponent = () => {
    throw new Error('Test Error');
};

// A component that works fine
const WorkingComponent = () => <div>Hello World</div>;

describe('ErrorBoundary Component', () => {
    // Suppress console.error during test (expected errors)
    const originalConsoleError = console.error;
    beforeAll(() => {
        console.error = jest.fn();
    });
    afterAll(() => {
        console.error = originalConsoleError;
    });

    it('renders children when no error occurs', () => {
        render(
            <ErrorBoundary>
                <WorkingComponent />
            </ErrorBoundary>
        );
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('renders fallback UI when a child component throws', () => {
        render(
            <ErrorBoundary>
                <BrokenComponent />
            </ErrorBoundary>
        );
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByText('Refresh Page')).toBeInTheDocument();
    });
});
