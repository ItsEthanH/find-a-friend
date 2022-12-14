import React from 'react';

import classes from './styles/LandingSection.module.css';

function LandingSection(props) {
  let styles = `${classes.section} ${props.styles ? props.styles : ''}`;

  return (
    <section id={props.id} data-testid="landing-section" className={styles}>
      {props.children}
    </section>
  );
}

export default LandingSection;
