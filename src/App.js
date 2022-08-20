import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth';
import { uiActions } from './store/ui';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/global.css';
import { filterActions } from './store/filter';

function App() {
  const token = useSelector((state) => state.auth.token);
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.checkTokenInCookie());
  }, [dispatch, token]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(uiActions.windowResizeHandler());
    });
  });

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
