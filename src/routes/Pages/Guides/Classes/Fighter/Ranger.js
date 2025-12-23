import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const Ranger = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="Ranger" subTitle="Nature's Marksmen" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                The Ranger is an elite fighter and skilled marksman. By nature, they are survivors and prefer life in the
                wilds. Naturally in tune with nature, they have been known to call upon small woodland creatures for aid.
                Rangers command respect everywhere they go, even from the normally taciturn Druids who consider them kindred
                spirits.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default Ranger;
