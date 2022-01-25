import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Rolling', isActive: true },
];

const rolls = [
  { race: 'Artrell', str: 10, cha: 9, con: 6, dex: 21, int: 13, wis: 13 },
  { race: 'Centaur', str: 20, cha: 10, con: 21, dex: 18, int: 11, wis: 11 },
  { race: 'Dragon', str: 22, cha: 22, con: 22, dex: 22, int: 22, wis: 22 },
  { race: 'Drow-elf', str: 13, cha: 17, con: 15, dex: 17, int: 22, wis: 22 },
  { race: 'Dwarf', str: 17, cha: 11, con: 19, dex: 18, int: 14, wis: 19 },
  { race: 'Elf', str: 15, cha: 16, con: 15, dex: 18, int: 20, wis: 22 },
  { race: 'Faerie', str: 6, cha: 20, con: 6, dex: 22, int: 22, wis: 22 },
  { race: 'Giant', str: 22, cha: 13, con: 22, dex: 9, int: 11, wis: 6 },
  { race: 'Gnoll', str: 17, cha: 16, con: 22, dex: 16, int: 15, wis: 15 },
  { race: 'Gnome', str: 14, cha: 8, con: 14, dex: 16, int: 20, wis: 20 },
  { race: 'Goblin', str: 22, cha: 6, con: 21, dex: 20, int: 14, wis: 14 },
  { race: 'Halfling', str: 13, cha: 11, con: 12, dex: 22, int: 14, wis: 15 },
  { race: 'Half-elf', str: 15, cha: 17, con: 13, dex: 19, int: 13, wis: 10 },
  { race: 'Half-ogre', str: 21, cha: 10, con: 22, dex: 18, int: 10, wis: 7 },
  { race: 'Half-orc', str: 20, cha: 9, con: 21, dex: 16, int: 14, wis: 12 },
  { race: 'Hobbit', str: 14, cha: 16, con: 12, dex: 22, int: 13, wis: 11 },
  { race: 'Human', str: 14, cha: 18, con: 14, dex: 15, int: 16, wis: 15 },
  { race: 'Imp', str: 8, cha: 15, con: 8, dex: 22, int: 22, wis: 22 },
  { race: 'Kender', str: 10, cha: 19, con: 20, dex: 22, int: 19, wis: 7 },
  { race: 'Kobold', str: 18, cha: 15, con: 18, dex: 18, int: 16, wis: 16 },
  { race: 'Lich', str: 15, cha: 6, con: 22, dex: 15, int: 22, wis: 22 },
  { race: 'Nymph', str: 11, cha: 22, con: 14, dex: 22, int: 10, wis: 6 },
  { race: 'Ogre', str: 22, cha: 6, con: 22, dex: 17, int: 9, wis: 6 },
  { race: 'Ogre-magi', str: 22, cha: 8, con: 22, dex: 17, int: 21, wis: 21 },
  { race: 'Orc', str: 22, cha: 8, con: 22, dex: 14, int: 10, wis: 6 },
  { race: 'Satyr', str: 21, cha: 7, con: 21, dex: 17, int: 8, wis: 10 },
  { race: 'Troll', str: 19, cha: 12, con: 18, dex: 15, int: 15, wis: 15 },
  { race: 'Were-wolf', str: 22, cha: 10, con: 22, dex: 22, int: 10, wis: 10 },
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
