import { fireEvent, render, screen } from '@testing-library/react';

import AccentButton from '../AccentButton';

describe('accent button', () => {
  test('renders correctly', () => {
    render(<AccentButton>Test Text</AccentButton>);

    expect(screen.getByText(/Test Text/)).toBeInTheDocument();
  });

  test('handles a click event', () => {
    const mockClickHandler = jest.fn();

    render(<AccentButton onClick={mockClickHandler}>Test Text</AccentButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mockClickHandler.mock.calls.length).toEqual(1);
  });
});
