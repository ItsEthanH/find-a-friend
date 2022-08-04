import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import LandingSection from '../../../components/ui/LandingSection';
import SuccessCard from './SuccessCard';

import classes from './styles/Successes.module.css';
import pawprintsUp from '../../../assets/images/pawprints-up.png';
import pawprintsDown from '../../../assets/images/pawprints-down.png';
import Jet from '../../../assets/images/jet-success.jpg';
import Finn from '../../../assets/images/finn-success.jpg';

function Successes() {
  const { windowWidth } = useContext(AppContext);

  return (
    <LandingSection styles={classes.successes}>
      <div className={classes.headings}>
        <LandingHeading alignment="center">Success Stories</LandingHeading>
        <LandingSubheading alignment="center">
          Read about a couple of our successful rehomings
        </LandingSubheading>
      </div>
      <div className={`${classes.story} ${classes.one}`}>
        <SuccessCard
          name="Jet"
          breed="Whippet"
          description="Having previously lived life as a breeding and bait dog, Jet narrowly avoided being put down by her previous owners. When the vets took her in to the shelters, it wasn’t long before a new family took to her. After making the long trip from Wales to Hampshire, Jet now lives with her fur-brother Finn, spending her days playing and sleeping. Just like she should."
          img={Jet}
        />
        {windowWidth >= 1500 && <img className={classes.pawprints} src={pawprintsDown} alt="" />}
      </div>
      <div className={`${classes.story} ${classes.two}`}>
        {windowWidth >= 1500 && <img className={classes.pawprints} src={pawprintsUp} alt="" />}
        <SuccessCard
          name="Finn"
          breed="Greyhound"
          description="With his previous owners having to give him up to look after their new child, Finn had to leave what he thought would be his fur-ever home at the age of 1. Thanks to Find-a-Friend, it was soon before he was united with another family. Surrounded by much older kids, Finn now enjoys his days going on long walks and sleeping with his legs in the air. "
          img={Finn}
        />
      </div>
    </LandingSection>
  );
}

export default Successes;
