import classes from './styles/PetAdoption.module.css';

function PetAdoption({ styles, url }) {
  const sectionStyles = `${classes.section} ${styles}`;
  return (
    <section className={sectionStyles}>
      <p className={classes.title}>Interested in adopting?</p>
      <p className={classes.text}>Visit the contact section to get in touch with the shelter!</p>
      <p className={classes.text}>
        Alternatively, view this pets profile on Petfinder, by clicking{' '}
        <a target="_blank" rel="noreferrer" href={url}>
          here
        </a>
        .
      </p>
    </section>
  );
}

export default PetAdoption;
