import classes from './styles/PetAdoption.module.css';

function PetAdoption(props) {
  return (
    <section className={classes.section}>
      <p className={classes.title}>Interested in adopting?</p>
      <p className={classes.text}>Visit the contact section to get in touch with the shelter!</p>
      <p className={classes.text}>
        Alternatively, view this pets profile on Petfinder, by clicking{' '}
        <a href="petfinder.com">here</a>.
      </p>
    </section>
  );
}

export default PetAdoption;
