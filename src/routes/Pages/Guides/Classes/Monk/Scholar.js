import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const Scholar = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="Scholar" subTitle="Educatus est" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                The Scholar is similar to the Mage in that they seek knowledge of all the Paths of Magic. However, monks draw
                on the powers of Gods and thus have a different (often more difficult) learning process. The reason for all
                this research is unknown.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default Scholar;
