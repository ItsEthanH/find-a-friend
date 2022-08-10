import { render, screen, fireEvent } from '@testing-library/react';

import SingleSearchbar from '../SingleSearchbar';

describe('single searchbar', () => {
  const name = 'search';
  const placeholder = 'this is a test searchbar';
  const icon = 'test.jpg';

  test('renders correctly', () => {
    render(<SingleSearchbar name={name} placeholder={placeholder} icon={icon} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('handles the submit event', () => {
    const mockSubmitHandler = jest.fn();
    render(
      <SingleSearchbar
        name={name}
        placeholder={placeholder}
        icon={icon}
        onSubmit={mockSubmitHandler}
      />
    );

    fireEvent.submit(screen.getByLabelText(placeholder));
    expect(mockSubmitHandler.mock.calls.length).toEqual(1);
  });
});
