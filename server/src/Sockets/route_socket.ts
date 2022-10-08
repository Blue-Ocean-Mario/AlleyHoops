import { Socket } from 'socket.io';
import { user, join } from '../Utilities/socket_listeners';

import {
  getConversationIDsFor,
  getConversationsFrom,
  getFriends,
  updateConversation,
  createGroupConversation,
  postNewMessage
} from './controller_socket';

import * as ISchema from '../Utilities/Interfaces/Schemas';
import * as ISocket from '../Utilities/Interfaces/Sockets';
import { create } from 'domain';

import io from '../server';
import { Types } from 'mongoose';

export async function onConnection (socket: Socket | any) {

  const username = socket.handshake.auth.username;

  console.log(`User ${username} connected`)

  socket.join(username);

  // On connection, retrieves all conversations of user from db and sends to client
  // Joins socket to all conversation rooms

  socket.on(user.getConversations, () => {
    getConversationIDsFor(username)
      .then((user) =>  {
        user.conversations.forEach((convoID: String) => socket.join(convoID))
        return getConversationsFrom(user.conversations);
      })
      .then((conversationList) => {
        io.sockets.in(username).emit(user.getConversations, conversationList)
      })
      .catch((err) => console.error(`Error retrieving messages server side: ${err}`));
  })

  socket.on(user.getFriends, () => {
    getFriends(username)
      .then((friends) => io.sockets.in(username).emit(user.getFriends, friends))
      .catch(err => console.error(err));
  })

  socket.on(user.directMessage, (message: ISchema.Message) => {
    updateConversation(message)
    .then((updatedMessages) => {
      io.sockets.in(message.conversationId).emit(user.directMessage, updatedMessages)
  })
    .catch(err => console.error(err));
  })

  // socket.on(user.newMessage, (newMessage: ISchema.NewMessage) => {
  //   postNewMessage(newMessage)
  //   .then((conversation) => {
  //     console.log(conversation);
  //     io.sockets.emit(user.newMessage, conversation)
  //   })
  //   .catch((err) => console.error(err));
  // })

  socket.on(join.room, (joinroom: ISchema.JoinRoom) => {
    socket.join(joinroom.conversationId);
  })

  socket.on(join.group, (joingroup: ISchema.JoinGroup) => {
    console.log(joingroup);
    createGroupConversation(joingroup)
    .then((conversation) =>
      io.sockets.emit(join.room, conversation)
    )
    .catch(err => console.error(err))
  })

  socket.on('disconnect', () => console.log(`User ${username} disconnected`))
}