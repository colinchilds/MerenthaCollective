import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Party', isActive: true },
];

const Party = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Party Experience">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Members</TableCell>
                    <TableCell>EXP Bonus</TableCell>
                    <TableCell>EXP Gain</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>100%</TableCell>
                    <TableCell>100%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>150%</TableCell>
                    <TableCell>75%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>180%</TableCell>
                    <TableCell>60%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>200%</TableCell>
                    <TableCell>50%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>200%</TableCell>
                    <TableCell>40%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6*</TableCell>
                    <TableCell>200%</TableCell>
                    <TableCell>33%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CmtCardContent>
            <CmtCardContent>
              <Typography>* After 6 or more players, the exp bonus always goes up with 33%.</Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Party;
