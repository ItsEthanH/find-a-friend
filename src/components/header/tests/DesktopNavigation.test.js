import { render, screen } from '@testing-library/react';
import DesktopNavigation from '../DesktopNavigation';

test('Renders desktop navlinks', () => {
  render(<DesktopNavigation />);

  const searchAnimals = screen.getByText(/Search Animals/);
  const searchOrgs = screen.getByText(/Search Organisations/);
  const searchDogBreeds = screen.getByText(/Dog Breeds/);
  const searchCatBreeds = screen.getByText(/Cat Breeds/);

  expect(searchAnimals).toBeInTheDocument();
  expect(searchOrgs).toBeInTheDocument();
  expect(searchDogBreeds).toBeInTheDocument();
  expect(searchCatBreeds).toBeInTheDocument();
});
