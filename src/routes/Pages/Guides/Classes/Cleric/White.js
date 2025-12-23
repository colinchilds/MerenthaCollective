import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdateAlert from 'common/UpdateAlert';

const White = () => {
  return (
    <>
      <UpdateAlert />

      <Grid item xs={12}>
        <CmtCard>
          {/* Card Header */}
          <CmtCardHeader title="White Cleric" subTitle="The Healers of the Holy Order" />

          {/* Card Content */}
          <CmtCardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                Members of the Holy Order of the White Cleric seek to save as many lives as they possibly can. In times of
                war where death is unavoidable, they collect the life-energies of the fallen and preserve them from
                dissipation.
              </Typography>

              <Typography variant="body1">
                Drawing upon the powers of their god, the primary goal of the White Circle is to heal the sick, shield the
                faithful, and aid the oppressed wherever suffering is found.
              </Typography>
            </Box>
          </CmtCardContent>
        </CmtCard>
      </Grid>
    </>
  );
};

export default White;
