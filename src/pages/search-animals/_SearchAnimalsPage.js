import React from 'react';

import SearchAllHero from './SearchAnimalsHero';
import BrowseSection from '../../components/cards-and-sections/BrowseSection';

import dog from '../../assets/images/animals/browse-dog.jpg';
import cat from '../../assets/images/animals/browse-cat.jpg';

function _SearchAllPage() {
  const heading = 'Browse by type';
  const animals = [
    { name: 'Dogs', image: dog, available: '31,212' },
    { name: 'Cats', image: cat, available: '31,212' },
    { name: 'Dogs', image: dog, available: '31,212' },
    { name: 'Cats', image: cat, available: '31,212' },
    { name: 'Dogs', image: dog, available: '31,212' },
    { name: 'Cats', image: cat, available: '31,212' },
  ];

  return (
    <main>
      <SearchAllHero />
      <BrowseSection heading={heading} items={animals} />
    </main>
  );
}

export default _SearchAllPage;
