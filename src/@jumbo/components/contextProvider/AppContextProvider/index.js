import React, { useState } from 'react';

import AppContext from './AppContext';
import defaultContext from './defaultContext';

const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.defaultLng);
  const [theme, setTheme] = useState(defaultContext.theme);

  const contextValue = React.useMemo(() => {
    return {
      locale,
      setLocale,
      theme,
      setTheme,
    };
  }, [locale, theme]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
