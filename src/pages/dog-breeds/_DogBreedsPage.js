import React from 'react';

import DogBreedsHero from './DogBreedsHero';
import BrowseSection from '../../components/cards-and-sections/BrowseSection';

import placeholder from '../../assets/images/breeds/dog-hero.jpg';

function _DogBreedsPage() {
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
      <DogBreedsHero />
      <BrowseSection heading={heading} items={breeds} />
    </main>
  );
}

export default _DogBreedsPage;
