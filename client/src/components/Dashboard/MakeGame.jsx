import './MakeGame.css';
import StartGameImg from '../../assets/images/StartGameImg.png';
import { TextInput, Textarea, Button } from '@mantine/core';
import { TimeRangeInput, DatePicker } from '@mantine/dates';
import 'dayjs/locale/en';

const MakeGame = ({ setFormOpen }) => {

  const handleSubmit = () => {
    // TODO
    // extract, validate, formate, send form
    setFormOpen(false);

  }
  return (
    <>
      <div id='left-form-panel'>
        <img src={StartGameImg} alt='basketball img with text start game'></img>
      </div>
      <div id='right-form-panel'>
        <div id='form'>
          <TextInput
            placeholder='name of the game'
            label='Game Name:'
            // withAsterisk
          />
          {/* can we integrate google maps here? */}
          <TextInput
            placeholder='address'
            label='Location:'
          />
          <DatePicker
            placeholder="Pick a date"
            label="Date"
          />
          <TimeRangeInput
            label='Start-End Time'
          />
          <Textarea
            placeholder='add some description'
            label='Description'
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