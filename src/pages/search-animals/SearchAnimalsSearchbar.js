import React from 'react';

import classes from './styles/SearchAnimalsSearchbar.module.css';

function SearchAnimalsSearchbar(props) {
  return (
    <form className={classes.form} aria-label={props['form-name']}>
      <div className={classes.entry}>
        <label htmlFor={props['search-name']}>
          <img src={props['search-icon']} alt={props['search-name']} />
        </label>
        <input
          placeholder={props['search-placeholder']}
          id={props['search-name']}
          name={props['search-name']}
          type="text"
          aria-label={props['search-placeholder']}
        />
      </div>
      <div className={classes.divider} />
      <div className={classes.entry}>
        <label htmlFor={props['filter-name']}>
          <img src={props['filter-icon']} alt={props['filter-name']} />
        </label>
        <select
          placeholder={props['filter-placeholder']}
          id={props['filter-name']}
          name={props['filter-name']}
          type="text"
          aria-label={props['filter-placeholder']}
        >
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
    </form>
  );
}

export default SearchAnimalsSearchbar;
