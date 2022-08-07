import React from 'react';

import Heading from '../../components/ui/Heading';
import BrowseCard from '../../components/ui/BrowseCard';

import classes from './styles/BrowseSection.module.css';

function BrowseSection(props) {
  const renderedCards = props.items.map((item) => (
    <BrowseCard name={item.name} image={item.image} available={item.available} />
  ));

  return (
    <section className={classes.section}>
      <Heading>{props.heading}</Heading>
      <div className={classes.cards}>{renderedCards}</div>
    </section>
  );
}

export default BrowseSection;
