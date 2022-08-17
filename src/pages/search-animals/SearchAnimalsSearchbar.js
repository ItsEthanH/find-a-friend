import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import SearchAnimalsFilter from './SearchAnimalsFilter';
import formatLocationForURL from '../../util/formatLocationForURL';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';

function SearchAnimalsSearchbar() {
  const [location, setLocation] = useState([]);
  const navigate = useNavigate();

  function locationSelectionHandler(main, secondary) {
    setLocation([main, secondary]);
  }

  function submitHandler(event) {
    event.preventDefault();

    const urlLocation = formatLocationForURL(location[0], location[1]);
    navigate(`/results/animals/location=${urlLocation}`);
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
      <SearchAnimalsFilter
        name="Filters"
        icon={filterIcon}
        placeholder="Click to view filters..."
      />
      <AccentButton styles={classes.submit}>Search</AccentButton>
    </form>
  );
}

export default SearchAnimalsSearchbar;
