import React from 'react';

import LandingHeading from '../../../components/ui/LandingHeading';

import classes from './styles/Resource.module.css';

function Resource(props) {
  let alignmentStyles = props.right ? classes.right : classes.left;

  return (
    <div className={`${classes.resource} ${alignmentStyles}`}>
      <div className={classes.highlight} />
      <LandingHeading>{props.title}</LandingHeading>
      <p>{props.body}</p>
      <a href={props.link}>{props.linkText}</a>
    </div>
  );
}

export default Resource;
