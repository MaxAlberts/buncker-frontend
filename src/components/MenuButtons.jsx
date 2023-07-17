import { Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import * as React from 'react'

export default function MenuButtons({buttonSX}) {
    return(
      <div>
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
      </div>
      )
}