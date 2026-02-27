import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './SEO';

describe('SEO Component', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <HelmetProvider>
                <SEO title="Test Page" description="A test description." />
            </HelmetProvider>
        );
        expect(container).toBeInTheDocument();
    });

    it('renders with default props without crashing', () => {
        const { container } = render(
            <HelmetProvider>
                <SEO />
            </HelmetProvider>
        );
        expect(container).toBeInTheDocument();
    });
});
