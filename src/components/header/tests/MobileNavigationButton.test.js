import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

test('Clicking mobile nav button opens content', () => {
  render(<Header />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Cat Breeds')).toBeInTheDocument();
});
