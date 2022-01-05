import React, { useContext, useMemo } from 'react';

import { IntlProvider } from 'react-intl';
import MomentUtils from '@date-io/moment';
import { create } from 'jss';
import rtl from 'jss-rtl';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme, jssPreset, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import AppLocale from '../../../i18n';
import AppLayout from '../AppLayout';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const AppWrapper = ({ children }) => {
  const { locale, theme } = useContext(AppContext);

  const muiTheme = useMemo(() => {
    return createTheme(theme);
  }, [theme]);

  return (
    <IntlProvider locale={AppLocale[locale.locale].locale} messages={AppLocale[locale.locale].messages}>
      <ThemeProvider theme={muiTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <StylesProvider jss={jss}>
            <CssBaseline />
            <AppLayout>{children}</AppLayout>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default AppWrapper;
