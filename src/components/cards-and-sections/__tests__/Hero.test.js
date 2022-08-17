import { render, screen } from '@testing-library/react';

import Hero from '../Hero';

describe('hero', () => {
  test('renders correctly', () => {
    render(
      <Hero>
        <h1>Test title</h1>
      </Hero>
    );

    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  test('applies styles', () => {
    const pages = ['animals', 'organisations', 'dogs', 'cats', 'landing'];
    const { rerender } = render();

    for (const page of pages) {
      rerender(
        <Hero page={page.toUpperCase()}>
          <h1>Test title</h1>
        </Hero>
      );

      expect(screen.getByTestId('hero').classList.contains(page)).toBe(true);
      expect(screen.getByTestId('hero').classList.contains('hero')).toBe(true);
    }
  });
});
