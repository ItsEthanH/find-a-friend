import React from 'react';

import classes from './styles/AccentButton.module.css';

function AccentButton(props) {
  const styles = `${classes.button} ${props.styles ? props.styles : ''}`;

  function clickHandler() {
    if (props.onClick) {
      props.onClick();
    } else {
      return;
    }
  }

  return (
    <button className={styles} onClick={clickHandler}>
      {props.children}
    </button>
  );
}

export default AccentButton;
