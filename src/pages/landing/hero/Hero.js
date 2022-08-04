import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

import HeroBody from './HeroBody';
import HeroStats from './HeroStats';

import classes from './styles/Hero.module.css';

function Hero() {
  const { windowWidth } = useContext(AppContext);

  return (
    <section className={classes.hero}>
      <HeroBody />
      {windowWidth >= 1000 && <HeroStats />}
    </section>
  );
}

export default Hero;
