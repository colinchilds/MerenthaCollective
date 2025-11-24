import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import FighterGuideData from 'data/Guides/Classes/Fighter';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Fighter', isActive: true },
];

const Fighter = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Fighter FAQ">
      <GridContainer>
        {FighterGuideData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <CmtCardHeader title={item.question} />
              <CmtCardContent>
                <Typography style={{ whiteSpace: 'pre-line' }}>{item.answer}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
        <Grid item>
          <Typography>Written by Giam</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Fighter;
