import React, { useEffect } from 'react';
// import WebSocket from 'ws';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');

// define connection
const connect = new WebSocket('ws://localhost:8082');

export default function Dropdown() {

  const sendMessage = () => {
    socket.emit('send_message', {
      message: 'hello',
    })
  }

  useEffect(() => {

  },)

  connect.addEventListener('message', (e) => {
    console.log(e);
  });
  const open = (e) => {
    e.preventDefault();
    connect.send('SOOOKIT');
  };

  return (
    <div>
      <input placeholder='Type here'/>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
