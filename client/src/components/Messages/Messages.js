import { Grid, Select, Card, Text, ScrollArea, Divider } from '@mantine/core';
import { useState, useEffect } from 'react';
import { socket } from './../../App';
import MessageRoom from './MessageRoom.js';
import { MessageDisplay } from './MessageDisplay';
import { user, join } from '../../Utilities/socket_listeners';
import { BigStyledButton } from '../../styledComponents/StyledButtons';


export function Messages({ userObj }) {
  const [convoList, setConvoList] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState('');
  const [displayChat, setDisplayChat] = useState(convoList[0]);

  const username = userObj.username;

  useEffect(() => {
    socket.emit(user.getConversations);
    socket.emit(user.getFriends);
  }, []);

  useEffect(() => {
    setDisplayChat(convoList[0]);
  }, [convoList]);

  socket.on(user.getConversations, (convo) => {
    setConvoList(convo);
  });

  socket.on(user.getFriends, (friends) => {
    const list = friends.map((friend) => {
      return {
        value: friend.username,
        label: friend.username,
      }
    })
    setFriends(list);
  });

  socket.on(join.room, (convo) => {
    // if convo users includes my username, then add that convo to convo list
    if (convo.users.includes(username)) {
      socket.emit(join.room, { conversationId: convo._id.toString() });
      let temp = [...convoList];
      temp.push(convo);
      setConvoList(temp);
    }
  });

  function handleNewMessage() {
    let chatExists = false;
    for (let i = 0; i < convoList.length; i++) {
      if (
        convoList[i].users.includes(selectedFriend) &&
        convoList[i].users.length === 2
      ) {
        setDisplayChat(convoList[i]);
        chatExists = true;
        break;
      }
    }

    if (!chatExists) {
      socket.emit(join.group, {
        conversationName: null,
        users: [username, selectedFriend],
      });
    }
  }

  return (
    <div style={{ marginTop: '1%' }}>
      <Grid m='auto'>
        <div style={{width: '20vw', padding: '2rem'}}>
          {friends.length > 0 ? (
          <div style={{display:'flex', flexDirection:'column'}}>
            <Select placeholder="Choose a friend to message!" data={friends} onChange={setSelectedFriend}/>
            <BigStyledButton string={'New Message'} onClick={handleNewMessage} />
          </div>
          ) : (
            <div>You got no friends cuh</div>
          )}
          <div >
            <Card>
              <Text size='xl' align='center'>Messages</Text>
              <Divider />
              <ScrollArea type='hover' style={{height: '40rem'}}>
                {convoList.map((convo) => (
                  <MessageRoom
                    key={convo._id}
                    userObj={userObj}
                    convo={convo}
                    socket={socket}
                    setDisplayChat={setDisplayChat}
                  />
                ))}
              </ScrollArea>
            </Card>
          </div>
        </div>
        <MessageDisplay
          userObj={userObj}
          displayChat={displayChat}
          socket={socket}
        />
      </Grid>
    </div>
  );
}
