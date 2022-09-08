import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import store from './store/store';

import App from './App';
import SuspenseComponent from './components/SuspenseComponent';

const LandingPage = React.lazy(() => import('./pages/landing/_LandingPage'));
const SearchAnimalsPage = React.lazy(() => import('./pages/search-animals/_SearchAnimalsPage'));
const SearchOrgsPage = React.lazy(() => import('./pages/search-orgs/_SearchOrgsPage'));
const DogBreedsPage = React.lazy(() => import('./pages/dog-breeds/_DogBreedsPage'));
const CatBreedsPage = React.lazy(() => import('./pages/cat-breeds/_CatBreedsPage'));
const ResultsPage = React.lazy(() => import('./pages/results/_ResultsPage'));
const PetViewPage = React.lazy(() => import('./pages/pet-view/_PetViewPage'));
const OrgViewPage = React.lazy(() => import('./pages/org-view/_OrgViewPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<SuspenseComponent />}>
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
      </Suspense>
    </BrowserRouter>
  </Provider>
);
