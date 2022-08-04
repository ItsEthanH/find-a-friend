import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/global.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
