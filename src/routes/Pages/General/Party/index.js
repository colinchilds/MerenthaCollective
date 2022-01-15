import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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
                    <TableCell>
                      <Typography>Members</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>EXP Bonus</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>EXP Gain</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>1</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>100%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>100%</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>2</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>150%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>75%</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>3</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>180%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>60%</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>4</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>200%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>50%</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>5</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>200%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>40%</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>6*</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>200%</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>33%</Typography>
                    </TableCell>
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
