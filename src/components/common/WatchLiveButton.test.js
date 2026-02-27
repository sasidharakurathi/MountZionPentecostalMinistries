import React from 'react';
import { render, screen } from '@testing-library/react';
import WatchLiveButton from './WatchLiveButton';

describe('WatchLiveButton Component', () => {
    it('renders the watch live link correctly', () => {
        render(<WatchLiveButton />);
        const link = screen.getByRole('link', { name: /Watch Live on YouTube/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.youtube.com/@MountZionPentecostal');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
    });

    it('contains the Watch Live text', () => {
        render(<WatchLiveButton />);
        expect(screen.getByText('Watch Live')).toBeInTheDocument();
    });
});
