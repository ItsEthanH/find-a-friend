import React from 'react';

import Hero from '../../components/cards-and-sections/Hero';
import Heading from '../../components/text/Heading';
import SingleSearchbar from '../../components/buttons-and-inputs/SingleSearchbar';

import search from '../../assets/svgs/search.svg';

function CatBreedsHero() {
  return (
    <Hero page="CATS">
      <div className="hero-body">
        <Heading>
          Browse <span className="color-accent">Cat</span> Breeds
        </Heading>
        <SingleSearchbar name="Cat Breeds" placeholder="Search for Cat Breeds..." icon={search} />
      </div>
    </Hero>
  );
}

export default CatBreedsHero;
