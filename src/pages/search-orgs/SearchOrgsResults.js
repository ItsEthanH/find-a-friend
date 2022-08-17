import React from 'react';

import classes from './styles/SearchOrgsResults.module.css';
import Heading from '../../components/text/Heading';

function SearchOrgsResults() {
  return (
    <section className={classes.results}>
      <Heading alignment="center">Results</Heading>
      <p>No results found!</p>
    </section>
  );
}

export default SearchOrgsResults;
