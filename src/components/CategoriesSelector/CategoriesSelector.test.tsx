import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesSelector from './CategoriesSelector';
import { useScanStore } from '@/store/scanStore';
import { IssueCategory } from '@/lib/types';

jest.mock('@/store/scanStore', () => ({
    useScanStore: jest.fn(),
}));

describe('CategoriesSelector', () => {
    const mockSetCategories = jest.fn();
    const mockRemoveCategories = jest.fn();

    beforeEach(() => {
        (useScanStore as unknown as jest.Mock).mockReturnValue({
            setCategories: mockSetCategories,
            removeCategories: mockRemoveCategories,
            categories: [],
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const mockCategories: IssueCategory[] = [
        { id: '1', name: 'Category1', description: 'Description1' },
        { id: '2', name: 'Category2', description: 'Description2' },
    ];

    it('renders the categories', () => {
        render(<CategoriesSelector categories={mockCategories} />);

        expect(screen.getByText('Select category')).toBeInTheDocument();
        mockCategories.forEach((category) => {
            expect(screen.getByLabelText(category.name)).toBeInTheDocument();
        });
    });

    it('calls removeCategories on mount', () => {
        render(<CategoriesSelector categories={mockCategories} />);
        expect(mockRemoveCategories).toHaveBeenCalled();
    });

    it('adds a category when a checkbox is checked', () => {
        render(<CategoriesSelector categories={mockCategories} />);

        const checkbox = screen.getByLabelText('Category1');
        fireEvent.click(checkbox);

        expect(mockSetCategories).toHaveBeenCalledWith([
            { name: 'Category1', description: 'Description1' },
        ]);
    });

    it('removes a category when a checkbox is unchecked', () => {
        (useScanStore as unknown as jest.Mock).mockReturnValue({
            setCategories: mockSetCategories,
            removeCategories: mockRemoveCategories,
            categories: [{ name: 'Category1', description: 'Description1' }],
        });

        render(<CategoriesSelector categories={mockCategories} />);

        const checkbox = screen.getByLabelText('Category1');
        fireEvent.click(checkbox);

        expect(mockSetCategories).toHaveBeenCalledWith([]);
    });
});