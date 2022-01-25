import React, { Fragment } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Home', isActive: true },
];

const updates = [
  {
    date: '1/24/2022',
    message: 'Added stat rolling info and firework messages',
  },
  {
    date: '1/23/2022',
    message: 'Added list of maps',
  },
  {
    date: '1/22/2022',
    message: 'Added basic skill calculator',
  },
  {
    date: '1/13/2022',
    message: 'Added Socials/Emotes list',
  },
  {
    date: '1/9/2022',
    message: 'Copied over guides. These may be really out of date. Looking for help getting these polished up!',
  },
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
                suggestions for improvements. We also gladly accept{' '}
                <Link href="https://github.com/colinchilds/MerenthaCollective">merge requests</Link> to fix or add new
                content. This is a site by the players, for the players, so please help us keep it up to date!
              </Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        {updates.map((update, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <Fragment>
                <CmtCardHeader title={update['date']} />
                <CmtCardContent>
                  <Typography>{update['message']}</Typography>
                </CmtCardContent>
              </Fragment>
            </CmtCard>
          </Grid>
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default HomePage;
