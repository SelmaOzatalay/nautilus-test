import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoTooltip from './InfoTooltip';

describe('InfoTooltip', () => {
    it('renders the tooltip with children content', () => {
        render(<InfoTooltip>Test Tooltip Content</InfoTooltip>);
        expect(screen.getByText('Test Tooltip Content')).toBeInTheDocument();
    });

    it('renders the info icon', () => {
        render(<InfoTooltip>Test Tooltip Content</InfoTooltip>);
        const icon = screen.getByAltText('info');
        expect(icon).toBeInTheDocument();
    });
});