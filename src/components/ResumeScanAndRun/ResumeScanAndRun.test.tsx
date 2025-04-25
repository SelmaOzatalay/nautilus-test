import { render, screen } from '@testing-library/react';
import { useScanStore } from '@/store/scanStore';
import ResumeScanAndRun from './ResumeScanAndRun';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock the useScanStore hook
vi.mock('@/store/scanStore', () => ({
    useScanStore: vi.fn(),
}));

describe('ResumeScanAndRun Component', () => {
    it('renders correctly with all required data', () => {
        (useScanStore as unknown as jest.Mock).mockReturnValue({
            model: { name: 'Test Model', version: '1.0' },
            level: { name: 'High' },
            categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
        });

        render(<ResumeScanAndRun />);

        expect(screen.getByText('Run scan')).toBeInTheDocument();
        expect(screen.getByText('model : Test Model 1.0')).toBeInTheDocument();
        expect(screen.getByText('level : High')).toBeInTheDocument();
        expect(screen.getByText('Category 1')).toBeInTheDocument();
        expect(screen.getByText('Category 2')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Run scan' })).not.toHaveClass('disabled');
    });

    it('disables the button when required data is missing', () => {
        (useScanStore as unknown as jest.Mock).mockReturnValue({
            model: { name: '', version: '' },
            level: { name: '' },
            categories: [],
        });

        render(<ResumeScanAndRun />);

        expect(screen.getByRole('link', { name: 'Run scan' })).toHaveClass('disabled');
    });
});