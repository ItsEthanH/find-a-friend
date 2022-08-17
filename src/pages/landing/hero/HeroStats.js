import React from 'react';

import Card from '../../../components/cards-and-sections/Card';
import HeroStatistic from './HeroStatistic';

import classes from './styles/HeroStats.module.css';
import paw from '../../../assets/svgs/paw.svg';
import shelter from '../../../assets/svgs/home.svg';
import animals from '../../../assets/svgs/animals.svg';
import temp from '../../../assets/svgs/temp.svg';

function HeroStats() {
  return (
    <Card styles={classes.stats}>
      <HeroStatistic stat="100,000+" text="Animals" icon={paw} />
      <HeroStatistic stat="10,000+" text="Shelters" icon={shelter} />
      <HeroStatistic stat="50" text="Breeds" icon={animals} />
      <HeroStatistic stat="10" text="Varieties" icon={temp} />
    </Card>
  );
}

export default HeroStats;
