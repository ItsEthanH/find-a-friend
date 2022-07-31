import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import MobileNavigationButton from './MobileNavigationButton';

import classes from './styles/MobileNavigationContent.module.css';

function MobileNavigationContent() {
  const { isMobileNavOpen } = useContext(AppContext);

  const navClasses = `
    ${classes.navigation}
    ${isMobileNavOpen ? classes.shown : classes.hidden}
  `;

  return (
    <nav className={navClasses}>
      <MobileNavigationButton type="cross" />
      <ul>
        <li>
          <a href="/">Search All</a>
        </li>
        <hr />
        <li>
          <a href="/">Find by Type</a>
        </li>
        <hr />
        <li>
          <a href="/">Dog Breeds</a>
        </li>
        <hr />
        <li>
          <a href="/">Cat Breeds</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavigationContent;
