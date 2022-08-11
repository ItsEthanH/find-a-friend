import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';

import App from './App';
import LandingPage from './pages/landing/_LandingPage';
import SearchAnimalsPage from './pages/search-animals/_SearchAnimalsPage';
import SearchOrgsPage from './pages/search-orgs/_SearchOrgsPage';
import DogBreedsPage from './pages/dog-breeds/_DogBreedsPage';
import CatBreedsPage from './pages/cat-breeds/_CatBreedsPage';
import ResultsPage from './pages/results/_ResultsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/search" element={<SearchAnimalsPage />} />
          <Route path="/organisations" element={<SearchOrgsPage />} />
          <Route path="/dog-breeds" element={<DogBreedsPage />} />
          <Route path="/cat-breeds" element={<CatBreedsPage />} />
          <Route path="/results/:category/:queryParams" element={<ResultsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
