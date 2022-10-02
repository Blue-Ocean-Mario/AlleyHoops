
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GMap = ({ location }) => {

  const style = {
    height: '100%',
    width: '100%'
  };

  const coords = { lat: 10.3019, lng: -85.8411 };

  return(
    <div>
      <Map
        google={location.google}
        zoom={9}
        style={style}
        initialCenter={coords} >
          <Marker
            title={location.name}
            position={coords}/>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyB_FTwcVTpTGokaiIvicI1TISXjgIkBw34'})(GMap);
