import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from './store/auth';
import { uiActions } from './store/ui';
import { Outlet } from 'react-router-dom';
import useScroll from './hooks/useScroll';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/global.css';

function App() {
  useScroll();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  // check auth token status in cookie on every page change
  useEffect(() => {
    dispatch(authActions.checkTokenInCookie());
  }, [dispatch, token, location]);

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
