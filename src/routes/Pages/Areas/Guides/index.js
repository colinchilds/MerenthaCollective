import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Box, Chip, Divider, Alert, Link } from '@mui/material';
import GridContainer from '@jumbo/components/GridContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import InteractiveMap from '../../Components/InteractiveMap';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Code from 'common/Code';

import { areas } from 'data/Areas';
import { makeId, getLevelChipProps, handleScroll, sectionStyles } from './utils';
import ZoneAttributes from './ZoneAttributes';

const AreaPage = () => {
  const { area: areaSlug, subarea: subareaSlug } = useParams();
  const areaData = areas?.[areaSlug]?.[subareaSlug];

  if (!areaData) {
    return <Typography>Area not found.</Typography>;
  }

  const areaName = areaSlug.charAt(0).toUpperCase() + areaSlug.slice(1);
  const subareaName = subareaSlug.charAt(0).toUpperCase() + subareaSlug.slice(1);

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Area List', link: `/areas/arealist` },
    { label: areaName, isActive: false },
    { label: subareaName, isActive: true },
  ];

  const toc = [
    ...(areaData.maps?.length > 0 ? [{ name: 'Maps', id: 'maps-section' }] : []),
    ...(areaData.zones || []).map((zone) => ({
      name: zone.name,
      id: makeId(zone.name),
    })),
  ];

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
          <Alert severity="info" sx={{ py: 0.5 }}>
            <Typography variant="body2">
              To add or update zone details, submit a request on{' '}
              <Link
                href="https://github.com/colinchilds/MerenthaCollective/issues"
                target="_blank"
                rel="noopener noreferrer">
                GitHub Issues
              </Link>{' '}
              with label <Code>Content Update Request</Code>
            </Typography>
          </Alert>

          <CmtCard>
            <CmtCardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 2,
                }}>
                <Box>
                  <Typography variant="h2" component="h1" gutterBottom>
                    {subareaName}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Levels {areaData.levels}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
                {areaData.summary}
              </Typography>

              <Divider sx={{ my: 2.5 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Jump to section:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {toc.map((item, index) => (
                    <Chip
                      key={`${item.id}-${index}`}
                      label={item.name}
                      onClick={() => handleScroll(item.id)}
                      variant="outlined"
                      clickable
                      sx={{
                        '&&:hover': {
                          backgroundColor: 'primary.main',
                          borderColor: 'primary.main',
                          color: '#fff',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Other areas in {areaName}:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {Object.entries(areas[areaSlug] || {}).map(([key, data]) => {
                    if (key === subareaSlug) return null;
                    return (
                      <Chip
                        key={key}
                        label={`${key.charAt(0).toUpperCase() + key.slice(1)} (${data.levels})`}
                        component="a"
                        href={`#/areas/${areaSlug}/${key}`}
                        clickable
                        color="primary"
                      />
                    );
                  })}
                </Box>
              </Box>
            </CmtCardContent>
          </CmtCard>

          {areaData.maps?.length > 0 && (
            <Box id="maps-section" sx={sectionStyles}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Maps
              </Typography>
              <Grid container spacing={2}>
                {areaData.maps.map((map, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={`${map.name}-${index}`}>
                    <Box
                      sx={{
                        '& > *': {
                          transition: 'transform 0.2s ease-in-out',
                        },
                        '&:hover > *': {
                          transform: 'scale(1.02)',
                        },
                      }}>
                      <InteractiveMap name={map.name} url={map.url} interactiveMapName={map.interactiveMapName} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {areaData.zones?.map((zone, index) => (
            <Box key={`${zone.name}-${index}`} id={makeId(zone.name)} sx={{ scrollMarginTop: '20px', ...sectionStyles }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 600, mr: 1 }}>
                  {zone.name}
                </Typography>
                <Chip
                  label={zone.levels}
                  size="small"
                  sx={{
                    fontWeight: 500,
                    ...getLevelChipProps(zone.levels),
                  }}
                />
                <ZoneAttributes zone={zone} />
              </Box>

              {Array.isArray(zone.summary) ? (
                <Box sx={{ mb: 2 }}>
                  {zone.summary.map((item, idx) => (
                    <Typography key={idx} sx={{ mb: 0.5 }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography sx={{ mb: 2 }}>{zone.summary}</Typography>
              )}
            </Box>
          ))}
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default AreaPage;
