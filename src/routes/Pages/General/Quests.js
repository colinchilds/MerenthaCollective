import React, { useState } from 'react';
import { Typography, Grid, Box, Chip, Divider, useMediaQuery, useTheme } from '@mui/material';
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
  const [selected, setSelected] = useState(null);
  const [sortMode, setSortMode] = useState('level');
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const sortedData = [...questData].sort((a, b) => {
    if (sortMode === 'level') {
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name); // tie-break by name
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Quests">
      <GridContainer>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
          <CmtCard>
            <CmtCardContent>
              <Typography variant="h2" gutterBottom>
                Quest Compendium
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}>
                <Typography variant="subtitle1" color="text.secondary">
                  Select a quest.
                </Typography>

                <Chip
                  label={`Sort by: ${sortMode === 'level' ? 'Level' : 'Name'}`}
                  clickable
                  onClick={() => setSortMode(sortMode === 'level' ? 'name' : 'level')}
                  sx={{ fontWeight: 500 }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Choose a quest:
              </Typography>

              {/* Quest Chips */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(4, 1fr)',
                  },
                  justifyContent: 'start',
                  alignItems: 'start',
                  gap: 1,
                }}>
                {sortedData.map((quest, index) => (
                  <Chip
                    key={index}
                    label={`${isSmall ? quest.short || quest.name : quest.name} (${quest.level})`}
                    clickable
                    onClick={() => setSelected(quest)}
                    variant={selected?.name === quest.name ? 'filled' : 'outlined'}
                    color={selected?.name === quest.name ? 'primary' : 'default'}
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'visible',
                      textOverflow: 'clip',
                      width: '100%',
                    }}
                  />
                ))}
              </Box>
            </CmtCardContent>
          </CmtCard>

          {/* SELECTED QUEST SECTION */}
          {selected && (
            <CmtCard>
              <Box
                sx={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 2,
                  p: 2.5,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                  {selected.name}
                </Typography>

                {/* Description */}
                {Array.isArray(selected.description) ? (
                  <Box sx={{ mb: 2 }}>
                    {selected.description.map((line, i) => (
                      <Typography key={i} sx={{ mb: 0.5 }}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Typography sx={{ mb: 2 }}>{selected.description}</Typography>
                )}

                {/* Rewards */}
                {selected.rewards && (
                  <Typography sx={{ mb: 1 }}>
                    <strong>Rewards:</strong> {selected.rewards}
                  </Typography>
                )}

                {/* Hint */}
                {selected.hint && (
                  <Typography sx={{ mb: 1 }}>
                    <strong>Hint:</strong> {selected.hint}
                  </Typography>
                )}

                {/* Level */}
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Level:</strong> {selected.level}
                </Typography>
              </Box>
            </CmtCard>
          )}
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Quests;
