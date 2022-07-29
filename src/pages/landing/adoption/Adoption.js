import React from 'react';

import LandingSection from '../../../components/ui/LandingSection';
import AdoptionSlider from './AdoptionSlider';

import classes from './styles/Adoption.module.css';

function Adoption() {
  return (
    <LandingSection styles={classes.adoption}>
      <h3>Available for Adoption</h3>
      <p>Just a pawful of animals looking for a new home</p>
      <AdoptionSlider />
    </LandingSection>
  );
}

export default Adoption;
