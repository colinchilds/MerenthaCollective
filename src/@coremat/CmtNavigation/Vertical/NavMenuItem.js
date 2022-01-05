import React, { cloneElement, isValidElement, useContext } from 'react';

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { List } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SidebarThemeContext from '../../CmtLayouts/SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles(theme => ({
  navMenuItem: {
    padding: '0 16px 0 0',
    position: 'relative',
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      paddingLeft: 16,
    },
  },
  navMenuLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '9px 16px 9px 32px',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: props => props.sidebarTheme.textColor,
    '&:hover, &:focus': {
      color: props => props.sidebarTheme.textDarkColor,
      backgroundColor: props => props.sidebarTheme.navHoverBgColor,
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: props => props.sidebarTheme.textDarkColor,
      },
    },
    '&.active': {
      color: props => props.sidebarTheme.textActiveColor,
      backgroundColor: props => props.sidebarTheme.navActiveBgColor,
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: props => props.sidebarTheme.textActiveColor,
      },
      '&:hover, &:focus': {
        '& .Cmt-nav-text, & .Cmt-icon-root': {
          color: props => props.sidebarTheme.textActiveColor,
        },
      },
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      justifyContent: 'center',
      padding: 0,
      height: 40,
      width: 40,
      borderRadius: '50%',
      marginLeft: 4,
      marginRight: 4,
    },
  },
  navText: {
    flex: 1,
    fontSize: 14,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      marginRight: 0,
    },
  },
}));

const NavMenuItem = props => {
  const { name, icon, link } = props;
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });

  const renderIcon = () => {
    if (icon && isValidElement(icon)) {
      return cloneElement(icon, {
        className: clsx(classes.iconRoot, 'Cmt-icon-root'),
      });
    }

    return null;
  };

  return (
    <List component="div" className={clsx(classes.navMenuItem, 'Cmt-nav-menu-item')}>
      <NavLink className={clsx(classes.navMenuLink, 'Cmt-nav-menu-link')} to={link}>
        {/* Display an icon if any */}
        {renderIcon()}
        <span className={clsx(classes.navText, 'Cmt-nav-text')}>{name}</span>
      </NavLink>
    </List>
  );
};

export default NavMenuItem;
