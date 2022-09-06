import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import Filter from '../../components/filter/Filter';
import { useSelector } from 'react-redux';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';
import { FILTER_PAGES } from '../../store/filter';
import useFilterUrl from '../../hooks/useFilterUrl';

function SearchAnimalsSearchbar() {
  const navigate = useNavigate();
  const createUrl = useFilterUrl();

  const [error, setError] = useState('');
  const [location, setLocation] = useState([]);

  const areFiltersApplied = useSelector(
    (state) => state.filter.activeFilters[FILTER_PAGES.TYPE].value
  );

  function submitHandler(event) {
    event.preventDefault();

    if (location.length === 0) {
      setError('Please select a location from the dropdown!');
      return;
    }

    if (areFiltersApplied) {
      const filterFragment = createUrl();
      navigate(`/results/${location.join('-')}/1/recent/${filterFragment}`);
    } else {
      navigate(`/results/${location.join('-')}/1/recent`);
    }
    setLocation([]);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label="Search animals">
      <LocationInput setLocation={setLocation} />
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
