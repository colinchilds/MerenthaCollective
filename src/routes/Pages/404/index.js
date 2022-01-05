import React from 'react';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Box from '@material-ui/core/Box';
import { Button, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
  searchRoot: {
    position: 'relative',
    width: 260,
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
    '& .searchBtn': {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      height: 48,
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      boxSizing: 'border-box',
      padding: '5px 50px 5px 15px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
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
        <IntlMessages id="extraPages.404Msg" />
      </Box>
      <Box className={classes.searchRoot}>
        <InputBase placeholder={'Search...'} inputProps={{ 'aria-label': 'search' }} />
        <IconButton className="searchBtn">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box mt={8}>
        <Button variant="contained" color="primary">
          <IntlMessages id="extraPages.goHome" />
        </Button>
      </Box>
    </Box>
  );
};

export default Error404;
