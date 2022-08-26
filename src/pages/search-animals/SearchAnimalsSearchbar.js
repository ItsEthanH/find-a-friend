import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import Filter from '../../components/filter/Filter';
import formatLocationForURL from '../../util/formatLocationForURL';
import { useDispatch, useSelector } from 'react-redux';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';
import { filterActions, FILTER_PAGES } from '../../store/filter';
import { useEffect } from 'react';

function SearchAnimalsSearchbar() {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const filterUrl = useSelector((state) => state.filter.filterUrl);
  const areFiltersApplied = useSelector(
    (state) => state.filter.activeFilters[FILTER_PAGES.TYPE].value
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function locationSelectionHandler(main, secondary) {
    setLocation(formatLocationForURL(main, secondary));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!location.trim()) {
      setError('Please enter a location!');
      return;
    }

    if (areFiltersApplied) dispatch(filterActions.applyFilters());
    else navigate(`/results/${location}`);
  }

  useEffect(() => {
    if (!filterUrl || !location) return;

    navigate(`/results/${location}/${filterUrl}`);
  }, [filterUrl]);

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label="Search animals">
      <LocationInput
        name="Location"
        icon={locationIcon}
        placeholder="Enter a city, state or postal code"
        onSelect={locationSelectionHandler}
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
