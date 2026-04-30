import React, { Fragment } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Link, Typography, useTheme } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import Code from 'common/Code';
import updates from 'data/Home';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Home', isActive: true },
];

const renderUpdateMessage = (update) => {
  if (update.messageHtml) {
    return <Typography component="div" dangerouslySetInnerHTML={{ __html: update.messageHtml }} />;
  }

  if (typeof update.message === 'string') {
    const lines = update.message.split('\n');
    return (
      <Typography>
        {lines.map((line, lineIndex) => (
          <Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </Fragment>
        ))}
      </Typography>
    );
  }

  return <Typography>{update.message}</Typography>;
};

const HomePage = () => {
  const theme = useTheme();

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
                with the label <Code>Content Update Request</Code>
              </Typography>

              <Typography>This is a site by the players, for the players, so please help us keep it up to date!</Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        {updates.map((update, index) => {
          const backgroundColor =
            theme.palette.mode === 'dark' && update.backgroundColorDark
              ? update.backgroundColorDark
              : update.backgroundColor;

          return (
            <Grid item xs={12} key={index}>
              <CmtCard backgroundColor={backgroundColor}>
                <Fragment>
                  <CmtCardHeader title={update['date']} />
                  <CmtCardContent>{renderUpdateMessage(update)}</CmtCardContent>
                </Fragment>
              </CmtCard>
            </Grid>
          );
        })}
      </GridContainer>
    </PageContainer>
  );
};

export default HomePage;
