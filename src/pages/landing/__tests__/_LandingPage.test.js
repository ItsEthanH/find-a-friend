import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import LandingPage from '../_LandingPage';

jest.useFakeTimers();
describe('landing page snapshots', () => {
  test('300px', () => {
    window.innerWidth = 300;
    window.dispatchEvent(new Event('resize'));

    jest.runAllTimers();

    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <LandingPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('1000px', () => {
    window.innerWidth = 1000;
    window.dispatchEvent(new Event('resize'));

    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <LandingPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('1800px', () => {
    window.innerWidth = 1800;
    window.dispatchEvent(new Event('resize'));

    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <LandingPage />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
