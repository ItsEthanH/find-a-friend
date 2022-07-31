import React from 'react';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import AdoptionSlider from './AdoptionSlider';

import classes from './styles/Adoption.module.css';

function Adoption() {
  return (
    <section className={classes.adoption}>
      <LandingHeading styles={classes.heading} alignment="center">
        Available for Adoption
      </LandingHeading>
      <LandingSubheading alignment="center">
        Just a pawful of animals looking for a new home
      </LandingSubheading>
      <AdoptionSlider />
    </section>
  );
}

export default Adoption;
