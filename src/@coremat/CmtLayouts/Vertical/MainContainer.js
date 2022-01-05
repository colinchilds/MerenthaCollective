import React, { cloneElement, useContext, useEffect, useState } from 'react';

import clsx from 'clsx';

import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import LayoutContext from '../LayoutContext';
import useStyles from './MainContainer.style';
import { HEADER_TYPE } from '../../../@jumbo/constants/ThemeOptions';

const MainContainer = ({ header, sidebar, footer, children, className, ...rest }) => {
  const {
    headerType,
    footerType,
    sidebarType,
    isSidebarOpen,
    isSidebarFixed,
    miniSidebarWidth,
    sidebarWidth,
    actionSidebarWidth,
    drawerBreakPoint,
  } = useContext(LayoutContext);

  const theme = useTheme();
  const isDrawer = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));

  const [headerClasses, setHeaderClasses] = useState('');
  const [footerClasses, setFooterClasses] = useState('');
  const [sidebarClasses, setSidebarClasses] = useState('');

  const classes = useStyles({
    miniSidebarWidth,
    sidebarWidth,
    actionSidebarWidth,
    drawerBreakPoint,
  });

  useEffect(() => {
    if (!header) setHeaderClasses('');
    else if (headerType === HEADER_TYPE.FIXED) setHeaderClasses('Cmt-fixedHeaderLayout');
    else setHeaderClasses('');
  }, [header, headerType]);

  useEffect(() => {
    if (!footer) setFooterClasses('');
    else if (footerType === 'fixed') setFooterClasses('Cmt-FixedFooterLayout');
    else setFooterClasses('');
  }, [footer, footerType]);

  useEffect(() => {
    const newClasses = [];
    if (!sidebar) newClasses.push('');
    else if (sidebarType === 'drawer' || isDrawer) newClasses.push('Cmt-drawerLayout');
    else if (sidebarType === 'mini') newClasses.push(isSidebarOpen ? 'Cmt-fullMiniLayout' : 'Cmt-miniLayout');

    if (isSidebarFixed) newClasses.push('Cmt-sidebar-fixed');

    setSidebarClasses(clsx(newClasses));
  }, [sidebarType, isSidebarOpen, isDrawer, isSidebarFixed, sidebar]);

  return (
    <Box className={clsx(classes.appRoot, headerClasses, sidebarClasses, footerClasses, className)} {...rest}>
      <div className={classes.appInnerRoot}>
        <div className={classes.appMainContainer}>
          {sidebar}
          <div className={classes.appMain}>
            {header && cloneElement(header, { type: headerType })}
            {children}
            {footer && cloneElement(footer, { type: footerType })}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MainContainer;
