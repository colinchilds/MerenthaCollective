import React, { useState, useCallback } from 'react';

import AppContext from './AppContext';
import defaultContext from './defaultContext';
import { lightTheme, darkTheme } from '../../../../theme/defaultTheme';
import { THEME_TYPES } from '../../../constants/ThemeOptions';

const THEME_STORAGE_KEY = 'merentha-theme-mode';

const getInitialThemeMode = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.defaultLng);
  const [themeMode, setThemeModeState] = useState(getInitialThemeMode);

  const isDarkMode = themeMode === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;
  const themeType = isDarkMode ? THEME_TYPES.DARK : THEME_TYPES.LIGHT;

  const setThemeMode = useCallback((mode) => {
    setThemeModeState(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }, [themeMode, setThemeMode]);

  const contextValue = React.useMemo(() => {
    return {
      locale,
      setLocale,
      theme,
      themeType,
      themeMode,
      setThemeMode,
      toggleTheme,
      isDarkMode,
    };
  }, [locale, theme, themeType, themeMode, setThemeMode, toggleTheme, isDarkMode]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
