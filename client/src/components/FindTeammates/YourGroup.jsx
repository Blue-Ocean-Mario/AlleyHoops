import { Avatar, SimpleGrid, Grid, Text, Card, Divider } from '@mantine/core';
import { BigStyledButton } from '../../styledComponents/StyledButtons.js';
import { socket } from './../../App';
import { join } from '../../Utilities/socket_listeners';
import { useState } from 'react';

// later: replace this with prop

export default function YourGroup({ group, user, setPage }) {
  const [makeGroup, setMakeGroup] = useState(false);

  const joinRoom = () => {
    // all the users array will be Object.keys(group);

    let users = Object.keys(group)
    users.shift();
    users.push('Goksu9000');
    socket.emit(join.group, {
      conversationName: null,
      users: users,
    });
    setMakeGroup(true);
  };

  socket.on(join.room, (convo) => {
    // if convo users includes my username, then add that convo to convo list
    console.log(convo);
    if (convo.users.includes(user.username)) {
      console.log('huh');
      socket.emit(join.room, { conversationId: convo._id.toString() });
      if (makeGroup) {
        console.log('why');
        setPage('messages');
        setMakeGroup(false);
      }
    }
  });

  return (
    <>
      <Card shadow='sm' p='lg' radius='md'>
        <Text>Your Group</Text>
        <Divider my='sm' />
        <SimpleGrid>
          <Text>Teammates</Text>
          {Object.values(group).map((teammate) => (
            <div key={teammate._id}>
              <Grid>
                <Avatar
                  src={teammate.photo}
                  alt='profile picture of teammates'
                  radius='xl'></Avatar>
                <Text>{teammate.username}</Text>
              </Grid>
            </div>
          ))}
          <BigStyledButton string={'Message Group'} onClick={joinRoom} />
        </SimpleGrid>
      </Card>
    </>
  );
}
