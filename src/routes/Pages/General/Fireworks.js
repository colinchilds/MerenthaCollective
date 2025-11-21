import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import FireworkValues from 'data/Fireworks';

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
                  {FireworkValues.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Typography>{row.range}</Typography>
                      </TableCell>

                      <TableCell>
                        {row.messages.map((msg, j) => (
                          <Typography key={j} dangerouslySetInnerHTML={{ __html: msg }} />
                        ))}

                        {row.ascii && <pre>{row.ascii}</pre>}
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

export default Fireworks;
