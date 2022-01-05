import React, { useState, useMemo, useEffect, useContext } from 'react';

import SidebarThemeContext from './SidebarThemeContext';
import { getBackgroundStyle, getOverLayStyle } from '../../CmtHelpers/JssHelper';
import AppContext from '../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import themeSidebarColor from './sidebarThemeColors';

const darkThemeSetting = {
  textColor: 'rgba(255, 255, 255, 0.7)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.3)',
  navActiveBgColor: 'green',
  borderColor: 'rgba(255, 255, 255, 0.2)',
};

const SidebarThemeProvider = ({ children }) => {
  const { themeType } = useContext(AppContext);
  const [activeTheme, setActiveTheme] = useState({
    ...themeSidebarColor[themeType],
    backgroundColor: '',
    backgroundImage: '',
    gradientDirection: '',
  });

  useEffect(() => {
    if (activeTheme.backgroundImage) {
      if (!activeTheme.backgroundColor) {
        setActiveTheme({
          ...activeTheme,
          ...darkThemeSetting,
          backgroundColor: '#000',
        });
      }
    } else {
      //this means no flat and gradient style and no background image
      if (activeTheme.backgroundColor === '#000') {
        setActiveTheme({
          ...activeTheme,
          ...themeSidebarColor[themeType],
          backgroundColor: '',
        });
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTheme.backgroundImage]);

  useEffect(() => {
    if (!activeTheme.backgroundColor && !activeTheme.backgroundImage) {
      setActiveTheme({
        ...themeSidebarColor[themeType],
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeType]);

  const sidebarContextValue = useMemo(() => {
    const backgroundStyle = getBackgroundStyle(
      activeTheme.backgroundColor,
      activeTheme.backgroundImage,
      activeTheme.gradientDirection,
    );
    const overlayStyle = getOverLayStyle({
      colors: activeTheme.backgroundColor,
      opacity: 0.6,
      direction: '180deg',
    });

    return {
      sidebarTheme: activeTheme,
      backgroundStyle: backgroundStyle,
      overlayStyle: overlayStyle,
      setSidebarTheme: setActiveTheme,
    };
  }, [activeTheme]);

  return <SidebarThemeContext.Provider value={sidebarContextValue}>{children}</SidebarThemeContext.Provider>;
};

export default SidebarThemeProvider;
