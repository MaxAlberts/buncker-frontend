import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Link
          to='/band-members'
          >
            <Button
            variant='contained'
            color='secondary'
            sx={{mx: 1}}
            >
              BandMembers
            </Button>
          </Link>
          <Link
          to='/home'
          >
            <Button
            variant='contained'
            color='secondary'
            sx={{mx: 1}}
            >
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
