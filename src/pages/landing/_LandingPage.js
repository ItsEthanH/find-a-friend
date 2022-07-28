import React from 'react';

import Header from '../../components/header/Header';
import Animals from './animals/Animals';
import Hero from './hero/Hero';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Animals />
      </main>
    </>
  );
}

export default LandingPage;
