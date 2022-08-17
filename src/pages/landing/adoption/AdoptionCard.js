import React from 'react';

import Card from '../../../components/cards-and-sections/Card';
import AdoptionInfo from './AdoptionInfo';
import AccentButton from '../../../components/buttons-and-inputs/AccentButton';

import classes from './styles/AdoptionCard.module.css';
import age from '../../../assets/svgs/cake.svg';
import pin from '../../../assets/svgs/location-pin.svg';

function AdoptionCard() {
  // mobile image size - 300px
  return (
    <Card styles={classes.card}>
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
          <AdoptionInfo icon={pin} alt="Location" label="Los Angeles, CA" />
        </div>
      </div>
      <AccentButton styles={classes.view}>View Profile</AccentButton>
    </Card>
  );
}

export default AdoptionCard;
