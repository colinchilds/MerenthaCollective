import { Typography, Grid, Alert, Link } from '@mui/material';
import Code from './Code';

const UpdateAlert = () => {
  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
      <Alert severity="info" sx={{ py: 0.5 }}>
        <Typography variant="body2">
          To add or update details, submit a request on{' '}
          <Link href="https://github.com/colinchilds/MerenthaCollective/issues" target="_blank" rel="noopener noreferrer">
            GitHub Issues
          </Link>{' '}
          with label <Code>Content Update Request</Code>
        </Typography>
      </Alert>
    </Grid>
  );
};

export default UpdateAlert;
