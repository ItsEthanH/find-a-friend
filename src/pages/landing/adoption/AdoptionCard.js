import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../../components/cards-and-sections/Card';
import AdoptionInfo from './AdoptionInfo';
import AccentButton from '../../../components/buttons-and-inputs/AccentButton';

import classes from './styles/AdoptionCard.module.css';
import age from '../../../assets/svgs/cake.svg';
import pin from '../../../assets/svgs/location-pin.svg';

function AdoptionCard({ pet }) {
  const location = `${pet.contact.address.city}, ${pet.contact.address.state}`;
  const navigate = useNavigate();

  function viewClickHandler() {
    navigate(`/animal/${pet.id}`);
  }

  // mobile image size - 300px
  return (
    <Card styles={classes.card}>
      <div className={classes.image}>
        <img src={pet.primary_photo_cropped.small} alt={pet.name} />
      </div>

      <div className={classes.text}>
        <h4>{pet.name}</h4>
        <p>{pet.breeds.primary}</p>
        <div className={classes.info}>
          <AdoptionInfo icon={age} alt="Age" label={pet.age} />
          <AdoptionInfo icon={pin} alt="Location" label={location} />
        </div>
      </div>

      <AccentButton styles={classes.view} onClick={viewClickHandler}>
        View Profile
      </AccentButton>
    </Card>
  );
}

export default AdoptionCard;
