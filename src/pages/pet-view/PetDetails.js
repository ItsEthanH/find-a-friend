import PetDetail from './PetDetail';

import classes from './styles/PetDetails.module.css';

function PetDetails({ title, detailArray, styles }) {
  const renderedDetails =
    detailArray &&
    detailArray.map((detail) => (
      <>
        <PetDetail icon={detail.icon} title={detail.title} text={detail.text} />
        <div className={classes.divider} />
      </>
    ));

  const sectionStyles = `${classes.section} ${styles}`;

  return (
    <section className={sectionStyles}>
      <h4 className={classes.title}>{title}</h4>
      <div className={classes.details}>{renderedDetails}</div>
    </section>
  );
}

export default PetDetails;
