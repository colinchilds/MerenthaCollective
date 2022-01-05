import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AppContext from './AppContext';
import defaultContext from './defaultContext';
import { darkTheme, lightTheme, semiDarkTheme } from '../../../../theme/themeColors';

const initialThemeValue = defaultContext.theme;
const otherThemes = {
  light: lightTheme,
  'semi-dark': semiDarkTheme,
  dark: darkTheme,
};

const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.defaultLng);
  const [theme, setTheme] = useState(initialThemeValue);
  const [themeType, setThemeType] = useState(defaultContext.themeType);
  const [layout, setLayout] = useState(defaultContext.layout);
  const [cardRadius, setCardRadius] = useState(defaultContext.theme.overrides.MuiCard.root.borderRadius);
  const [direction, setDirection] = useState(initialThemeValue.direction || 'rtl');
  const [showTourGuide, setTourGuideStatus] = useState(false);

  const contextValue = React.useMemo(() => {
    return {
      locale,
      setLocale,
      theme,
      setTheme,
      layout,
      setLayout,
      themeType,
      setThemeType,
      cardRadius,
      setCardRadius,
      direction,
      setDirection,
      showTourGuide,
      setTourGuideStatus,
    };
  }, [locale, theme, themeType, layout, direction, showTourGuide, cardRadius]);

  useEffect(() => {
    setTheme(prevState => ({
      ...prevState,
      palette: {
        ...prevState.palette,
        ...otherThemes[themeType].palette,
      },
      overrides: {
        ...prevState.overrides,
        ...otherThemes[themeType].overrides,
      },
    }));
  }, [themeType]);

  useEffect(() => {
    setTheme(prevState => ({
      ...prevState,
      overrides: {
        ...prevState.overrides,
        MuiCard: {
          ...prevState.overrides.MuiCard,
          root: {
            ...prevState.overrides.MuiCard.root,
            borderRadius: cardRadius,
          },
        },
      },
    }));
  }, [cardRadius]);

  useEffect(() => {
    setTheme(prevState => ({
      ...prevState,
      direction: direction,
    }));
    document.body.setAttribute('dir', direction);
  }, [direction]);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('theme-type')) {
      setThemeType(params.get('theme-type'));
    }

    if (params.get('layout')) {
      setLayout(params.get('layout'));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
