import React, { useState, useEffect } from 'react';
import { SegmentedControl, Button } from '@mantine/core';
import EventCards from './EventCards.jsx';
import UpcomingGames from './UpcomingGames.jsx';


const Dashboard = () => {
  const [sortBy, setSortBy] = useState('upcoming');
  return (
    <>
      <div>
        Dashboard
      </div>
      <UpcomingGames />
      <p>Sort by:</p>
      <SegmentedControl
        data={[
          {label: 'upcoming', value: 'upcoming'},
          {label: 'distance', value: 'distance'},
          {label: 'friends', value: 'friends'}
        ]}
        value={sortBy}
        onChange={setSortBy}
        />
      <EventCards sortBy={sortBy} setSortBy={setSortBy}/>
      {/* later: turn this into a basketball */}
      {/* link this to open up modal form */}
      <Button radius='xl' size='xl'>
        Make Game
      </Button>
    </>
  )

}

export default Dashboard;