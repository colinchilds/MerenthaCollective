import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import rolls from 'data/Rolling';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Rolling', isActive: true },
];

const Rolling = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Stat Rolls">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Typography>
                Below is a table of the maximum stats a race can roll. The range for a roll is 3. This table shows the amount
                you would get if you got 3 on the roll. So the minimum for a roll is the number from this table minus 3, with
                the lowest being 2. The maximum you can get is 22 on a stat.
              </Typography>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Race</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>STR</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>CHA</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>CON</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>DEX</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>INT</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>WIS</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rolls.map((roll, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{roll.race}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.str}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.cha}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.con}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.dex}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.int}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{roll.wis}</Typography>
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

export default Rolling;
