// import axios from 'axios';
import '../styles/globals.css'
import Dropdown from '../src/components/Messages/Messages.js';
import GamePage from './components/GamePage/GamePage.js';

// const serverURL = 'http://localhost:3001';

export default function App({ Component, pageProps }) {
  // axios
  //   .get(serverURL)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <div className='App'>
      <Dropdown />
      <GamePage />
    </div>
  );
}
