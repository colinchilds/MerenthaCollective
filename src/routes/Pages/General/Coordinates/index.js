import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { flyingCoords, sailingCoords } from 'data/Coords';

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
              <Link href="/images/maps/world_map.png">World Map</Link>
            </CmtCardHeader>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {sailingCoords.map((area, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{area.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{area.coords}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{area.id}</Typography>
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
              <Link href="/images/maps/flying_map.gif">Flying Map</Link>
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
