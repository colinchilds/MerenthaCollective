import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Box, Button, CircularProgress } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  emptyListContainer: {
    flexDirection: 'column',
    minHeight: 250,
    height: '100%',
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${alpha(theme.palette.common.black, 0.12)}`,
    borderRadius: 4,
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
}));

const GridEmptyResult = ({ loader, placeholder, loading, title, actionTitle, content, onClick, children }) => {
  const classes = useStyles();
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <div className={clsx(classes.emptyListContainer, classes.flexRow, 'CmtGridList-EmptyResult')}>
            <CircularProgress size={16} />
            <span className="ml-2">Loading...</span>
          </div>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <div className={clsx(classes.emptyListContainer, 'CmtGridList-EmptyResult')}>
        {children ? (
          children
        ) : (
          <React.Fragment>
            {title && (
              <Box component="h4" fontSize={28} color="text.primary" mb={3}>
                {title}
              </Box>
            )}
            <Box fontSize={18} component="p" color="text.secondary">
              {content}
            </Box>

            {actionTitle && (
              <Button
                color="primary"
                variant="contained"
                style={{ marginTop: 30, height: 45, minWidth: 150 }}
                onClick={onClick}>
                {actionTitle}
              </Button>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
};

GridEmptyResult.prototype = {
  loader: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  actionTitle: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

GridEmptyResult.defaultProps = {
  loader: false,
  loading: false,
  placeholder: '',
  title: '',
  actionTitle: '',
  content: '',
};

export default GridEmptyResult;
