import React, { useImperativeHandle, useState, useEffect } from 'react';

import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import CmtContentHead from '../CmtTypography/CmtContentHead';
import CmtDropdownMenu from '../CmtDropdownMenu';
import { getBackgroundStyle, getSeparatorStyle } from '../CmtHelpers/JssHelper';

import useStyles from './CmtCardHeader.style';

const contentRef = React.createRef();

const ActionsMenu = ({ actions, actionHandler, icon }) => {
  return (
    <CmtDropdownMenu
      TriggerComponent={<IconButton size="small">{icon || <MoreVertIcon />}</IconButton>}
      items={actions}
      onItemClick={actionHandler}
    />
  );
};

const CmtCardHeader = React.forwardRef(function CmtCardHeader(props, ref) {
  const {
    icon,
    avatar,
    title,
    titleProps,
    subTitle,
    subTitleProps,
    actions,
    actionMenuClassName,
    actionHandleIcon,
    actionHandler,
    actionsPos,
    actionsShowOnHover,
    backgroundColor,
    gradientDirection,
    separator,
    alignCenter,
    children,
    className,
    ...rest
  } = props;

  const [showActions, setActionsVisibility] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const contentHeadProps = {
    icon,
    avatar,
    title,
    titleProps,
    subTitle,
    subTitleProps,
  };

  const backgroundStyles = getBackgroundStyle(backgroundColor, null, gradientDirection);
  const separatorStyles = getSeparatorStyle(separator);

  const classes = useStyles({ separatorStyles, contentWidth });

  let showHideActionClass = showActions ? classes.showActionMenu : classes.hideActionMenu;
  if (actionsPos === 'default') {
    showHideActionClass = showActions ? classes.showActionDefaultMenu : classes.hideActionDefaultMenu;
  }

  const headerRootClasses = alignCenter
    ? clsx(className, classes.headerRoot, classes.headerAlignCenter, separator.color ? 'Cmt-separator' : '')
    : clsx(className, classes.headerRoot, separator.color ? 'Cmt-separator' : '');

  const menuRootClasses = actionsShowOnHover
    ? clsx(classes.actionMenu, classes.actionMenuHover, 'Cmt-action-menu-hover', showHideActionClass, actionMenuClassName)
    : clsx(classes.actionMenu, 'Cmt-action-menu', actionMenuClassName);

  const menuRootActionsClasses = actionsShowOnHover
    ? actionsPos === 'default'
      ? classes.actionMenuDefault
      : ''
    : classes.actionMenuDefault;

  useImperativeHandle(ref, () => ({
    onHeaderMouseEntered: () => {
      if (actionsShowOnHover) setActionsVisibility(true);
    },
    onHeaderMouseLeft: () => {
      if (actionsShowOnHover) setActionsVisibility(false);
    },
  }));

  useEffect(() => {
    setContentWidth(contentRef.current ? contentRef.current.clientWidth : 0);
  }, [actionsPos, actionsShowOnHover]);

  return (
    <div className={clsx(headerRootClasses, 'Cmt-header-root')} style={backgroundStyles} {...rest}>
      {(icon || avatar || title || subTitle) && (
        <CmtContentHead titleStyle={classes.titleStyle} subTitleStyle={classes.subTitleStyle} {...contentHeadProps} />
      )}

      {(actions.length > 0 || children) && (
        <div ref={contentRef} className={clsx(menuRootActionsClasses, 'Cmt-action-default-menu')}>
          {children}
          {actions.length > 0 && (
            <div style={{ marginLeft: '8px' }} className={menuRootClasses}>
              <ActionsMenu actions={actions} actionHandler={actionHandler} icon={actionHandleIcon} />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

CmtCardHeader.propTypes = {
  icon: PropTypes.element,
  avatar: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  actions: PropTypes.array, //example: [{label: "Close", icon: "icon-slug", onClick: (func optional), ...}, ...]
  actionMenuClassName: PropTypes.string,
  actionHandleIcon: PropTypes.element,
  actionsPos: PropTypes.oneOf(['default', 'top-corner']),
  actionsShowOnHover: PropTypes.bool,
  actionHandler: PropTypes.func,
  alignCenter: PropTypes.bool,
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gradientDirection: PropTypes.string,
  separator: PropTypes.object,
  className: PropTypes.string,
};

CmtCardHeader.defaultProps = {
  title: '',
  subTitle: '',
  actions: [],
  actionsPos: 'default',
  actionsShowOnHover: false,
  actionMenuClassName: '',
  actionHandler: null,
  alignCenter: false,
  separator: { color: '', borderWidth: 0, borderStyle: 'solid' },
  className: '',
};

export default CmtCardHeader;
