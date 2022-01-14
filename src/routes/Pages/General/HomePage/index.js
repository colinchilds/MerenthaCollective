import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Typography } from '@material-ui/core';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Home', isActive: true },
];

const HomePage = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Typography>
                Welcome to the newly revived Merentha Collective! This site is all about the MUD{' '}
                <Link href="https://www.merentha.com">Merentha</Link>. Please take a look around and feel free to offer
                suggestions for improvements. We also gladly accept merge requests to fix or add new content. This is a site
                by the players, for the players, so please help us keep it up to date!
              </Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default HomePage;
