import { filterRender } from '../../../util/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

describe('mobile filter', () => {
  test('renders the mobile version when isDesktop is false', () => {
    filterRender(<Filter isDesktop={false} />);

    expect(screen.getByTestId('mobile-filter')).toBeInTheDocument();
    expect(screen.queryByTestId('desktop-filter')).not.toBeInTheDocument();
  });

  test('renders the desktop version when isDesktop is true', () => {
    filterRender(<Filter isDesktop={true} />);

    expect(screen.queryByTestId('mobile-filter')).not.toBeInTheDocument();
    expect(screen.getByTestId('desktop-filter')).toBeInTheDocument();
  });

  test('clicking on the mobile button opens the mobile home page', () => {
    filterRender(<Filter isDesktop={false} />);

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('filter-home')).toBeInTheDocument();
  });

  test('selecting a type enables the other buttons', () => {
    filterRender(<Filter isDesktop={false} />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Type'));
    fireEvent.click(screen.getByText('Small & Furry'));

    const allButtons = screen.getAllByRole('button');

    for (const btn of allButtons) {
      expect(btn).not.toHaveAttribute('disabled');
    }
  });

  test('filter apply logic works correctly', () => {
    const mockedUsedNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUsedNavigate,
    }));

    filterRender(<Filter isDesktop={false} />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Type'));
    fireEvent.click(screen.getByText('Dog'));
    fireEvent.click(screen.getByText('Age'));

    setTimeout(() => {
      fireEvent.click(screen.getByText('Baby'));
      fireEvent.click(screen.getByText('Back'));
      fireEvent.click(screen.getByText('Apply'));

      expect(mockedUsedNavigate).toHaveBeenCalledWith('/type=dog&gender=male');
    }, 500);
  });
});
