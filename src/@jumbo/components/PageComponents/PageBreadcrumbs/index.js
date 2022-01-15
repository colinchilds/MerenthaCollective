import React from 'react';
import { Breadcrumbs } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  textSm: {
    fontSize: 12,
  },
  linkBlock: {
    display: 'block',
    color: 'inherit',
  },
}));

const PageBreadcrumbs = ({ items, ...rest }) => {
  const classes = useStyles();

  return (
    <Breadcrumbs className="bread-crumbs" aria-label="breadcrumb {...rest}">
      {items.map((item, index) =>
        item.isActive ? (
          <Typography key={index} className={classes.textSm} color="textPrimary">
            {item.label}
          </Typography>
        ) : (
          <NavLink key={index} className={clsx(classes.textSm, classes.linkBlock)} color="inherit" to={item.link || '/'}>
            {item.label}
          </NavLink>
        ),
      )}
    </Breadcrumbs>
  );
};

export default PageBreadcrumbs;
