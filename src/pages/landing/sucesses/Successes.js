import React from 'react';

import LandingSection from '../../../components/ui/LandingSection';

import classes from './styles/Successes.module.css';
import SuccessCard from './SuccessCard';

function Successes() {
  return (
    <LandingSection styles={classes.successes}>
      <h3 className={classes.heading}>Success Stories</h3>
      <p className={classes.subheading}>Read about some of our successful rehoming</p>
      <SuccessCard
        name="Jet"
        breed="Whippet"
        description="Having previously lived life as a breeding and bait dog, Jet narrowly avoided being put down by her previous owners. When the vets took her in to the shelters, it wasn’t long before a new family took to her. After making the long trip from Wales to Hampshire, Jet now lives with her fur-brother Finn, spending her days playing and sleeping. Just like she should."
      />
      <SuccessCard
        name="Jet"
        breed="Whippet"
        description="Having previously lived life as a breeding and bait dog, Jet narrowly avoided being put down by her previous owners. When the vets took her in to the shelters, it wasn’t long before a new family took to her. After making the long trip from Wales to Hampshire, Jet now lives with her fur-brother Finn, spending her days playing and sleeping. Just like she should."
      />
    </LandingSection>
  );
}

export default Successes;
