import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

export default function ButtonAppBar() {
  const buttonSX = {
    mx: 1, 
    fontSize: '20px'
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Box
      sx={{display: { xs: 'block', md: 'none' }}}
      >
        <Toolbar
        sx={{justifyContent: 'left'}}
        >
          <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant='text'
          color='tertiary'
          sx={buttonSX}
          >
            <MenuIcon/>
          </Button>
          <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Box>
      
      <Box
      sx={{display: { xs: 'none', md: 'block' }}}
      >
        <Toolbar
        sx={{justifyContent: 'center'}}
        >
          <Button
          component={Link}
          to={'/home'}
          variant='text'
          color='tertiary'
          sx={buttonSX}
          >
            <HomeIcon/>
          </Button>
          <Button
          component={Link}
          to={'/band-members'}
          variant='text'
          color='tertiary'
          sx={buttonSX}
          >
            BandMembers
          </Button>
          <Button
          component={Link}
          to={'/tour'}
          variant='text'
          color='tertiary'
          sx={buttonSX}
          >
            Tour
          </Button>
          <Button
          component={Link}
          to={'/media'}
          variant='text'
          color='tertiary'
          sx={buttonSX}
          >
            Media
          </Button>
        </Toolbar>
      </Box>
      
    </AppBar>
  );
}
