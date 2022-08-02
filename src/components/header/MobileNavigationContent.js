import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NavData from '../../util/NavData';

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
        {NavData.map((link) => (
          <li>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavigationContent;
