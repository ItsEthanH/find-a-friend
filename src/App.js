import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/global.css';

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.checkTokenInCookie());
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
