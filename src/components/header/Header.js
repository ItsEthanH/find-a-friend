import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigationButton from './MobileNavigationButton';
import MobileNavigationContent from './MobileNavigationContent';

import classes from './styles/Header.module.css';
import logo from '../../assets/images/header-logo.png';

function Header() {
  const { windowWidth } = useContext(AppContext);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <img src={logo} alt="Find-a-Friend" />
        </div>
        {windowWidth < 850 && <MobileNavigationButton type="hamburger" />}
        {windowWidth >= 850 && <DesktopNavigation />}
      </header>
      {windowWidth < 850 && <MobileNavigationContent />}
    </>
  );
}

export default Header;
