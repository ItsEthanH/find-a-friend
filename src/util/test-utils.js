import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import authReducer from '../store/auth';
import uiReducer from '../store/ui';
import filterReducer from '../store/filter';

function ProviderComponent(props) {
  const store = configureStore({
    reducer: { auth: authReducer, ui: uiReducer, filter: filterReducer },
  });

  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}

export const filterRender = (ui, options) => render(ui, { wrapper: ProviderComponent, ...options });
