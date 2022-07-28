import React from 'react';

import LandingPage from './pages/landing/_LandingPage';

import { AppContextProvider } from './context/AppContext';

import './assets/global.css';

function App() {
  return (
    <AppContextProvider>
      <LandingPage />
    </AppContextProvider>
  );
}

export default App;
