import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import { NavLink } from 'react-router-dom';
import NavData from '../../util/navData';

import MobileNavigationButton from './MobileNavigationButton';

import classes from './styles/MobileNavigationContent.module.css';

function MobileNavigationContent() {
  const dispatch = useDispatch();
  const isMobileNavOpen = useSelector((state) => state.ui.isMobileNavOpen);

  const navClasses = `
    ${classes.navigation}
    ${isMobileNavOpen ? classes.shown : classes.hidden}
  `;

  function closeNavHandler() {
    dispatch(uiActions.toggleMobileNav());
  }

  return (
    <nav className={navClasses}>
      {/* Close button is only rendered when nav is open, to allow for easier testing and accessibility */}
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
