import React, { useContext } from 'react';

import clsx from 'clsx';

import { List } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import NavMenuItem from './NavMenuItem';
import NavCollapse from './NavCollapse';
import SidebarThemeContext from '../../CmtLayouts/SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles(theme => ({
  navHeader: {
    position: 'relative',
    padding: '24px 16px 20px 16px',
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 10,
    letterSpacing: 1.5,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  navSection: {
    position: 'relative',
    fontWeight: theme.typography.fontWeightRegular,
    '&:not(:first-child) .Cmt-navHeader': {
      borderTop: props => `solid 1px ${props.sidebarTheme.borderColor}`,
      marginTop: 10,
    },
    '&:not(:last-child)': {
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        borderBottom: props => `solid 1px ${props.sidebarTheme.borderColor}`,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
}));

const NavSection = props => {
  const { name, children = [] } = props;
  const isExpandable = children && children.length > 0;
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });

  const MenuCollapse = (
    <List component="div" className={clsx(classes.navHeader, 'Cmt-navHeader')}>
      {name}
    </List>
  );

  const MenuItemChildren = isExpandable ? (
    <List component="div" disablePadding>
      {children.map((item, index) => {
        switch (item.type) {
          case 'section':
            return <NavSection {...item} key={index} />;
          case 'collapse':
            return <NavCollapse {...item} key={index} />;
          default:
            return <NavMenuItem {...item} key={index} />;
        }
      })}
    </List>
  ) : null;

  return (
    <div className={classes.navSection}>
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  );
};

export default NavSection;
