import { useState } from 'react';

import LocationInput from '../../components/buttons-and-inputs/LocationInput';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';

import classes from './styles/SearchOrgsSearchbar.module.css';
import shelterIcon from '../../assets/svgs/home.svg';

function SearchOrgsSearchbar({ onSubmit }) {
  const [location, setLocation] = useState([]);
  const [shelterName, setShelterName] = useState('');

  function searchSubmitHandler(event) {
    event.preventDefault();
    onSubmit(location, shelterName);
  }

  function shelterChangeHandler(event) {
    setShelterName(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={searchSubmitHandler}>
      <LocationInput setLocation={setLocation} />
      <div className={classes.divider} />
      <div className={classes.shelter}>
        <img src={shelterIcon} alt="Shelter" />
        <input type="text" placeholder="Enter a shelter name" onChange={shelterChangeHandler} />
      </div>
      <AccentButton styles={classes.submit}>Search</AccentButton>
    </form>
  );
}

export default SearchOrgsSearchbar;
