import React, { isValidElement } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, Typography } from '@material-ui/core';

import { CmtSubTitle, CmtTitle } from '../CmtTypography';
import useStyles from './index.style';
import CmtAvatar from '../CmtAvatar';

const CmtMediaObject = ({
  avatar,
  avatarPos,
  avatarProps,
  onBodyClick,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  actionsComponent,
  content,
  contentProps,
  footerComponent,
  footerComponentProps,
  children,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.mediaObject, className, 'Cmt-media-object')} {...rest}>
      {avatar && (
        <div
          className={clsx(
            {
              [classes.mediaImageTop]: avatarPos === 'top',
              [classes.mediaImageCenter]: avatarPos === 'center',
              [classes.mediaImageBottom]: avatarPos === 'bottom',
            },
            'Cmt-media-image',
          )}>
          <Box mr={3} clone>
            {isValidElement(avatar) ? (
              avatar
            ) : (
              <CmtAvatar className={clsx(classes.rootAvatar, 'Cmt-avatar')} src={avatar} {...avatarProps} />
            )}
          </Box>
        </div>
      )}
      <div className={clsx(classes.mediaBody, 'Cmt-media-body')} onClick={onBodyClick}>
        <div className={clsx(classes.mediaHeader, 'Cmt-media-header')}>
          <div className={clsx(classes.mediaHeaderContent, 'Cmt-media-header-content')}>
            {title && <CmtTitle content={title} {...titleProps} />}
            {subTitle && <CmtSubTitle content={subTitle} {...subTitleProps} />}
          </div>
          {actionsComponent && (
            <div className={clsx(classes.mediaActions, 'Cmt-media-actions', 'ml-3')}>{actionsComponent}</div>
          )}
        </div>
        {content && (
          <div className="mb-3">
            {typeof content === 'string' ? <Typography {...contentProps}>{content}</Typography> : content}
          </div>
        )}
        {children}
      </div>
      {footerComponent && (
        <Box ml={3} className={clsx(classes.mediaFooter, 'Cmt-media-footer')} {...footerComponentProps}>
          {footerComponent}
        </Box>
      )}
    </Box>
  );
};

CmtMediaObject.prototype = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  avatarPos: PropTypes.oneOf(['top', 'center', 'bottom']),
  avatarProps: PropTypes.object,
  onBodyClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  actionsComponent: PropTypes.element,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  contentProps: PropTypes.object,
  footerComponent: PropTypes.element,
  footerComponentProps: PropTypes.object,
  className: PropTypes.func,
};

CmtMediaObject.defaultProps = {
  avatar: '',
  avatarPos: 'top',
  title: '',
  titleProps: {
    variant: 'h3',
    component: 'div',
  },
  subTitle: '',
  subTitleProps: {
    component: 'span',
  },
  content: '',
  contentProps: {
    component: 'div',
    variant: 'body2',
  },
};

export default React.memo(CmtMediaObject);
