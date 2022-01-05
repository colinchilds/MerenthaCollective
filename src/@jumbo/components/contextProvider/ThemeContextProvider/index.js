import React from 'react';
import ThemeContext from './ThemeContext';

const defaultValue = {};

const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
