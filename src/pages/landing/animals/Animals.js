import React from 'react';

import LandingSection from '../../../components/ui/LandingSection';
import Heading from '../../../components/ui/Heading';
import Subheading from '../../../components/ui/Subheading';
import AnimalIcon from './AnimalIcon';

import classes from './styles/Animals.module.css';
import dog from '../../../assets/images/landing/dog-circle.png';
import cat from '../../../assets/images/landing/cat-circle.png';
import bunny from '../../../assets/images/landing/bunny-circle.png';
import horse from '../../../assets/images/landing/horse-circle.png';

function Animals() {
  return (
    <LandingSection styles={classes.animals}>
      <div className={classes.headings}>
        <Heading alignment="center">
          From <span className="color-accent">Canines</span> to
          <span className="color-accent"> Felines</span>...
        </Heading>
        <Subheading alignment="center">...and everything in between!</Subheading>
      </div>
      <div className={classes.icons}>
        <AnimalIcon image={dog} animal="Dog" />
        <AnimalIcon image={cat} animal="Cat" />
        <AnimalIcon image={bunny} animal="Bunny" />
        <AnimalIcon image={horse} animal="Horse" />
      </div>
    </LandingSection>
  );
}

export default Animals;
