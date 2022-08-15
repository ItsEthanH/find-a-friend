import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Hero from '../../../components/ui/Hero';
import HeroStats from '../../../pages/landing/hero/HeroStats';
import AccentButton from '../../../components/ui/AccentButton';

import classes from './styles/LandingHero.module.css';

function LandingHero() {
  const navigate = useNavigate();
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  function buttonClickHandler() {
    navigate('/search');
  }

  return (
    <Hero page="LANDING">
      <div className={`${classes.body}`}>
        <h2>
          Your new <span className="color-accent">best friend</span> is waiting!
        </h2>
        <p>Find the perfect pet to adopt with over 20,000 dogs, cats, rabbits and more!</p>
        <AccentButton onClick={buttonClickHandler}>Search Now!</AccentButton>
      </div>
      {windowWidth >= 1000 && <HeroStats />}
    </Hero>
  );
}

export default LandingHero;
