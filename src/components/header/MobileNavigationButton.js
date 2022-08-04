import React, { useContext, useEffect } from 'react';

import AppContext from '../../context/AppContext';
import Backdrop from '../ui/Backdrop';

import classes from './styles/MobileNavigationButton.module.css';

function MobileNavigationButton(props) {
  const { isMobileNavOpen, toggleMobileNav } = useContext(AppContext);
  const style = `${classes.button} ${props.type === 'cross' ? classes.cross : classes.hamburger}`;

  function navClickHandler() {
    toggleMobileNav();
  }

  // will stop mobile content from scrolling when the nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [isMobileNavOpen]);

  return (
    <>
      {isMobileNavOpen && <Backdrop />}
      <button className={style} onClick={navClickHandler}>
        <span className={`${classes.patty} ${classes.first}`}></span>
        <span className={`${classes.patty} ${classes.second}`}></span>
        <span className={`${classes.patty} ${classes.third}`}></span>
      </button>
    </>
  );
}

export default MobileNavigationButton;
