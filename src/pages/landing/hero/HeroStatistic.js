import React from 'react';

import classes from './styles/HeroStatistic.module.css';

function HeroStatistic(props) {
  return (
    <div className={classes.statistic}>
      <img src={props.icon} alt="" />
      <p className={classes.stat}>{props.stat}</p>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
}

export default HeroStatistic;
