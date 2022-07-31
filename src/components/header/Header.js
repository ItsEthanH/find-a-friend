import React from 'react';

import MobileNavigationButton from './MobileNavigationButton';
import MobileNavigationContent from './MobileNavigationContent';

import classes from './styles/Header.module.css';
import logo from '../../assets/images/header-logo.png';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="Find-a-Friend" />
        </div>
        <MobileNavigationButton type="hamburger" />
      </header>
      <MobileNavigationContent />
    </>
  );
}

export default Header;
