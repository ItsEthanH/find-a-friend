import Card from '../../components/cards-and-sections/Card';

import classes from './styles/PetInformation.module.css';
import breedIcon from '../../assets/svgs/pet-view/breed.svg';
import ageIcon from '../../assets/svgs/pet-view/age.svg';
import maleIcon from '../../assets/svgs/pet-view/male.svg';
// import femaleIcon from '../../assets/svgs/pet-view/female.svg';
import locationIcon from '../../assets/svgs/pet-view/location.svg';

function PetInformation({ name, breed, age, gender, location, description, status, updated }) {
  // green if adoptable, red if adopted
  const adoptionStyles = `${classes.adoption} ${status === 'adoptable' ? classes.adoptable : ''} ${
    status === 'adopted' ? classes.adopted : ''
  }`;

  return (
    <Card styles={classes.card}>
      <h3 className={classes.name}>{name}</h3>

      <div className={classes.details}>
        <div className={classes.detail}>
          <img src={breedIcon} alt="Breed" />
          <p>{breed}</p>
        </div>
        <div className={classes.detail}>
          <img src={ageIcon} alt="Age" />
          <p>{age}</p>
        </div>
        <div className={classes.detail}>
          <img src={maleIcon} alt="Gender" />
          <p>{gender}</p>
        </div>
        <div className={classes.detail}>
          <img src={locationIcon} alt="Location" />
          <p>{location}</p>
        </div>
      </div>

      <p className={classes.description}>{description}</p>

      <div className={classes.status}>
        <p className={adoptionStyles}>{status[0].toUpperCase() + status.slice(1, status.length)}</p>
        <p className={classes.update}>Last Updated: {updated}</p>
      </div>
    </Card>
  );
}

export default PetInformation;
