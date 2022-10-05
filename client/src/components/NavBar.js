import { Tabs, Text } from '@mantine/core';
import img from '../assets/images/AlleyHoopsGreen.png';

const sty = {
  '&:hover': { backgroundColor: '#fc8025' },
  color: 'white',
  fontWeight: 'bolder',
  fontSize: 'larger',
};

const headSty = {
  backgroundColor: '#0d5f65',
  color: 'white',
  fontWeight: 'bolder',
  fontSize: '35px',
};

export default function NavBar({ userId, page, setPage }) {
  return (
    <Tabs
      color='orange'
      sx={{ backgroundColor: '#0d5f65' }}
      defaultValue='games'>
      <Tabs.List>
        <img src={img} alt='IMG NOT FOUND' />
        {page === 'login' && !userId ? (
          <Text m='auto' sx={headSty}>
            Login
          </Text>
        ) : (
          <>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='games'
              ml='auto'
              onClick={() => setPage('games')}>
              Games
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='friends'
              onClick={() => setPage('friends')}>
              Friends
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='findTeam'
              onClick={() => setPage('findTeam')}>
              Find teammates
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='profile'
              onClick={() => setPage('profile')}>
              Profile
            </Tabs.Tab>
          </>
        )}
      </Tabs.List>
    </Tabs>
  );
}
