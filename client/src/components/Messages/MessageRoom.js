import { useState, useEffect } from 'react';

export default function MessageRoom({ rm, socket }) {
  const [mes, setMes] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      if (data.room === rm) {
        const temp = [...mes];
        temp.unshift(data);
        setMes(temp);
      }
    });
  }, [mes, socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    const t = { room: rm, message: e.target.elements.input.value };
    socket.emit('send_message', t);
  };

  const sty2 = {
    backgroundColor: 'lightblue',
    border: '1px solid lightgray',
    borderRadius: '10px',
  };

  return (
    <div style={sty2}>
      <h3>{rm}</h3>
      {mes.map((m, ind) => (
        <div key={`${m.message}${ind}`}>{m.message}</div>
      ))}
      <form onSubmit={sendMessage}>
        <input name='input' placeholder='Type here' />
        <button>Send</button>
      </form>
    </div>
  );
}
