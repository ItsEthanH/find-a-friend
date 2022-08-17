import usePlacesAutoComplete from 'use-places-autocomplete';

import Card from '../cards-and-sections/Card';

import classes from './styles/LocationInput.module.css';

function LocationInput(props) {
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

    const mainText = selectedLocationData.structured_formatting.main_text;
    const secondaryText = selectedLocationData.structured_formatting.secondary_text;

    props.onSelect(mainText, secondaryText);

    clearSuggestions();
  }

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
        <ul>
          {suggestions.status === 'OK' &&
            suggestions.data.map((item, index) => (
              <>
                <li key={item.place_id}>
                  <button key={item.place_id} id={item.place_id} onClick={locationSelectHandler}>
                    {item.description}
                  </button>
                  {index === suggestions.data.length - 1 || <hr key={index} />}
                </li>
              </>
            ))}
        </ul>
      </Card>
    </div>
  );
}

export default LocationInput;
