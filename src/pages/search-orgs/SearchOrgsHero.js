import React from 'react';

import Hero from '../../components/cards-and-sections/Hero';
import Heading from '../../components/text/Heading';
import SearchOrgsSearchbar from './SearchOrgsSearchbar';

function SearchOrgsHero() {
  return (
    <Hero page="ORGANISATIONS">
      <div className="hero-body">
        <Heading>
          Browse <span className="color-accent">Organisations</span>
        </Heading>
        <SearchOrgsSearchbar />
      </div>
    </Hero>
  );
}

export default SearchOrgsHero;
