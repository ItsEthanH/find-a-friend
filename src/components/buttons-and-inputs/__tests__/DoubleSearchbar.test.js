import { render, screen, fireEvent } from '@testing-library/react';

import DoubleSearchbar from '../DoubleSearchbar';

describe('double searchbar', () => {
  const formName = 'Test form';
  const primaryName = 'Test Name 1';
  const primaryIcon = './testIconSrcOne.jpg';
  const primaryPlaceholder = 'Test Placeholder 1';

  const secondaryName = 'Test Name 2';
  const secondaryIcon = './testIconSrcTwo.jpg';
  const secondaryPlaceholder = 'Test Placeholder 2';

  test('renders correctly', () => {
    render(
      <DoubleSearchbar
        form-name={formName}
        primary-name={primaryName}
        primary-icon={primaryIcon}
        primary-placeholder={primaryPlaceholder}
        secondary-name={secondaryName}
        secondary-icon={secondaryIcon}
        secondary-placeholder={secondaryPlaceholder}
      />
    );

    expect(screen.getByAltText(primaryName)).toBeInTheDocument();
    expect(screen.getByAltText(secondaryName)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  test('handles a submit event', () => {
    const mockSubmitHandler = jest.fn();

    render(<DoubleSearchbar form-name={formName} onSubmit={mockSubmitHandler} />);

    fireEvent.submit(screen.getByRole('form'));

    expect(mockSubmitHandler.mock.calls.length).toEqual(1);
  });
});
