import React, { useState } from 'react';
import LoginView from './Login/LoginView.js';
import Dropdown from '../src/components/Messages/Messages.js';
import NavBar from './components/NavBar.js';

// const serverURL = 'http://localhost:3001';

function App() {
  //const divRef = useRef(true);
  const [userId, setUserId] = useState(true);

  return (
    <div className='App'>
      <NavBar />
      {!userId && <LoginView login={setUserId} userId={userId} />}
      {userId && (
        <div>
          <Dropdown />
        </div>
      )}
    </div>
  );
}

export default App;
