import React from 'react';

import clsx from 'clsx';

import { Hidden } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import SidebarToggleHandler from '../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler';

import SidebarHeader from '../../partials/SidebarHeader';
import SideBar from '../../partials/SideBar';
import ContentLoader from '../../../ContentLoader';
import Alerts from './Alerts';
import { HEADER_TYPE, SIDEBAR_TYPE } from '../../../../constants/ThemeOptions';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const useStyles = makeStyles(theme => ({
  minimalNoHeader: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '& .Cmt-toggle-menu': {
      color: theme.palette.text.primary,
      marginLeft: 15,
    },
  },
}));

const layoutOptions = {
  headerType: HEADER_TYPE.STATIC,
  sidebarType: SIDEBAR_TYPE.MINI,
  isSidebarFixed: defaultContext.isSidebarFixed,
  isSidebarOpen: false,
  miniSidebarWidth: 80,
  layoutStyle: defaultContext.layoutType,
};
const MinimalNoHeader = ({ className, children }) => {
  const classes = useStyles();

  return (
    <CmtVerticalLayout
      layoutOptions={layoutOptions}
      className={clsx('verticalMinimalNoHeaderLayout', className)}
      header={
        <CmtHeader className={classes.minimalNoHeader}>
          <Hidden lgUp>
            <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
          </Hidden>
          <Alerts />
        </CmtHeader>
      }
      sidebar={
        <CmtSidebar>
          <SidebarHeader />
          <SideBar />
        </CmtSidebar>
      }>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtVerticalLayout>
  );
};

export default MinimalNoHeader;
