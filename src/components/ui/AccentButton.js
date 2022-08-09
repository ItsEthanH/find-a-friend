import React from 'react';

import classes from './styles/AccentButton.module.css';

function AccentButton(props) {
  const styles = `${classes.button} ${props.styles ? props.styles : ''}`;

  console.log(styles);

  function clickHandler() {
    props.onClick();
  }

  return (
    <button className={styles} onClick={clickHandler}>
      {props.children}
    </button>
  );
}

export default AccentButton;
