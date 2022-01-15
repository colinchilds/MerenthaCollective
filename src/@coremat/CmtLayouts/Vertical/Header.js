import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import AppBar from '@mui/material/AppBar';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  appHeader: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0a304c',
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
