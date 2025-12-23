import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const Grey = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="Grey Cleric" subTitle="The Children of Shadow" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                The Children of Shadow seem to command both Life and Death, and even less is known about them than the Black
                Circle. Also known as Lurkers, the Children seem to be involved in all the realm's affairs.
              </Typography>

              <Typography variant="body1">
                However, no one has ever publicly claimed to be affiliated with this shadowy group. Perhaps the group does
                not truly exist...or the truth.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default Grey;
