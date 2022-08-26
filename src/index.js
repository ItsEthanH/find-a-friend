import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import LandingPage from './pages/landing/_LandingPage';
import SearchAnimalsPage from './pages/search-animals/_SearchAnimalsPage';
import SearchOrgsPage from './pages/search-orgs/_SearchOrgsPage';
import DogBreedsPage from './pages/dog-breeds/_DogBreedsPage';
import CatBreedsPage from './pages/cat-breeds/_CatBreedsPage';
import ResultsPage from './pages/results/_ResultsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/search" element={<SearchAnimalsPage />} />
          <Route path="/organisations" element={<SearchOrgsPage />} />
          <Route path="/dog-breeds" element={<DogBreedsPage />} />
          <Route path="/cat-breeds" element={<CatBreedsPage />} />
          <Route path="/results/:location" element={<ResultsPage />} />
          <Route path="/results/:location/:filters" element={<ResultsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
