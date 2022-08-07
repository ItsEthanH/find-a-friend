import React from 'react';

import classes from './styles/SingleSearchbar.module.css';

function SingleSearchbar(props) {
  return (
    <form className={classes.form}>
      <label htmlFor={props.name}>
        <img src={props.icon} alt="Search" />
      </label>
      <input
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        type="text"
        aria-label={props.name}
      />
    </form>
  );
}

export default SingleSearchbar;
