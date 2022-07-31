import React from 'react';
import HeroBody from './HeroBody';

import classes from './styles/Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <HeroBody />
    </section>
  );
}

export default Hero;
