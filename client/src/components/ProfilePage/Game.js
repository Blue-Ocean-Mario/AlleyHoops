import { Avatar, Grid, SimpleGrid, Text, Card } from '@mantine/core';

export default function Game({ event, setPage, setDispId }) {
  return (
    <Card>
      <Grid sx={{ border: '1px solid lightgray' }}>
        <SimpleGrid>
          <Grid m='xs'>
            {event.peopleAttending.map((player, i) =>
              player && i % 2 === 0 ? (
                <Avatar
                  key={player._id}
                  src={player.photo}
                  radius={100}
                  m='auto'
                  onClick={() => {
                    setDispId(player._id);
                    setPage('frnd');
                  }}
                />
              ) : null
            )}
          </Grid>
          <Grid m='xs'>
            {event.peopleAttending.map((player, i) =>
              player && i % 2 === 1 ? (
                <Avatar
                  key={player._id}
                  src={player.photo}
                  radius={100}
                  m='auto'
                  onClick={() => {
                    setDispId(player._id);
                    setPage('frnd');
                  }}
                />
              ) : null
            )}
          </Grid>
        </SimpleGrid>
        <SimpleGrid m='xs' onClick={() => console.log(event)}>
          <Text weight='bolder'>{event.eventName}</Text>
          <Text>{event.location}</Text>
          <Text>{event.startTime}</Text>
        </SimpleGrid>
      </Grid>
    </Card>
  );
}
