import React, { useState } from 'react';

import AppContext from './AppContext';
import defaultContext from './defaultContext';

const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.defaultLng);
  const [theme, setTheme] = useState(defaultContext.theme);
  const [themeType, setThemeType] = useState(defaultContext.themeType);

  const contextValue = React.useMemo(() => {
    return {
      locale,
      setLocale,
      theme,
      setTheme,
      themeType,
      setThemeType,
    };
  }, [locale, theme, themeType]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
