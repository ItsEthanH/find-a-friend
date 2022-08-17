import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';

import ReactDOM from 'react-dom';

import classes from './styles/Backdrop.module.css';

const backdropPortal = document.getElementById('backdrop-root');

function BackdropElement() {
  const dispatch = useDispatch();

  const [animate, setAnimate] = useState(false);

  function backdropClickHandler() {
    dispatch(uiActions.toggleMobileNav());
  }

  useEffect(() => {
    setAnimate(true);
  }, []);

  const styles = `${classes.backdrop} ${animate ? classes.animation : ''}`;

  return <div onClick={backdropClickHandler} className={styles} />;
}

function Backdrop() {
  return <>{ReactDOM.createPortal(<BackdropElement />, backdropPortal)}</>;
}

export default Backdrop;
