import React from 'react';
import { useNavigate } from 'react-router-dom';

import LandingSection from '../../../components/cards-and-sections/LandingSection';
import Heading from '../../../components/text/Heading';
import Subheading from '../../../components/text/Subheading';
import AnimalIcon from './AnimalIcon';

import classes from './styles/Animals.module.css';
import dog from '../../../assets/images/landing/dog-circle.png';
import cat from '../../../assets/images/landing/cat-circle.png';
import rabbit from '../../../assets/images/landing/rabbit-circle.png';
import horse from '../../../assets/images/landing/horse-circle.png';

function Animals() {
  const navigate = useNavigate();

  function iconClickHandler(event) {
    navigate(`/results/global/1/recent/type=${event.target.id}`);
  }

  return (
    <LandingSection id="animals" styles={classes.animals}>
      <div className={classes.headings}>
        <Heading alignment="center">
          From <span className="color-accent">Canines</span> to
          <span className="color-accent"> Felines</span>...
        </Heading>
        <Subheading alignment="center">...and everything in between!</Subheading>
      </div>
      <div className={classes.icons}>
        <AnimalIcon id="dog" image={dog} animal="Dog" onClick={iconClickHandler} />
        <AnimalIcon id="cat" image={cat} animal="Cat" onClick={iconClickHandler} />
        <AnimalIcon id="rabbit" image={rabbit} animal="Rabbit" onClick={iconClickHandler} />
        <AnimalIcon id="horse" image={horse} animal="Horse" onClick={iconClickHandler} />
      </div>
    </LandingSection>
  );
}

export default Animals;
