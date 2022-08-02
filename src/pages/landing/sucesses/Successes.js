import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import LandingSection from '../../../components/ui/LandingSection';
import SuccessCard from './SuccessCard';

import classes from './styles/Successes.module.css';
import pawprintsUp from '../../../assets/images/pawprints-up.png';
import pawprintsDown from '../../../assets/images/pawprints-down.png';

function Successes() {
  const { windowWidth } = useContext(AppContext);

  return (
    <LandingSection>
      <div className={classes.headings}>
        <LandingHeading alignment="center">Success Stories</LandingHeading>
        <LandingSubheading alignment="center">
          Read about a couple of our successful rehomings
        </LandingSubheading>
      </div>
      <div className={classes.story}>
        <SuccessCard
          name="Jet"
          breed="Whippet"
          description="Having previously lived life as a breeding and bait dog, Jet narrowly avoided being put down by her previous owners. When the vets took her in to the shelters, it wasn’t long before a new family took to her. After making the long trip from Wales to Hampshire, Jet now lives with her fur-brother Finn, spending her days playing and sleeping. Just like she should."
        />
        {windowWidth >= 1500 && <img className={classes.pawprints} src={pawprintsDown} alt="" />}
      </div>
      <div className={classes.story}>
        {windowWidth >= 1500 && <img className={classes.pawprints} src={pawprintsUp} alt="" />}
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
