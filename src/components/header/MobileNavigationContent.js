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
      {/* Close button is only rendered when nav is open, to allow for easier testing */}
      {isMobileNavOpen && <MobileNavigationButton type="cross" />}
      <ul>
        {NavData.map((link) => (
          <li key={link}>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavigationContent;
