import React, { useState } from "react";
import LoginView from "./Login/LoginView.js";
import Dropdown from "../src/components/Messages/Messages.js";
import NavBar from "./components/NavBar.js";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const serverURL = "http://localhost:3001";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      <NavBar />
      {!userId && <LoginView login={setUserId} userId={userId} />}
      {userId && (
        <div>
          <Dropdown />
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;
