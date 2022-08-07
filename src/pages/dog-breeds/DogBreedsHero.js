import React from 'react';

import Hero from '../../components/ui/Hero';
import Heading from '../../components/ui/Heading';
import SingleSearchbar from '../../components/ui/SingleSearchbar';

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
