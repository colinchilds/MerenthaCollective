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
  { label: 'Mage', isActive: true },
];

const data = [
  {
    question: 'How do I pick a subclass?',
    answer: `Explore the mage hall and find the book of the magi. Looking at it will tell you how to choose your subclass.`,
  },
  {
    question: 'Which subclass is the best?',
    answer: `This is purely opinion. Each has its own strengths and weaknesses. Here's a general guideline:

    X Sorcerer - Sorcerers are good at 1 v 1 battles. They focus on telepathy spells by invading the mind of their opponents.
    
    X Necromancer - Necromancers are good at 1 v Many battles. They focus on damaging the body of their victims.
    
    X Warlocks - Warlocks are good at both 1 v 1 and 1 v Many battles. They focus on spells that cause chaos.
    
    X Druids - Druids are good at 1 v 1 battles. They focus on nature spells and can use their nature skills to tame animals (ONLY A MAXIMUM OF 9)
    
    X Healers - Healers are good at 1 v 1 battles. They focus on both healing their own (and others) body as well as damaging that of their opponents.
    
    X Wizards - Wizards are good at both 1 v 1 and 1 v Many battles. They use a little of every type of magic.`,
  },
  {
    question: 'I have a subclass, now what should I do?',
    answer: `Go out and get some experience. Mostly this is done by killing monsters, but there are other ways like quests and deeds.`,
  },
  {
    question: 'How can I see a list of my skills/spells/abilities/spells?',
    answer: `Skills: 'skills' 'skills maxes' 'skills cost'
    Stats: 'stats' 'cost' 'score'
    Abilities: 'abilities mine'
    Spells: 'spells mine'`,
  },
  {
    question: 'Which skills should I improve?',
    answer: `In a perfect world we would keep *all* our skills maxed at all times :P

    MAGIC SKILLS
    
    You should keep Magic Attack and Magic Defense maxed. Depending on your subclass, you should also max skills such as telepathy (Sorcs in particular) and Nature (Druids in particular). Other magical skills such as Conjuring you probably wont find useful in a combat sense, however, if you want to make bags when the time comes you should keep this up to date as well :)
    
    NON-MAGIC SKILLS
    
    If you choose to use a weapon then you should max the skill corresponding to that weapon type. For example, if you use staves then you need to work on the blunt skill. If the weapon is two-handed, then it helps to improve the two-handed skill. If you use two weapons, then you should improve the double wielding skill. Other skills such as bargaining, attack and melee sometimes come in handy.`,
  },
  {
    question: 'What stats should I improve?',
    answer: `Intelligence and Wisdom are the most important stats for a Mage. Constitution is also important since it determines how many hit points you have, and the more of those you have the less likely it is that you will die. A good guide is to keep your Intelligence and Wisdom at twice your level, Constitution at 1.5 times your level and the other stats at your level.

    So, for a lvl 15 mage your stats should be (at least):
    
    Strength 15
    Charisma 15
    Constitution 23
    Dexterity 15
    Intelligence 30
    Wisdom 30`,
  },
  {
    question: 'How do I cast a spell?',
    answer: `Type the name of the spell, optionally followed by a target. For example 'missile goblin' would cast missile at a goblin in the room. Most attack spells will assume your current attacker if you don't give them a target.`,
  },
  {
    question: 'Do we have any combat moves like slash?',
    answer: `None that work. Stick with spells.`,
  },
  {
    question:
      "When I look at my spell list, it says I have [blah] spell, but it won't let me cast it or it doesn't seem to do anything. Why is this?",
    answer: `Some spells will show up before you're skilled enough to make them work properly. Try training your skills, improving your stats, or advancing your level.`,
  },
  {
    question:
      "I try to cast [blah] spell, but it fails due to a lack of faith. What does that mean? I don't even have a faith skill!",
    answer: `Faith can also mean alignment. This is a common occurance when you try to cast a spell that only works for the evil, but you're not evil.`,
  },
  {
    question: 'I try to cast spell, but it says I betrayed the source of my powers. What does that mean?',
    answer: `Like the above, you're trying to cast a spell but you're the wrong alignment. You probably need to be good to use that spell.`,
  },
  {
    question: 'How can I tell what spells I have cast on me?',
    answer: `You can't get a list of effects. Checking will show an aura of magic around you if a protective spell is affecting you. Some effects, like blindness, will be pretty obvious. Anything else you just have to figure out.`,
  },
  {
    question: 'How do I advance?',
    answer: `Most of our class halls have a book of the magi in them. Just the book to advance. If there is no book, use the command instead.`,
  },
  {
    question: 'All I have is missile! How am I supposed to do anything? When do I get a better spell?',
    answer: `That's what you start with, but don't worry, every mage has the potential to learn another spell by level 4 at the latest, if you train your skills.`,
  },
  {
    question: 'When do I get spell? What spells do I get at level X?',
    answer: `This varies greatly from subclass to subclass, but the best advice is to make sure to train the skills for the types of spells you want. For example keep your nature well trained to learn more nature spells sooner. Some requirements for spells are level, skills, and alignment, just to name a few.`,
  },
  {
    question: 'Where is the mage hall in Whitestorm?',
    answer: `In the magic district, of course. It's west of the town square, try looking for some kind of "strange" activity.`,
  },
  {
    question: 'Where is the mage hall in [othertown]?',
    answer: `Look around. They take more thinking to find than the cleric or monk halls, but that's not saying much.`,
  },
  {
    question:
      "Ok, I'm casting a lot of spells and running out of magic a lot now, is there a better way to get it back besides sleeping?",
    answer: `From levels 1 to 3 you can drink from the Cabeiri fountain. After that you'll probably want to start buying mana orbs in Whitestorm for 35 platinum each. The shop is to the west, in the magic district. These orbs heal your magic constantly and much faster than sleep. You can have up to 3 draining at a time, with 3 in reserve. If you buy more than 6, they will start to meld together randomly. There are some other ways to recover magic, as well as other orb shops, but you'll have to find those for yourself.`,
  },
  {
    question: 'What weapons should I use?',
    answer: `You can a couple staves off the rack in the Cabeiri hall to start out with. Mages are generally best with blunt weapons like staves and maces, or flail weapons like whips. Some prefer to use magic exclusively and wield nothing. You can look for a friendly fighter if you need some weapons compared, too. Don't expect to get much out of your weapons unless they're magical and/or otherwise very special, since your magic skills are far better than your weapon combat. You are a Mage after all :P`,
  },
  {
    question: 'What armour should I wear?',
    answer: `Whatever protects you best. Really though, lots of faeries and imps become mages and find it hard to carry good armour around. Lightweight armour exists, but doesn't protect as well. You'll probably have to improve your strength if you want to wear heavy platemail.`,
  },
  {
    question: "I have a question this FAQ didn't answer, who should I ask?",
    answer: `Most commands have a help file, try [help blahspell/command] first. If that doesn't help, try asking the question on the [mage] line or the [newbie]/[mid] line.`,
  },
];

const Mage = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Mage FAQ">
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
          <Typography>Written by Cordell</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Mage;
