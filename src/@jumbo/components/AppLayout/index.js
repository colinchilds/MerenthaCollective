import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import globalStyles from '../../../theme/GlobalCss';
import { useDispatch, useSelector } from 'react-redux';
import { AuhMethods } from '../../../services/auth';
import { CurrentAuthMethod } from '../../constants/AppConstants';
import { LAYOUT_TYPES } from '../../constants/ThemeOptions';
import VerticalDefault from './VerticalLayouts/VerticalDefault';
import VerticalMinimal from './VerticalLayouts/VerticalMinimal';
import MinimalNoHeader from './VerticalLayouts/MinimalNoHeader';
import ModernSideBar from './VerticalLayouts/ModernSidebar';
import HorizontalDefault from './HorizontalLayouts/HorizontalDefault';
import HorizontalDark from './HorizontalLayouts/HorizontalDark';
import HorizontalMinimal from './HorizontalLayouts/HorizontalMinimal';
import HorizontalTopMenu from './HorizontalLayouts/HorizontalTopMenu';

const useStyles = makeStyles(() => ({
  circularProgressRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AppLayout = ({ children }) => {
  const [showLayoutLoader, setLayoutLoader] = useState(true);
  const { layout } = useContext(AppContext);
  const { loadUser } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  globalStyles();

  useEffect(() => {
    dispatch(AuhMethods[CurrentAuthMethod].getAuthUser());
    setLayoutLoader(false);
  }, [dispatch]);

  if (showLayoutLoader || !loadUser) {
    return (
      <div className={classes.circularProgressRoot}>
        <CircularProgress />
      </div>
    );
  }

  if (['/signin', '/signup', '/forgot-password'].includes(location.pathname)) {
    return <div style={{ minHeight: '100vh', width: '100%', display: 'flex' }}>{children}</div>;
  }

  switch (layout) {
    case LAYOUT_TYPES.VERTICAL_DEFAULT: {
      return <VerticalDefault children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MINIMAL: {
      return <VerticalMinimal children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER: {
      return <MinimalNoHeader children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR: {
      return <ModernSideBar children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_DEFAULT: {
      return <HorizontalDefault children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_DARK: {
      return <HorizontalDark children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_MINIMAL: {
      return <HorizontalMinimal children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_TOP_MENU: {
      return <HorizontalTopMenu children={children} />;
    }
    default:
      return <VerticalDefault children={children} />;
  }
};

export default AppLayout;
