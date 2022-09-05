import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from './store/auth';
import { uiActions } from './store/ui';
import { Outlet } from 'react-router-dom';
import useScroll from './hooks/useScroll';

import getCookieValue from './util/getCookieValue';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/global.css';
import { useCallback } from 'react';

function App() {
  useScroll();

  const dispatch = useDispatch();
  const location = useLocation();

  // recieves a token and expiry, formats the expiry date to an hour ahead of the current time, and saves the info into a cookie and redux
  const handleBearerToken = useCallback(
    (token, expiry) => {
      const dateObj = new Date();
      const dateTime = dateObj.getTime();
      const expiryDate = new Date(dateTime + expiry * 1000);

      document.cookie = `bearerToken=${token};expires=${expiryDate}};path=/`;
      dispatch(authActions.setBearerToken({ token }));
    },
    [dispatch]
  );

  // gets the bearer token from petfinder, then pass the details to handlerBearerToken
  const getBearerToken = useCallback(async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const key = process.env.REACT_APP_KEY;

    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${key}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    const data = await response.json();

    handleBearerToken(data.access_token, data.expires_in);
  }, [handleBearerToken]);

  // whenever the location path changes, check the cookie store. if there's a token, move it to redux store
  // else, start the token fetching process
  useEffect(() => {
    let tokenCookieValue = getCookieValue('bearerToken');

    if (!tokenCookieValue) {
      getBearerToken();
    } else {
      dispatch(authActions.setBearerToken({ token: tokenCookieValue }));
    }
  }, [dispatch, getBearerToken, location]);

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
