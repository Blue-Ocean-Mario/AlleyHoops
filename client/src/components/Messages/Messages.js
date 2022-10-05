import { useState } from 'react';
import io from 'socket.io-client';
import MessageRoom from './MessageRoom.js';
import { user, join } from '../../Utilities/socket_listeners';

// define connection
const socket = io.connect('http://localhost:3001');

export default function Dropdown() {
  const [mesRms, setMesRms] = useState([]);

  // start group message
  const joinRoom = async (e) => {
    e.preventDefault();
    //     const arr = [
    //     "Brian",
    //     "James",
    //     "Alex",
    //     "Mary",
    //     "Alice"
    // ];

    //     const room = e.target.elements.jr.value;
    //         socket.emit(join.group, {conversationName: room,
    //   users: arr});
    //     const rms = [...mesRms];
    //     rms.push(room);
    //     await setMesRms(rms);
  };

  // start direct message
  const messageUser = async (e) => {
    e.preventDefault();
    //   const user = e.target.elements.jr.value;
    //   socket.emit(join.group, {conversationName: room,
    // users: arr});
    //   const rms = [...mesRms];
    //   rms.push(room);
    //   await setMesRms(rms);
  };

  const sty = {
    position: 'fixed',
    right: '0',
    zIndex: '2',
  };
  return (
    <div>
      <div style={sty}>
        {mesRms.map((rm, i) => (
          <MessageRoom key={i} rm={rm} socket={socket} />
        ))}
      </div>
      <form onSubmit={messageUser}>
        <input name='user' placeholder='username' />
        <button>Message User</button>
      </form>
      <form onSubmit={joinRoom}>
        <input name='jr' placeholder='join room' />
        <button>Join Room</button>
      </form>
    </div>
  );
}
