import { Avatar, Grid, SimpleGrid, Text, Card, Tooltip } from '@mantine/core';
import moment from 'moment';

export default function Game({ event, setPage, setDispId, setGameState }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <Card shadow='sm' p='lg' radius='md'>
        <Grid>
          <SimpleGrid>
            <Grid m='xs'>
              {event.peopleAttending.map((player, i) =>
                player && i % 2 === 0 ? (
                  <Tooltip key={player._id} label={player.username}>
                    <Avatar
                      sx={{ cursor: 'pointer' }}
                      src={player.picture}
                      radius={100}
                      m='auto'
                      onClick={() => {
                        setDispId(player._id);
                        setPage('frnd');
                      }}
                    />
                  </Tooltip>
                ) : null
              )}
            </Grid>
            <Grid m='xs'>
              {event.peopleAttending.map((player, i) =>
                player && i % 2 === 1 ? (
                  <Tooltip key={player._id} label={player.username}>
                    <Avatar
                      sx={{ cursor: 'pointer' }}
                      src={player.picture}
                      radius={100}
                      m='auto'
                      onClick={() => {
                        setDispId(player._id);
                        setPage('frnd');
                      }}
                    />
                  </Tooltip>
                ) : null
              )}
            </Grid>
          </SimpleGrid>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setPage('gp');
              setGameState(event._id);
            }}>
            <Text>
              <h3>{event.eventName}</h3>
            </Text>
            <Text>{event.location}</Text>
            <Text>Date: {moment(event.startTime).format('ll')}</Text>
            <Text>
              Time: {moment(event.startTime).format('LT')} -{' '}
              {moment(event.endTime).format('LT')}
            </Text>
          </div>
        </Grid>
      </Card>
    </div>
  );
}
