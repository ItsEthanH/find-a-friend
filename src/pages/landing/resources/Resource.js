import React from 'react';

import classes from './styles/Resource.module.css';

function Resource(props) {
  let alignmentStyles = props.right ? classes.right : classes.left;

  return (
    <div className={`${classes.resource} ${alignmentStyles}`}>
      <div className={classes.highlight} />
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <a href={props.link}>{props.linkText}</a>
    </div>
  );
}

export default Resource;
