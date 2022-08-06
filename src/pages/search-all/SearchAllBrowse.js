import React from 'react';

import Heading from '../../components/ui/Heading';
import SearchAllBrowseCard from './SearchAllBrowseCard';

import classes from './styles/SearchAllBrowse.module.css';
import dog from '../../assets/images/browse-dog.jpg';
import cat from '../../assets/images/browse-cat.jpg';

function SearchAllBrowse() {
  return (
    <section className={classes.section}>
      <Heading>
        <span className="color-accent">Browse</span> by type
      </Heading>
      <div className={classes.cards}>
        <SearchAllBrowseCard name="Dogs" image={dog} available="31,212" />
        <SearchAllBrowseCard name="Cats" image={cat} available="31,212" />
      </div>
    </section>
  );
}

export default SearchAllBrowse;
