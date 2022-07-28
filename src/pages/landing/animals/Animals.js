import React from 'react';
import AnimalIcon from './AnimalIcon';

import classes from './styles/Animals.module.css';
import dog from '../../../assets/images/dog-circle.png';
import cat from '../../../assets/images/cat-circle.png';
import bunny from '../../../assets/images/bunny-circle.png';
import horse from '../../../assets/images/horse-circle.png';

function Animals() {
  return (
    <section className={classes.animals}>
      <h3>
        From <span className="color-accent">Canines</span> to{' '}
        <span className="color-accent">Felines</span>...
      </h3>
      <p>...and everything in between!</p>
      <div className={classes.icons}>
        <AnimalIcon image={dog} animal="Dog" />
        <AnimalIcon image={cat} animal="Cat" />
        <AnimalIcon image={bunny} animal="Bunny" />
        <AnimalIcon image={horse} animal="Horse" />
      </div>
    </section>
  );
}

export default Animals;
