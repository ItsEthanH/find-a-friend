import React from 'react';

import DogBreedsHero from './DogBreedsHero';
import BreedSection from '../../components/cards-and-sections/BreedSection';

function _DogBreedsPage() {
  const heading = 'Browse by Dog Breed';

  return (
    <main>
      <DogBreedsHero />
      <BreedSection heading={heading} isDog />
    </main>
  );
}

export default _DogBreedsPage;
