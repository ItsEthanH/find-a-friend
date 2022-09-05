import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DogBreedsHero from './DogBreedsHero';
import BrowseSection from '../../components/cards-and-sections/BrowseSection';

import classes from './styles/DogBreedsPage.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';

function _DogBreedsPage() {
  const heading = 'Browse by type';

  const { page } = useParams();
  const navigate = useNavigate();

  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dogImageKey = process.env.REACT_APP_DOG_BREEDS_KEY;

  function changePageHandler(event) {
    if (event.target.id === 'PREV' && +page > 1) {
      navigate(`/dog-breeds/${+page - 1}`);
    }

    if (event.target.id === 'NEXT' && +page < 8) {
      navigate(`/dog-breeds/${+page + 1}`);
    }
  }

  function cardClickHandler(id) {
    const formattedBreed = id.toLowerCase().replaceAll(' ', '-');
    navigate(`/results/global/1/recent/type=dog&breed=${formattedBreed}`);
  }

  // the dog breeds page uses a different API to the rest of the app. since that API is only used here, all fetching logic is kept
  // in this file, and hence the useFetch hook is not used
  useEffect(() => {
    async function getDogImages() {
      setBreeds([]);
      setIsLoading(true);

      const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=20&page=${page}`, {
        headers: {
          'x-api-key': dogImageKey,
        },
      });

      if (!response.ok) {
        setError(true);
        setIsLoading(false);
        return null;
      }

      const data = await response.json();

      console.log(data);
      let formattedBreedArray = [];
      for (const breed of data) {
        formattedBreedArray.push({
          id: breed.name.toLowerCase(),
          name: breed.name,
          image: breed.image.url,
        });
      }

      setBreeds(formattedBreedArray);
      setIsLoading(false);
    }
    getDogImages();
  }, [dogImageKey, page]);

  const loadingElement = (
    <div className={classes.info}>
      <img src={loadingSpinner} alt="Loading" />
    </div>
  );

  const errorElement = (
    <div className={classes.info}>
      <p>There was an error fetching dog breeds. Try using the 'Search Animals' page instead!</p>
    </div>
  );

  return (
    <main>
      <DogBreedsHero />
      {breeds && <BrowseSection heading={heading} items={breeds} onClick={cardClickHandler} />}
      {isLoading && loadingElement}
      {error && errorElement}
      <div className={classes.pagination}>
        <button id="PREV" onClick={changePageHandler}>
          Prev
        </button>
        <p>Page {page} of 8</p>
        <button id="NEXT" onClick={changePageHandler}>
          Next
        </button>
      </div>
    </main>
  );
}

export default _DogBreedsPage;
