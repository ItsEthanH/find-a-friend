import React from 'react';

import Heading from '../../components/text/Heading';
import Hero from '../../components/cards-and-sections/Hero';
import SearchAnimalsSearchbar from './SearchAnimalsSearchbar';

function SearchAllHero() {
  return (
    <Hero page="ANIMALS">
      <div className="hero-body">
        <Heading>
          Search all <span className="color-accent">Animals</span>
        </Heading>
        <SearchAnimalsSearchbar />
      </div>
    </Hero>
  );
}

export default SearchAllHero;
