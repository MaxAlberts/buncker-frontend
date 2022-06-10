import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
        <AppBar position="sticky">
          <Toolbar
          sx={{justifyContent: 'center'}}
          >
              <Button
              component={Link}
              to={'/band-members'}
              variant='contained'
              color='secondary'
              sx={{mx: 1}}
              >
                BandMembers
              </Button>
              <Button
              component={Link}
              to={'/home'}
              variant='contained'
              color='secondary'
              sx={{mx: 1}}
              >
                Home
              </Button>
          </Toolbar>
        </AppBar>
  );
}
