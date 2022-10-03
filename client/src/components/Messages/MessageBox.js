import React, { useState } from 'react';
// import WebSocket from 'ws';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

export default function Dropdown() {

  const [message, setMessage] = useState('');

  function filterMessage (message) {
    return message.split(' ').length > 0;
  }

  function sendMessage () {
    if (filterMessage(message)) {
      socket.emit('send_message', {
        message: 'hello',
      })
    }
  }

  function handleInput (e) {
    setMessage(e.target.value);
  }

  function handleKeyDown (e) {
    return e.key === 'Enter' ? sendMessage() : null;
  }

  return (
    <div>
      <div className='message-history'>

      </div>
      <input
        placeholder='Type here'
        value={message}
        onChange={(e) => handleInput(e)}
        onKeyPress={handleKeyDown}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
