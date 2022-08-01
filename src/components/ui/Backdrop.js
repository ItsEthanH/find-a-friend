import { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import AppContext from '../../context/AppContext';

import classes from './styles/Backdrop.module.css';

const backdropPortal = document.getElementById('backdrop-root');

function BackdropElement() {
  const [animate, setAnimate] = useState(false);
  const { toggleMobileNav } = useContext(AppContext);

  function backdropClickHandler() {
    toggleMobileNav();
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
