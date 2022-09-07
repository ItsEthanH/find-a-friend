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
import OrgViewPage from './pages/org-view/_OrgViewPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/search" element={<SearchAnimalsPage />} />

          <Route path="/organisations/:page" element={<SearchOrgsPage />} />
          <Route path="/organisations/location=:location/:page" element={<SearchOrgsPage />} />
          <Route path="/organisations/shelter=:shelterName/:page" element={<SearchOrgsPage />} />
          <Route
            path="/organisations/location=:location/shelter=:shelterName/:page"
            element={<SearchOrgsPage />}
          />

          <Route path="/organisation/:id" element={<OrgViewPage />} />

          <Route path="/dog-breeds/:page" element={<DogBreedsPage />} />
          <Route path="/cat-breeds/:page" element={<CatBreedsPage />} />

          <Route path="/results/:location/:page/:sort" element={<ResultsPage />}>
            <Route path=":filters" element={<ResultsPage />} />
          </Route>

          <Route path="/animal/:id" element={<PetViewPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
