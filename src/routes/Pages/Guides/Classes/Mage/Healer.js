import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const Healer = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="Healer" subTitle="The Way of Life" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                The Way of Life. The Healer uses the powers of life energy to heal and protect. Seen by others as a 'weak'
                profession, Healers are much in demand in times of war. Also called the White Hand.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default Healer;
