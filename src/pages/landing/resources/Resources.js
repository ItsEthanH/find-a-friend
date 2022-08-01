import React from 'react';

import LandingHeading from '../../../components/ui/LandingHeading';
import LandingSubheading from '../../../components/ui/LandingSubheading';
import LandingSection from '../../../components/ui/LandingSection';
import Resource from './Resource';

import classes from './styles/Resources.module.css';
import petfinder from '../../../assets/images/petfinder.png';

function Resources() {
  return (
    <LandingSection>
      <LandingHeading>Resources for New Owners</LandingHeading>
      <div className={classes.subheading}>
        <LandingSubheading>Courtesy of </LandingSubheading>
        <img src={petfinder} alt="Petfinder" />
      </div>
      <div className={classes.wrapper}>
        <Resource
          title="About Adoption"
          body="Curious about anything to do with pet adoption? Maybe need a hand introducing your new friend?"
          link="/"
          linkText="Click here!"
          left
        />
        <Resource
          title="Pet Care"
          body="There’s more to keeping a pet than love and attention, though that’s important too!"
          link="/"
          linkText="Find out more!"
          right
        />
        <Resource
          title="Helping Pets"
          body="Took your own pet in, but still want to do more? From volunteering to fostering, there’s plenty more!"
          link="/"
          linkText="How you can help!"
          left
        />
      </div>
    </LandingSection>
  );
}

export default Resources;