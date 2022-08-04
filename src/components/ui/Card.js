import React from 'react';

import classes from './styles/Card.module.css';

function Card(props) {
  const styles = `${classes.card} ${props.styles}`;

  return <div className={styles}>{props.children}</div>;
}

export default Card;
