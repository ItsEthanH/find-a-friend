import React from 'react';

import LandingHero from './hero/LandingHero';

import Animals from './animals/Animals';
import Adoption from './adoption/Adoption';
import Successes from './sucesses/Successes';
import Resources from './resources/Resources';

function LandingPage() {
  return (
    <>
      <main id="landing-top">
        <LandingHero />
        <Animals />
        <Adoption />
        <Successes />
        <Resources />
      </main>
    </>
  );
}

export default LandingPage;
