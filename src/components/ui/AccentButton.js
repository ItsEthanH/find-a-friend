import React from 'react';

import classes from './styles/AccentButton.module.css';

function AccentButton(props) {
  const styles = `${classes.button} ${props.styles ? props.styles : ''}`;

  return <button className={styles}>{props.children}</button>;
}

export default AccentButton;