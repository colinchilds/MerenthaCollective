import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  headerNav: {
    width: '100%',
    minHeight: 46,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
}));

const CmtHeaderNav = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.headerNav, 'Cmt-header-nav')} {...rest}>
      <div className="Cmt-container">{children}</div>
    </Box>
  );
};

export default CmtHeaderNav;
