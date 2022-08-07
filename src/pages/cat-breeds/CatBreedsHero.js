import React from 'react';

import Hero from '../../components/ui/Hero';
import Heading from '../../components/ui/Heading';
import SingleSearchbar from '../../components/ui/SingleSearchbar';

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
