import { render, screen } from '@testing-library/react';
import Header from '../Header';

// note the setTimeouts() before acting and asserting
// this is because of the debouncing in the AppContext's windowResizeHandler()
// setting a timeout > 300ms allows that function to complete before testing

describe('Header', () => {
  test('Mobile navigation button renders on mobile devices', () => {
    window.innerWidth = 800;
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      render(<Header />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    }, 500);
  });

  test('Mobile navigation button DOES NOT render on desktop devices', () => {
    window.innerWidth = 2000;
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      render(<Header />);
      const button = screen.getByRole('button');

      expect(button).not.toBeInTheDocument();
    }, 500);
  });
});
