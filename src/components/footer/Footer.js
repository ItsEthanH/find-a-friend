import React from 'react';

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
        <h4>Page Map</h4>
        <nav>
          <ul>
            <li>Back to Top</li>
            <li>Animals</li>
            <li>Available Adoptions</li>
            <li>Success Stories</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>
      <div className={classes.section}>
        <h4>Site Map</h4>
        <nav>
          <ul>
            <li>Back to Top</li>
            <li>Animals</li>
            <li>Available Adoptions</li>
            <li>Success Stories</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
