import React from 'react';
import { Typography } from '@mui/material';
import GridContainer from '@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import CmtImage from '@coremat/CmtImage';

const toc = [
  {
    name: 'Summary',
    id: 'cabeiri-summary',
  },
  {
    name: 'Map',
    id: 'cabeiri-map',
  },
  // {
  //     name: "Town",
  //     id: "cabeiri-town"
  // },
  // {
  //     name: "Cemetary",
  //     id: "cabeiri-cemetary"
  // },
  // {
  //     name: "Island",
  //     id: "cabeiri-island"
  // },
  // {
  //     name: "Orc Valley",
  //     id: "cabeiri-orc-valley"
  // },
  // {
  //     name: "Faerie Forest",
  //     id: "cabeiri-faerie-forest"
  // },
  // {
  //     name: "Clouds",
  //     id: "cabeiri-clouds"
  // },
  // {
  //     name: "Mountains",
  //     id: "cabeiri-mountains"
  // },
];

const areas = [
  {
    name: 'Town',
    id: 'cabeiri-town',
    levels: '1-5',
    summary: 'Kill Edwina and Edwards on sight!',
  },
  {
    name: 'Cemetary',
    id: 'cabeiri-cemetary',
    levels: '1-5',
    summary: 'Dead things!',
  },
  {
    name: 'Island',
    id: 'cabeiri-island',
    levels: '1-5',
    summary: "They're surrounded by water...",
  },
  {
    name: 'Orc Valley',
    id: 'cabeiri-orc-valley',
    levels: '1-5',
    summary: 'Hulk Smash',
  },
  {
    name: 'Faerie Forest',
    id: 'cabeiri-faerie-forest',
    levels: '6-15',
    summary: "I'll do it for your first born child..",
  },
  {
    name: 'Clouds',
    id: 'cabeiri-clouds',
    levels: '6-15',
    summary: 'Fluffy Sky Sheep',
  },
  {
    name: 'Mountains',
    id: 'cabeiri-mountains',
    levels: '6-15',
    summary: 'Tall... exhausting',
  },
];

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
            {areas.map((area, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <Typography
                    onClick={() => handleScroll(area.id)}
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      '&:hover': { color: 'primary.main' },
                    }}>
                    {area.name}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Summary section */}
        <CmtCard id="cabeiri-summary">
          <CmtCardContent>
            <Typography variant="h2" align="center">
              Summary
            </Typography>
            <Typography varient="h4" align="center">
              Level Range: 1-15
            </Typography>

            <Typography>SUMMARY GOES HERE</Typography>
          </CmtCardContent>
        </CmtCard>

        {/* Map section */}
        <CmtCard id="cabeiri-map">
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
        {areas.map((area, index) => (
          <CmtCard id={area.id}>
            <CmtCardContent>
              <Typography variant="h3" align="center">
                {area.name}
              </Typography>
              <Typography variant="h4" align="center">
                Level Range: {area.levels}
              </Typography>
              <Typography>{area.summary}</Typography>
            </CmtCardContent>
          </CmtCard>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default Cabeiri;
