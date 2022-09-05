import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import store from './store/store';

import App from './App';

import LandingPage from './pages/landing/_LandingPage';
import SearchAnimalsPage from './pages/search-animals/_SearchAnimalsPage';
import SearchOrgsPage from './pages/search-orgs/_SearchOrgsPage';
import DogBreedsPage from './pages/dog-breeds/_DogBreedsPage';
import CatBreedsPage from './pages/cat-breeds/_CatBreedsPage';
import ResultsPage from './pages/results/_ResultsPage';
import PetViewPage from './pages/pet-view/_PetViewPage';

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
          <Route path="/results/:location/:page/:sort" element={<ResultsPage />} />
          <Route path="/results/:location/:page/:sort/:filters" element={<ResultsPage />} />
          <Route path="/animal/:id" element={<PetViewPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
