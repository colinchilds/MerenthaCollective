import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
  footerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '8px',
    color: theme.palette.text.secondary,
  },
}));

const GridFooter = ({ loading, footerText }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <div className={classes.footerWrapper}>
        <CircularProgress size={16} />
        <span className="ml-2">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className={clsx(classes.listFooterRoot, 'Cmt-list-footer')}>
        <p>{footerText}</p>
      </div>
    );
  }
};

GridFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

GridFooter.defaultProps = {
  loading: false,
  footerText: '',
};

export default GridFooter;
