import { useEffect, useRef } from 'react';
import usePlacesAutoComplete from 'use-places-autocomplete';

import Card from '../cards-and-sections/Card';

import classes from './styles/LocationInput.module.css';
import locationIcon from '../../assets/svgs/location-pin.svg';

function LocationInput(props) {
  const dropdownRef = useRef();
  const paramterOptions = {
    requestOptions: {
      types: ['(cities)'],
      componentRestrictions: {
        country: ['us', 'ca', 'mx'],
      },
    },
    debounce: 500,
  };

  const { ready, value, setValue, suggestions, clearSuggestions } =
    usePlacesAutoComplete(paramterOptions);

  function locationChangeHandler(event) {
    const input = event.target.value;
    if (!/^[\w,.-\s]*$/g.test(input)) return;

    setValue(input);
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

      props.setLocation([mainText, formattedSecondaryText]);
    } else {
      props.setLocation([mainText]);
    }

    clearSuggestions();
  }

  function handleClickOutside(event) {
    if (!dropdownRef.current.contains(event.target)) {
      clearSuggestions();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const renderedSuggestions = suggestions.data.map((item) => {
    const splitText = item.description.split(new RegExp('(' + value + ')', 'gi'));

    const description = splitText.map((part) =>
      part.toLowerCase() === value.toLowerCase() ? (
        <span className={classes.highlight}>{part}</span>
      ) : (
        part
      )
    );

    return (
      <li key={item.place_id}>
        <button
          type="button"
          key={item.place_id}
          id={item.place_id}
          onClick={locationSelectHandler}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.input} ref={dropdownRef}>
      <label htmlFor="Location">
        <img src={locationIcon} alt="Location" />
      </label>
      <input
        name="Location"
        id="Location"
        value={value}
        placeholder="Enter a city, state or postal code"
        aria-label="Enter a city, state or postal code"
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
