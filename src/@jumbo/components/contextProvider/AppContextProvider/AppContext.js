import React from 'react';
import defaultContext from './defaultContext';

const AppContext = React.createContext({
  locale: defaultContext.defaultLng,
  setLocale: () => {},
});

export default AppContext;
