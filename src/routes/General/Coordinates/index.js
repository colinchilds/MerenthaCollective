import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Link, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { sailingCoords } from 'data/Coords';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Coordinates', isActive: true },
];

const Coordinates = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Sailing Coordinates" />
            <CmtCardContent>
              <Link href="/images/maps/world_map.png">World Map</Link>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {sailingCoords.map((area, index) => (
                    <TableRow>
                      <TableCell>{area.name}</TableCell>
                      <TableCell>{area.coords}</TableCell>
                      <TableCell>{area.id}</TableCell>
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
