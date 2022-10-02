import { Card, Text, Divider } from '@mantine/core';
import moment from 'moment';

// later replace this with a prop
const myGames = require('./sampleData.js');
const UpcomingGames = () => {
  return (
    // later: put this in a grid and size it
    <Card shadow='sm' p='xs' radius='md'>
        <Text>Your games</Text>
        <Divider my='sm'/>
        {myGames.map(game =>
          <Card key={game._id}>
            <Text>
              {game.eventName}
            </Text>
            <Text>
              {/* calulate distance in miles */}
              Miles from you
            </Text>
            <Text>
              {moment(game.startTime).calendar()}
            </Text>
          </Card>
        )}
    </Card>
  )
}

export default UpcomingGames;