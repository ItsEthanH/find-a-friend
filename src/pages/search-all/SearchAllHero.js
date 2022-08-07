import React from 'react';

import Heading from '../../components/ui/Heading';
import Hero from '../../components/ui/Hero';
import DoubleSearchbar from '../../components/ui/DoubleSearchbar';

import classes from './styles/SearchAllHero.module.css';
import search from '../../assets/svgs/search.svg';
import location from '../../assets/svgs/location-pin.svg';

function SearchAllHero() {
  return (
    <Hero page="SEARCH_ALL">
      <section className={classes.body}>
        <Heading>
          Search all <span className="color-accent">Animals</span>
        </Heading>
        <DoubleSearchbar
          primary-name="Search All Query"
          primary-icon={search}
          primary-placeholder="Search for pets..."
          secondary-name="Location"
          secondary-icon={location}
          secondary-placeholder="Enter a location..."
        />
      </section>
    </Hero>
  );
}

export default SearchAllHero;
