import './dashboard.css'
import React, { useState, useEffect } from 'react';
import { SegmentedControl, Grid, SimpleGrid, ScrollArea } from '@mantine/core';
import EventCard from './EventCard.jsx';
import UpcomingGames from './UpcomingGames.jsx';
import MakeGame from './MakeGame.jsx';
import please from '../../requests.js';
import basketballOutline from '../../assets/images/basketballOutline.png';

const Dashboard = ({
  userId,
  setPage,
  setDispId,
  setGameState,
  myGameIds,
  myGames,
  updateUserInfo,
  toggleJoinLeave
  }) => {

  const [sortBy, setSortBy] = useState('upcoming');
  const [formOpen, setFormOpen] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    // update to use user's city and state
    please.getAllGames('San Jose', 'CA', sortBy, userId)
    .then((data) => setGames(data.data))
    .catch((err) => console.log(err));
  }, [sortBy, formOpen, userId])

  useEffect(() => {
    updateUserInfo();
  }, [userId]);

  return (
    <div id='dashboard-ctn'>
      <Grid>
        <Grid.Col span='content'>
          <UpcomingGames myGames={myGames} />
          <div id='button-ctn'>
            <img
              id='basketball-outline'
              src={basketballOutline}
              alt='outline of basketball'/>
            <button
              type='button'
              onClick={() => setFormOpen(true)}>
              Make Game
            </button>
          </div>
          {formOpen &&
          <MakeGame
            setFormOpen={setFormOpen}
            userId={userId}
          />}
        </Grid.Col>
        <Grid.Col span='auto'>
          <SimpleGrid>
            <SegmentedControl
              data={[
                { label: 'upcoming', value: 'upcoming' },
                { label: 'with friends attending', value: 'friends' },
              ]}
              value={sortBy}
              onChange={setSortBy}
            />
          </SimpleGrid>
          <div style={{marginTop:"18px"}}>
            {games
            ?
            <ScrollArea style={{height: 645}} offsetScrollbars>
              <Grid>
                {games.map((event) => (
                  <EventCard
                    key={event._id}
                    event={event}
                    myGameIds={myGameIds}
                    setDispId={setDispId}
                    setPage={setPage}
                    setGameState={setGameState}
                    toggleJoinLeave={toggleJoinLeave}
                  />
                  ))}
                </Grid>
            </ScrollArea>
            : null}
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Dashboard;
