import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: 50.73624511489608,
  lng: 3.1494997521172796
};

function Map() {
  return (
    <LoadScript
>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        {/* <Marker position={center}></Marker> */}

      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map)