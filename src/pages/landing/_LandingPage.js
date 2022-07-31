import React from 'react';

import Header from '../../components/header/Header';
import Hero from './hero/Hero';
import Animals from './animals/Animals';
import Adoption from './adoption/Adoption';
import Successes from './sucesses/Successes';
import Resources from './resources/Resources';
import Footer from '../../components/footer/Footer';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Animals />
        <Adoption />
        <Successes />
        <Resources />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
