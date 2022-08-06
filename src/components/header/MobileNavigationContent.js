import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import NavData from '../../util/NavData';

import MobileNavigationButton from './MobileNavigationButton';

import classes from './styles/MobileNavigationContent.module.css';

function MobileNavigationContent() {
  const { isMobileNavOpen, toggleMobileNav } = useContext(AppContext);

  const navClasses = `
    ${classes.navigation}
    ${isMobileNavOpen ? classes.shown : classes.hidden}
  `;

  function closeNavHandler() {
    toggleMobileNav();
  }

  return (
    <nav className={navClasses}>
      {/* Close button is only rendered when nav is open, to allow for easier testing */}
      {isMobileNavOpen && <MobileNavigationButton type="cross" />}
      <ul>
        {NavData.map((link) => (
          <li key={link.text}>
            <NavLink to={link.to} onClick={closeNavHandler}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavigationContent;
