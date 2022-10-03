import { Socket } from 'socket.io';
import { message, room, user } from '../Utilities/socket_listeners'
import { getConversationsFor } from './controller_socket';
import { io } from '../server';

export async function onConnection (socket: Socket | any) {
  console.log(`User ${socket.id} connected`)

  socket.join(socket.username);

  // On connection, retrieves all conversations of user from db and sends to client
  // Joins socket to all conversation rooms
  await getConversationsFor(socket.username)
    .then((results) =>  {
      const conversations = Object.values(results.conversations)
      conversations.forEach((convo:any) => socket.join(convo.id))
      io.to(socket.username).emit(user.getConversations, results.conversations)
    })

  socket.on(user.directMessage, (data: any) => {
    // expects data to have conversationID property

    socket.broadcast.emit(user.directMessage, () => {

    })
  })

  socket.on('disconnect', () => console.log(`User ${socket.id} disconnected`))
}