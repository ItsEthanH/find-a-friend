import LocationInput from '../../components/buttons-and-inputs/LocationInput';

import classes from './styles/SearchOrgsSearchbar.module.css';
import shelterIcon from '../../assets/svgs/home.svg';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';

function SearchOrgsSearchbar(props) {
  return (
    <form className={classes.form}>
      <LocationInput name="Location" />
      <div className={classes.divider} />
      <div className={classes.shelter}>
        <img src={shelterIcon} alt="Shelter" />
        <input type="text" placeholder="Enter a shelter name" />
      </div>
      <AccentButton styles={classes.submit}>Search</AccentButton>
    </form>
  );
}

export default SearchOrgsSearchbar;
