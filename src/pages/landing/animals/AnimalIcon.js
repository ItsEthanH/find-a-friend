import React from 'react';

import classes from './styles/AnimalIcon.module.css';
import buttonClasses from '../../../components/ui/styles/AccentButton.module.css';

function AnimalIcon(props) {
  return (
    <button className={classes.icon}>
      <img src={props.image} alt={props.animal} />
      <p className={buttonClasses.button}>Find a {props.animal}</p>
    </button>
  );
}

export default AnimalIcon;
