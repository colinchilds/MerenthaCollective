import React, { Fragment } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import Code from '@manannan/Code';
import updates from 'data/Home';

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
              <Typography gutterBottom>
                Welcome to the newly revived Merentha Collective! This site is all about the MUD{' '}
                <Link href="https://www.merentha.com">Merentha</Link>. Please take a look around and feel free to offer
                suggestions for improvements. We also gladly accept{' '}
                <Link href="https://github.com/colinchilds/MerenthaCollective">merge requests</Link> to fix or add new
                content.
              </Typography>

              <Typography gutterBottom>
                Alternatively, you can submit a request on{' '}
                <Link
                  href="https://github.com/colinchilds/MerenthaCollective/issues"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub Issues
                </Link>{' '}
                with the label <Code>PLACEHOLDER</Code>
              </Typography>

              <Typography>This is a site by the players, for the players, so please help us keep it up to date!</Typography>
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
