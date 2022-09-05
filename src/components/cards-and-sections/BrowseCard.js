import React from 'react';

import classes from './styles/BrowseCard.module.css';

function BrowseCard(props) {
  function cardClickHandler() {
    props.onClick(props.id);
  }

  return (
    <button className={classes.card} onClick={cardClickHandler}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.text}>
        <h4>{props.name}</h4>
      </div>
    </button>
  );
}

export default BrowseCard;
