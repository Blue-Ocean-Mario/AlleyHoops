import { SimpleGrid, Grid, Avatar, Text, Button } from '@mantine/core';
import bbimg from '../../assets/images/basketballicon.png';
// eslint-disable-next-line
import ball from './ball.css';

export default function Profile({ profile, page }) {
  const { dribbling, dunking, passing, shooting } = profile.stats || 0;
  const bbSty = {
    width: '25px',
    height: '25px',
  };
  return (
    <div>
      <Grid m='5%'>
        <Avatar m='auto' radius={100} size={100} src={profile.picture} />
        <div>
          <Text weight='bolder'>{profile.username}</Text>
          <Text>City: {profile.city}</Text>
          <Text>State: {profile.state}</Text>
          <Text>Games Attended: 43</Text>
          <Text>Prefered Role: Guard</Text>
          <Text>Height: 6'6"</Text>
          {page === 'frnd' ? (
            <Button>Add/Remove Friend</Button>
          ) : (
            <Button>Edit Profile</Button>
          )}
        </div>
      </Grid>
      <SimpleGrid m='5%'>
        <Text size={20} m='auto' weight={'bolder'}>
          Skills
        </Text>
        <Grid ml='xs'>
          <Text weight='bolder' sx={{ width: '85px' }}>
            Overall:
          </Text>
          <Text weight='bolder' ml='xs' sx={{ textTransform: 'capitalize' }}>
            {profile.overallSkill}
          </Text>
        </Grid>
        <Grid ml='xs'>
          <Text sx={{ width: '85px' }}>Dunkability</Text>
          {[...Array(dunking)].map((num, i) => (
            <img
              src={bbimg}
              alt='bbimg'
              style={bbSty}
              className={`roll${i}`}
              key={i}
            />
          ))}
        </Grid>
        <Grid ml='xs'>
          <Text sx={{ width: '85px' }}>Defense</Text>
          {[...Array(5)].map((num, i) => (
            <img
              src={bbimg}
              alt='bbimg'
              style={bbSty}
              className={`roll${i}`}
              key={i}
            />
          ))}
        </Grid>
        <Grid ml='xs'>
          <Text sx={{ width: '85px' }}>Shooting</Text>
          {[...Array(shooting)].map((num, i) => (
            <img
              src={bbimg}
              alt='bbimg'
              style={bbSty}
              className={`roll${i}`}
              key={i}
            />
          ))}
        </Grid>
        <Grid ml='xs'>
          <Text sx={{ width: '85px' }}>Dribbling</Text>
          {[...Array(dribbling)].map((num, i) => (
            <img
              src={bbimg}
              alt='bbimg'
              style={bbSty}
              className={`roll${i}`}
              key={i}
            />
          ))}
        </Grid>
        <Grid ml='xs'>
          <Text sx={{ width: '85px' }}>Passing</Text>
          {[...Array(passing)].map((num, i) => (
            <img
              src={bbimg}
              alt='bbimg'
              style={bbSty}
              className={`roll${i}`}
              key={i}
            />
          ))}
        </Grid>
      </SimpleGrid>
    </div>
  );
}
