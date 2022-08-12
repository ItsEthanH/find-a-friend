import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationInput from '../../components/ui/LocationInput';
import SearchAnimalsFilter from './SearchAnimalsFilter';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import AccentButton from '../../components/ui/AccentButton';

function SearchAnimalsSearchbar() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  function locationChangeHandler(loc) {
    setLocation(loc);
  }
  console.log(location);

  function submitHandler(event) {
    console.log(event);
    event.preventDefault();

    const urlLocation = location.replace(', ', '-').toLowerCase();
    navigate(`/results/animals/location=${urlLocation}`);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label="Search animals">
      <LocationInput
        name="Location"
        icon={locationIcon}
        placeholder="Enter a city, state or postal code"
        onChange={locationChangeHandler}
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
