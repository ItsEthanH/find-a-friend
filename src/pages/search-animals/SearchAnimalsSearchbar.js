import LocationInput from '../../components/ui/LocationInput';
import SearchAnimalsFilter from './SearchAnimalsFilter';

import classes from './styles/SearchAnimalsSearchbar.module.css';
import location from '../../assets/svgs/location-pin.svg';
import filter from '../../assets/svgs/filter.svg';

function SearchAnimalsSearchbar() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label="Search animals">
      <LocationInput
        name="Location"
        icon={location}
        placeholder="Enter a city, state or postal code"
      />
      <div className={classes.divider} />
      <SearchAnimalsFilter name="Filters" icon={filter} placeholder="Click to view filters..." />
    </form>
  );
}

export default SearchAnimalsSearchbar;
