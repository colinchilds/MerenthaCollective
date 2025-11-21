import * as React from 'react';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import Code from '@manannan/Code';
import { Link, Typography } from '@mui/material';

const InfoRequests = () => {
  return (
    <CmtCard id="issuesCell">
      <CmtCardContent>
        <Typography align="center" gutterBottom>
          If you would like to add or update any information found in the zone details, please submit a request on{' '}
          <Link href="https://github.com/colinchilds/MerenthaCollective/issues" target="_blank" rel="noopener noreferrer">
            GitHub Issues
          </Link>
        </Typography>

        <Typography align="center">
          Use the label <Code>PLACEHOLDER</Code>
        </Typography>
      </CmtCardContent>
    </CmtCard>
  );
};

export default InfoRequests;
