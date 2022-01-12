import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { emotes } from 'data/Emotes';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Emotes', isActive: true },
];

const Emotes = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Emotes">
      <GridContainer>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Table size="small">
                <TableBody>
                  {emotes.map((emote, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>
                          {emote.name}
                          {emote.prepositions ? ' [' + emote.prepositions + ']' : ''}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Emotes;
