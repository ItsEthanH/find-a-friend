import React from 'react';

import CatBreedsHero from './CatBreedsHero';
import BrowseSection from '../../components/cards-and-sections/BrowseSection';

import placeholder from '../../assets/images/breeds/cat-hero.jpg';

function _CatBreedsPage() {
  const heading = 'Browse by type';
  const breeds = [
    { name: 'Test', image: placeholder, available: '31,212' },
    { name: 'Test', image: placeholder, available: '31,212' },
    { name: 'Test', image: placeholder, available: '31,212' },
    { name: 'Test', image: placeholder, available: '31,212' },
    { name: 'Test', image: placeholder, available: '31,212' },
    { name: 'Test', image: placeholder, available: '31,212' },
  ];

  return (
    <main>
      <CatBreedsHero />
      <BrowseSection heading={heading} items={breeds} />
    </main>
  );
}

export default _CatBreedsPage;
