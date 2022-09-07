import AdoptionCarousel from '../landing/adoption/AdoptionCarousel';

import classes from './styles/OrgPets.module.css';

function OrgPets({ link }) {
  return (
    <section className={classes.section}>
      <h4 className={classes.title}>Pets from this Organisation</h4>
      <AdoptionCarousel isOrg orgUrl={link} />
    </section>
  );
}

export default OrgPets;
