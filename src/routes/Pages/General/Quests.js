import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';

import questData from 'data/Quests';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Quests', link: 'quests' },
  { label: 'Intro', active: true },
];

const Quests = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Combat Messages">
      <GridContainer>""</GridContainer>
    </PageContainer>
  );
};

export default Quests;
