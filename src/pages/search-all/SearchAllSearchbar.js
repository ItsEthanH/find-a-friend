import React from 'react';

import classes from './styles/SearchAllSearchbar.module.css';
import search from '../../assets/svgs/search.svg';
import location from '../../assets/svgs/location-pin.svg';

function SearchAllSearchbar() {
  return (
    <form className={classes.form}>
      <div className={classes.entry}>
        <label htmlFor="query">
          <img src={search} alt="Search" />
        </label>
        <input
          placeholder="Search for pets..."
          id="query"
          type="text"
          aria-label="Please enter a search term"
        />
      </div>
      <div className={classes.divider} />
      <div className={classes.entry}>
        <label htmlFor="location">
          <img src={location} alt="Search" />
        </label>
        <input
          placeholder="Location"
          id="location"
          type="text"
          aria-label="Please enter a location"
        />
      </div>
    </form>
  );
}

export default SearchAllSearchbar;
