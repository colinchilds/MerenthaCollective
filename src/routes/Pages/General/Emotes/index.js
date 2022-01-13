import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { emotes } from 'data/Emotes';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Emotes', isActive: true },
];

function hasTarget(emote) {
  return emote && emote.directed && emote.directed.mymsg.includes('<target>');
}

function hasNoun(emote) {
  return emote && emote.undirected && emote.undirected.mymsg.includes('<noun>');
}

function hasAdverb(emote) {
  return emote && emote.undirected && emote.undirected.mymsg.includes('<adverb>');
}

function hasDirectedAdverb(emote) {
  return emote && emote.directed && emote.directed.mymsg.includes('<adverb>');
}

function isTargetFirst(emote) {
  if (!emote || !emote.directed) {
    return false;
  }
  var targetIdx = emote.directed.mymsg.indexOf('<target>');
  var adverbIdx = emote.directed.mymsg.indexOf('<adverb>');
  return adverbIdx < 0 || targetIdx < adverbIdx;
}

function getEmoteText(emote) {
  var text = emote.name;
  var prep = emote.prepositions ? ' [' + emote.prepositions + ']' : '';

  if (hasTarget(emote)) {
    if (hasDirectedAdverb(emote)) {
      text += isTargetFirst(emote) ? ' [<target>] ' + prep + ' [<adverb>] ' : ' [<adverb>] ' + prep + ' [<target>] ';
    } else {
      text += (hasAdverb(emote) ? ' [<adverb>] ' : '') + prep + ' [<target>] ';
    }
  } else if (hasAdverb(emote)) {
    text += prep + ' [<adverb>] ';
  } else if (hasNoun(emote)) {
    text += prep + ' [<noun>] ';
  }
  return text;
}

const Emotes = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Emotes">
      <GridContainer>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Command</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Adverb/Noun</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Text</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emotes.map((emote, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography>{getEmoteText(emote)}</Typography>
                      </TableCell>
                      <TableCell style={{ maxWidth: '300px ' }}>
                        <Typography>
                          {emote.adverbs} {emote.nouns}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography component="div">{emote.noargs ? emote.noargs.mymsg + '.' : ''}</Typography>
                        <Typography component="div">{emote.undirected ? emote.undirected.mymsg + '.' : ''}</Typography>
                        <Typography component="div">{emote.directed ? emote.directed.mymsg + '.' : ''}</Typography>
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
