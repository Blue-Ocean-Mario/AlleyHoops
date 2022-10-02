import { useState } from 'react';
import io from 'socket.io-client';
import MessageRoom from './MessageRoom.js';

// define connection
const socket = io.connect('http://localhost:3001');

export default function Dropdown() {
  const [mesRms, setMesRms] = useState([]);

  const joinRoom = async (e) => {
    e.preventDefault();
    const room = e.target.elements.jr.value;
    socket.emit('join', room);
    const rms = [...mesRms];
    rms.push(room);
    await setMesRms(rms);
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
      <form onSubmit={joinRoom}>
        <input name='jr' placeholder='join room' />
        <button>Join Room</button>
      </form>
    </div>
  );
}
