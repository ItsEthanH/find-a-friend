import { screen, render } from '@testing-library/react';
import LandingHero from '../LandingHero';

describe('Hero Statistics', () => {
  test('Hero statistics renders on desktop devices', () => {
    window.innerWidth = 2000;
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      render(<LandingHero />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    }, 500);
  });

  test('Mobile navigation button DOES NOT render on mobile devices', () => {
    window.innerWidth = 800;
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      render(<LandingHero />);
      const button = screen.getByRole('button');

      expect(button).not.toBeInTheDocument();
    }, 500);
  });
});
