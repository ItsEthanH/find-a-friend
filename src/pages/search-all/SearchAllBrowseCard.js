import React from 'react';

import Card from '../../components/ui/Card';

import classes from './styles/SearchAllBrowseCard.module.css';

function SearchAllBrowseCard(props) {
  return (
    <Card styles={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt="Dog" />
      </div>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.available} Available</p>
      </div>
    </Card>
  );
}

export default SearchAllBrowseCard;
