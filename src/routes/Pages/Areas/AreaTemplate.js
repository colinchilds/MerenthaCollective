import React from 'react';
import { Typography, Grid, Table, TableBody, TableCell, TableRow, Box } from '@mui/material';
import GridContainer from '@jumbo/components/GridContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import MapModal from 'routes/Pages/Components/MapModal';

const makeId = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const AreaTemplate = ({ areaData, areaName }) => {
  if (!areaData) return <Typography>No area data found.</Typography>;

  const toc = [
    { name: 'Summary', id: 'subzone-summary' },
    { name: 'Map(s)', id: 'subzone-map' },
    ...(areaData.zones || []).map((zone) => ({ name: zone.name, id: makeId(zone.name) })),
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <GridContainer>
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
        {/* Table of Contents */}
        <CmtCard id="subzone-toc">
          <CmtCardContent>
            <Typography variant="h3" align="center" gutterBottom>
              Table of Contents
            </Typography>

            {toc.length > 0 ? (
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                {toc.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.id}-${index}`}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 1,
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: 1,
                        transition: '0.2s',
                        '&:hover': { boxShadow: 3, cursor: 'pointer' },
                      }}
                      onClick={() => handleScroll(item.id)}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textDecoration: 'underline',
                          '&:hover': { color: 'primary.main' },
                        }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                No sections available.
              </Typography>
            )}
          </CmtCardContent>
        </CmtCard>

        {/* Summary */}
        <CmtCard id="subzone-summary">
          <CmtCardContent>
            <Typography variant="h2" align="center">
              {areaName}
            </Typography>
            <Typography variant="h4" align="center">
              Level Range: {areaData.levels}
            </Typography>
            <Typography>{areaData.summary}</Typography>
          </CmtCardContent>
        </CmtCard>

        {/* Map Section */}
        <CmtCard id="subzone-map">
          <CmtCardContent>
            <Typography variant="h3" align="center" gutterBottom>
              Map(s)
            </Typography>
            {areaData.maps?.length > 0 ? (
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                {areaData.maps.map((map, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={`${map.name}-${index}`}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 1,
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: 1,
                        transition: '0.2s',
                        '&:hover': { boxShadow: 3 },
                      }}>
                      <MapModal name={map.name} url={map.url} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                No maps available for this area.
              </Typography>
            )}
          </CmtCardContent>
        </CmtCard>

        {/* Zones */}
        {areaData.zones?.map((zone, index) => (
          <CmtCard id={makeId(zone.name)} key={`${zone.name}-${index}`}>
            <CmtCardContent>
              <Typography variant="h3" align="center">
                {zone.name}
              </Typography>
              <Typography variant="h4" align="center">
                Level Range: {zone.levels}
              </Typography>
              <Typography>{zone.summary}</Typography>
            </CmtCardContent>
          </CmtCard>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default AreaTemplate;
