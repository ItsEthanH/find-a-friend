import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import Filter from '../../components/filter/Filter';
import SearchAnimalsFilter from './SearchAnimalsFilter';
import formatLocationForURL from '../../util/formatLocationForURL';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';

function SearchAnimalsSearchbar() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  function locationSelectionHandler(main, secondary) {
    setLocation(formatLocationForURL(main, secondary));
  }

  function submitHandler(event) {
    event.preventDefault();

    navigate(`/results/${location}`);
  }

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
      <AccentButton styles={classes.submit}>Search</AccentButton>
    </form>
  );
}

export default SearchAnimalsSearchbar;
