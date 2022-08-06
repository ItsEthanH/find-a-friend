import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';

import App from './App';
import LandingPage from './pages/landing/_LandingPage';
import SearchAllPage from './pages/search-all/_SearchAllPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchAllPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
