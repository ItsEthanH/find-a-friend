import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { filterActions, FILTER_PAGES } from '../../store/filter';
import { uiActions } from '../../store/ui';

import Breadcrumbs from '../../components/text/Breadcrumbs';
import ResultsCard from './ResultsCard';
import ResultsSort from './ResultsSort';
import Filter from '../../components/filter/Filter';

import classes from './styles/ResultsPage.module.css';
import DUMMY_DATA from './__DUMMY_DATA__';
import noImageFound from '../../assets/images/results/no-image-found.png';

function _ResultsPage() {
  const params = useParams();
  const path = useLocation();

  // the next 6 lines turn the location from the {city-state} url format to the {city, state} api format
  let apiLocation = params.location;
  if (isNaN(params.location)) {
    const loc = params.location.replaceAll('-', ' ');
    const index = loc.lastIndexOf(' ');
    apiLocation = loc.substring(0, index) + ', ' + loc.substring(index + 1);
  }

  let filters = params.filters ? `&${params.filters.replaceAll('-', ' ')}` : '';

  const requestEndpoint = `location=${apiLocation}${filters}`;
  // const { response, isLoading, error } = useFetch(`animals?${requestEndpoint}`);

  // allows the responsive rendering of the filters in the results page only.
  // controls the 'desktop' prop on the filter, which internally handles the styling through the addition of '.desktop' classes
  const dispatch = useDispatch();
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  const isDesktop = windowWidth >= 1200;

  useEffect(() => {
    dispatch(filterActions.deleteAllFilters());
    dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
  }, [dispatch, isDesktop]);

  // a very unflattering way of taking the filters from the url and setting them in redux and on the page
  useEffect(() => {
    const filtersArray = filters.split('&');
    filtersArray.shift();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: path.pathname, text: 'Results' },
  ];

  const renderedCards =
    DUMMY_DATA &&
    DUMMY_DATA.animals.map((pet) => {
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
          distance={pet.distance.toFixed(0)}
          city={pet.contact.address.city}
          state={pet.contact.address.state}
        />
      );
    });

  const styles = `${classes.results} ${isDesktop ? classes.desktop : ''}`;
  return (
    <main className={styles}>
      {DUMMY_DATA && (
        <>
          <section className={classes.information}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <p className={classes.count}>
              We've found <span className="color-accent">{DUMMY_DATA.pagination.total_count}</span>{' '}
              results
            </p>
          </section>

          <section className={classes.dropdowns}>
            <Filter isDesktop={isDesktop} />
            <ResultsSort isDesktop={isDesktop} />
          </section>
          <section className={classes.cards}>{renderedCards}</section>
        </>
      )}
    </main>
  );
}

export default _ResultsPage;
