import React, { useContext } from 'react';
import clsx from 'clsx';

import { useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './Sidebar.style';
import LayoutContext from '../LayoutContext';
import CmtDrawer from '../../CmtDrawer';
import SidebarThemeContext from '../SidebarThemeContext/SidebarThemeContext';

const CmtSidebarContent = ({ children, classes }) => {
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

const CmtDrawerContent = ({ children, classes }) => {
  const { isSidebarOpen, setSidebarOpen } = useContext(LayoutContext);
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
};

const CmtSidebar = ({ children, actionBar }) => {
  const { drawerBreakPoint, sidebarWidth, miniSidebarWidth, actionSidebarWidth, sidebarType } = useContext(LayoutContext);

  const { sidebarTheme } = useContext(SidebarThemeContext);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));

  const hasDrawer = sidebarType === 'drawer' || matches;

  const classes = useStyles({
    sidebarWidth,
    miniSidebarWidth,
    actionSidebarWidth,
    sidebarTheme,
  });

  if (hasDrawer) {
    return (
      <React.Fragment>
        {actionBar}
        <CmtDrawerContent classes={classes}>{children}</CmtDrawerContent>
      </React.Fragment>
    );
  } else if (actionBar) {
    return (
      <div className={clsx(classes.actionSidebarWrapper, 'Cmt-actionSidebarWrapper')}>
        {actionBar}
        <CmtSidebarContent classes={classes}>{children}</CmtSidebarContent>
      </div>
    );
  } else {
    return <CmtSidebarContent classes={classes}>{children}</CmtSidebarContent>;
  }
};

export default CmtSidebar;
