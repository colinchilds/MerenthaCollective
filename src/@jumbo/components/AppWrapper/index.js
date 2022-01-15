import React, { useContext, useMemo } from 'react';

import { create } from 'jss';

import ThemeProvider from '@mui/styles/ThemeProvider';
import { createTheme, StyledEngineProvider } from '@mui/material/styles';
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';
import CssBaseline from '@mui/material/CssBaseline';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import AppLayout from '../AppLayout';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins] });

const AppWrapper = ({ children }) => {
  const { theme } = useContext(AppContext);

  const muiTheme = useMemo(() => {
    var t = createTheme(theme);
    console.log(t);
    return t;
  }, [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <AppLayout>{children}</AppLayout>
        </StylesProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppWrapper;
