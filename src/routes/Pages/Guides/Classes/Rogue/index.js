import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import RogueGuideData from 'data/Guides/Classes/Rogue';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Rogue', isActive: true },
];

const Rogue = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Rogue FAQ">
      <GridContainer>
        {RogueGuideData.map((item, index) => (
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
          <Typography>Written by Krook</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Rogue;
