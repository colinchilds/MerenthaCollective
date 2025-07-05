import React from 'react';
import Box from '@mui/material/Box';
import { PageBreadcrumbs, PageHeader } from '../index';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  pageFull: {
    width: '100%',
  },
}));

const PageContainer = ({ heading, breadcrumbs, children, className, restProps }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.pageFull, className)} {...restProps}>
      {(heading || breadcrumbs) && (
        <PageHeader heading={heading} breadcrumbComponent={breadcrumbs && <PageBreadcrumbs items={breadcrumbs} />} />
      )}
      {children}
    </Box>
  );
};

export default PageContainer;
