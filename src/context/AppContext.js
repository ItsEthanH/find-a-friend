import React, { useState, useEffect } from 'react';

const AppContext = React.createContext({
  isMobileNavOpen: false,
  toggleMobileNav: () => {},
  windowWidth: 0,
});

function AppContextProvider(props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let windowTimer;

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

  const contextValue = {
    isMobileNavOpen,
    toggleMobileNav,
    windowWidth,
  };

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}

export default AppContext;
export { AppContextProvider };
