import React from 'react';
import NavData from '../../util/NavData';

import classes from './styles/DesktopNavigation.module.css';

function DesktopNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul>
        {NavData.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
