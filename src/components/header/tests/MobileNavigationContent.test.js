import { render, screen } from '@testing-library/react';
import MobileNavigationContent from '../MobileNavigationContent';

test('Mobile navigation appears in the DOM tree for mobile devices', () => {
  window.innerWidth = 800;
  window.dispatchEvent(new Event('resize'));

  setTimeout(() => {
    render(<MobileNavigationContent />);

    const navElement = screen.getByRole('navigation');
    const searchAnimals = screen.getByText(/Search Animals/);
    const searchOrgs = screen.getByText(/Search Organisations/);
    const searchDogBreeds = screen.getByText(/Dog Breeds/);
    const searchCatBreeds = screen.getByText(/Cat Breeds/);

    expect(navElement).toBeInTheDocument();
    expect(searchAnimals).toBeInTheDocument();
    expect(searchOrgs).toBeInTheDocument();
    expect(searchDogBreeds).toBeInTheDocument();
    expect(searchCatBreeds).toBeInTheDocument();
  }, 500);
});
