import React from 'react';

import Heading from '../../components/ui/Heading';
import SearchAllBrowseCard from '../../components/ui/BrowseCard';

import classes from './styles/SearchAnimalsBrowse.module.css';
import dog from '../../assets/images/animals/browse-dog.jpg';
import cat from '../../assets/images/animals/browse-cat.jpg';

function SearchAllBrowse() {
  return (
    <section className={classes.section}>
      <Heading>
        <span className="color-accent">Browse</span> by type
      </Heading>
      <div className={classes.cards}>
        <SearchAllBrowseCard name="Dogs" image={dog} available="31,212" />
        <SearchAllBrowseCard name="Cats" image={cat} available="31,212" />
        <SearchAllBrowseCard name="Dogs" image={dog} available="31,212" />
        <SearchAllBrowseCard name="Cats" image={cat} available="31,212" />
        <SearchAllBrowseCard name="Dogs" image={dog} available="31,212" />
        <SearchAllBrowseCard name="Cats" image={cat} available="31,212" />
        <SearchAllBrowseCard name="Dogs" image={dog} available="31,212" />
        <SearchAllBrowseCard name="Cats" image={cat} available="31,212" />
      </div>
    </section>
  );
}

export default SearchAllBrowse;
