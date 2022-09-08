import React from 'react';
import { Link } from 'react-router-dom';

import NavData from '../../data/navData';

import classes from './styles/Footer.module.css';
import logo from '../../assets/images/header-logo.png';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <img src={logo} alt="Find-a-Friend" />
        <p>A portfolio project designed and developed by Ethan Hawes</p>
      </div>
      <div className={classes.section}>
        <h4>Site Map</h4>
        <nav>
          <ul>
            {NavData.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
