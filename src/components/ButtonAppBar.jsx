import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MENU_LIST } from '../entities/MenuList'
import MenuButton from '../components/MenuButton'
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import Logo from '../components/Logo';

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
      sx={{display: { xs: 'grid', md: 'none' }, gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'none' }, justifyContent: 'center'}}
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
          color='secondary'
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          >
            {
              MENU_LIST.map( pageNavigationItem =>
                <MenuItem onClick={handleClose}>
                  <MenuButton 
                  link={pageNavigationItem.linkName} 
                  buttonSX={buttonSX}
                  child={pageNavigationItem.displayName}
                  />
                </MenuItem>
              )
            }
          </Menu>
        </Toolbar>
        {/* <Logo preserveAspectRatio="xMaxYMid meet" viewBox="-1000 0 3400 400"/> */}
        <Logo preserveAspectRatio="xMaxYMid meet" viewBox="-350 -50 1800 500"/>
      </Box>
      
      <Box
      sx={{display: { xs: 'none', md: 'block' }}}
      >
        <Toolbar
        sx={{justifyContent: 'center'}}
        >
          {
            MENU_LIST.map( pageNavigationItem =>
              <MenuButton 
              link={pageNavigationItem.linkName} 
              buttonSX={buttonSX}
              child={pageNavigationItem.displayName}
              />
            )
          }
        </Toolbar>
      </Box>
      
    </AppBar>
  );
}
