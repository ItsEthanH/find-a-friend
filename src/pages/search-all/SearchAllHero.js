import React from 'react';

import Heading from '../../components/ui/Heading';
import Hero from '../../components/ui/Hero';
import SearchAllSearchbar from './SearchAllSearchbar';

import classes from './styles/SearchAllHero.module.css';

function SearchAllHero() {
  return (
    <Hero page="SEARCH_ALL">
      <div className={classes.body}>
        <Heading>
          Search all <span className="color-accent">Animals</span>
        </Heading>
        <SearchAllSearchbar />
      </div>
    </Hero>
  );
}

export default SearchAllHero;
