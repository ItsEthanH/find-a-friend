import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import Hero from '../../components/ui/Hero';
import LandingHero from './hero/LandingHero';
import HeroStats from '../../pages/landing/hero/HeroStats';

import Animals from './animals/Animals';
import Adoption from './adoption/Adoption';
import Successes from './sucesses/Successes';
import Resources from './resources/Resources';

function LandingPage() {
  const { windowWidth } = useContext(AppContext);

  return (
    <>
      <main>
        <Hero page="LANDING">
          <LandingHero />
          {windowWidth >= 1000 && <HeroStats />}
        </Hero>
        <Animals />
        <Adoption />
        <Successes />
        <Resources />
      </main>
    </>
  );
}

export default LandingPage;
