import React from 'react';

import Hero from '../../components/cards-and-sections/Hero';
import Heading from '../../components/text/Heading';
import SingleSearchbar from '../../components/buttons-and-inputs/SingleSearchbar';

import search from '../../assets/svgs/search.svg';

function DogBreedsHero() {
  return (
    <Hero page="DOGS">
      <div className="hero-body">
        <Heading>
          Browse <span className="color-accent">Dog</span> Breeds
        </Heading>
        <SingleSearchbar name="Dog Breeds" placeholder="Search for Dog Breeds..." icon={search} />
      </div>
    </Hero>
  );
}

export default DogBreedsHero;
