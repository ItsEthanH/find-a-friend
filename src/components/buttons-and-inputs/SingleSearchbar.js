import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import Card from '../cards-and-sections/Card';

import classes from './styles/SingleSearchbar.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';

function SingleSearchbar({ placeholder, name, icon, onSubmit }) {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

  const animalType = name === 'Dog Breeds' ? 'dog' : 'cat';
  const { response, isLoading, error } = useFetch(`/types/${animalType}/breeds`);
  const breeds = response && response.breeds;

  function submitHandler() {
    onSubmit();
  }

  function inputChangeHandler(event) {
    const input = event.target.value.toLowerCase();
    if (input.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    setSuggestions(breeds.filter((breed) => breed.name.toLowerCase().includes(input)));
  }

  function breedSelectHandler(event) {
    const formattedBreed = event.target.id.toLowerCase().replaceAll(' ', '-');
    navigate(`/results/global/1/recent/type=${animalType}&breed=${formattedBreed}`);
  }

  const renderedSuggestions =
    suggestions.length > 0 &&
    suggestions.map((item, index) => {
      if (index > 5) return <></>;
      return (
        <li key={item.name}>
          <button id={item.name} onClick={breedSelectHandler}>
            {item.name}
          </button>
        </li>
      );
    });

  const searchbarComponent = response && (
    <>
      <form className={classes.form} aria-label={placeholder} onSubmit={submitHandler}>
        <label htmlFor={name}>
          <img src={icon} alt="Search" />
        </label>
        <input
          placeholder={placeholder}
          id={name}
          name={name}
          type="text"
          aria-label={name}
          onChange={inputChangeHandler}
        />
      </form>
      <Card styles={classes.suggestions}>
        <ul>{renderedSuggestions}</ul>
      </Card>
    </>
  );

  const loadingComponent = isLoading && (
    <div>
      <img src={loadingSpinner} alt="Loading" />
    </div>
  );

  const errorComponent = error && (
    <div>
      <p>There has been an error. Please try again later</p>
    </div>
  );

  return (
    <>
      {searchbarComponent}
      {loadingComponent}
      {errorComponent}
    </>
  );
}

export default SingleSearchbar;
