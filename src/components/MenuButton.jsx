import { Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function MenuButton({link, buttonSX, child}) {
    if (child === 'Home') {
        <HomeIcon/>
    }
    return(
        <Button
        component={Link}
        to={link}
        variant='text'
        color='tertiary'
        sx={buttonSX}
        >
          {child}
        </Button>
        )
}