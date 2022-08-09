import React from 'react';

import Card from './Card';

import classes from './styles/BrowseCard.module.css';

function BrowseCard(props) {
  return (
    <Card styles={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.available} Available</p>
      </div>
    </Card>
  );
}

export default BrowseCard;
