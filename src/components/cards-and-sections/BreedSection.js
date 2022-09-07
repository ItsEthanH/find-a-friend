import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Heading from '../text/Heading';
import BrowseCard from './BrowseCard';

import classes from './styles/BrowseSection.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';
import noImage from '../../assets/images/pet-view/no-images-found.png';
import Pagination from '../buttons-and-inputs/Pagination';

function BreedSection(props) {
  const isDog = props.isDog;
  const totalPages = props.isDog ? 8 : 3;

  const { page } = useParams();
  const navigate = useNavigate();

  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dogImageKey = process.env.REACT_APP_DOG_BREEDS_KEY;
  const catImageKey = process.env.REACT_APP_CAT_BREEDS_KEY;

  function changePageHandler(newPage) {
    navigate(`/${isDog ? 'dog' : 'cat'}-breeds/${newPage}`);
  }

  function cardClickHandler(id) {
    const formattedBreed = id.toLowerCase().replaceAll(' ', '-');
    navigate(`/results/global/1/recent/type=${isDog ? 'dog' : 'cat'}&breed=${formattedBreed}`);
  }

  // the dog breeds page uses a different API to the rest of the app. since that API is only used here, all fetching logic is kept
  // in this file, and hence the useFetch hook is not used
  useEffect(() => {
    async function getDogImages() {
      setBreeds([]);
      setIsLoading(true);

      const response = await fetch(
        `https://api.the${isDog ? 'dog' : 'cat'}api.com/v1/breeds?limit=20&page=${page}`,
        {
          headers: {
            'x-api-key': isDog ? dogImageKey : catImageKey,
          },
        }
      );

      if (!response.ok) {
        setError(true);
        setIsLoading(false);
        return null;
      }

      const data = await response.json();

      let formattedBreedArray = [];
      for (const breed of data) {
        formattedBreedArray.push({
          id: breed.name.toLowerCase(),
          name: breed.name,
          image: breed.image ? breed.image.url : noImage,
        });
      }

      setBreeds(formattedBreedArray);
      setIsLoading(false);
    }
    getDogImages();
  }, [catImageKey, dogImageKey, isDog, page]);

  const loadingElement = (
    <div className={classes.info}>
      <img src={loadingSpinner} alt="Loading" />
    </div>
  );

  const errorElement = (
    <div className={classes.info}>
      <p>
        There was an error fetching ${isDog ? 'dog' : 'cat'} breeds. Try using the 'Search Animals'
        page instead!
      </p>
    </div>
  );

  const renderedCards = breeds.map((item) => (
    <BrowseCard
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      onClick={cardClickHandler}
    />
  ));

  return (
    <section id={props.id} className={classes.section}>
      <Heading>{props.heading}</Heading>
      <div className={classes.cards}>
        {renderedCards}
        {isLoading && loadingElement}
        {error && errorElement}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={changePageHandler} />
    </section>
  );
}

export default BreedSection;
