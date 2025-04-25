import { render, screen, fireEvent } from '@testing-library/react';
import { useScanStore } from '@/store/scanStore';
import ScanLevelSelector from './ScanLevelSelector';

jest.mock('@/store/scanStore', () => ({
    useScanStore: jest.fn(),
}));

describe('ScanLevelSelector', () => {
    const mockSetLevel = jest.fn();
    const mockRemoveLevel = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        useScanStore.mockReturnValueOnce(mockSetLevel).mockReturnValueOnce({}).mockReturnValueOnce(mockRemoveLevel);
    });

    it('renders correctly', () => {
        render(<ScanLevelSelector />);
        expect(screen.getByText('Select level')).toBeInTheDocument();
    });

    it('calls removeLevel on mount', () => {
        render(<ScanLevelSelector />);
        expect(mockRemoveLevel).toHaveBeenCalled();
    });

    it('adds level', () => {
        render(<ScanLevelSelector />);
        fireEvent.click(screen.getByText('Fast'));
        expect(mockSetLevel).toHaveBeenCalled();
    });
});