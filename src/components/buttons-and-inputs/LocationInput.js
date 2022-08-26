import usePlacesAutoComplete from 'use-places-autocomplete';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../store/filter';

import Card from '../cards-and-sections/Card';

import classes from './styles/LocationInput.module.css';

function LocationInput(props) {
  const dispatch = useDispatch();
  const paramterOptions = {
    requestOptions: {
      types: ['(regions)'],
      componentRestrictions: {
        country: ['us', 'ca', 'mx'],
      },
    },
    debounce: 500,
  };

  const { ready, value, setValue, suggestions, clearSuggestions } =
    usePlacesAutoComplete(paramterOptions);

  function locationChangeHandler(event) {
    setValue(event.target.value);
  }

  function locationSelectHandler(event) {
    setValue(event.target.textContent, false);

    const selectedLocationData = suggestions.data.find((item) => item.place_id === event.target.id);

    const mainText = selectedLocationData.structured_formatting.main_text
      .toLowerCase()
      .replace(' ', '-');

    // stores the location in a format suitable for the API - either {city, state} or {postcode}
    if (isNaN(+mainText)) {
      const secondaryText = selectedLocationData.structured_formatting.secondary_text;
      const formattedSecondaryText = secondaryText
        .substring(0, secondaryText.lastIndexOf(','))
        .toLowerCase();

      dispatch(filterActions.setLocation({ location: [mainText, formattedSecondaryText] }));
    } else {
      dispatch(filterActions.setLocation({ location: [mainText] }));
    }

    clearSuggestions();
  }

  const renderedSuggestions = suggestions.data.map((item, index) => (
    <li key={item.place_id}>
      <button type="button" key={item.place_id} id={item.place_id} onClick={locationSelectHandler}>
        {item.description}
      </button>
      {index === suggestions.data.length - 1 || <hr key={index} />}
    </li>
  ));

  return (
    <div className={classes.input}>
      <label htmlFor={props.name}>
        <img src={props.icon} alt={props.name} />
      </label>
      <input
        name={props.name}
        id={props.name}
        value={value}
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        onChange={locationChangeHandler}
        disabled={!ready}
      />

      <Card styles={classes.suggestions}>
        <ul>{suggestions.status === 'OK' && renderedSuggestions}</ul>
      </Card>
    </div>
  );
}

export default LocationInput;
