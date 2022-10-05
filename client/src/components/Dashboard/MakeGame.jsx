import { useState } from 'react';
import './MakeGame.css';
import StartGameImg from '../../assets/images/StartGameImg.png';
import { TextInput, Textarea, Button } from '@mantine/core';
import { TimeInput, DatePicker } from '@mantine/dates';
import 'dayjs/locale/en';
import moment from 'moment';

// add animation for forms to slide out on closing
const MakeGame = ({ setFormOpen, userId }) => {
  const [date, setDate] = useState ('');
  const [startTime, setStartTime] = useState('');
  const handleSubmit = () => {
    // TODO
    // extract, validate, formate, send form
    let body = {
      eventName: document.getElementById('game-name').value,
      location: document.getElementById('location').value,
      date: date,
      // startTime: moment(date).add(startTime.getTime()).format("dddd, MMMM Do YYYY, h:mm:ss a"),
      startTime: startTime,
      endTime: document.getElementById('end-time').value,
      userId: userId,
    }
    console.log('BODY OF FORM', body);
    // setFormOpen(false);

  }
  return (
    <>
      <div id='left-form-panel'
        onClick={()=>setFormOpen(false)}
        >
        <img src={StartGameImg} alt='basketball img with text start game'></img>
      </div>
      <div id='right-form-panel'>
        <div id='form'>
          <TextInput
            placeholder='name of the game'
            label='Game Name:'
            id='game-name'
            value='Capitol Park'
            // withAsterisk
          />
          {/* can we integrate google maps here? */}
          <TextInput
            placeholder='address'
            label='Location:'
            id='location'
            value='800 Peter Pan Ave, San Jose, CA 95116'
          />
          <DatePicker
            placeholder="Pick a date"
            label="Date"
            id='date'
            value={date}
            onChange={(value) => {
              setDate(value);
              setStartTime(value);
            }}

          />
          <TimeInput
            label='Start Time'
            id='start-time'
            format='12'
            amLabel="am"
            pmLabel="pm"
            value={startTime}
            onChange={setStartTime}
          />
          <TimeInput
            label='End Time'
            id='end-time'
            format='12'
            amLabel="am"
            pmLabel="pm"
          />
          <Textarea
            placeholder='add some description'
            label='Description'
            id='game-description'
          />
          <Button
          //later: change color
          variant='light'
          onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default MakeGame;