import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Newbie', isActive: true },
];

const Newbie = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Newbie Guide">
      <GridContainer>
        <Grid item xs={12} key={1}>
          <Card>
            <CardContent>
              <Typography variant="h1">Introduction</Typography>
              <br />
              <Typography>
                Welcome to the newbie guide to Merentha. It's written to be a beginners guide to Merentha, and possibly
                MUDing. It will not be a walkthrough however, nor will there be any spoilers. A large part of the fun in this
                game is exploring and finding things so it will only list an explanation for most things you come accross as
                a newbie.
              </Typography>
              <br />
              <Typography variant="h1">Character Creation</Typography>
              <br />
              <Typography component="div">
                When you log on, you are first asked to create a character to play this game. This character is not a
                representation of you, it can be anything you want it to be. Picking a name doesn't seem important, but it'll
                affect your character later on. People have remade their characters because of not liking their name. Also be
                careful not to pick a name that is illegal. The rules are outlined for names are outlined properly, and
                shouldn't be hard to understand. When in doubt, just think of something else.
                <br />
                <br />
                Next up is your password. For a good password, don't use words that you commonly use. And try to include
                numbers. Simple words are easily guessed by people who try to take your character. Also don't make it too
                hard, since you will need to remember it easily. It's a good suggestion not to use the auto login feature of
                your client, because it makes you forget the password easily.
                <br />
                <br />
                Pick a gender you want your character to be. Remember that this is not your gender, but the one you'd like
                your character to be.
                <br />
                <br />
                Display name allows you to add a ' or a -, and you can modify the capitalization. Don't use a name with all
                capitals, and follow the rules given to you. It will avoid you from being dested (Popular term used for
                deletion of a character, also known as ridding).
                <br />
                <br />
                Do not just use none@none for your e-mail. Although you might be cautious of giving out your real e-mail, it
                will help later on since it is used when you forget your password.
                <br />
                <br />
                You have now succesfully created your (possibly first) character. Hit &lt;enter&gt; to go past the News. Make
                sure you read this, it has important information such as the rules.
                <br />
                <br />
                For those who have ANSI (Read colour) enabled clients, you can type the following command to enable colour.
                <pre>ansi on</pre>
              </Typography>
              <br />
              <Typography variant="h1">Selecting A Race</Typography>
              <br />
              <Typography component="div">
                Picking a race is a rather important decision in your early career. Don't let this bother you too much
                though, later on in the game there is the option of changing race. You can try to find a race you like
                yourself, since you are not forced to pick a certain race. If you'd like to do so, type the following.
                <pre>read list</pre>
                This command will give you a listing of all the races you can start out as in Merentha. If you'd like to find
                out more about the elf race for example, type the following command.
                <pre>help elf</pre>
                There are two main important properties linked to your race. These are the stats you begin with, and the cost
                to improve your stats.
                <br />
                <br />
                For those who do not know about 'stats', here is a simple explanation. 'Stat' is short for statistic, and
                they represent a property of your character. For Merentha these are Strength, Charisma, Constitution,
                Dexterity, Intelligence and Wisdom. You can find an explanation by typing the following.
                <pre>help stats</pre>
                The reason your stats are important is because your class depends on stats. What this means is that for each
                of the five classes, there is a set of spells and abilities which are made stronger by increasing your stats.
                So when you start out with the right stats, you will start out with stronger spells and abilities and thus
                spend more time enjoying than training yourself.
                <br />
                <br />
                Look at the help files for each of the races to find what they are good at, but don't follow them too
                closely. Here is a list of all classes with a description of their gameplay and some possible good race
                choices.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">Cleric</Typography>
              <Typography component="div">
                One of the less played classes in Merentha, mostly because they're very dependent on playing with other
                players. Clerics have a large collection of abilities and spells ranging from healing to damage. There is a
                lot of strength in this class, but don't be disheartened by the harder early levels.
                <br />
                <br />
                The most important stats you will need early on are Charisma, Intelligence and Wisdom. Charisma will help you
                stay out of combat while you aid your party members. Intelligence and Wisdom will help you in casting spells.
                <br />
                <br />
                Suggested races: Elf, Faerie, Imp.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">Fighter</Typography>
              <Typography component="div">
                A very popular class in Merentha. Largely because this class offers a normal starting difficulty, and has a
                lot of potential for later levels. The main difficulty in this class is they are one of the most stat
                dependant classes, and thus need a lot of training to improve themself. If you are looking for a varied start
                that is not too hard, but with the option of adding difficulty, choose this class.
                <br />
                <br />
                Strength, Constitution and Dexterity is where fighters are at. Dexterity will help you hit with your
                abilities, as well as provide stamina points in combat to perform them. Constitution is where fighters get a
                bonus, they generally gain more health points from this than any other class. This allows fighters to take a
                lot of damage, and be the tank of the party.
                <br />
                <br />
                Suggested races: Centaur, Dwarf, Giant, Goblin, Ogre, Orc, Satyr.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">Mage</Typography>
              <Typography component="div">
                Like Fighters, mages are a very popular class as well. Each of the mage subclasses offers quite different
                spells, and generally anyone can find something they like. Some of the subclasses are considered to be more
                powerful than others, but if you keep your mind to it each subclass can be equally strong.
                <br />
                <br />
                Important stats are Constitution, Intelligence and Wisdom. Mages lack any real definition of a defense skill,
                and they need to rely on health and defense spells to survive, so Constitution helps a lot when surviving big
                fights. Intelligence will provide the masses of magic points you will need to cast your spells, while Wisdom
                aids in being able to hit things with your spells. Most damage seems to be gotten from their skills, so this
                is not as much of an issue.
                <br />
                <br />
                Suggested races: Elf, Faerie, Gnome, Imp.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">Monk</Typography>
              <Typography component="div">
                Monks are a somewhat underplayed class in Merentha, although lately there seems to be an uprising. The four
                subclasses that the monks provide are all very different. But what they all feature is a great amount of
                defense abilities and skills. They're able to take on large monsters early on with the aid of defense spells
                and other minor aiding spells. If you want a nice evened out class go for monks, but remember that they're
                hard to get strong, and don't do as much damage as everyone else.
                <br />
                <br />
                As a monk you should go for Dexterity, and Intelligence and Wisdom. Like clerics, Intelligence will aid you
                with casting spells by giving you more magic points. Wisdom will help you cast spells on larger monsters,
                while dexterity will help you with the main ability a monk gets, pummel.
                <br />
                <br />
                Suggested races: Elf, Faerie, Giant, Gnome, Half-elf, Imp, Kender, Ogre.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">Rogue</Typography>
              <Typography component="div">
                Probably the most played class of Merentha, looking at assassins alone. They are a great starting class, and
                can get very powerful later on. Although all rogues lack the ability to take on large monsters due to the way
                they fight. This should be considered when choosing a rogue.
                <br />
                <br />
                For rogues you will want to focus on Charisma, Dexterity, and Strength. Since backstab is a rogue's main way
                of killing, you will need Charisma to avoid being attacked by monsters. Dexterity is the main stat that
                defines what you can backstab, and what will avoid you. Strength plays a big part in the damage done by your
                backstab and attacks. Besides stats, they're also very dependent on skills.
                <br />
                <br />
                Suggested races: Centaur, Faerie, Goblin, Half-elf, Hobbit, Nymph.
              </Typography>
              <br />
              <br />
              <Typography variant="h1">Starting Your Adventure</Typography>
              <br />
              <Typography component="div">
                Once you've selected a race based on the class you'd like to play, you can now venture out to find the hall
                for your class and join them. You can look at the individual help files for each class to find a general
                direction. Following is a few helpful commands to get you started.
                <br />
                <br />
                To find your way around easier, Merentha has a feature called a 'room map'. To turn this map on type the
                following command.
                <pre>map</pre>
                This will print a small map of the room to the right of the description, listing all the exits it has. This
                helps you find your way and remember rooms.
                <br />
                <br />
                Keeping track of your health is very important, therefor type the following command.
                <pre>hpinfo</pre>
                This will display your current health, stamina and magic points in your prompt.
                <br />
                <br />
                During combat, your body will take damage. Not only will this take points off your health, but it will also
                damage your body. You can find the current damage of your body with this.
                <pre>body</pre>
                But to constantly keep track of these values is rather annoying, that's why there is a command that will
                notify you if one of your limbs is badly damaged. To turn this on type the following.
                <pre>notify limbs</pre>
                You can try looking at the help file for notify to find out the other values you can use with notify.
                <br />
                <br />
                If you feel like your inventory list is too long, you can try the following command to consolidate your
                inventory. Instead of displaying each item individually, it will display it once, with a number in front of
                it.
                <pre>inventory consolidate</pre>
                If you find you're having trouble browsing through shop listings and such, try the following command to fix
                the More problem where you have to type something and then &lt;enter&gt; to go to the next page.
                <pre>switchmore on</pre>
                The following list of commands will each tell you something about your character. Try reading the help files
                for each of them to find their specifics.
                <pre>
                  score <br />
                  stats <br />
                  biography <br />
                  cost <br />
                  status <br />
                  skills <br />
                  hp <br />
                  money <br />
                  inventory <br />
                  equip <br />
                  languages <br />
                  spells <br />
                  abilities <br />
                  songs <br />
                  armour <br />
                </pre>
              </Typography>
              <br />
              <Typography variant="h1">The Quest For Experience</Typography>
              <br />
              <Typography component="div">
                Once you're all set up, have found your class hall and chosen a class and subclass, you will need to equip
                yourself. You start out with some basic equipment which will do fine at first. To wear all the armour you
                have on you, use the following command.
                <pre>wear all</pre>
                Be aware of the fact that this also equips your newbie shield, which will stop you from wielding two weapons.
                Look at the help files for remove on how to remove equipment. If you've done so, you can now wield a weapon
                or two. If you're in your class hall, you might find a rack with your class' starting weapons which can be
                taken freely. Use the following command if you're a mage. (You should be able to figure out the command for
                the other classes).
                <pre>take staff</pre>
                If you're in your class hall, you should also take a look at the board. Usually these feature a FAQ for the
                class that will answer any commonly asked questions you might have.
                <br />
                <br />
                Your goal is to try and improve your stats and skills, and level up. This is done by gaining experience, and
                spending it on those. Although skills will also train themselves when you use your spells and abilities most
                of the time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Typography>Written by Dejarik 2004</Typography>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Newbie;
