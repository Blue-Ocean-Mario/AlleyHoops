import React, { useState, useEffect } from 'react';
import { SegmentedControl, Button, Grid, SimpleGrid } from '@mantine/core';
import EventCard from './EventCard.jsx';
import UpcomingGames from './UpcomingGames.jsx';
import MakeGame from './MakeGame.jsx';
import please from '../../requests.js';


const Dashboard = ({ userId, setPage, setDispId }) => {
  const [sortBy, setSortBy] = useState('upcoming');
  const [formOpen, setFormOpen] = useState(false);
  const [games, setGames] = useState([])
  const [myGames, setMyGames] = useState([]);
  const [myGameIds, setMyGameIds] = useState([]);

  const updateUserInfo = () => {
    please.getUserInfo(userId)
    .then(data => {
     let events = data.data.events
     let eventIds = events.map(event => event._id)
     setMyGames(events);
     setMyGameIds(eventIds);
   })
    .catch(error => console.log(error));
  };

  const getGames = () => {
    console.log('sort crit is', sortBy, 'userid', userId)
    please.getAllGames('San Jose', 'CA', sortBy, userId)
    .then(data => setGames(data.data))
  }

  useEffect(() => {
    getGames();
  }, [sortBy])

  useEffect(() => {
    updateUserInfo();
  }, [])

  return (
    <div style={{margin: '40px'}}>
      <Grid grow>
        <Grid.Col span={1}>
          <UpcomingGames myGames={myGames}/>
          {/* later: turn this into a basketball */}
          {/* link this to open up modal form */}
          <Button
            radius='xl'
            size='md'
            onClick={()=>setFormOpen(true)}>
            Make Game
          </Button>
          {formOpen && <MakeGame setFormOpen={setFormOpen} userId={userId}/>}
        </Grid.Col>
        <Grid.Col span={9}>
          <SimpleGrid>
            <SegmentedControl
              data={[
                {label: 'upcoming', value: 'upcoming'},
                {label: 'nearest to me', value: 'distance'},
                {label: 'with friends attending', value: 'friends'}
              ]}
              value={sortBy}
              onChange={setSortBy}
              />
          </SimpleGrid>
          {
            games
            ?
            <Grid>
              {games.map(event => <EventCard
              event={event}
              userId={userId}
              myGameIds={myGameIds}
              updateUserInfo={updateUserInfo}
              setDispId={setDispId}
              setPage={setPage}
              />)}
            </Grid>
            :
            null
          }
        </Grid.Col>
      </Grid>
    </div>
  )

}

export default Dashboard;