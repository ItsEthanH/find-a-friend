import React from 'react';

import classes from './styles/DoubleSearchbar.module.css';

function DoubleSearchbar(props) {
  return (
    <form className={classes.form}>
      <div className={classes.entry}>
        <label htmlFor={props['primary-name']}>
          <img src={props['primary-icon']} alt="Search" />
        </label>
        <input
          placeholder={props['primary-placeholder']}
          id={props['primary-name']}
          name={props['primary-name']}
          type="text"
          aria-label={props['primary-placeholder']}
        />
      </div>
      <div className={classes.divider} />
      <div className={classes.entry}>
        <label htmlFor={props['secondary-name']}>
          <img src={props['secondary-icon']} alt="Search" />
        </label>
        <input
          placeholder={props['secondary-placeholder']}
          id={props['secondary-name']}
          name={props['secondary-name']}
          type="text"
          aria-label={props['secondary-placeholder']}
        />
      </div>
    </form>
  );
}

export default DoubleSearchbar;
