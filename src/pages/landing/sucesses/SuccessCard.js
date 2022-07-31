import React from 'react';

import classes from './styles/SuccessCard.module.css';
import Jet from '../../../assets/images/jet-success.jpg';

function SuccessCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={Jet} alt="" />
      </div>
      <div className={classes.text}>
        <h4>
          {props.name} - {props.breed}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default SuccessCard;
