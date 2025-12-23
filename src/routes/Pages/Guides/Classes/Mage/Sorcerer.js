import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const Sorcerer = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="Sorcerer" subTitle="The Way of the Mind" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                The Way of the Mind, The Sorcerer is the ultimate embodiment of mind control. Dealing with the energies
                relating directly with the mind, a powerful sorcerer can destroy his enemies from the inside out. Also called
                the Blue Hand.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default Sorcerer;
