import { Card, Text, Divider, ScrollArea } from '@mantine/core';
import moment from 'moment';

const UpcomingGames = ({myGames, lookAtEvent}) => {
  return (
    // later: put this in a grid and size it
    <div style={{width: '400px', display: 'flex', justifyContent: 'center'}}>
      <Card shadow='sm' p='xs' radius='md' sx={{backgroundColor: '#f1f3f5', width: '300px'}}>
          <Text size='xl' align='center'>Your games</Text>
          <Divider my='sm'size='md' color='white'/>
          <ScrollArea type='hover' style={{height: '500px'}}>
            {myGames.map(game =>
              <Card
                key={game._id}
                sx={{backgroundColor: 'white', marginTop: '6px', cursor: 'pointer'}}
                onClick={() => lookAtEvent(game._id)}>
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
          </ScrollArea>
      </Card>
    </div>
  )
}

export default UpcomingGames;