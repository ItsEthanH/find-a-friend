import Card from '../../components/cards-and-sections/Card';

import classes from './styles/OrgInfo.module.css';

function OrgHours({ hours }) {
  const renderedSchedule = Object.keys(hours).map((day) => (
    <div className={classes.info}>
      <p className={classes.label}>{day[0].toUpperCase() + day.substring(1) + ':'}</p>

      {hours[day] ? <p>{hours[day]}</p> : <p className={classes.none}>No information available</p>}
    </div>
  ));

  return (
    <Card styles={classes.card}>
      <h4 className={classes.title}>Opening Hours</h4>
      <div className={classes['info-body']}>{renderedSchedule}</div>
    </Card>
  );
}

export default OrgHours;
