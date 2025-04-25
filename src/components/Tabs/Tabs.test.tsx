import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs Component', () => {
    const tabs = [
        { label: 'Tab 1', content: <div>Content 1</div> },
        { label: 'Tab 2', content: <div>Content 2</div> },
        { label: 'Tab 3', content: <div>Content 3</div> },
    ];

    it('renders the correct number of tabs', () => {
        render(<Tabs tabs={tabs} />);
        const tabButtons = screen.getAllByRole('button');
        expect(tabButtons).toHaveLength(tabs.length);
    });

    it('displays the default tab content', () => {
        render(<Tabs tabs={tabs} defaultIndex={1} />);
        expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('changes content when a tab is clicked', () => {
        render(<Tabs tabs={tabs} />);
        const tabButtons = screen.getAllByRole('button');
        fireEvent.click(tabButtons[2]);
        expect(screen.getByText('Content 3')).toBeInTheDocument();
    });

    it('applies the active class to the selected tab', () => {
        render(<Tabs tabs={tabs} />);
        const tabButtons = screen.getAllByRole('button');
        fireEvent.click(tabButtons[1]);
        expect(tabButtons[1]).toHaveClass('tabButtonActive');
    });
});