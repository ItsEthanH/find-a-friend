import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';

import classes from './styles/Backdrop.module.css';

const backdropPortal = document.getElementById('backdrop-root');

function BackdropElement(props) {
  const [animate, setAnimate] = useState(false);

  function backdropClickHandler(event) {
    if (event.target.id !== 'backdrop') return;
    props.onClick();
  }

  useEffect(() => {
    setAnimate(true);
  }, []);

  const styles = `${classes.backdrop} ${animate ? classes.animation : ''}`;

  return (
    <div id="backdrop" onClick={backdropClickHandler} className={styles}>
      {props.children}
    </div>
  );
}

function Backdrop(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropElement onClick={() => props.onClick()}> {props.children}</BackdropElement>,
        backdropPortal
      )}
    </>
  );
}

export default Backdrop;
