import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const buttonSXDesktop = {
    mx: 1, 
    fontSize: '20px', 
    display: { xs: 'none', md: 'block' }
  }
  return (
        <AppBar position="sticky">
          <Toolbar
          sx={{justifyContent: 'center'}}
          >
            <Button
            component={Link}
            to={'/home'}
            variant='text'
            color='tertiary'
            sx={buttonSXDesktop}
            >
              <HomeIcon/>
            </Button>
            <Button
            component={Link}
            to={'/band-members'}
            variant='text'
            color='tertiary'
            sx={buttonSXDesktop}
            >
              BandMembers
            </Button>
            <Button
            component={Link}
            to={'/tour'}
            variant='text'
            color='tertiary'
            sx={buttonSXDesktop}
            >
              Tour
            </Button>
            <Button
            component={Link}
            to={'/media'}
            variant='text'
            color='tertiary'
            sx={buttonSXDesktop}
            >
              Media
            </Button>
          </Toolbar>
        </AppBar>
  );
}
