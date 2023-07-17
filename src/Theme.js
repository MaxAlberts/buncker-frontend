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
        },
    },
    palette: {
      primary: {
          main: '#000000',
      },
      secondary: {
          main: '#607d8b',
      },
      tertiary: {
          main: '#fafafa',
          contrastText: '#607d8b'
      },
      background: {
          default: '#fafafa',
      }
    },
});

export { theme }