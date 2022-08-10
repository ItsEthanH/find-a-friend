import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import AppContext, { AppContextProvider } from '../AppContext';
import { act } from 'react-dom/test-utils';

function TestComponent() {
  const { token, windowWidth } = useContext(AppContext);

  return (
    <>
      <p>{token}</p>
      <p data-testid="width">{windowWidth}</p>
    </>
  );
}

describe('app context', () => {
  // sets up the mock fetch function before every test
  beforeEach(() => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        access_token: 'mock_access_token',
        expires_in: 3600,
      }),
    });
  });

  test('gets a bearer token', () => {
    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>
    );

    act(async () => {
      const tokenElement = await screen.findByText('mock_access_token');
      expect(tokenElement).toBeInTheDocument();
    });
  });

  test('stores the token in a cookie', () => {
    global.document = {
      cookie: '',
    };

    expect(global.document.cookie.includes('bearerToken=mock_access_token')).toBe(true);
  });
});
