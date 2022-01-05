import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Box, Badge } from '@material-ui/core';

import CmtAvatar from '../CmtAvatar';
import useStyles from './CmtObjectSummary.style';

const CmtObjectSummary = ({
  align,
  anchorOrigin,
  showItemBadge,
  avatar,
  avatarProps,
  badge,
  badgeProps,
  title,
  titleProps,
  subTitle,
  subTitleProps,
}) => {
  const classes = useStyles({ align, anchorOrigin });

  let badgeContent = {
    badgeContent: badge,
    color: 'secondary',
    ...badgeProps,
  };

  if (typeof badge !== 'string') {
    const node = <div className={clsx(classes.badgeRoot, 'Cmt-badge')}>{badge}</div>;
    badgeContent = { badgeContent: node, ...badgeProps };
  }

  const getAvatarComponent = () => {
    if (showItemBadge) {
      if (typeof avatar === 'string') {
        return <CmtAvatar src={avatar} alt={title} {...avatarProps} />;
      }
      return avatar;
    }

    return (
      <RenderBadge {...{ badge, anchorOrigin, badgeContent, classes }}>
        {typeof avatar === 'string' ? <CmtAvatar src={avatar} alt={title} {...avatarProps} /> : avatar}
      </RenderBadge>
    );
  };

  const componentContent = () => {
    return (
      <div className={clsx(classes.root, align)}>
        {getAvatarComponent()}
        <div className={clsx(classes.userInfo, 'Cmt-user-info')}>
          <Box component="p" className={clsx(classes.title, 'Cmt-title')} {...titleProps}>
            {title}
          </Box>
          <Box component="p" className={clsx(classes.subTitle, 'Cmt-sub-title')} {...subTitleProps}>
            {subTitle}
          </Box>
        </div>
      </div>
    );
  };

  const getComponent = () => {
    if (showItemBadge) {
      return <RenderBadge {...{ badge, anchorOrigin, badgeContent, classes }}>{componentContent()}</RenderBadge>;
    }
    return componentContent();
  };

  return getComponent();
};

const RenderBadge = ({ badge, badgeContent, anchorOrigin, classes, children }) => {
  return badge ? (
    <Badge
      className={clsx(classes.badgeAvatarRoot, 'Cmt-badge-avatar', anchorOrigin.vertical, anchorOrigin.horizontal)}
      {...badgeContent}
      anchorOrigin={anchorOrigin}>
      {children}
    </Badge>
  ) : (
    children
  );
};

CmtObjectSummary.prototype = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  avatarProps: PropTypes.object,
  badgeProps: PropTypes.object,
  showItemBadge: PropTypes.bool,
  align: PropTypes.string,
  anchorOrigin: PropTypes.object,
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
};

CmtObjectSummary.defaultProps = {
  align: 'horizontal',
  showItemBadge: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

export default React.memo(CmtObjectSummary);
