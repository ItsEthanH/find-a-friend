import React from 'react';

import Heading from '../../components/ui/Heading';
import BrowseCard from '../../components/ui/BrowseCard';

import classes from './styles/DogBreedsBrowse.module.css';
import placeholder from '../../assets/images/dog-breeds/hero.jpg';

function DogBreedsBrowse() {
  return (
    <section className={classes.section}>
      <Heading>
        <span className="color-accent">Browse</span> by Breed
      </Heading>
      <div className={classes.cards}>
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
        <BrowseCard name="Test Card" image={placeholder} available="31,212" />
      </div>
    </section>
  );
}

export default DogBreedsBrowse;
