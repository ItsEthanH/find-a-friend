import Card from '../../components/cards-and-sections/Card';

import classes from './styles/PetInformation.module.css';
import breedIcon from '../../assets/svgs/pet-view/breed.svg';
import ageIcon from '../../assets/svgs/pet-view/age.svg';
import maleIcon from '../../assets/svgs/pet-view/male.svg';
// import femaleIcon from '../../assets/svgs/pet-view/female.svg';
import locationIcon from '../../assets/svgs/pet-view/location.svg';

function PetInformation(props) {
  return (
    <Card styles={classes.card}>
      <h3 className={classes.name}>Styx</h3>

      <div className={classes.details}>
        <div className={classes.detail}>
          <img src={breedIcon} alt="Breed" />
          <p>Domestic Shorthair</p>
        </div>
        <div className={classes.detail}>
          <img src={ageIcon} alt="Age" />
          <p>Baby</p>
        </div>
        <div className={classes.detail}>
          <img src={maleIcon} alt="Gender" />
          <p>Female</p>
        </div>
        <div className={classes.detail}>
          <img src={locationIcon} alt="Location" />
          <p>Oceanside, CA</p>
        </div>
      </div>

      <p className={classes.description}>
        How this pet arrived: Styx was brought in by a Good Samaritan on August 27, 2022. Why this
        pet is the...
      </p>

      <div className={classes.status}>
        <p className={`${classes.adoption} ${classes.adoptable}`}>Adoptable</p>
        <p className={classes.update}>Last Updated: 2022-09-01</p>
      </div>
    </Card>
  );
}

export default PetInformation;
