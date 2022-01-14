import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@material-ui/core';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Fighter', isActive: true },
];

const data = [
  {
    question: 'Important commands that will help you.',
    answer: `Discern, consider, butcher corpse, notify skills, cost, score, skills, and compare.`,
  },
  {
    question: 'What skills and moves do I have?',
    answer: `As you first start your career as a fighter you are and utter novice, and you are not very skilled. You can't even perform the simplest action which is whirl. With a little training and gaining a level you should be able to whirl. Later on you will get such moves as slash, bash, slaughter, charge, and rush. Fighters also have the ability to 'flash'. Try it out and see what happens.`,
  },
  {
    question: 'How do I become more powerful?',
    answer: `To gain power you must gain experience points. This can be done by killing monsters or solving quests. When you kill a monster you will gain experience. You can use the cost command to tell you how much experience you have, how far you are off to leveling, and if you can improve statistics or not. On the topic of leveling, before you level you should max some important skills. You may now wonder what maxing a skill is, at each level we have a limit of how much of a skill we can learn. When you start out you have a blade of 10(MAX). This means you can't improve that skill any further, until you level. There are several skills that you need to max before leveling. You need to max Blade, attack, defense, double wielding, and charging/riding at each level before leveling. Doing this will ensure you will be as powerful as you can be at early levels. Some of these skills may max "naturally"(without dumping xp into them) some skills may require you to spend xp to raise them. Using the skills command will give you a list of skills you have and at what level of proficiency you have in them. You may want to train other weapon skills, but swords are the most powerful weapons for fighters.`,
  },
  {
    question: 'What sword should I use? Is sword A better than sword B?',
    answer: `Now, this is what is so great about this place, and with my first character here it was fun learning about weapons on my own. Don't depend on others, find out things for yourself. If you are smart enough to log on to this game you are smart enough to search things out and figure things out on your own. The compare skill is a great skill in determining whether one weapon is better than the other. Discern is also a good skill, it will tell you what a particular item is armor/what area it protects or weapon/what kind. Also look at other fighters who are the same level as you and see what they are wielding. This will give you a good idea of what swords you can use and wield.`,
  },
  {
    question: 'When can I slash?',
    answer: `Level 5 with 25 blade At early levels it may be more proficient using whirl instead of slash. Slash costs a lot of sp (endurance points). Whirl does not cost a lot of sp.`,
  },
  {
    question: 'What stats should I improve?',
    answer: `When should I start improving stats? A fighters "main" statistics are strength, dexterity, and constitution. Strength and dexterity play a huge role in how much damage you dish out. All stats are important but your "mains" are the ones you should concentrate on.
    
    You can start improving statistics as soon as you wish or can. But a good level to start doing some serious statistic improvement is level 14-15. A good rule of thumb is to have your main stats twice your level, and all other stats the same as your level. So before I would level my level 15 berserker I would improve his stats to this:
    
    Strength 30
    Charisma 15
    Constitution 30
    Dexterity 30
    Intelligence 15
    Wisdom 15
    
    This is not the only way to go about it. Some people like to raise their stats even more. Some aren't interested in stats as much. But this is what makes us unique.
    
    Strength allows you to carry more and do more damage. Dexterity gives you endurance, the higher your sp the more slashes and whirls you can perform and dexterity helps in damage dished out, and constitution gives you hitpoints.`,
  },
  {
    question: 'How can I replenish sp?',
    answer: `Eating, drinking, sleeping and resting are the ways you can replenish sp on your own. If you butcher the corpses of dead monsters you have killed you can get a single piece of meat which will help replenish sp if you eat it.`,
  },
  {
    question: 'After I quit out I lose some of my stuff, what is going on?',
    answer: `Merentha is one of the few muds that don't require some type of locker system, we can keep our equipment if it's autoload. If you use the inventory command, you will noticed on the right hand side of the screen it gives a list of no and yes. If there is a yes beside the item then it will autoload and you will keep it if you quit out. If it isn't you will lose it when you quit out. So if you have non autoload things you should sell them or store them if you can. You can store up to one item at that bank in Whitestorm.`,
  },
  {
    question: 'Why do my charges never hit?',
    answer: `Several factors play a role in whether a charge will land or not. The biggest factors are dex, charging/riding skill, and size of the mob. Monsters that are much larger than you are difficult to land a charge on because often they have more dexterity than you. Centaurs can start landing charge consistently at level 8. I am not sure about non centaurs at this time. But If you can't land a charge, try charging a smaller mob, or increase your skills.`,
  },
];

const Fighter = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Fighter FAQ">
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
          <Typography>Written by Giam</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Fighter;
