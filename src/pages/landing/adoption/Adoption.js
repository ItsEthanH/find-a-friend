import React from 'react';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import AdoptionCarousel from './AdoptionCarousel';

import classes from './styles/Adoption.module.css';

function Adoption() {
  return (
    <section>
      <LandingHeading styles={classes.heading} alignment="center">
        Available for Adoption
      </LandingHeading>
      <LandingSubheading styles={classes.heading} alignment="center">
        Just a pawful of animals looking for a new home
      </LandingSubheading>
      <AdoptionCarousel />
    </section>
  );
}

export default Adoption;
