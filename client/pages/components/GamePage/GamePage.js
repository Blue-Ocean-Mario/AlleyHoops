import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from 'react';
import Info from './Info.js';
import Map from './Map.js';
import Comments from './Comments.js';

const GamePage = () => {


  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return(
  <div>
    <Info />
    <Wrapper apiKey={"AIzaSyB_FTwcVTpTGokaiIvicI1TISXjgIkBw34"} render={render} >
      <Map />
    </Wrapper>
    <Comments />
  </div>
  )
}

export default GamePage;