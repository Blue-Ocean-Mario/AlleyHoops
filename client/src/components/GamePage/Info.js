import { useEffect, setState } from 'react';
import axios from 'axios';
const Info = ({ name, createdBy, attending, location, start, end, description }) => {
  const [players, setPlayers] = setState([]);

  useEffect(() => {
    //make fetch or axios call to get the photo for each person attending
    attending.map((user) => {
      axios.get('/users').then((data) => {
        let player = {};
        player.id = data.id;
        player.photo = data.picture;
        setPlayers(prevPlayers => prevPlayers, player);
      }).catch((err) => {
        console.log('this is a GET error in GamePage/Info', err);
      });
    });
  }, [attending, players, setPlayers]);

  const getPlayers = () => {
    // for each player in players,
      // show their photo as a clickable item
    players.map((player) => {
      return <img src={player.photo} alt={player.id} onClick={handlePlayerClick}></img>
    })

  }

  const handlePlayerClick = () => {
    //when a user clicks on a player's image, it takes them to the player's profile.


  }


  return(
    <div className="gp_info">
      <button>join game</button>
      <h4>{name}</h4>
      <p>{createdBy}</p>
      <p>{location}</p>
      <p>{start} - {end}</p>
      <p>{description}</p>
      <p>see who's playing...</p>
      <div>
        {getPlayers}
      </div>
    </div>
  )

}

export default Info;