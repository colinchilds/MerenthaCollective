import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appHeader: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.primary.main,
  },
}));

const CmtHeader = props => {
  const { className, children } = props;

  const classes = useStyles();

  return (
    <AppBar position="static" className={clsx(classes.appHeader, className, 'Cmt-header')}>
      {children}
    </AppBar>
  );
};

CmtHeader.defaultProps = {
  name: 'LayoutHeader',
};
CmtHeader.propTypes = {
  type: PropTypes.oneOf(['fixed', 'static']),
  fullHeader: PropTypes.bool,
};

export default CmtHeader;
