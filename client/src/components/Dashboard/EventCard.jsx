import { Card, Text, Grid, SimpleGrid, Avatar, Button, Tooltip } from '@mantine/core';
import moment from 'moment';
import UserAvatar from './UserAvatar.jsx';

const EventCard = ({
  event,
  myGameIds,
  setDispId,
  setPage,
  setGameState,
  toggleJoinLeave,
  lookAtEvent
  }) => {

  // padds attendees list to render empty slots
  let attendees = event.peopleAttending;
  let fakeKey = 0;
  while (attendees.length < 12) {
    attendees.push(fakeKey)
    fakeKey++;
  }

  return (
    <>
      <Grid.Col
        key={event._id}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={3}
        >
        <Card
          onClick={() => lookAtEvent(event._id)}
          shadow='sm'
          p='lg'
          radius='md'
          sx={{cursor: 'pointer'}}>
          <Text sx={{textAlign:'center'}}>
            <h3>{event.eventName}</h3>
          </Text>
          <SimpleGrid cols={6} spacing='sm' verticalSpacing='sm'>
          {attendees.map(playerId =>
          typeof playerId === 'string'
          ?
          <UserAvatar
          key={playerId}
          playerId={playerId}
          setDispId={setDispId}
          setPage={setPage}/>
          :
          <Avatar
          key={playerId}
          src={null}
          alt='small picture of person attending'
          radius='xl'>
          </Avatar>
          )}
          </SimpleGrid>
          {event.location.length < 28
          ?
          <Text>{event.location}</Text>
          :
          <Tooltip label={event.location}>
            <Text>{event.location.slice(0, 28)}...</Text>
          </Tooltip>
          }
          <Text>Date: {moment(event.startTime).format('ll')}</Text>
          <Text>Time: {moment(event.startTime).format('LT')} - {moment(event.endTime).format('LT')}</Text>
          <div className='toggle-btn-ctn'>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                toggleJoinLeave(event._id)
              }}
              variant='light'
              sx={{width: '100px'}}
              styles={(theme) => ({
                root: {
                  backgroundColor: `${myGameIds.includes(event._id) ?'hsl(0, 0%, 80%)' : '#0d5f65'}`,
                  color: 'white',
                  margin: 5,
                  "&:hover": {
                    backgroundColor: `${myGameIds.includes(event._id) ?'hsl(0, 0%, 40%)' : 'hsl(184,67%,32%)'}`
                  },
                },
              })}
            >
            {myGameIds.includes(event._id) ? 'Going' : 'Let\'s go!'}
            </Button>
          </div>
        </Card>
      </Grid.Col>
    </>
  )
}

export default EventCard;