import io from 'socket.io-client';

// define connection
const socket = io.connect('http://localhost:3001');

export default function Dropdown() {
  const sendMessage = () => {
    socket.emit('send_message', {
      message: 'hello',
    });
  };

  return (
    <div>
      <input placeholder='Type here' />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
