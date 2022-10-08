import { Grid, SimpleGrid, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import please from '../../requests';
import Profile from './Profile.js';
import Game from './Game.js';
import Friends from './Friends.js';
// eslint-disable-next-line
import ball from './ball.css';
import bbplyr2 from '../../assets/images/basketballplayer2.png';

export default function ProfilePage({
  updateUser,
  userObj,
  userId,
  page,
  setPage,
  dispId,
  setDispId,
  setGameState,
}) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (dispId === userId) setPage('profile');
    if (page === 'profile') {
      setDispId(userId);
      please
        .getUserInfo(userId)
        .then(({ data }) => setProfile(data))
        .catch((err) => console.log(err));
    }
    if (dispId) {
      please
        .getUserInfo(dispId)
        .then(({ data }) => setProfile(data))
        .catch((err) => console.log(err));
    }
  }, [setPage, userId, page, dispId, userObj]);

  const bbSty = {
    position: 'fixed',
    right: '0',
    transform: 'scaleX(-1)',
    zIndex: '-1',
  };

  return (
    <div style={{ margin: '40px' }}>
      <img style={bbSty} src={bbplyr2} alt='bbplyr2' />
      <Grid m='auto'>
        <div style={{ margin: 'auto', marginTop: '78px' }}>
          <Profile
            profile={profile}
            page={page}
            userObj={userObj}
            updateUser={updateUser}
          />
          <Friends
            friends={profile.friends}
            setDispId={setDispId}
            setPage={setPage}
          />
        </div>
        <SimpleGrid m='auto' mt='xl'>
          <Text color='white' size={25} align='center' weight='bolder'>
            Your Games
          </Text>
          <div className='events'>
            {profile.events
              ? profile.events.map((event) => (
                  <Game
                    key={event._id}
                    event={event}
                    setPage={setPage}
                    setDispId={setDispId}
                    setGameState={setGameState}
                  />
                ))
              : null}
          </div>
        </SimpleGrid>
      </Grid>
    </div>
  );
}
