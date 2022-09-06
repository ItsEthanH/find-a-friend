import React from 'react';

import Heading from '../../components/text/Heading';
import SearchOrgsResult from './SearchOrgsResult';

import classes from './styles/SearchOrgsResults.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';

function SearchOrgsResults({ results, isLoading, error }) {
  const renderedResults =
    results &&
    results.map((result, index) => (
      <>
        <SearchOrgsResult
          key={result.id}
          id={result.id}
          name={result.name}
          location={`${result.address.city}, ${result.address.state}`}
          distance={result.distance}
          contact={result.phone || result.email}
          website={result.website}
        />
        {index < results.length && <div className={classes.divider} />}
      </>
    ));

  return (
    <section className={classes.section}>
      <Heading styles={classes.heading} alignment="center">
        Results
      </Heading>
      {results && <div className={classes.results}>{renderedResults}</div>}
      {isLoading && <img className={classes.loading} src={loadingSpinner} alt="Loading..." />}
      {error && (
        <p className={classes.error}>
          There was an error fetching organisation data. Please try again later!
        </p>
      )}
    </section>
  );
}

export default SearchOrgsResults;
