import React, { useState } from 'react';

const AppContext = React.createContext({
  isMobileNavOpen: false,
  toggleMobileNav: () => {},
});

function AppContextProvider(props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleMobileNav() {
    setIsMobileNavOpen((prevState) => !prevState);
  }

  const contextValue = {
    isMobileNavOpen,
    toggleMobileNav,
  };

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}

export default AppContext;
export { AppContextProvider };
