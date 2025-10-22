import React from 'react';
import { Typography } from '@mui/material';
import GridContainer from '@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import CmtImage from '@coremat/CmtImage';
import { areas as allAreas } from 'data/Areas';

const toc = [
  {
    name: 'Summary',
    id: 'subzone-summary',
  },
  {
    name: 'Map',
    id: 'subzone-map',
  },
];

const subarea = allAreas.atheria.cabeiri;
const zones = subarea.zones;

const Cabeiri = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <GridContainer>
      <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
        {/* Table of Contents */}
        <Table size="small" style={{ margin: '0 auto', width: 'fit-content' }}>
          <TableBody>
            {toc.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <Typography
                    onClick={() => handleScroll(item.id)}
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      '&:hover': { color: 'primary.main' },
                    }}>
                    {item.name}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
            {zones.map((zone, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <Typography
                    onClick={() => handleScroll(zone.id)}
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      '&:hover': { color: 'primary.main' },
                    }}>
                    {zone.name}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Summary section */}
        <CmtCard id="subzone-summary">
          <CmtCardContent>
            <Typography variant="h2" align="center">
              Summary
            </Typography>
            <Typography varient="h4" align="center">
              Level Range: {subarea.levels}
            </Typography>

            <Typography>{subarea.summary}</Typography>
          </CmtCardContent>
        </CmtCard>

        {/* Map section */}
        <CmtCard id="subzone-map">
          <CmtCardContent>
            <Typography variant="h2" align="center">
              Map
            </Typography>
            <Box>
              <CmtImage
                src="/images/maps/Cabeiri.png"
                draggable={false}
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '400px',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </CmtCardContent>
        </CmtCard>

        {/* Areas */}
        {zones.map((zone, index) => (
          <CmtCard id={zone.id} key={zone.id || index}>
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

export default Cabeiri;
