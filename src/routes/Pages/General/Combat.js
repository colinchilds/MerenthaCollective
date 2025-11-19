import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Combat Messages', isActive: true },
];

const TypographyCell = ({ children }) => {
  return (
    <TableCell>
      <Typography>{children}</Typography>
    </TableCell>
  );
};

const Combat = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Combat Messages">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Typography variant="h4" style={{ marginBottom: '10px' }}>
                Combat Damage Messages
              </Typography>
              <Typography>
                The tables below show the message for each hit, for each of the three damage types. The percentage is the
                damage compared to your enemy's maximum health points.
                <br />
                <br />
                <b>Blunt:</b> Blunt, Melee, Flail, Projectile, Two handed
                <br />
                <b>Sharp:</b> Blade, Knife, Axe
              </Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CmtCard>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TypographyCell>Damage %</TypographyCell>
                    <TypographyCell>Blunt</TypographyCell>
                    <TypographyCell>Sharp</TypographyCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TypographyCell>0%</TypographyCell>
                    <TypographyCell>hit ineffectively</TypographyCell>
                    <TypographyCell>hit ineffectively</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>0.0 - 0.7%</TypographyCell>
                    <TypographyCell>tap innocently</TypographyCell>
                    <TypographyCell>tap</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>0.7 - 1.4%</TypographyCell>
                    <TypographyCell>tickle lightly</TypographyCell>
                    <TypographyCell>tickle</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>1.4 - 2.0%</TypographyCell>
                    <TypographyCell>sting</TypographyCell>
                    <TypographyCell>sting sharply</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>2.0 - 2.7%</TypographyCell>
                    <TypographyCell>hurt mildly</TypographyCell>
                    <TypographyCell>graze</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>2.7 - 3.4%</TypographyCell>
                    <TypographyCell>strike badly</TypographyCell>
                    <TypographyCell>cut</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>3.4 - 4.7%</TypographyCell>
                    <TypographyCell>strike</TypographyCell>
                    <TypographyCell>slice</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>4.7 - 6.0%</TypographyCell>
                    <TypographyCell>send a bone crushing blow</TypographyCell>
                    <TypographyCell>slice horribly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>6.0 - 7.4%</TypographyCell>
                    <TypographyCell>knock</TypographyCell>
                    <TypographyCell>shear to pieces</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>7.4 - 9.4%</TypographyCell>
                    <TypographyCell>slam mercilessly</TypographyCell>
                    <TypographyCell>strike with deadly force</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>9.4 - 11.4%</TypographyCell>
                    <TypographyCell>blast powerfully</TypographyCell>
                    <TypographyCell>mutilate</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>11.4 - 14.0%</TypographyCell>
                    <TypographyCell>destroy</TypographyCell>
                    <TypographyCell>dismember</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>14.0%+</TypographyCell>
                    <TypographyCell>destroy utterly</TypographyCell>
                    <TypographyCell>destroy utterly</TypographyCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CmtCard>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TypographyCell>Damage %</TypographyCell>
                    <TypographyCell>Magic</TypographyCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TypographyCell>0%</TypographyCell>
                    <TypographyCell>hit ineffectively</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>0.0 - 1.4%</TypographyCell>
                    <TypographyCell>tap innocently</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>1.4 - 2.0%</TypographyCell>
                    <TypographyCell>tickle lightly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>2.0 - 3.4%</TypographyCell>
                    <TypographyCell>sting</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>3.4 - 4.0%</TypographyCell>
                    <TypographyCell>hurt mildly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>4.0 - 5.4%</TypographyCell>
                    <TypographyCell>strike badly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>5.4 - 6.7%</TypographyCell>
                    <TypographyCell>strike</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>6.7 - 8.7%</TypographyCell>
                    <TypographyCell>send a bone crushing blow</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>8.7 - 10.7%</TypographyCell>
                    <TypographyCell>knock</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>10.7 - 14.0%</TypographyCell>
                    <TypographyCell>slam mercilessly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>14.0 - 16.7%</TypographyCell>
                    <TypographyCell>blast powerfully</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>16.7 - 20.7%</TypographyCell>
                    <TypographyCell>destroy</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>20.7%+</TypographyCell>
                    <TypographyCell>destroy utterly</TypographyCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Typography variant="h4" style={{ marginBottom: '10px' }}>
                Health Status Messages
              </Typography>
              <Typography>
                These status messages appear when examining a creature or player, indicating their current health as a
                percentage of their maximum HP.
              </Typography>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TypographyCell>HP %</TypographyCell>
                    <TypographyCell>Status Message</TypographyCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TypographyCell>90%+</TypographyCell>
                    <TypographyCell>is in top shape</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>80% - 90%</TypographyCell>
                    <TypographyCell>is in decent shape</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>70% - 80%</TypographyCell>
                    <TypographyCell>is bruised</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>60% - 70%</TypographyCell>
                    <TypographyCell>is slightly injured</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>50% - 60%</TypographyCell>
                    <TypographyCell>is hurting</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>40% - 50%</TypographyCell>
                    <TypographyCell>is badly injured</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>30% - 40%</TypographyCell>
                    <TypographyCell>is bleeding terribly</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>20% - 30%</TypographyCell>
                    <TypographyCell>is terribly injured</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>10% - 20%</TypographyCell>
                    <TypographyCell>is near death</TypographyCell>
                  </TableRow>
                  <TableRow>
                    <TypographyCell>0% - 10%</TypographyCell>
                    <TypographyCell>is mortally wounded</TypographyCell>
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
