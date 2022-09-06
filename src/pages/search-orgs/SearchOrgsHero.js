import React from 'react';

import Hero from '../../components/cards-and-sections/Hero';
import Heading from '../../components/text/Heading';
import SearchOrgsSearchbar from './SearchOrgsSearchbar';

function SearchOrgsHero({ onSearch }) {
  function searchSubmitHandler(location, shelterName) {
    onSearch(location, shelterName);
  }

  return (
    <Hero page="ORGANISATIONS">
      <div className="hero-body">
        <Heading>
          Browse <span className="color-accent">Organisations</span>
        </Heading>
        <SearchOrgsSearchbar onSubmit={searchSubmitHandler} />
      </div>
    </Hero>
  );
}

export default SearchOrgsHero;
