import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Party', isActive: true },
];

const data = [
  {
    question: 'Some important commands that will help you out.',
    answer: `Feed corpse (raises alighnment a little), notify skills, notify exp., cost, score, skills, spells mine and abilities mine.`,
  },
  {
    question: 'What is the best cleric to play?',
    answer: `Well all clerics are different as other classes are as well. Black cleric must stay in the demonic region.
      Grey cleric must stay in neutral. White cleric must stay in the saintly region.
      To have most of your spells to work you have to stay in these regions for your spells work.
      All depends on how you want to play your character. White clerics are good for curing and healing your party members.
      Grey clerics are good for those to and slowing mobs and hasting there party members.`,
  },
  {
    question: 'How do I get more spells?',
    answer: `As a cleric you must have almost all of you magic maxed at low levels to get certain spells. You get most of your spells by level 15.`,
  },
  {
    question: 'What stats will help my spells be more powerful?',
    answer: `As a cleric we rely on wisdom and intelligence. Wisdom helps the spells become stronger and intelligence give more mp then wisdom does.`,
  },
  {
    question: 'What should I keep my stats at?',
    answer: `Wisdom and intelligence are important. Charisma will become a big party in a cleric so mobs (monsters) wont auto-attack you. Keep your main stats twice to three times your level. As a level 15 cleric I would suggest this:
      Strength: 15-20 (to carry more in inv.)
      Charisma: 15-20 (not to get autoed)
      Constitution: 20 (higher hp and reduces body damage)
      Dexterity: 20-25 (good to help body damage)
      Intelligence: 25-30 (makes spells stronger)
      Wisdom: 25-30 (determines successes of spells)`,
  },
  {
    question: 'How do replenish my mp?',
    answer: `We rely on orbs (ws shop) but they are really expensive. So save all the money you can.
      Sleeping and resting will work to, but do this is a safe zone. Magical rings and earrings,
      they never auto, but they are pretty :P. There are many objects in the game who can help you restore mp quickly as you reach higher levels.`,
  },
  {
    question: 'It says next to a item "auto no", what does this mean?',
    answer: `This means that they dont save after logging out for your level. If you really like one of the items you may but them in a locker in ws bank
       but remember you may only store one item at a time. Stones, scrolls and bags will not store in lockers.`,
  },
  {
    question: 'What are good weapons for clerics?',
    answer: `A lot of clerics use whips or blunt weapons such as staffs. We normally dont use knifes or daggers.`,
  },
  {
    question: 'What spells do I get as a black cleric?',
    answer: `Well as all other cleric you recieve paralyze, wound, haste, raise dead,disrupt, and swarm.
      As a black cleric you will learn to love paralyze and wound. Black have the best paralyze.
      Some spells all classes get, which is why there all not listed.`,
  },
  {
    question: 'What spells do I get as a white cleric?',
    answer: `Paralyze, wound (will lower you alignment), mheal, gods hammer, resurrect, rapture, slow.`,
  },
  {
    question: 'What spells do I get as a grey cleric?',
    answer: `Slow, haste, gods hammer, swarm, paralyze, and wound.`,
  },
  {
    question: 'So why even be a cleric if I cant injury mobs that much?',
    answer: `If you are in a party you are very good. You can paralyze a monster while your party will kill them.
      As a cleric you have the ability to boost and cure. If you are a white cleric and your in combat with you party,
      then your party member has 5 sp left what do you do? You cast boost. Your party has 150 hp left what do you do?
      You cast cure and/or cast peace (you may have to do this more than once).
      Peace stops all combat in the room, which gives your party members a chance to backstab or charge a mob again.`,
  },
  {
    question: 'What can clerics create?',
    answer: `Clerics can create antidotes, to cure poison, and healing potions,
      which give +50 hp, +100 sp and +50 sp. You need a vial to create antidotes,
      and 100 healing to create potions,but black clerics cant create healing potions.
      This is another good way to make money.`,
  },
  {
    question: 'Is rapture any good?',
    answer: `You are not going to use it often, but this spell can be a lifesaver against strong spellcasters.
      It effects everyone in the same room as you and in all other directions. Eg. You are in combat with a mob,
      the room has exits in n s e and w... this spell will effect anyone in those rooms, and if you walk in those rooms they will attack you.
      This spell is good for the faerie class, because it deals less damage to them.
      It drains everyones mp and does damage to everyone including yourself.`,
  },
  {
    question: 'How does resurrection work?',
    answer: `Type "help resurrect" for a start. After a resurrection your vitals will drop to 1hp / 0 sp/ 0 mp,
      so creationg potions first and having orbs may help. You need to be white and saintly to resurrect,
      lvl 20 and the player's level you are about to resurrect must be lower or the same as yours.
      Resurrection is the only way to change race, which can greatly help improve stats.
      You may not resurrect people into were-wolfs, dragons, and/or drow, these are quests,
      and tell them you are not able to help. You can resurrect only once per reboot.
      Some clerics charge for resurrections, there is no standard price, just depends on how much you want to charge.
      Can be another great way to make money!`,
  },
  {
    question: 'Can you cast manastorm and gods hammer indoors?',
    answer: `Yes, you can. But you cannot cast in []'s. and/or halls.`,
  },
  {
    question: 'What is manastorm?',
    answer: `Manastorm is not what it says. Manastorm is a cloud that you summon, so regain hp,
    it effects everyone in the room, as well as mobs. This spell last a while, and take a while to work.`,
  },
];

const Cleric = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Cleric FAQ">
      <GridContainer>
        {data.map((item, index) => (
          <Grid item xs={12}>
            <CmtCard>
              <CmtCardHeader title={item.question} />
              <CmtCardContent>
                <Typography variant="body2">{item.answer}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
        <Grid item>
          <Typography>Written by Ggood and Stasia</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Cleric;
