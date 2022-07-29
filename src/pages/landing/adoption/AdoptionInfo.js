import React from 'react';

import classes from './styles/AdoptionInfo.module.css';

function AdoptionInfo(props) {
  return (
    <div className={classes.info}>
      <img src={props.icon} alt={props.alt} />
      <p>{props.label}</p>
    </div>
  );
}

export default AdoptionInfo;
