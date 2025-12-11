import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Code from 'common/Code';
import { MeleeCombat, SpellCombat, HealthStatus } from 'data/Combat';

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
              <Typography gutterBottom>
                Below are two tables showing the message for each hit, for each of the three damage types. The percentage is
                the damage compared to your enemy's maximum health points.
                <br />
              </Typography>
              <Typography gutterBottom>
                <strong>Blunt:</strong> Blunt, Melee, Flail, Projectile, Two handed
              </Typography>
              <Typography gutterBottom>
                <strong>Sharp:</strong> Blade, Knife, Axe
              </Typography>
              <Typography sx={{ fontStyle: 'italic' }} gutterBottom>
                Some Spells/Abilities have their own output for the damage done and will repeat the same basic damage script,
                which does not follow the tables below. E.g.: scorch always says <Code>hit</Code> but does more than 0%
                damage.
              </Typography>
              <Typography>The table at the bottom shows Health status when looking at a creature or player.</Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CmtCard>
            <CmtCardContent>
              <Typography variant="h4" style={{ marginBottom: '10px' }}>
                Melee Combat Messages
              </Typography>
              <Typography>
                These status messages appear when damaging someone/something via melle or weapon based combat.
              </Typography>
            </CmtCardContent>
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
                  {MeleeCombat.map((row, i) => (
                    <TableRow key={i}>
                      <TypographyCell>{row.percent}</TypographyCell>
                      <TypographyCell>{row.blunt}</TypographyCell>
                      <TypographyCell>{row.sharp}</TypographyCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CmtCard>
            <CmtCardContent>
              <Typography variant="h4" style={{ marginBottom: '10px' }}>
                Spell Combat Messages
              </Typography>
              <Typography>These status messages appear when damaging someone/something via spell based combat.</Typography>
            </CmtCardContent>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TypographyCell>Damage %</TypographyCell>
                    <TypographyCell>Magic</TypographyCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {SpellCombat.map((row, index) => (
                    <TableRow key={index}>
                      <TypographyCell>{row.percent}</TypographyCell>
                      <TypographyCell>{row.magic}</TypographyCell>
                    </TableRow>
                  ))}
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
                  {HealthStatus.map((row, i) => (
                    <TableRow key={i}>
                      <TypographyCell>{row.percent}</TypographyCell>
                      <TypographyCell>{row.message}</TypographyCell>
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

export default Combat;
