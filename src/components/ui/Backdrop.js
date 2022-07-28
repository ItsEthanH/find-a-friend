import { useContext } from 'react';
import ReactDOM from 'react-dom';

import AppContext from '../../context/AppContext';

import classes from './styles/Backdrop.module.css';

const backdropPortal = document.getElementById('backdrop-root');

function BackdropElement() {
  const { toggleMobileNav } = useContext(AppContext);

  function backdropClickHandler() {
    toggleMobileNav();
  }

  return <div onClick={backdropClickHandler} className={classes.backdrop} />;
}

function Backdrop() {
  return <>{ReactDOM.createPortal(<BackdropElement />, backdropPortal)}</>;
}

export default Backdrop;
