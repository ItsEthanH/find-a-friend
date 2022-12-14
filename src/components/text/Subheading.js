import React from 'react';

import classes from './styles/Subheading.module.css';

function Subheading(props) {
  let styles;

  switch (props.alignment) {
    case 'center':
      styles = `${classes.center} ${classes.subheading} ${props.styles}`;
      break;
    case 'right':
      styles = `${classes.right} ${classes.subheading} ${props.styles}`;
      break;
    default:
      styles = `${classes.left} ${classes.subheading} ${props.styles}`;
      break;
  }

  return <p className={styles}>{props.children}</p>;
}

export default Subheading;
