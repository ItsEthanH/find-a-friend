import React from 'react';

import classes from './styles/DesktopNavigation.module.css';

function DesktopNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <a href="">Search Animals</a>
        </li>
        <li>
          <a href="">Search Organisations</a>
        </li>
        <li>
          <a href="">Dog Breeds</a>
        </li>
        <li>
          <a href="">Cat Breed</a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
