import React, { isValidElement } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { CmtSubTitle, CmtTitle } from '../index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
  },
}));

/**
 * @return {null} or CmtContentHead Component
 */
function CmtContentHead({
  icon,
  avatar,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  titleStyle,
  subTitleStyle,
  ...restProps
}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.headRoot, 'Cmt-content-head')} {...restProps}>
      {avatar && isValidElement(avatar) ? (
        <div className={clsx(classes.avatar, 'Cmt-avatar')}>{avatar}</div>
      ) : (
        icon && <div className={clsx(classes.avatar, 'Cmt-avatar')}>{icon}</div>
      )}
      <div className={clsx(classes.headerContent, 'Cmt-header-content')}>
        {title && <CmtTitle className={clsx(titleStyle, 'Cmt-title')} content={title} {...titleProps} />}

        {subTitle && <CmtSubTitle className={clsx(subTitleStyle, 'Cmt-sub-title')} content={subTitle} {...subTitleProps} />}
      </div>
    </div>
  );
}

CmtContentHead.propTypes = {
  icon: PropTypes.element,
  avatar: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
  titleStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
};

CmtContentHead.defaultProps = {
  icon: null,
  avatar: null,
  title: null,
  subTitle: null,
  titleStyle: null,
  subTitleStyle: null,
  titleProps: { variant: 'h4', component: 'div' },
  subTitleProps: { variant: 'subtitle2', component: 'p', gutterBottom: false },
};

export default React.memo(CmtContentHead);
