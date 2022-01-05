import React, { cloneElement, isValidElement, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { Collapse, List, ListItem } from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';

import NavSection from './NavSection';
import NavMenuItem from './NavMenuItem';
import SidebarThemeContext from '../../CmtLayouts/SidebarThemeContext/SidebarThemeContext';
import { isUrlInChildren } from '../../CmtHelpers/JssHelper';

const useStyles = makeStyles(theme => ({
  navCollapseBtn: {
    position: 'relative',
    padding: '0 16px 0 0',
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      paddingLeft: 16,
    },
  },
  navCollapse: {
    position: 'relative',
    '&.open': {
      '& .Cmt-navCollapseBtn': {
        color: props => props.sidebarTheme.textDarkColor,
      },
      '& .Cmt-iconRoot': {
        color: theme.palette.primary.main,
      },
    },
    '& .Cmt-navHeader': {
      paddingLeft: 36,
    },
  },

  navCollapseBtnInner: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '9px 16px 9px 32px',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    '&:hover, &:focus': {
      color: props => props.sidebarTheme.textDarkColor,
      backgroundColor: props => props.sidebarTheme.navHoverBgColor,
      '& .Cmt-iconRoot': {
        color: props => props.sidebarTheme.textDarkColor,
      },
    },
    '.Cmt-miniLayout &': {
      paddingRight: 13,
      paddingLeft: 13,
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      paddingRight: 16,
      paddingLeft: 32,
    },
  },
  navText: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0.25,
    whiteSpace: 'nowrap',
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
  },
  navArrow: {
    position: 'absolute',
    left: 8,
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)',
    fontSize: 16,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  navCollapseItem: {
    position: 'relative',
    '& .Cmt-icon-root': {
      transition: 'all 0.3s ease',
      transform: 'translateX(-100%)',
      opacity: 0,
      visibility: 'hidden',
      marginRight: 0,
    },
    '& .Cmt-nav-text': {
      transition: 'all 0.35s ease',
      marginLeft: -20,
    },
    '& .Cmt-nav-menu-link': {
      padding: '9px 16px 9px 70px',
      transition: 'all 0.3s ease',
      '&:hover, &:focus': {
        '& .Cmt-icon-root': {
          transform: 'translateX(0)',
          marginRight: 10,
          opacity: 1,
          visibility: 'visible',
        },
        '& .Cmt-nav-text': {
          marginLeft: 0,
        },
      },
      '&.active': {
        '& .Cmt-icon-root': {
          transform: 'translateX(0)',
          marginRight: 10,
          opacity: 1,
          visibility: 'visible',
        },
        '& .Cmt-nav-text': {
          marginLeft: 0,
        },
      },
      '.Cmt-miniLayout &': {
        paddingRight: 13,
        paddingLeft: 13,
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
        paddingRight: 16,
        paddingLeft: 70,
      },
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
}));

const NavCollapse = props => {
  const history = useHistory();
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });

  const { name, icon, children = [] } = props;
  const isExpandable = children.length;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderIcon = useCallback(() => {
    if (icon && isValidElement(icon)) {
      return cloneElement(icon, {
        className: classes.iconRoot,
      });
    }
    return null;
  }, [icon, classes]);

  const MenuCollapse = (
    <ListItem className={clsx(classes.navCollapseBtn, 'Cmt-navCollapseBtn')} button onClick={handleClick}>
      <span className={classes.navCollapseBtnInner}>
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && <IconExpandMore className={classes.navArrow} />}
        {isExpandable && open && <IconExpandLess className={classes.navArrow} />}
        {/* Display an icon if any */}
        {renderIcon()}
        <span className={classes.navText}>{name}</span>
      </span>
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse className={classes.navCollapseItem} in={open} timeout="auto">
      <List component="div" disablePadding>
        {children.map((item, index) => {
          switch (item.type) {
            case 'section':
              return <NavSection {...item} key={index} />;
            case 'collapse':
              return <NavCollapse {...item} key={index} />;
            case 'item':
              return <NavMenuItem {...item} key={index} />;
            default:
              return null;
          }
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <div className={clsx(classes.navCollapse, `${open ? 'open' : ''}`)}>
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  );
};

export default NavCollapse;
