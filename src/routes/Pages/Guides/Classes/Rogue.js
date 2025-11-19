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
  { label: 'Rogue', isActive: true },
];

const data = [
  {
    question: 'How do I become a bard, thief or assassin?',
    answer: `This is your chance to prove how intelligent and observant you are. The answer to this question should be right in front of you by now if you're reading this in the Cabeiri Hideout. Try looking at things or people, that Wise Old Artrell Rogue there looks kind of suspicious...`,
  },
  {
    question: 'What are my skills?',
    answer: `Time to read the help files. Typing 'help', 'help newbie' and 'help rules' is a start. Also try 'skills', 'cost', 'score', and 'abilities mine'.`,
  },
  {
    question: 'What are my special commands?',
    answer: `Back to the help files. 'help rogue' and 'help abilities' should spell it out for you. Some may not be available to you depending on your subclass.`,
  },
  {
    question: "I'm an assassin. What is telepathy for?",
    answer: `Telepathy is an assassin's skill which at higher levels gives him some mind control powers, a.k.a. 'charm'`,
  },
  {
    question: 'What is murder skill for?',
    answer: `The murder skill is unique to rogues, it is what enhances our combat ability. Increased murder skill mainly improves the effectiveness of stab, slash, circle and backstab.`,
  },
  {
    question: 'What is the acrobatics skill for?',
    answer: `Typing 'help acrobatics' spells it out as clearly as possible. Generally acrobatics allows you to enter certain areas in an alternate fashion. This depends mainly on those who coded the areas to include passages, objects or other obstacles that this skill can help get through. And yes, there are areas that do use acrobatics.`,
  },
  {
    question: "I'm a bard, where do I get more songs?",
    answer: `Bards learn songs through 'word of mouth'. Listening to certain mobs might give you insight (no pun intended) on new songs but you generally must seek them out yourself. The Wise Old Artrell Rogue in the Cabeiri Hideout will allow you to learn your first song. Some other more experienced rogues may teach you songs but you shouldn't depend on them for your knowledge. Finding them yourself is personally more rewarding.`,
  },
  {
    question: "I'm a bard and I try to sing but I keep screwing up the words, why?",
    answer: `You need to improve your entertaining skill. You can do this by either practicing your 'entertain truely' or 'entertain evilly' abilities, just be careful to who and where you do that. Be sure you know what you are doing when you 'entertain evilly' or else players or the Merentha justice system will come after you. Also, some songs require more skills than others. As with all skills, you can always train it by spending experience. Type 'help train'.`,
  },
  {
    question: "I'm a bard and I sing a song perfectly but it doesn't do anything, why?",
    answer: `You need to improve your entertaining skill. This skill will generally increase the effectiveness of your songs. It is extremely difficult to train on your own, you will most likely Need to train this skill with experience points at a rogue hideout. Type 'help train' if this is unclear. It might also be possible that The spell did in fact do something but you haven't noticed what it was. Check your stats and skills before and after the song. The Song Of Insight must be sung at items on the ground at your feet.`,
  },
  {
    question: "I'm a bard and my songs don't last very long, why?",
    answer: `Intelligence affects the duration of your songs. You get an additional ~24 seconds for each point of intelligence.`,
  },
  {
    question: 'I try to steal but keep getting caught, how much skill do I need to',
    answer: `Be good at it? The success of stealing depends on many factors, one of which is the amount of stealing skill you currently have. You should excercise extreme caution when stealing from other players and practice on mobs (NPC) first. The amount of skill needed has to be compared with the level of the target, its stealing skill if it has any and possibly dexterity comes into play. Generally high mortal thieves start to exhibit reasonable success at stealing. A level 5 thief attempting to steal from a level 90 assassin is probably not a good idea. ;)`,
  },
  {
    question: 'What is the best dagger for my knife skill of <...>?',
    answer: `There are many weapons in Merentha and almost as many opinions on them. Weapon strength is expressed as 'Weapon Class' or WC. This is a number which is coded into the weapon and is generally only known by the person who coded it. Warriors and Assassins have the ability to compare weapons and figure out which one has a better WC over the other. Comparing weapons however does not take into account any Weapon Specials and as such can also be a determining factor on wether or not a player prefers to use one weapon over another. A knife can in fact have a lower WC than another, but some magical Weapon Special can make it more attractive. Weapon Specials vary, they can add damage, paralyze an opponent or who knows what else. It is best for you to discover these things on your own and form your own opinion because asking this on the rogue line will yield many different answers. The knife skill is not an expensive one to train and easy to practice. A dagger suitable for you today may be a mundane beginner weapon for you in just a matter of days, or even hours.`,
  },
  {
    question: 'Is dagger A better than dagger B?',
    answer: `This is another often asked question which is best answered by your own opinion. Get an assassin or warrior to compare them for you. If you ARE an assassin, shame on you for asking. :) Type 'help compare' If this is unclear. If you're still unsure, have an experienced bard sing 'insight' to it to help you discern any magical properties (Weapon Special) it may have. Trust your own judgement. Daggers will break routinely so typically the best dagger for you is one you can obtain easily and often, not some rare dagger you must beg a high level player to get.`,
  },
  {
    question: 'The bounty hunter is always after me but I already went to jail, is it a bug? Note:',
    answer: `The bounty hunter answers to nobody. He doesn't care if you went to jail. He doesn't care if you are saintly. He doesn't care about much of anything except killing people who may have been an outlaw at one time or another. If you were an outlaw, he may stop hunting you after reboot, or maybe he won't stop hunting you at all. His ways are mysterious and the only ways to work around him is to either avoid him completely, be forgiven by an elite priest or bribe the Bounty Hunter Clerk in Whitestorm. They are almost un-killable so don't get any wise ideas. The general consensus is that all bounty hunters are nuts and would probably kill each other if two of them would meet.
    
    Note: It is known now that forgive only removes outlaw status. Whenever you are killed by the BH there is a 33% chance he will stop hunting you.`,
  },
  {
    question: 'Where is the Wolvesdale Rogue Hideout?',
    answer: `It's in Wolvesdale. An old Merentha rogue tradition is to find this one on your own. Don't ask don't tell. Some rogues can get homicidal over this so it's best to not mention the Wolvesdale Hideout in public.`,
  },
  {
    question: "I got into the Wolvesdale Rogue Hideout yesterday but now I can't anymore, why?",
    answer: `Really? I have no idea. Read the above answer and keep roguishly silent. It's healthier.`,
  },
  {
    question: 'Is slash or stab or circle better?',
    answer: `The effectiveness or the amount of damage each of these attacks will depend on your level, certain stats, your knife, attack and murder skills. The general rule is slash is better than circle is better than stab. However at very low levels, stab can be the better option. Circle may land on an opponent when stab doesn't, but takes a whole round to wind-up and while you do, you don't get any normal attacks so the jury is out concerning the circle ability and loses its appeal to the high level assassins. You can do two stabs in the time it takes to land one circle and probably for equal if not superior damage for the stabs. Slash gets interesting for the higher level rogues and they typically only rely on it for dishing out big damage at the expense of using up more stamina points.`,
  },
  {
    question: 'When can I stab?',
    answer: `At experience level 2.`,
  },
  {
    question: 'When can I backstab?',
    answer: `With a murder skill of 5.`,
  },
  {
    question: 'When can I cloak?',
    answer: `Thieves and Assassins can cloak with a skill of 80 stealth. However, you might need to be level 20 as well."A dark cloak" is necessary to achieve this at first. Much later on you will find that the cloak ability comes easier to you and perhaps you won't need any special cloak or apparel.`,
  },
  {
    question: 'When can I charm?',
    answer: `Assassins can charm with a skill of 50 telepathy at level 26.`,
  },
  {
    question: 'I keep cutting myself while picking locks, how much locks skill do I',
    answer: `Need to stop doing that? The success rate of lockpicking depends on the type of lock checked Against your locks skill. At a skill of around 30 locks, most locks become less of a challenge. There are a few rare doors or chests that require much more than 30.`,
  },
  {
    question: 'I have a great idea for a rogue ability, can I send a tell to Jewel or Petrarch? ',
    answer: `It might be wiser to refrain from sending the administrators any form of tell. For suggestions of new skills or areas you have a few options. If you have a general idea to improve the mud, try the 'mudidea' command. If you have an idea to enhance an area or a room, first make sure that you are physically inside the area in question and use the 'idea' command. If you have an idea about some whimsical, fun or cute emote or social command, try the 'social' command. If you are enjoying yourself so much in a particular area, by all means use the 'praise' command. If you have an idea on how to improve the rogue class with a new skill or ability, you should start a discussion on the rogue board in any Rogue Hideout so that your class council can guide you into formulating your suggestion properly and tell you if it is warranted.`,
  },
];

const Rogue = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Rogue FAQ">
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
          <Typography>Written by Krook</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Rogue;
