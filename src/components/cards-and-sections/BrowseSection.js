import React from 'react';

import Heading from '../../components/text/Heading';
import BrowseCard from '../../components/cards-and-sections/BrowseCard';

import classes from './styles/BrowseSection.module.css';

function BrowseSection(props) {
  function cardClickHandler(id) {
    props.onClick(id);
  }

  const renderedCards = props.items.map((item) => (
    <BrowseCard
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      onClick={cardClickHandler}
    />
  ));

  return (
    <section className={classes.section}>
      <Heading>{props.heading}</Heading>
      <div className={classes.cards}>{renderedCards}</div>
    </section>
  );
}

export default BrowseSection;
