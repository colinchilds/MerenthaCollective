import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';
import { socials } from 'data/Socials';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Social', isActive: true },
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

const Socials = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Socials (Emotes)">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            {socials.map((emote, index) => (
              <React.Fragment key={index}>
                <Divider />
                <CmtCardContent>
                  <Typography variant="h3" component="div">
                    {getEmoteText(emote)}
                  </Typography>
                  <Typography style={{ fontStyle: 'italic' }}>{emote.adverbs ? 'Adverbs: ' + emote.adverbs : ''}</Typography>
                  <Typography style={{ fontStyle: 'italic' }}>{emote.nouns ? 'Nouns: ' + emote.nouns : ''}</Typography>
                  <Typography style={{ marginLeft: '10px' }}>{emote.noargs ? emote.noargs.mymsg + '.' : ''}</Typography>
                  <Typography style={{ marginLeft: '10px' }}>
                    {emote.undirected ? emote.undirected.mymsg + '.' : ''}
                  </Typography>
                  <Typography style={{ marginLeft: '10px' }}>{emote.directed ? emote.directed.mymsg + '.' : ''}</Typography>
                </CmtCardContent>
              </React.Fragment>
            ))}
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Socials;
