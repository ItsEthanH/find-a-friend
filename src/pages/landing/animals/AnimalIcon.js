import React from 'react';

import AccentButton from '../../../components/ui/AccentButton';

import classes from './styles/AnimalIcon.module.css';

function AnimalIcon(props) {
  return (
    <button className={classes.icon}>
      <img src={props.image} alt={props.animal} />
      <AccentButton>Find a {props.animal}</AccentButton>
    </button>
  );
}

export default AnimalIcon;
