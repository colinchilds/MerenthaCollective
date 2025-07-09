import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Typography } from '@mui/material';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Builder', isActive: true },
];

const Builder = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Builder Guide">
      <Typography>Here are various code samples for common scenarios when building an area.</Typography>
      <Link to="/guides/builder/rooms">Room Examples</Link>
    </PageContainer>
  );
};

export default Builder;
