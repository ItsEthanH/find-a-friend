import React from 'react';

import Heading from '../../../components/ui/Heading';
import Subheading from '../../../components/ui/Subheading';
import AdoptionCarousel from './AdoptionCarousel';

import classes from './styles/Adoption.module.css';

function Adoption() {
  return (
    <section>
      <Heading styles={classes.heading} alignment="center">
        Available for Adoption
      </Heading>
      <Subheading styles={classes.heading} alignment="center">
        Just a pawful of animals looking for a new home
      </Subheading>
      <AdoptionCarousel />
    </section>
  );
}

export default Adoption;
