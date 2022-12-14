import { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import classes from './styles/OrgMap.module.css';
import { useEffect } from 'react';

function OrgMap({ address }) {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        setCenter(results[0].geometry.location);
      } else {
        alert('Failed to load map: ' + status);
      }
    });
  }, [address]);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName={classes.container}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default OrgMap;
