import { Container } from '@mui/system';
import { Outlet } from 'react-router';
import ButtonAppBar from '../components/ButtonAppBar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Icon } from '@iconify/react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// import { Logo } from '../components/Logo';
import Logo from '../components/Logo';

function App() {

  return (
    <div>
      <Container
      sx={{justifyContent: 'center', backgroundColor: 'black', pt: "10px", display: { xs: 'none', md: 'block' }}} 
      align='center'
      maxWidth='false'      
      >
        <Logo preserveAspectRatio="xMaxYMid meet" viewBox="-2600 0 6400 400"/>
      </Container>
      <ButtonAppBar sx={{height: 5000}}/>
      <Outlet/>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation sx={{bgcolor: '#000000', justifyContent: 'center', display: 'flex', alignItems: 'end'}}>
          <BottomNavigationAction 
          href='https://www.instagram.com/buncker_band/'
          rel='noopener noreferrer' 
          target="_blank"
          sx={{maxWidth: 5}} 
          label="Instagram" 
          icon={<InstagramIcon color='tertiary' />} 
          />
          <BottomNavigationAction 
          href='https://www.facebook.com/bunckerband'
          rel='noopener noreferrer' 
          target="_blank"
          sx={{maxWidth: 5}} 
          label="Instagram" 
          icon={<FaceBookIcon color='tertiary' />} 
          />
          <BottomNavigationAction 
          href='https://music.apple.com/us/artist/buncker/1632194224'
          rel='noopener noreferrer' 
          target="_blank"
          sx={{maxWidth: 5}} 
          label="Instagram" 
          icon={<AppleIcon color='tertiary' />} 
          />
          <BottomNavigationAction 
          href='https://open.spotify.com/artist/32AzoHOeLqfDuKblbulYFS'
          rel='noopener noreferrer' 
          target="_blank"
          sx={{maxWidth: 5}}
          style={{ fontSize: '24px' }} 
          label="Instagram" 
          icon={<Icon icon="mdi:spotify" color='#fafafa' />} 
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
