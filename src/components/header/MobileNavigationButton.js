import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';

import Backdrop from '../ui/Backdrop';

import classes from './styles/MobileNavigationButton.module.css';

function MobileNavigationButton(props) {
  const dispatch = useDispatch();
  const isMobileNavOpen = useSelector((state) => state.ui.isMobileNavOpen);
  const style = `${classes.button} ${props.type === 'cross' ? classes.cross : classes.hamburger}`;

  function navClickHandler() {
    dispatch(uiActions.toggleMobileNav());
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
