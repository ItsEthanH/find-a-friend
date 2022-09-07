import AdoptionCarousel from '../landing/adoption/AdoptionCarousel';

import classes from './styles/OrgPets.module.css';

function OrgPets({ link }) {
  return (
    <>
      <h4 className={classes.title}>Pets from this Organisation</h4>
      <AdoptionCarousel isOrg orgUrl={link} />
    </>
  );
}

export default OrgPets;
