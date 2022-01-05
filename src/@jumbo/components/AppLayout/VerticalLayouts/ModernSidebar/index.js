import React, { useContext } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';

import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';

import SideBar from '../../partials/SideBar';
import ContentLoader from '../../../ContentLoader';
import ActionSideBar from './ActionSideBar';
import Logo from '../../partials/Logo';
import { THEME_TYPES } from '../../../../constants/ThemeOptions';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const useStyles = makeStyles(theme => ({
  sidebarHeader: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      height: 72,
    },
  },
}));

const layoutOptions = {
  sidebarType: defaultContext.sidebarType,
  isSidebarFixed: defaultContext.isSidebarFixed,
  actionSidebarWidth: 80,
  layoutStyle: defaultContext.layoutType,
};

const ModernSideBar = ({ children, className }) => {
  const classes = useStyles();

  const { themeType } = useContext(AppContext);

  return (
    <CmtVerticalLayout
      className={clsx('Cmt-modernLayout', className)}
      layoutOptions={layoutOptions}
      sidebar={
        <CmtSidebar actionBar={<ActionSideBar />}>
          <Hidden mdDown>
            <Logo color={themeType !== THEME_TYPES.LIGHT ? 'white' : 'dark'} className={classes.sidebarHeader} />
          </Hidden>
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

export default ModernSideBar;
