import { render, screen } from '@testing-library/react';

import LandingSection from '../LandingSection';

describe('landing section', () => {
  test('renders correctly', () => {
    const body = 'Test body content';
    render(
      <LandingSection>
        <p>{body}</p>
      </LandingSection>
    );

    expect(screen.getByText(body)).toBeInTheDocument();
  });

  test('applies styles when given', () => {
    render(<LandingSection styles="testStyles" />);

    expect(screen.getByTestId('landing-section').classList.contains('section')).toBe(true);
    expect(screen.getByTestId('landing-section').classList.contains('testStyles')).toBe(true);
  });

  test('applies NO styles when NONE are given', () => {
    render(<LandingSection />);

    expect(screen.getByTestId('landing-section').classList.contains('section')).toBe(true);
    expect(screen.getByTestId('landing-section').classList.length).toEqual(1);
  });
});
