import React from 'react';

import CatBreedsHero from './CatBreedsHero';
import BreedSection from '../../components/cards-and-sections/BreedSection';

function _CatBreedsPage() {
  const heading = 'Browse by Cat Breed';

  return (
    <main id="cat-top">
      <CatBreedsHero />
      <BreedSection id="cat-browse" heading={heading} />
    </main>
  );
}

export default _CatBreedsPage;
