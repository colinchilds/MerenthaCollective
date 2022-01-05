import React from 'react';
import clsx from 'clsx';
import { alpha, darken, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import AppsMenu from '../AppsMenu';
import HeaderMessages from '../HeaderMessages';
import HeaderNotifications from '../HeaderNotifications';
import LanguageSwitcher from '../../LanguageSwitcher';
import Logo from '../../Logo';
import SearchPopover from '../../SearchPopover';
import SidebarToggleHandler from '../../../../../../@coremat/CmtLayouts/Horizontal/SidebarToggleHandler';
import UserDropDown from '../../UserDropDown';
import GlobalSearchForm from '../../GlobalSearchForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: 10,
    padding: 0,
    '& .Cmt-appIcon': {
      color: theme.palette.text.secondary,
      '&:hover, &:focus': {
        color: darken(theme.palette.text.secondary, 0.2),
      },
      [theme.breakpoints.down('xs')]: {
        padding: 7,
      },
    },
  },
  langRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: alpha(theme.palette.common.dark, 0.15),
    },
  },
  searchIcon: {
    [theme.breakpoints.down('xs')]: {
      padding: 9,
    },
  },
}));

const HeaderTop = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
      <Logo mr={{ xs: 2, sm: 4, lg: 6, xl: 8 }} />
      <Hidden smDown>
        <GlobalSearchForm />
      </Hidden>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <Hidden mdUp>
          <SearchPopover iconClassName={clsx(classes.searchIcon, 'Cmt-searchIcon')} />
        </Hidden>
        <AppsMenu />
        <HeaderMessages />
        <HeaderNotifications />
        <div className={clsx(classes.langRoot, 'Cmt-i18n-switch')}>
          <LanguageSwitcher />
        </div>
        <UserDropDown />
      </div>
    </Toolbar>
  );
};

export default HeaderTop;
