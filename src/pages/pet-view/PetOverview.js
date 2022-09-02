import PetImages from './PetImages';
import PetInformation from './PetInformation';

import classes from './styles/PetOverview.module.css';

function PetOverview(props) {
  return (
    <section className={classes.overview}>
      <PetImages />
      <PetInformation />
    </section>
  );
}

export default PetOverview;
