import React from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { TabbedSelector } from '@cwd/TabbedSelector';
import { Typography } from '@mui/material';
import { areas } from '../../../data/Guides';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Area Guides', isActive: true },
];

const AreaGuides = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Area Guides">
      <TabbedSelector data={areas} />
      <Typography>Written by Manannan</Typography>
    </PageContainer>
  );
};

export default AreaGuides;
