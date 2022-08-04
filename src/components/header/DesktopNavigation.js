import React from 'react';
import { NavLink } from 'react-router-dom';
import NavData from '../../util/NavData';

import classes from './styles/DesktopNavigation.module.css';

function DesktopNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul>
        {NavData.map((link) => (
          <li key={link.text}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
