import React, { useState, useEffect, useRef, useCallback } from 'react';
import getCookieValue from '../util/getCookieValue';

const AppContext = React.createContext({
  token: '',
  isMobileNavOpen: false,
  toggleMobileNav: () => {},
  windowWidth: 0,
});

function AppContextProvider(props) {
  const [token, setToken] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const key = process.env.REACT_APP_KEY;
  let tokenCookieValue = getCookieValue('bearerToken');
  let windowTimer;

  const getBearerToken = useCallback(async () => {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${key}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw Error('Something went wrong with API authentication!');
    }

    const data = await response.json();
    setBearerToken(data.access_token, data.expires_in);
  }, [clientId, key]);

  function setBearerToken(token, time) {
    const dateObj = new Date();
    const dateTime = dateObj.getTime();
    const expiry = new Date(dateTime + time * 1000);

    document.cookie = `bearerToken=${token}; expires=${expiry}}`;
    setToken(token);
  }

  function toggleMobileNav() {
    setIsMobileNavOpen((prevState) => !prevState);
  }

  function windowResizeHandler() {
    if (windowTimer) {
      clearTimeout(windowTimer);
    }

    windowTimer = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 300);
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  });

  useEffect(() => {
    if (tokenCookieValue) {
      setToken(tokenCookieValue);
    } else {
      getBearerToken();
    }
  }, [getBearerToken, tokenCookieValue]);

  const contextValue = {
    token,
    isMobileNavOpen,
    toggleMobileNav,
    windowWidth,
  };

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}

export default AppContext;
export { AppContextProvider };
