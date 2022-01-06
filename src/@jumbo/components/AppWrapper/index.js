import React, { useContext, useMemo } from 'react';

import MomentUtils from '@date-io/moment';
import { create } from 'jss';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme, jssPreset, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import AppLayout from '../AppLayout';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins] });

const AppWrapper = ({ children }) => {
  const { theme } = useContext(AppContext);

  const muiTheme = useMemo(() => {
    return createTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <AppLayout>{children}</AppLayout>
        </StylesProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
