import Card from '../../components/cards-and-sections/Card';

import classes from './styles/OrgInfo.module.css';

function OrgInfo({ name, email, phone, website, address, description }) {
  const formattedEmail = email ? (
    <p>{email}</p>
  ) : (
    <p className={classes.none}>No email available</p>
  );

  const formattedPhone = phone ? (
    <p>{phone}</p>
  ) : (
    <p className={classes.none}>No phone number available</p>
  );

  const formattedWebsite = website ? (
    <a href={website}>{website}</a>
  ) : (
    <p className={classes.none}>No website available</p>
  );

  const formattedAddress = address.map((line) => <p>{line}</p>);

  return (
    <Card styles={classes.card}>
      <h4 className={classes.title}>{name}</h4>

      <div className={classes['info-body']}>
        <div className={classes.info}>
          <p className={classes.label}>Email:</p>
          {formattedEmail}
        </div>
        <div className={classes.info}>
          <p className={classes.label}>Phone:</p>
          {formattedPhone}
        </div>
        <div className={classes.info}>
          <p className={classes.label}>Website:</p>
          {formattedWebsite}
        </div>
        <div className={classes.info}>
          <p className={classes.label}>Address:</p>
          {formattedAddress}
        </div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default OrgInfo;
