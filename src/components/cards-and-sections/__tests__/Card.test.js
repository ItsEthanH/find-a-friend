import { render, screen } from '@testing-library/react';

import Card from '../Card';

describe('card component', () => {
  const cardText = 'Test text';

  test('renders correctly', () => {
    render(
      <Card>
        <p>{cardText}</p>
      </Card>
    );

    expect(screen.getByText(cardText)).toBeInTheDocument();
  });

  test('has the correct classes applied', () => {
    render(
      <Card styles="testClass">
        <p>{cardText}</p>
      </Card>
    );

    expect(screen.getByTestId('card-component').classList.contains('card')).toBe(true);
    expect(screen.getByTestId('card-component').classList.contains('testClass')).toBe(true);
  });
});
