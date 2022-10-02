// import { useRef, useState, useEffect } from 'react';

const Map = () => {

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
}

export default Map;