import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchAnimalsHero from './SearchAnimalsHero';
import BrowseSection from '../../components/cards-and-sections/BrowseSection';
import animalTypeData from '../../data/animalTypeData';

function _SearchAllPage() {
  const navigate = useNavigate();

  const heading = 'Browse by type';

  const animals = Object.keys(animalTypeData).map((animal) => ({
    name: animalTypeData[animal].name,
    image: animalTypeData[animal].image,
    id: animal,
  }));

  function cardClickHandler(id) {
    navigate(`/results/global/1/recent/type=${id}`);
  }

  return (
    <main>
      <SearchAnimalsHero />
      <BrowseSection heading={heading} items={animals} onClick={cardClickHandler} />
    </main>
  );
}

export default _SearchAllPage;
