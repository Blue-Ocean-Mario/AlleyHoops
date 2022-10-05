import { Grid, SimpleGrid, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import please from '../../requests';
import Profile from './Profile.js';
import Game from './Game.js';
import Friends from './Friends.js';
// eslint-disable-next-line
import ball from './ball.css';

export default function ProfilePage({ userId, page, setPage }) {
  const [dispId, setDispId] = useState(userId);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (dispId === userId) setPage('profile');
    if (page === 'profile') setDispId(userId);
    if (dispId) {
      please
        .getUserInfo(dispId)
        .then(({ data }) => setProfile(data))
        .catch((err) => console.log(err));
    }
  }, [setPage, userId, page, dispId]);

  return (
    <Grid m='auto'>
      <div>
        <Profile profile={profile} page={page} />
        <Friends
          friends={profile.friends}
          setDispId={setDispId}
          setPage={setPage}
        />
      </div>
      <SimpleGrid m='auto'>
        <Text size={25} weight='bolder'>
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
                />
              ))
            : null}
        </div>
      </SimpleGrid>
    </Grid>
  );
}
