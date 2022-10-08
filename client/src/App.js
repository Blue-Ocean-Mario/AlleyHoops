import React, { useState, useEffect } from 'react';
import { LoginView } from './Login/LoginView.js';
import { Messages } from '../src/components/Messages/Messages.js';
import GamePage from './components/GamePage/GamePage.js';

import NavBar from './components/NavBar.js';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.js';
import FindTeammates from './components/FindTeammates/FindTeammates.jsx';

import Axios from '../src/requests';
import io from 'socket.io-client';
const socket = io('http://localhost:3001', { autoConnect: false });

export default function App() {
  //const divRef = useRef(true);
  const [userId, setUserId] = useState('');
  const [userObj, setUserObj] = useState({});
  const [page, setPage] = useState(null);
  const [dispId, setDispId] = useState(userId);
  const [gameState, setGameState] = useState('');
  const [login, setLogin] = useState(false);
  const [myGames, setMyGames] = useState([]);
  const [myGameIds, setMyGameIds] = useState([]);

  const updateUserInfo = () => {
    Axios.getUserInfo(userId)
      .then((data) => {
        let events = data.data.events;
        let eventIds = events.map((event) => event._id);
        setMyGames(events);
        setMyGameIds(eventIds);
      })
      .catch((error) => console.log(error));
  };

  const toggleJoinLeave = (eventId) => {
    if (myGameIds.includes(eventId)) {
      Axios.leaveGame(userId, eventId)
      .then(() => updateUserInfo())
      .catch(error => console.log(error))
    } else {
      Axios.joinGame(userId, eventId)
      .then(() => updateUserInfo())
      .catch(error => console.log(error));
    }
  }

  // checks if the user is already authenticated, sets the page to 'login' if not.
  useEffect(() => {
    Axios.authorize()
      .then((res) => {
        if (res.data.id !== null) {
          setUserId(res.data.id);
          setPage('games');
        }
      })
      .catch(() => setPage('login'));
  }, []);

  useEffect(() => {
    updateUser();
  }, [userId]);

  const updateUser = () => {
    Axios.getCurrentUser(userId)
      .then(({ data }) => {
        setUserObj(data)
        if (login) {
          const username = data.username;
          socket.auth = { username };
          socket.connect();
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <NavBar userId={userId} page={page} setPage={setPage} setLogin={setLogin} setUserId={setUserId}/>
      {page === 'login' ? (
        <LoginView setPage={setPage} setUserId={setUserId} userId={userId} setLogin={setLogin}/>
      ) : null}
      {page === "games"
      ?
      <Dashboard
      userId={userId}
      setPage={setPage}
      setDispId={setDispId}
      setGameState={setGameState}
      myGameIds={myGameIds}
      myGames={myGames}
      updateUserInfo={updateUserInfo}
      toggleJoinLeave={toggleJoinLeave} />
      : null}
      {page === "profile" || page === "frnd" ? (
        <ProfilePage
          userObj={userObj}
          updateUser={updateUser}
          userId={userId}
          page={page}
          setPage={setPage}
          dispId={dispId}
          setDispId={setDispId}
          setGameState={setGameState}
        />
      ) : null}
      {page === 'findTeam' ? <FindTeammates user={userObj} /> : null}
      {page === 'messages' ? <Messages userObj={userObj} /> : null}
      {page === 'gp' ? <GamePage gameid={gameState} userName={userObj.username} set={setPage} toggleJoinLeave={toggleJoinLeave} myGameIds={myGameIds}/> : null}
    </div>
  );
}

export { socket };
