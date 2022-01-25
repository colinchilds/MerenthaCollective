import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Fireworks', isActive: true },
];

const Fireworks = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Fireworks Messages">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Mana</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Message</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;1400</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>A small fireball shoots into the sky then fizzles away.</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;2100</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>A small fireball shoots through the sky.</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;2800</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>A large fireball erupts in the sky lighting the world for a moment.</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;3500</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>A massive fireball explodes raining sparks over the lands.</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;4200</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>A massive fireball explodes, shaking the ground from its blast.</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;4900</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        A massive fireball explodes high in the air in a flurry of colours. Sparks burn through the air like
                        falling stars.
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;6300</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        <b>Night:</b> A huge fireball launches up and across the sky. It shrinks into the night sky...then
                        becomes a streak against the stars as a bright shooting star!
                      </Typography>
                      <Typography>
                        <b>Day:</b> A huge fireball launches up and across the sky. It shrinks into the day's sky...then
                        becomes a blemish beyond the clouds as a dim shooting star!
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&lt;7700</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        <b>Night:</b> A massively large fireball swells on the surface of Merentha. A mad cackling fills the
                        air, and &lt;name&gt; launches the fireball. It shrinks into the sky...then sticks in the firmament
                        as a new star!
                      </Typography>
                      <Typography>
                        <b>Day:</b> A massively large fireball swells on the surface of Merentha. A mad cackling fills the
                        air, and &lt;name&gt; launches the fireball. It streaks toward the sun...and smashes into it! Solar
                        flares fill the sky with the Northern Lights.
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>&gt;7700</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        An unbelievably enormous ball of light grows in the sky above &lt;name&gt; which silently explodes,
                        bathing the world in magical flashing light!
                      </Typography>
                      <pre>
                        {"   *         '       *       .  *   '     .           * *\n"}
                        {"                                                               '\n"}
                        {"       *                *'          *          *        '\n"}
                        {'   .           *               |               /\n'}
                        {"               '.         |    |      '       |   '     *\n"}
                        {'                 \\*        \\   \\             /\n'}
                        {"       '          \\     '* |    |  *        |*                *  *\n"}
                        {"            *      `.       \\   |     *     /    *      '\n"}
                        {'  .                  \\      |   \\          /               *\n'}
                        {"     *'  *     '      \\      \\   '.       |\n"}
                        {'        -._            `                  /         *\n'}
                        {"  ' '      ``._   *                           '          .      '\n"}
                        {'   *           *\\*          * .   .      *\n'}
                        {"*  '        *    `-._                       .         _..:='        *\n"}
                        {"             .  '      *       *    *   .       _.:--'\n"}
                        {"          *           .     .     *         .-'         *\n"}
                        {"   .               '             . '   *           *         .\n"}
                        {"  *       ___.-=--..-._     *                '               '\n"}
                        {'                                  *       *\n'}
                        {"                *        _.'  .'       `.        '  *             *\n"}
                        {"     *              *_.-'   .'            `.               *\n"}
                        {"                   .'                       `._             *  '\n"}
                        {"   '       '                        .       .  `.     .\n"}
                        {'       .                      *                  `\n'}
                      </pre>
                    </TableCell>
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

export default Fireworks;
