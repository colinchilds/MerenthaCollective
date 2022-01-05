import React, { useContext } from 'react';
import clsx from 'clsx';

import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

import LayoutContext from '../LayoutContext';
import CmtDrawer from '../../CmtDrawer';
import SidebarThemeContext from '../SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles(() => ({
  appSidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: props => props.sidebarWidth,
    height: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
    '.Cmt-drawer-sidebar &': {
      position: 'relative',
    },
    '& .scrollbar-container': {
      height: '100vh',
      width: '100%',
    },
  },
  appSidebarContent: {
    height: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundColor: props => props.sidebarTheme.bgColor,
    color: props => props.sidebarTheme.textColor,
    overflow: 'hidden',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
  },
  overlayRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
}));

const CmtSidebarContent = ({ classes, children }) => {
  const { backgroundStyle, overlayStyle } = useContext(SidebarThemeContext);

  return (
    <div className={clsx(classes.appSidebar, 'Cmt-sidebar')}>
      <div className={clsx(classes.appSidebarContent, 'Cmt-sidebar-content')} style={backgroundStyle}>
        {children}
        {overlayStyle && <div className={clsx(classes.overlayRoot, 'Cmt-Drawer-overlay')} style={overlayStyle} />}
      </div>
    </div>
  );
};

const CmtSidebar = props => {
  const { children } = props;
  const { isSidebarOpen, setSidebarOpen, drawerBreakPoint, sidebarWidth } = useContext(LayoutContext);

  const { sidebarTheme } = useContext(SidebarThemeContext);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));

  const classes = useStyles({ sidebarWidth, sidebarTheme });

  if (matches) {
    return (
      <CmtDrawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        classes={{
          paper: 'Cmt-drawer-sidebar',
        }}>
        <CmtSidebarContent classes={classes}>{children}</CmtSidebarContent>
      </CmtDrawer>
    );
  } else {
    return null;
  }
};

export default CmtSidebar;
