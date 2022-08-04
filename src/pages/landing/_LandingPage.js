import React from 'react';

import Hero from './hero/Hero';
import Animals from './animals/Animals';
import Adoption from './adoption/Adoption';
import Successes from './sucesses/Successes';
import Resources from './resources/Resources';

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Animals />
        <Adoption />
        <Successes />
        <Resources />
      </main>
    </>
  );
}

export default LandingPage;
