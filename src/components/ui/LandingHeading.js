import React from 'react';

import classes from './styles/LandingHeading.module.css';

function LandingHeading(props) {
  let styles;

  switch (props.alignment) {
    case 'center':
      styles = `${classes.center} ${classes.heading} ${props.styles}`;
      break;
    case 'right':
      styles = `${classes.right} ${classes.heading} ${props.styles}`;
      break;
    default:
      styles = `${classes.left} ${classes.heading} ${props.styles}`;
      break;
  }

  return <h3 className={styles}>{props.children}</h3>;
}

export default LandingHeading;
