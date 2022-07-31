import React from 'react';

import AdoptionSlider from './AdoptionSlider';

import classes from './styles/Adoption.module.css';

function Adoption() {
  return (
    <section className={classes.adoption}>
      <h3>Available for Adoption</h3>
      <p>Just a pawful of animals looking for a new home</p>
      <AdoptionSlider />
    </section>
  );
}

export default Adoption;
