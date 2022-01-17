import React from 'react';
import Box from '@mui/material/Box';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorNumber: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 30,
    textShadow: '10px 6px 8px hsla(0,0%,45.9%,.8)',
  },
}));

const Error404 = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box fontSize={{ xs: 100, sm: 160 }} className={classes.errorNumber}>
        404
      </Box>
      <Box fontSize={{ xs: 16, sm: 24 }} mb={8} color="grey.500">
        Oops, an error has occurred. Page not found!
      </Box>
    </Box>
  );
};

export default Error404;
