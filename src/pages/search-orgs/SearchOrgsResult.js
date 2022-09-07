import { Link } from 'react-router-dom';

import classes from './styles/SearchOrgsResult.module.css';

function SearchOrgsResult({ id, name, location, distance, contact, website }) {
  const shownDistance = distance ? (
    <p>{`${distance.toFixed(0)} miles`}</p>
  ) : (
    <p className={classes.none}>Please enter a location to show distance</p>
  );

  const shownContact = contact.trim() ? (
    <p>{contact.trim()}</p>
  ) : (
    <p className={classes.none}>No contact available</p>
  );

  return (
    <div className={classes.result}>
      <Link id={id} to={`/organisation/${id}`} className={classes.name}>
        {name}
      </Link>
      <div className={classes.info}>
        <h4>Location:</h4>
        <p>{location}</p>
      </div>

      <div className={classes.info}>
        <h4>Distance:</h4>
        {shownDistance}
      </div>
      <div className={classes.info}>
        <h4>Contact:</h4>
        {shownContact}
      </div>

      <div className={classes.info}>
        <h4>Website:</h4>
        {!website && <p className={classes.none}>No website available</p>}
        {website && <a href={website}>{website}</a>}
      </div>
    </div>
  );
}

export default SearchOrgsResult;
