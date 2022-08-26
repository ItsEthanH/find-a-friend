import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import Filter from '../../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';
import { filterActions, FILTER_PAGES } from '../../store/filter';

function SearchAnimalsSearchbar() {
  const [error, setError] = useState('');

  const filterUrl = useSelector((state) => state.filter.filterUrl);
  const location = useSelector((state) => state.filter.location);
  const areFiltersApplied = useSelector(
    (state) => state.filter.activeFilters[FILTER_PAGES.TYPE].value
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    if (location.length === 0) {
      setError('Please enter a location!');
      return;
    }

    if (areFiltersApplied) dispatch(filterActions.applyFilters());
    else navigate(`/results/${location.join('-')}`);
  }

  useEffect(() => {
    if (!filterUrl || !location) return;

    navigate(`/results/${location.join('-')}/${filterUrl}`);

    // after searching, clear the filter and location state to prevent the useEffect call running again on component mount
    return () => {
      dispatch(filterActions.clearAfterSearch());
    };

    // we don't want to include "location" in the dependencies, else the user will be redirected whenever they choose a location
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterUrl]);

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label="Search animals">
      <LocationInput
        name="Location"
        icon={locationIcon}
        placeholder="Enter a city, state or postal code"
      />
      <div className={classes.divider} />
      <div className={classes.filter}>
        <img src={filterIcon} alt="Filters" />
        <Filter isDesktop={false} searchbar />
      </div>
      {error && <p className={classes.error}>{error}</p>}
      <AccentButton styles={classes.submit}>Search</AccentButton>
    </form>
  );
}

export default SearchAnimalsSearchbar;
