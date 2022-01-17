import React from 'react';
import { Box } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnRoot: {
    [theme.breakpoints.down('sm')]: {
      padding: '6px 12px',
      fontSize: 11,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.root} {...props}>
      <Box display="flex" alignItems="center">
        <Box fontSize={{ xs: 12, sm: 14 }} component="p" color="text.disabled">
          Copyright Merentha Collective © {date.getFullYear()}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
