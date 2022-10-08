import { Card, Grid, Avatar, Text } from '@mantine/core';

export default function MessageRoom({
  setDisplayChat,
  convo,
  socket,
  userObj,
}) {
  const users = [...convo.users];
  const ind = users.indexOf(userObj.username);

  users.splice(ind, 1);

  return (
    <Card
      onClick={() => setDisplayChat(convo)}
      sx={{ border: '1px solid lightgray' }}>
      <Grid>
        <Avatar />
        {users.length > 1 ? <Text>{`${users[0]}, ${users[1]}...`}</Text> : <Text>{users[0]}</Text>}
      </Grid>
    </Card>
  );
}
