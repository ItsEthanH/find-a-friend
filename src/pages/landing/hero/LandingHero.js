import React from 'react';

import AccentButton from '../../../components/ui/AccentButton';

import classes from './styles/LandingHero.module.css';

function HeroBody() {
  return (
    <div className={classes.body}>
      <h2>
        Your new <span className="color-accent">best friend</span> is waiting!
      </h2>

      <p>Find the perfect pet to adopt with over 20,000 dogs, cats, rabbits and more!</p>
      <AccentButton inheritedClasses={classes.search}>Search Now!</AccentButton>
    </div>
  );
}

export default HeroBody;
