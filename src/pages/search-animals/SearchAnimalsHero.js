import React from 'react';

import Heading from '../../components/ui/Heading';
import Hero from '../../components/ui/Hero';
import SearchAnimalsSearchbar from './SearchAnimalsSearchbar';

import filter from '../../assets/svgs/filter.svg';
import location from '../../assets/svgs/location-pin.svg';

function SearchAllHero() {
  return (
    <Hero page="ANIMALS">
      <div className="hero-body">
        <Heading>
          Search all <span className="color-accent">Animals</span>
        </Heading>
        <SearchAnimalsSearchbar
          form-name="Search all animals..."
          search-name="Location"
          search-icon={location}
          search-placeholder="Enter a city, state or postal code"
          filter-name="Filters"
          filter-icon={filter}
          filter-placeholder="Click to view filters..."
        />
      </div>
    </Hero>
  );
}

export default SearchAllHero;
