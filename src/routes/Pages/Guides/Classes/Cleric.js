import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import ClericGuideData from 'data/Guides/Classes/Cleric';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Cleric', isActive: true },
];

const Cleric = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Cleric FAQ">
      <GridContainer>
        {ClericGuideData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <CmtCardHeader title={item.question} />
              <CmtCardContent>
                <Typography>{item.answer}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
        <Grid item>
          <Typography>Written by Ggood and Stasia</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Cleric;
