import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { flyingCoords, balloonCoords, shipsCoords, sailingCoords } from 'data/Coords';
import MapModal from 'routes/Pages/Components/MapModal';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Coordinates', isActive: true },
];

const Coordinates = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Coordinates">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Sailing">
              <MapModal name="World Map" url="/images/maps/world_map.png" />
            </CmtCardHeader>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {sailingCoords.map((area, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{area.name}</Typography>
                      </TableCell>
                      <TableCell style={{ minWidth: '100px' }}>
                        <Typography>{area.coords}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>

        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Balloon">
              <MapModal name="World Map" url="/images/maps/world_map.png" />
            </CmtCardHeader>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {balloonCoords.map((area, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{area.name}</Typography>
                      </TableCell>
                      <TableCell style={{ minWidth: '100px' }}>
                        <Typography>{area.coords}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>

        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Ships">
              <MapModal name="World Map" url="/images/maps/world_map.png" />
            </CmtCardHeader>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {shipsCoords.map((area, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{area.name}</Typography>
                      </TableCell>
                      <TableCell style={{ minWidth: '100px' }}>
                        <Typography>{area.coords}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{area.description}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>

        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Flying">
              <MapModal name="Flying Map" url="/images/maps/flying_map.gif" />
            </CmtCardHeader>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {flyingCoords.map((area, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{area.name}</Typography>
                      </TableCell>
                      <TableCell style={{ minWidth: '100px' }}>
                        <Typography>{area.coords}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{area.description}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Coordinates;
