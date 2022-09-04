import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { filterActions, FILTER_PAGES } from '../../store/filter';
import { uiActions } from '../../store/ui';

import ResultsCard from './ResultsCard';
import ResultsSort from './ResultsSort';
import Filter from '../../components/filter/Filter';

import classes from './styles/ResultsPage.module.css';
import loading from '../../assets/svgs/loading.svg';
import noImageFound from '../../assets/images/results/no-image-found.png';
import ResultsInformation from './ResultsInformation';
import ResultsPagination from './ResultsPagination';

const sortOptions = {
  recent: 'Date Posted (Newest)',
  '-recent': 'Date Posted (Oldest)',
  distance: 'Distance (Closest)',
  '-distance': 'Distance (Furthest)',
  random: 'Random',
};

function _ResultsPage() {
  // hooks
  const params = useParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // the next 6 lines turn the location from the {city-state} url format to the {city, state} api format
  // postcodes are allowed as they are
  let locationParameter = params.location;
  if (isNaN(params.location) && params.location !== 'global') {
    const loc = params.location.replaceAll('-', ' ');
    const index = loc.lastIndexOf(' ');
    locationParameter = loc.substring(0, index) + ', ' + loc.substring(index + 1);
  }

  let filters = params.filters || '';

  console.log(locationParameter);

  const requestEndpoint = `${
    locationParameter !== 'global' && `location=${locationParameter}`
  }&page=${params.page}&sort=${params.sort}&${filters}`;
  const { response, isLoading, error } = useFetch(`animals?${requestEndpoint}`);

  console.log(requestEndpoint);

  // allows the responsive rendering of the filters in the results page only.
  // controls the 'desktop' prop on the filter, which internally handles the styling through the addition of '.desktop' classes
  const dispatch = useDispatch();
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  const isDesktop = windowWidth >= 1200;

  // sort logic is handled here, due to the other parameters that are needed for a search
  function sortChangeHandler(sortId) {
    navigate(`/results/${params.location}/1/${sortId}/${filters}`);
  }

  useEffect(() => {
    dispatch(filterActions.deleteAllFilters());
    dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
  }, [dispatch, isDesktop]);

  // page and count information is stored in state. whenever a response is received, compare it to the value in state. change if needed
  // prevents page and count numbers jumping all over the place when the page/filters are changed
  useEffect(() => {
    if (response && response.pagination.current_page !== currentPage) {
      setCurrentPage(response.pagination.current_page);
    }

    if (response && response.pagination.total_pages !== totalPages) {
      setTotalPages(response.pagination.total_pages);
    }

    if (response && response.pagination.total_count !== totalCount) {
      setTotalCount(response.pagination.total_count);
    }
  }, [response, currentPage, totalPages, totalCount]);

  // a very unflattering way of taking the filters from the url and setting them in redux and on the page
  // filters are cleared from state when the page is changed, too
  useEffect(() => {
    if (!filters) return;
    const filtersArray = filters.split('&');

    for (const i of filtersArray) {
      const filterPair = i.split('=');
      const filterName =
        filterPair[0].substring(0, 1).toUpperCase() +
        filterPair[0].substring(1, filterPair[0].length);
      const values = filterPair[1].split(',');

      if (filterName === 'Type' || filterName === 'Distance') {
        dispatch(filterActions.setFilter({ filter: filterName, key: 'value', value: values[0] }));
        continue;
      }

      for (const value of values) {
        dispatch(filterActions.setFilter({ filter: filterName, key: value, value: true }));
      }
    }

    return () => {
      dispatch(filterActions.deleteAllFilters());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(response);

  // rendering cards and popups here to (try to) keep the function return leaner
  const renderedCards =
    response &&
    response.animals.map((pet) => {
      let photo = noImageFound;
      if (pet.primary_photo_cropped !== null) {
        photo = pet.primary_photo_cropped.full;
      }

      return (
        <ResultsCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          image={photo}
          breed={pet.breeds.primary}
          distance={pet.distance ? pet.distance.toFixed(0) : ''}
          city={pet.contact.address.city}
          state={pet.contact.address.state}
        />
      );
    });

  const loadingPlaceholder = isLoading && (
    <img src={loading} alt="Loading..." className={classes.placeholders} />
  );

  const noResults = !isLoading && response && response.animals.length === 0 && (
    <p className={classes.placeholders}>
      We could not find any results. Please try changing the location, or modifying the filters, and
      try again.
    </p>
  );

  const errorReturned = error && !isLoading && (
    <p className={classes.placeholders}>
      An error has occurred. Please try changing the location. If the error still persists, please
      contact the website admins. Thank you
    </p>
  );

  const styles = `${classes.results} ${isDesktop ? classes.desktop : ''}`;
  return (
    <main className={styles}>
      <ResultsInformation count={totalCount} />

      <section className={classes.dropdowns}>
        <Filter isDesktop={isDesktop} />
        <ResultsSort
          isDesktop={isDesktop}
          sortOptions={sortOptions}
          sort={params.sort}
          setSort={sortChangeHandler}
        />
      </section>

      <section className={classes.cards}>
        {loadingPlaceholder}
        {renderedCards}
        {noResults}
        {errorReturned}
      </section>

      <ResultsPagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}

export default _ResultsPage;
