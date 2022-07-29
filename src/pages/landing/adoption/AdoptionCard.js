import React from 'react';

import AdoptionInfo from './AdoptionInfo';
import AccentButton from '../../../components/ui/AccentButton';

import classes from './styles/AdoptionCard.module.css';
import age from '../../../assets/svgs/age.svg';
import location from '../../../assets/svgs/location.svg';

function AdoptionCard() {
  // mobile image size - 300px
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img
          src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56499165/1/?bust=1659106172&width=300"
          alt="placeholder text"
        />
      </div>
      <div className={classes.text}>
        <h4>Alexander</h4>
        <p>American Wirehair</p>
        <div className={classes.info}>
          <AdoptionInfo icon={age} alt="Age" label="Adult" />
          <AdoptionInfo icon={location} alt="Location" label="Los Angeles, CA" />
        </div>
      </div>
      <AccentButton styles={classes.view}>View Profile</AccentButton>
    </div>
  );
}

export default AdoptionCard;
