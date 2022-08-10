import React from 'react';

import Hero from '../../components/ui/Hero';
import Heading from '../../components/ui/Heading';
import DoubleSearchbar from '../../components/ui/DoubleSearchbar';

import location from '../../assets/svgs/location-pin.svg';
import shelter from '../../assets/svgs/home.svg';

function SearchOrgsHero() {
  return (
    <Hero page="ORGANISATIONS">
      <div className="hero-body">
        <Heading>
          Browse <span className="color-accent">Organisations</span>
        </Heading>
        <DoubleSearchbar
          form-name="Search organisations"
          primary-name="Location"
          primary-placeholder="Enter a Location (city, state or postal code)"
          primary-icon={location}
          secondary-name="Name"
          secondary-placeholder="Enter an Organisation Name"
          secondary-icon={shelter}
        />
      </div>
    </Hero>
  );
}

export default SearchOrgsHero;
