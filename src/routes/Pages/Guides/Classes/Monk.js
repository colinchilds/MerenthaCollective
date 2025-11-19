import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Monk', isActive: true },
];

const data = [
  {
    question: 'How do I select my sub class?',
    answer: `Look around the class hall, look at the various items in the rooms, including the one north of you if you are in Cabeiri. Try to figure it out yourself.`,
  },
  {
    question: 'How do I advance?',
    answer: `See the previous question.`,
  },
  {
    question: 'How do I become a shaman?',
    answer: `This is a quest and you cannot ask any information about it, asking or giving out information about it is illegal and a destable offense. For more read the rules by typing 'help rules'.`,
  },
  {
    question: 'What is the difference between the various sub classes of monks?',
    answer: `All monks share a main melee ability, pummel. And all of the monks receive the spells holy armour, holy strength and holy wind.

    - Priests are excellent one versus one fighters with their spell godshammer.
    - Healers are masters of healing, and their main attack spell is good against multiple outdoor enemies.
    - Scholars excel at killing multiple enemies. They can write the annals of time and transcribe scrolls.
    - Shamans are like priests, excellent at taking one monster out at a time.`,
  },
  {
    question: 'When do I get a good attack spell?',
    answer: `Priests get godshammer at level 15. Scholars and Healers get flamestrike at level 15. And shamans get deadlyfinger and soulstrike at level 9. Until then all subclasses except shamans will have to do with pummel and basic spells ( dispell is one example ). Shamans can use absorb early on.`,
  },
  {
    question: "I'm a shaman and I cant use say or tell, what's wrong?",
    answer: `As a shaman, you took a vow of silence, meaning you gave up the will to communicate with people through words. The commands 'say', 'tell' and 'emote' are a few examples of commands that have been disabled. It's illegal to use socials to get around the vow. Socials like poke, think and mutter are included in that.`,
  },
  {
    question: 'What skills should I focus on?',
    answer: `Good skills to max for a monk are attack, melee, faith, defense, magic attack, magic defense and healing.`,
  },
  {
    question: 'What stats do monks need?',
    answer: `Basically we need all stats.`,
  },
  {
    question: 'When can I use pummel?',
    answer: `You get pummel at level 2.`,
  },
  {
    question: 'When do I get the spell paralyze?',
    answer: `The requirement is 40 in the healing skill and a good alignment (Saintly, Righteous, Good, Benevolent and Nice). Check 'help alignment' for information.`,
  },
  {
    question: 'What are some good monsters to kill at level 1?',
    answer: `The main thing you should try is to explore for yourself, if you are careful its hard to die as a level 1 in Cabeiri. But some points to check out are the cemetary, goblin caves and the sewers.`,
  },
  {
    question: 'When can I use holy wind?',
    answer: `You can effectively use the holy wind ability at level 15.`,
  },
  {
    question: 'What does it mean when it says: You have betrayed the source of your power?',
    answer: `You do not have the right alignment to cast the spell.`,
  },
  {
    question: 'How do I change my alignment?',
    answer: `Check 'help alignment'. An easy way to change it and increase your healing skill is to boost a person of the opposite alignment repeatedly in small doses.`,
  },
  {
    question: "I'm a shaman, what does this (insert shaman spell here) spell do?",
    answer: `Try it out yourself, be careful where you try it out however.`,
  },
  {
    question: 'Why do I get "You cannot meditate" some times even when I am not in combat or not already sitting?',
    answer: `It's a known bug with meditate, the best fix is to use 'alias rest meditate'. This seems to stop it from happening.`,
  },
];

const Monk = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Monk FAQ">
      <GridContainer>
        {data.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <CmtCardHeader title={item.question} />
              <CmtCardContent>
                <Typography style={{ whiteSpace: 'pre-line' }}>{item.answer}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
        <Grid item>
          <Typography>Written by Scurvy</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Monk;
