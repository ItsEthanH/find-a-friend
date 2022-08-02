import { render, screen } from '@testing-library/react';
import MobileNavigationContent from '../MobileNavigationContent';

test('Renders mobile navlinks', () => {
  render(<MobileNavigationContent />);

  const searchAnimals = screen.getByText(/Search Animals/);
  const searchOrgs = screen.getByText(/Search Organisations/);
  const searchDogBreeds = screen.getByText(/Dog Breeds/);
  const searchCatBreeds = screen.getByText(/Cat Breeds/);

  expect(searchAnimals).toBeInTheDocument();
  expect(searchOrgs).toBeInTheDocument();
  expect(searchDogBreeds).toBeInTheDocument();
  expect(searchCatBreeds).toBeInTheDocument();
});
