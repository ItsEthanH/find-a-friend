import React from 'react';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import LandingSection from '../../../components/ui/LandingSection';
import SuccessCard from './SuccessCard';

import classes from './styles/Successes.module.css';

function Successes() {
  return (
    <LandingSection>
      <LandingHeading alignment="center">Success Stories</LandingHeading>
      <LandingSubheading alignment="center">
        Read about a couple of our successful rehomings
      </LandingSubheading>
      <div className={classes.cards}>
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
      </div>
    </LandingSection>
  );
}

export default Successes;
