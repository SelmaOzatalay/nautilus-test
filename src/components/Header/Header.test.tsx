import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Header from './Header';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

jest.mock('next/image', () => {
    const MockImage = ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />;
    MockImage.displayName = 'NextImageMock';
    return MockImage;
});

describe('Header Component', () => {
    it('renders the logo and default title', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        render(<Header />);
        expect(screen.getByAltText('Giskard Nautilus')).toBeInTheDocument();
        expect(screen.getByText('Nautilus')).toBeInTheDocument();
    });

    it('displays "Run a security scan" when pathname is "/"', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        render(<Header />);
        expect(screen.getByText('- Run a security scan')).toBeInTheDocument();
    });

    it('displays "Process your data" when pathname is "/data-processing"', () => {
        (usePathname as jest.Mock).mockReturnValue('/data-processing');
        render(<Header />);
        expect(screen.getByText('- Process your data')).toBeInTheDocument();
    });

    it('displays "Scan report" and "Re-run scan" button when pathname is "/report"', () => {
        (usePathname as jest.Mock).mockReturnValue('/report');
        render(<Header />);
        expect(screen.getByText('- Scan report')).toBeInTheDocument();
        expect(screen.getByText('Re-run scan')).toBeInTheDocument();
    });
});