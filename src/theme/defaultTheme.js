import { Fonts } from '../@jumbo/constants/ThemeOptions';
import { blue, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const baseThemeOptions = {
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
};

const lightPalette = {
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
};

const darkPalette = {
  mode: 'dark',
  common: {
    black: '#000',
    white: '#fff',
    dark: '#fff',
  },
  primary: blue,
  secondary: indigo,
  sidebar: {
    bgColor: '#1a1a2e',
    textColor: 'rgba(255, 255, 255, 0.7)',
    textDarkColor: '#fff',
    textActiveColor: '#90caf9',
    navHoverBgColor: 'rgba(144, 202, 249, 0.12)',
    navActiveBgColor: 'rgba(144, 202, 249, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    paper: '#1e1e2f',
    default: '#16161f',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.6)',
    disabled: 'rgba(255, 255, 255, 0.38)',
    hint: 'rgba(255, 255, 255, 0.3)',
    white: '#fff',
  },
  btn: {
    hover: 'rgba(255, 255, 255, 0.08)',
  },
  lightBtn: {
    bgColor: '#2d2d44',
    textColor: 'rgba(255, 255, 255, 0.38)',
  },
  borderColor: {
    main: 'rgba(255, 255, 255, 0.08)',
    dark: 'rgba(255, 255, 255, 0.16)',
  },
  popupColor: {
    main: '#1e1e2f',
  },
};

const createAppTheme = (isDark = false) => {
  const palette = isDark ? darkPalette : lightPalette;

  const baseTheme = createTheme({
    ...baseThemeOptions,
    palette,
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
            boxShadow: isDark
              ? '0px 1px 3px rgba(0, 0, 0, 0.4), 0px 2px 1px rgba(0, 0, 0, 0.3), 0px 1px 1px rgba(0, 0, 0, 0.35)'
              : '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          textColorPrimary: {
            color: isDark ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? '#1e1e2f' : '#FFFFFF',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? '#1e1e2f' : '#FFFFFF',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            '& .MuiTableCell-head': {
              backgroundColor: isDark ? '#252538' : '#f5f5f5',
              color: isDark ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottomColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  return createTheme(baseTheme, {
    typography: {
      h1: {
        fontSize: 20,
        fontWeight: 'bold',
        [baseTheme.breakpoints.up('md')]: {
          fontSize: 22,
        },
      },
      h2: {
        fontSize: 18,
        fontWeight: 'bold',
        [baseTheme.breakpoints.up('md')]: {
          fontSize: 20,
        },
      },
      h3: {
        fontSize: 16,
        fontWeight: 'bold',
        [baseTheme.breakpoints.up('md')]: {
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
};

export const lightTheme = createAppTheme(false);
export const darkTheme = createAppTheme(true);

export default lightTheme;
