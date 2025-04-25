import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useScanStore } from '@/store/scanStore';
import ModelSelector from './ModelSelector';

// Mock Zustand store properly
jest.mock('@/store/scanStore', () => ({
    useScanStore: jest.fn(),
  }));
  
  describe('ModelSelector', () => {
    const mockSetModel = jest.fn();
    const mockRemoveModel = jest.fn();
  
    beforeEach(() => {
      // This mocks Zustand’s selector logic
      (useScanStore as unknown as jest.Mock).mockImplementation((selector: (state: { setModel: typeof mockSetModel; removeModel: typeof mockRemoveModel; model: { id: string; name: string; version: string; }; }) => void) =>
        selector({
          setModel: mockSetModel,
          removeModel: mockRemoveModel,
          model: { id: '', name: '', version: '' },
        })
      );
  
      jest.clearAllMocks();
    });
  
    it('renders the component correctly', () => {
      render(<ModelSelector />);
      expect(screen.getByText('TurtleLM')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Model to scan')).toBeInTheDocument();
    });
  
    it('calls removeModel on mount', () => {
      render(<ModelSelector />);
      expect(mockRemoveModel).toHaveBeenCalled();
    });
  
    it('calls setModel when a model is selected', () => {
      render(<ModelSelector />);
      const select = screen.getByPlaceholderText('Model to scan');
      fireEvent.change(select, { target: { value: '1' } });
      expect(mockSetModel).toHaveBeenCalledWith({ id: '1', name: 'TurtleLM', version: '1.3' });
    });
  
    it('removes the model when the same model is selected again', () => {
      // Return a selected model
      (useScanStore as unknown as jest.Mock).mockImplementation((selector: (state: { setModel: typeof mockSetModel; removeModel: typeof mockRemoveModel; model: { id: string; name: string; version: string; }; }) => void) =>
        selector({
          setModel: mockSetModel,
          removeModel: mockRemoveModel,
          model: { id: '1', name: 'TurtleLM', version: '1.3' },
        })
      );
  
      render(<ModelSelector />);
      const select = screen.getByPlaceholderText('Model to scan');
      fireEvent.change(select, { target: { value: '1' } });
      expect(mockRemoveModel).toHaveBeenCalled();
    });
  });
  