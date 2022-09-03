import React from 'react';

import classes from './styles/AnimalIcon.module.css';
import buttonClasses from '../../../components/buttons-and-inputs/styles/AccentButton.module.css';

function AnimalIcon(props) {
  const { id, animal, image, onClick } = props;

  function buttonClickHandler(event) {
    console.log(event);
    onClick(event);
  }

  return (
    <button id={id} className={classes.icon} onClick={buttonClickHandler}>
      <img id={id} src={image} alt={animal} />
      <p id={id} className={buttonClasses.button}>
        Find a {animal}
      </p>
    </button>
  );
}

export default AnimalIcon;
