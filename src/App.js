import React from 'react';

import Header from './components/header/Header';
import LandingPage from './pages/landing/_LandingPage';
import Footer from './components/footer/Footer';

import { AppContextProvider } from './context/AppContext';

import './assets/global.css';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <LandingPage />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
