import React from 'react';

import LandingSection from '../../../components/ui/LandingSection';
import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import AnimalIcon from './AnimalIcon';

import classes from './styles/Animals.module.css';
import dog from '../../../assets/images/dog-circle.png';
import cat from '../../../assets/images/cat-circle.png';
import bunny from '../../../assets/images/bunny-circle.png';
import horse from '../../../assets/images/horse-circle.png';

function Animals() {
  return (
    <LandingSection styles={classes.animals}>
      <LandingHeading alignment="center">
        From <span className="color-accent">Canines</span> to
        <span className="color-accent"> Felines</span>...
      </LandingHeading>
      <LandingSubheading>...and everything in between!</LandingSubheading>
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
