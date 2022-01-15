import React from 'react';
import { CardContent } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: () => ({
    padding: 24,
  }),
}));

const CmtCardContent = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <CardContent className={clsx(classes.root, 'Cmt-card-content', className)} {...rest}>
      {children}
    </CardContent>
  );
};

export default CmtCardContent;
