import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                list: {
                    '&[role="menu"]': {
                        backgroundColor: '#000000'
                    },
                },
            },
        }
    },
    palette: {
      primary: {
          main: '#000000',
      },
      secondary: {
          main: '#282a36',
      },
      tertiary: {
          main: '#fafafa',
          contrastText: '#607d8b'
      },
      background: {
        //   default: '#525462',
        default: '#282a36'
      }
    },
});

export { theme }