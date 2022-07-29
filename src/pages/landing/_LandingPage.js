import React from 'react';

import Header from '../../components/header/Header';
import Hero from './hero/Hero';
import Animals from './animals/Animals';
import Adoption from './adoption/Adoption';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Animals />
        <Adoption />
      </main>
    </>
  );
}

export default LandingPage;
