import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import uiReducer from './ui';
import filterReducer from './filter';

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer, filter: filterReducer },
});

export default store;
