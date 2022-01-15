import { Fonts } from '../@jumbo/constants/ThemeOptions';
import { blue, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

var theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
  direction: 'ltr',
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
      dark: '#020202',
    },
    primary: blue,
    secondary: indigo,
    sidebar: {
      bgColor: '#fff',
      textColor: 'rgba(0, 0, 0, 0.6)',
      textDarkColor: 'rgba(0, 0, 0, 0.87)',
      textActiveColor: '#6200EE',
      navHoverBgColor: 'rgb(182, 196, 207)',
      navActiveBgColor: 'rgb(209, 218, 225)',
      borderColor: 'rgba(33, 33, 33, 0.08)',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f4f4f7',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.3)',
      white: '#fff',
    },
    btn: {
      hover: 'rgba(0, 0, 0, 0.08)',
    },
    lightBtn: {
      bgColor: '#f5f5f5',
      textColor: 'rgba(0, 0, 0, 0.38)',
    },
    borderColor: {
      main: 'rgba(0, 0, 0, 0.06)',
      dark: 'rgba(0, 0, 0, 0.12)',
    },
    popupColor: {
      main: '#fff',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: Fonts.PRIMARY,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 'bold',
    fontWeightExtraBold: 800,
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          letterSpacing: 1.25,
          fontSize: 13,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCardLg: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
});

const defaultTheme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 20,
      fontWeight: 'bold',
      [theme.breakpoints.up('md')]: {
        fontSize: 22,
      },
    },
    h2: {
      fontSize: 18,
      fontWeight: 'bold',
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
      [theme.breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    h4: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
    },
    h6: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0.25,
    },
  },
});

export default defaultTheme;
