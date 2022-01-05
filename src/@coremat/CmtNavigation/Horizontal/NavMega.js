import React, { cloneElement, isValidElement, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { List, ListItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import NavMenuItem from './NavMenuItem';
import useStyles from './NavMega.style';
import { isUrlInChildren } from '../../CmtHelpers/JssHelper';

const RenderIcon = ({ icon }) => {
  const classes = useStyles();

  if (icon && isValidElement(icon)) {
    return cloneElement(icon, {
      className: clsx(classes.iconRoot, '.Cmt-iconRoot', '.Cmt-icon-root'),
    });
  }

  return null;
};

const NavMegaColumn = props => {
  const classes = useStyles();
  const { name, icon, children = [] } = props;
  const totalItems = useMemo(() => children.length, [children]);

  const MenuItemChildren = totalItems ? (
    <List component="div" disablePadding className={classes.navMegaColumnItems}>
      {children.map((item, index) => (
        <NavMenuItem {...item} key={index} />
      ))}
    </List>
  ) : null;

  const MenuCollapse = (
    <ListItem component="div" disableGutters className={clsx(classes.navMegaColumnInner, 'Cmt-navMegaColumnInner')}>
      {name && (
        <span className={classes.navMegaColumnLabel}>
          <RenderIcon icon={icon} />
          <span className={classes.navText}>{name}</span>
        </span>
      )}
      {MenuItemChildren}
    </ListItem>
  );

  return <div className={clsx(classes.navMegaColumn, 'Cmt-navMega-column')}>{MenuCollapse}</div>;
};

const NavMega = props => {
  const classes = useStyles();
  const history = useHistory();
  const { name, icon, children = [] } = props;
  const totalItems = children.length;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    const removeHistoryListening = history.listen(location => {
      if (isUrlInChildren(props, location.pathname)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });

    return () => {
      removeHistoryListening();
    };
  }, [props, history]);

  const MenuItemColumns = totalItems ? (
    <List component="div" disablePadding className={clsx(classes.navMegaColumnsWrapper, 'Cmt-navMegaColumnsWrapper')}>
      {children.map((item, index) => (
        <NavMegaColumn {...item} key={index} />
      ))}
    </List>
  ) : null;

  const MenuCollapse = (
    <ListItem
      component="div"
      disableGutters
      className={clsx(classes.navMegaBtn, 'Cmt-navMegaBtn', `${open ? 'active' : ''}`)}>
      <span className={classes.navMegaBtnInner}>
        <RenderIcon icon={icon} />
        <span className={classes.navText}>{name}</span>
        {/* Display the expand menu if the item has children */}
        {totalItems > 0 && !open && <ArrowDropDownIcon className={classes.navArrow} />}
        {totalItems > 0 && open && <ArrowDropUpIcon className={classes.navArrow} />}
        {/* Display an icon if any */}
      </span>
      {MenuItemColumns}
    </ListItem>
  );

  return (
    <div className={clsx(classes.navMega, 'Cmt-navMega', `Cmt-navMega-${totalItems}`, `${open ? 'active' : ''}`)}>
      {MenuCollapse}
    </div>
  );
};

export default NavMega;
