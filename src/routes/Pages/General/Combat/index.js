import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Combat Messages', isActive: true },
];

const Combat = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Combat Messages">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Typography component="p">
                Below are two tables showing the message for each hit, for each of the three damage types. The percentage is
                the damage compared to your enemy's maximum health points.
                <br />
                <br />
                <b>Blunt:</b> Blunt, Melee, Flail, Projectile, Two handed
                <br />
                <b>Sharp:</b> Blade, Knife, Axe
              </Typography>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Damage %</TableCell>
                    <TableCell>Blunt</TableCell>
                    <TableCell>Sharp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>0%</TableCell>
                    <TableCell>hit ineffectively</TableCell>
                    <TableCell>hit ineffectively</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0.0 - 0.7%</TableCell>
                    <TableCell>tap innocently</TableCell>
                    <TableCell>tap</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0.7 - 1.4%</TableCell>
                    <TableCell>tickle lightly</TableCell>
                    <TableCell>tickle</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1.4 - 2.0%</TableCell>
                    <TableCell>sting</TableCell>
                    <TableCell>sting sharply</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.0 - 2.7%</TableCell>
                    <TableCell>hurt mildly</TableCell>
                    <TableCell>graze</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.7 - 3.4%</TableCell>
                    <TableCell>strike badly</TableCell>
                    <TableCell>cut</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3.4 - 4.7%</TableCell>
                    <TableCell>strike</TableCell>
                    <TableCell>slice</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4.7 - 6.0%</TableCell>
                    <TableCell>send a bone crushing blow</TableCell>
                    <TableCell>slice horribly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6.0 - 7.4%</TableCell>
                    <TableCell>knock</TableCell>
                    <TableCell>shear to pieces</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7.4 - 9.4%</TableCell>
                    <TableCell>slam mercilessly</TableCell>
                    <TableCell>strike with deadly force</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9.4 - 11.4%</TableCell>
                    <TableCell>blast powerfully</TableCell>
                    <TableCell>mutilate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11.4 - 14.0%</TableCell>
                    <TableCell>destroy</TableCell>
                    <TableCell>dismember</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>14.0%+</TableCell>
                    <TableCell>destroy utterly</TableCell>
                    <TableCell>destroy utterly</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Damage %</TableCell>
                    <TableCell>Magic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>0%</TableCell>
                    <TableCell>hit ineffectively</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0.0 - 1.4%</TableCell>
                    <TableCell>tap innocently</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1.4 - 2.0%</TableCell>
                    <TableCell>tickle lightly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.0 - 3.4%</TableCell>
                    <TableCell>sting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3.4 - 4.0%</TableCell>
                    <TableCell>hurt mildly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4.0 - 5.4%</TableCell>
                    <TableCell>strike badly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5.4 - 6.7%</TableCell>
                    <TableCell>strike</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6.7 - 8.7%</TableCell>
                    <TableCell>send a bone crushing blow</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8.7 - 10.7%</TableCell>
                    <TableCell>knock</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10.7 - 14.0%</TableCell>
                    <TableCell>slam mercilessly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>14.0 - 16.7%</TableCell>
                    <TableCell>blast powerfully</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>16.7 - 20.7%</TableCell>
                    <TableCell>destroy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>20.7%+</TableCell>
                    <TableCell>destroy utterly</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Combat;
