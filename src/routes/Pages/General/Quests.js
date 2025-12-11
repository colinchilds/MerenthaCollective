import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
  Avatar,
  AvatarGroup,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import GridContainer from '@jumbo/components/GridContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';

import questData from 'data/Quests';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Quests', active: true },
];

const Quests = () => {
  const [sortMode, setSortMode] = useState('level');

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const sortedData = [...questData].sort((a, b) => {
    if (sortMode === 'level') {
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Quests">
      <GridContainer>
        <Grid item xs={12} sx={{ rowGap: '2rem' }}>
          <CmtCard>
            <CmtCardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 1,
                }}>
                <Typography variant="h2" gutterBottom>
                  Quest Compendium
                </Typography>

                <Chip
                  label={`Sort by: ${sortMode === 'level' ? 'Level' : 'Name'}`}
                  clickable
                  onClick={() => setSortMode(sortMode === 'level' ? 'name' : 'level')}
                  sx={{ fontWeight: 500 }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* QUEST LIST */}
              <Grid item sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
                {sortedData.map((quest, index) => (
                  <CmtCard
                    key={index}
                    sx={{
                      p: 2,
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 3fr',
                      },
                      alignItems: 'center',
                      columnGap: 2,
                    }}>
                    {/* NAME + LEVEL + REWARDS */}
                    <Box>
                      <Typography variant="h6">{quest.name}</Typography>
                      <Typography variant="caption" color="text.secondary" gutterBottom>
                        Level {quest.level}
                      </Typography>
                      {quest.rewards && (
                        <Typography variant="body2" gutterBottom>
                          <strong>Rewards: </strong>
                          {quest.rewards}
                        </Typography>
                      )}
                    </Box>

                    {/* DESCRIPTION */}
                    <Box>
                      <Typography variant="body" color="text.secondary">
                        {quest.description}
                      </Typography>
                    </Box>
                  </CmtCard>
                ))}
              </Grid>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Quests;
