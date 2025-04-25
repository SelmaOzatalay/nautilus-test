import { render, screen, fireEvent } from '@testing-library/react';
import CustomSelect from './Select';

describe('CustomSelect Component', () => {
    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];

    const onChangeMock = jest.fn();

    it('renders placeholder when no option is selected', () => {
        render(<CustomSelect options={options} value="" onChange={onChangeMock} placeholder="Select an option" />);
        expect(screen.getByText('Select an option')).toBeInTheDocument();
    });

    it('opens the dropdown when clicked', () => {
        render(<CustomSelect options={options} value="" onChange={onChangeMock} />);
        const toggle = screen.getByText('Select...');
        fireEvent.click(toggle);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('calls onChange and closes dropdown when an option is clicked', () => {
        render(<CustomSelect options={options} value="" onChange={onChangeMock} />);
        const toggle = screen.getByText('Select...');
        fireEvent.click(toggle);
        const option = screen.getByText('Option 1');
        fireEvent.click(option);
        expect(onChangeMock).toHaveBeenCalledWith('1');
        expect(screen.queryByText('Option 1')).not.toBeVisible();
    });

    it('closes the dropdown when clicking outside', () => {
        render(<CustomSelect options={options} value="" onChange={onChangeMock} />);
        const toggle = screen.getByText('Select...');
        fireEvent.click(toggle);
        fireEvent.click(document.body);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });

    it('displays the selected option label', () => {
        render(<CustomSelect options={options} value="2" onChange={onChangeMock} />);
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
});