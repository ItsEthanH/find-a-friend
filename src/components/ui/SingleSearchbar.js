import React from 'react';

import classes from './styles/SingleSearchbar.module.css';

function SingleSearchbar(props) {
  function submitHandler() {
    props.onSubmit();
  }

  return (
    <form className={classes.form} aria-label={props.placeholder} onSubmit={submitHandler}>
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
