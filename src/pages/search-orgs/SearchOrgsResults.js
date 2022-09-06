import React from 'react';

import Heading from '../../components/text/Heading';
import SearchOrgsResult from './SearchOrgsResult';
import Pagination from '../../components/buttons-and-inputs/Pagination';

import classes from './styles/SearchOrgsResults.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';

function SearchOrgsResults({ results, isLoading, error, pagination, onPageChange }) {
  function pageChangeHandler(newPage) {
    onPageChange(newPage);
  }

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
        {index + 1 < results.length && <div className={classes.divider} />}
      </>
    ));

  const resultsComponent = results && results.length !== 0 && (
    <div className={classes.results}>{renderedResults}</div>
  );

  const paginationComponent = pagination && results.length !== 0 && (
    <Pagination
      page={pagination.current_page}
      totalPages={pagination.total_pages}
      onChange={pageChangeHandler}
    />
  );

  const loadingComponent = isLoading && (
    <img className={classes.loading} src={loadingSpinner} alt="Loading..." />
  );

  const noResultsComponent = results && results.length === 0 && (
    <p className={classes.info}>
      There are no results for the entered values. Please change the location or shelter name, and
      try again!
    </p>
  );

  const errorComponent = error && (
    <p className={classes.info}>
      There was an error fetching organisation data. Please try again later!
    </p>
  );

  return (
    <section className={classes.section}>
      <Heading styles={classes.heading} alignment="center">
        Results
      </Heading>
      {resultsComponent}
      {paginationComponent}
      {loadingComponent}
      {noResultsComponent}
      {errorComponent}
    </section>
  );
}

export default SearchOrgsResults;
