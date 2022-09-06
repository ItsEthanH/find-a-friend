import React from 'react';

import CatBreedsHero from './CatBreedsHero';
import BreedSection from '../../components/cards-and-sections/BreedSection';

function _CatBreedsPage() {
  const heading = 'Browse by Cat Breed';

  return (
    <main>
      <CatBreedsHero />
      <BreedSection heading={heading} />
    </main>
  );
}

export default _CatBreedsPage;
