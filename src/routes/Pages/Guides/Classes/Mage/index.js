import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import MageGuideData from 'data/Guides/Classes/Mage';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Mage', isActive: true },
];

const Mage = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Mage FAQ">
      <GridContainer>
        {MageGuideData.map((item, index) => (
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
          <Typography>Written by Cordell</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Mage;
