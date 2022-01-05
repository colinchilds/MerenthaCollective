import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  headerMain: {
    width: '100%',
    boxSizing: 'border-box',
  },
  '@global': {
    '.Cmt-container': {
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 15,
      paddingRight: 15,
      width: '100%',
      boxSizing: 'border-box',
      [theme.breakpoints.up('md')]: {
        width: 900,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1100,
      },
      [theme.breakpoints.up('xl')]: {
        width: 1400,
      },
    },
  },
}));

const CmtHeaderMain = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.headerMain, 'Cmt-headerMain')} {...rest}>
      <div className="Cmt-container">{children}</div>
    </Box>
  );
};

export default CmtHeaderMain;
