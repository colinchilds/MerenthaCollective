import React, { useState } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import GridContainer from '@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography, Box, Chip, Paper, Link } from '@mui/material';
import { alpha } from '@mui/material/styles';

const commands = [
  {
    id: 'abilities',
    name: 'abilities',
    syntax: 'abilities [mine]',
    description:
      'Lists all the abilities/skills which are possible most of the time. If you specify <abilities mine> it will list all the abilities you currently have.',
  },
  {
    id: 'alias',
    name: 'alias',
    syntax: 'alias, alias <word>, alias <word> <command>, alias <word> <command> $*',
    description:
      "Alias sets aliases so you do not need to type as much. Some aliases have already been created for you, for example 'nw' is aliased to 'northwest' so you do not need to type that long word. To see your aliases type 'alias'. To see what a word is aliased to, type 'alias <word>'. To create an alias type 'alias <word> <command>'. For example, 'alias gac get all from corpse' will create an alias so when ever you type 'gac' it is the same as typing 'get all from corpse'. $* is a variable. A good example of this would be 'alias nn newbie $*' this will create the alias for newbie and allow you to have a variable input each time you use it. Typing 'nn hello' is the same as 'newbie hello'. See also: unalias, nickname",
  },
  {
    id: 'aid',
    name: 'aid',
    syntax: 'aid [person]',
    description:
      'This command allows you to join in battle with person named. This is a very helpful command for when you are in a room with 5 spiders and do not know which one your party member is fighting. See also: party',
  },
  {
    id: 'armor',
    name: 'armor',
    syntax: 'armor',
    description: 'This command displays how well your body is armoured physically and magically.',
  },
  {
    id: 'autosac',
    name: 'autosac',
    syntax: 'autosac [into <container>|verbose|brief]',
    description:
      "This command toggles the option of either looting a corpse of all you can carry, or just looting coins before sacrificing it to the gods. You can also do 'autosac into <container>' which will make you automatically put looted items into the container you name, but you of course must have autosac on to use this option. <autosac brief> will hide you getting items from a corpse to reduce the amount of text you see. Use <autosac verbose> to turn this back on.",
  },
  {
    id: 'biography',
    name: 'biography',
    syntax: 'biography',
    description: 'This command displays a bit of your own biography. See also: score, status, armor, body',
  },
  {
    id: 'body',
    name: 'body',
    syntax: 'body',
    description:
      'This is a status of the damage done to your limbs. NOTE: This is not like hp. The larger the damage value, the worse shape you are in. See also: score',
  },
  {
    id: 'break',
    name: 'break',
    syntax: 'break <item>',
    description:
      'Breaks the item named, if its breakable. If you break a bottle for example you will get a weak weapon from it.',
  },
  {
    id: 'brief',
    name: 'brief',
    syntax: 'brief',
    description:
      'Toggles you between brief and verbose modes. In brief mode you get shorter room descriptions on entering them. Useful when going through a lot of well known rooms fast. Can also use the argument [combat] for faster and shorter combat messages. See also: look, lines',
  },
  {
    id: 'bury',
    name: 'bury',
    syntax: 'bury [item]',
    description:
      'Allows you to get rid of unwanted things in your inventory and being rewarded by the gods for disposing things in such a nice manner. See also: sacrifice, autosac',
  },
  {
    id: 'calendar',
    name: 'calendar',
    syntax: 'calendar',
    description: 'This will display a calendar of the Merentha year.',
  },
  {
    id: 'classbonus',
    name: 'classbonus',
    syntax: 'classbonus',
    description: "Displays the modifiers for all classes' stats. See also: classvitals, racestats, racevitals",
  },
  {
    id: 'classvitals',
    name: 'classvitals',
    syntax: 'classvitals (dragon)',
    description: "Displays the modifiers for all classes' vitals. See also: classbonus, racestats, racevitals",
  },
  {
    id: 'clear',
    name: 'clear',
    syntax: 'clear <on|off>',
    description: 'Allows the user to toggle whether or not their screen cleans during help files.',
  },
  {
    id: 'cls',
    name: 'cls',
    syntax: 'cls',
    description: 'Clears the screen for players who have terminals that support ANSI escape codes.',
  },
  {
    id: 'color',
    name: 'color',
    syntax: 'color',
    description:
      'This does a quick setup of colors for lines. Merentha allows you to customize your own line colors. See: setcolor',
  },
  {
    id: 'consider',
    name: 'consider',
    syntax: 'consider [<living>]',
    description:
      "Reports the health of the living object named, or, if in battle and no arguments are used, your current opponent's health. Also gives a estimate on your abilities to kill the object. See also: rankmob",
  },
  {
    id: 'cost',
    name: 'cost',
    syntax: 'cost',
    description:
      'This displays information on how close you are to leveling, how much exp you have to spend and which stats you have enough exp to increase.',
  },
  {
    id: 'councils',
    name: 'councils',
    syntax: 'councils',
    description:
      'This command will display who is on the class and kingdom councils. Kingdom councils are chosen by the ruler of a kingdom. Drows and Artrells do not have councils, instead they have a single ruler. Kingdom councils decide the policies for kingdoms. A member of a kingdom council can only be removed from their position by one of the following 3 ways: 1) mailing me they want out 2) being away from Merentha for 6 weeks at the request of the ruler 3) falling below level 18 at the request of the ruler. Class councils are elected by players and run for a 3 month term. Elections are during the last weeks of December, March, June and September. Class councils exist as your (players) representitive to the admins of Merentha. You are to contact the councils before contacting the admins on any topic. The admins are very busy people and the council can usually help you better and quicker then the admins could.',
  },
  {
    id: 'date',
    name: 'date',
    syntax: 'date [(timezone)]',
    description:
      'Gives you the time. If you specify a time zone, it will give you the time for that time zone. Without specifying, it gives you the time in your time zone. This command also displays the time and date, both in Merentha time and in PST or PDT depending on the time of the year. It will also show how long until Merentha reboots. Other info commands: help, faq, timezone',
  },
  {
    id: 'deaths',
    name: 'deaths',
    syntax: 'deaths',
    description: 'Lists all the deaths you have had by monsters. See also: biography, kills, deeds, quests',
  },
  {
    id: 'deeds',
    name: 'deeds',
    syntax: 'deeds',
    description: 'Lists the deeds done by you.',
  },
  {
    id: 'describe',
    name: 'describe',
    syntax: 'describe [(text)]',
    description:
      'Adds a description that people will see when they look at you. The description is shown in the form of "your name + text". For example, if I type "describe is a Borg.", then my description will read "Descartes is a Borg.". If no argument is given, then your description disappears. See also: look, timezone',
  },
  {
    id: 'dismount',
    name: 'dismount',
    syntax: 'dismount',
    description: 'Dismounts from any mount you are currently riding.',
  },
  {
    id: 'ditch',
    name: 'ditch',
    syntax: 'ditch everyone|[follower]',
    description: 'This will forcefully remove anyone following you. See also: follow, buck',
  },
  {
    id: 'drop',
    name: 'drop',
    syntax: 'drop <item | all | every item>',
    description:
      'This makes your character try to drop the specified item. If all is used then your character drops all items carried. You may also drop off of a type of item. Examples: drop sword (will drop the item named sword), drop all (will drop everything you have), drop every sword (will drop all your swords). See also: get, inventory',
  },
  {
    id: 'earmuffs',
    name: 'earmuffs',
    syntax: 'earmuffs (arena|fireworks|shout)',
    description:
      "By itself, <earmuffs> will allow you to see what type of global messages you are blocking. When provided with an argument, such as 'arena', 'fireworks', or 'shout', you will no longer receive global messages of that type. So for example if you type 'earmuffs arena' you will then ignore all arena messages, and then type it again to pay attention to them.",
  },
  {
    id: 'emote',
    name: 'emote',
    syntax: 'emote [string]',
    description:
      'Whatever string you type in will be given to every one in the room with you following your name. Thus the command: emote sits down and relaxes. will do: Brian sits down and relaxes. (With your name substituted for Brian) See also: say, whisper, yell',
  },
  {
    id: 'equip',
    name: 'equip',
    syntax: 'equip',
    description:
      'This command gives you a list of the items contained in your inventory. You can also set flags to scroll your inventory and to consolidate it. The commands are: inventory more, inventory consolidate. See also: score, inventory',
  },
  {
    id: 'exhibit',
    name: 'exhibit',
    syntax: 'exhibit <item> to <player>',
    description:
      'This command will display an item you are holding to another player in the same room as you. It is very much like the <show> command for shops. See also: give',
  },
  {
    id: 'fish',
    name: 'fish',
    syntax: 'fish',
    description:
      'Fishing is a chief way of getting food which you can eat to help you heal. You can fish from anywhere which borders a lake, river or ocean.',
  },
  {
    id: 'follow',
    name: 'follow',
    syntax: 'follow [name], follow allow [name]',
    description:
      '<follow allow> allows the player named to follow you. <follow> allows you to follow a player who has allowed you. See also: followers, party',
  },
  {
    id: 'followers',
    name: 'followers',
    syntax: 'followers',
    description: 'Allows you to check who is following you.',
  },
  {
    id: 'get',
    name: 'get',
    syntax: 'get <item | all | every item>',
    description:
      'This command will have your character try to pick up the item specified, or if all is typed, it will make your character try to pick up everything in the room. You can also specify a certain type of item to pick up and take all of those. Examples: get sword (will get the item named sword), get all (will get everything in the room), get every sword (will get all the swords in the room). See also: drop, inventory',
  },
  {
    id: 'give',
    name: 'give',
    syntax: 'give <item> to <player>',
    description:
      'This command will make you give an item in your inventory to the player specified. You must be in the same room for this to occur. See also: exhibit',
  },
  {
    id: 'hp',
    name: 'hp',
    syntax: 'hp',
    description: 'Displays your current physical status. See also: score, status, hpinfo',
  },
  {
    id: 'hpinfo',
    name: 'hpinfo',
    syntax: 'hpinfo [on/off]',
    description:
      'The command changes your prompt to display your hp/sp/mp. You may also "hpinfo off" which returns your prompt to \'>\'.',
  },
  {
    id: 'hunters',
    name: 'hunters',
    syntax: 'hunters',
    description: 'This command lists all the mobs which probably wanna kill you.',
  },
  {
    id: 'idle',
    name: 'idle',
    syntax: 'idle <player>',
    description: 'Shows how long <player> has been idle.',
  },
  {
    id: 'ignore',
    name: 'ignore',
    syntax: 'ignore <person | channels>',
    description:
      'This command will show you all the people you are ignoring if you don\'t specifiy a <person>, or it will ignore, or unignore, the <person> you wish. Ignoring "channels" will optionally include your ignore list on all channels.',
  },
  {
    id: 'inventory',
    name: 'inventory',
    syntax: 'inventory',
    description:
      'This command gives you a list of the items contained in your inventory. You can also set flags to scroll your inventory and to consolidate it. The commands are: inventory more, inventory <item>. See also: score, equip',
  },
  {
    id: 'kill',
    name: 'kill',
    syntax: 'kill <living>',
    description:
      'This command is used to initiate combat with the living being you specify. Once combat begins you may only end it by running away or if one of you dies. Other players may also be attacked. See book on playerkilling in library. See "help death". See also: wimpy, wimpydir, follow, party',
  },
  {
    id: 'kills',
    name: 'kills',
    syntax: 'kills [what], kills [who]',
    description:
      'Lists all your kills. The optional argument allows you to filter for a certain name. Usage: kills [who] lists your kills or kills for [who].',
  },
  {
    id: 'land',
    name: 'land',
    syntax: 'land',
    description:
      'If you are flying this command allows you to land. This command can be used by flying races like faeries and dragons, or in an air balloon when you see a landing spot. Once you have landed in a balloon you may <exit> the balloon.',
  },
  {
    id: 'languages',
    name: 'languages',
    syntax: 'languages | languages long | languages <lang>',
    description:
      'Without <lang>, languages will return the list of languages you have some proficiency in. With <lang>, it will return your proficiency in that language. With <long> will display bar graphs similar to the <status> command. See also: tongues, study',
  },
  {
    id: 'last',
    name: 'last',
    syntax: 'last <line>',
    description:
      'Typing this command with a line specified will display the last messages for that line. Valid lines are: tell, say, newbie, mid, hm, all class lines and all kingdom lines. You may only view lines which you are able to speak on. Example: last tell (shows the last messages someone sent directly to you)',
  },
  {
    id: 'lastkiller',
    name: 'lastkiller',
    syntax: 'lastkiller',
    description: 'Gives you the name of the last creature or player who killed you.',
  },
  {
    id: 'lines',
    name: 'lines',
    syntax: 'lines ([on|off])',
    description:
      'With no argument, this command will display the listening and blocked status of the channels you have access to. With the arguments [on] or [off], this command will listen or block all channels.',
  },
  {
    id: 'look',
    name: 'look',
    syntax: 'look [at <object>]',
    description:
      'If no object is specified this command makes you look around the room. If an object is specified it lets you examine the object more closely. See also: describe, brief',
  },
  {
    id: 'mail',
    name: 'mail',
    syntax: 'mail [<person>]',
    description:
      "Sends mail to the person named, or puts you into the mailer if you don't name anyone. Once in the mailer you may read any messages you have. For more info on how to read mail, read the <help readmail> file.",
  },
  {
    id: 'map',
    name: 'map',
    syntax: 'map [<living>]',
    description:
      'This command will turn on and off automatic mapping. The command will draw a small map of your obvious exits in long room descriptions. See also: brief',
  },
  {
    id: 'money',
    name: 'money',
    syntax: 'money',
    description: 'Allows you to search your pockets for all of your coins of all currency types.',
  },
  {
    id: 'mount',
    name: 'mount',
    syntax: 'mount <mount> | mount allow <player> | mount <player>',
    description:
      'Allows a player to ride a mount, or if allowed to ride by a centaur or dragon player, may ride that centaur or dragon player. See also: follow, ditch, dismount, tie, whistle',
  },
  {
    id: 'notify',
    name: 'notify',
    syntax: 'notify [skills|exp|limbs|language|damage]',
    description:
      'This command will notify you as follows: skills - when a skill improves, exp - when you reach your exp limit, limbs - when your limbs get badly damaged, language - when you increase in your knowledge of a language, damage - when you take combat damage. See also: skills, cost, body',
  },
  {
    id: 'party',
    name: 'party',
    syntax:
      'party form <name> | party add <player> | party join <name> | party remove <player> | party range | party leave | party list | party line <message> | party leader <player> | party roll <#>',
    description:
      "This command accesses the various party enabling functions. The person who forms any party is automatically the leader of the party. Only that player may add or remove players. Experience is awarded based on the individual's level with respect to the rest of the party. Once you have been invited to join the party, you must type <party join [name]> (where name is the name of the party). See also: follow",
  },
  {
    id: 'quests',
    name: 'quests',
    syntax: 'quests [#]',
    description: 'Lists all the quests of Merentha and your completion status of them. See also: deeds',
  },
  {
    id: 'racestats',
    name: 'racestats',
    syntax: 'racestats',
    description: "Displays the modifiers for all races' stats. See also: racevitals, classbonus, classvitals",
  },
  {
    id: 'rankmob',
    name: 'rankmob',
    syntax: 'rankmob',
    description:
      "This command will change each monster's name to a different color based on their difficulty. See also: consider",
  },
  {
    id: 'recall',
    name: 'recall',
    syntax: 'recall',
    description:
      "This command allows level 3 adventurers to recall to their town square if they get lost. Owners of pets may also 'recall' their pets.",
  },
  {
    id: 'regen',
    name: 'regen',
    syntax: 'regen',
    description:
      "This command displays the healing rates of a player's vitals, separated out into Passive and Active regeneration rates. Passive healing is the rate at which your body heals itself over time. Most players will heal every 10 rounds though there are some races, spells, abilities, and items that can adjust the frequency of passive healing, while spells, abilities, and stimulants may adjust the amount of passive healing. Active healing is the rate at which your body heals itself every round. Carried and worn items such as a mana orb or a ring of healing may adjust the amount of active healing.",
  },
  {
    id: 'remove',
    name: 'remove',
    syntax: 'remove <item> | remove all',
    description:
      'This command allows you to unequip a piece of armor or equipment that you are currently wearing. You can specify a particular item to remove, or use "all" to remove everything you are wearing. See also: wear',
  },
  {
    id: 'report',
    name: 'report',
    syntax: 'report',
    description: 'Reports to others your current physical status. See also: score, status',
  },
  {
    id: 'resistances',
    name: 'resistances',
    syntax: 'resistances',
    description: 'This command shows player resistances visualized as horizontal bar graphs.',
  },
  {
    id: 'rest',
    name: 'rest',
    syntax: 'rest',
    description: 'Someone who is resting will regain their lost health. See also: sleep',
  },
  {
    id: 'restartheart',
    name: 'restartheart',
    syntax: 'restartheart',
    description:
      'This command restarts your heart. This may be needed when certain bugs occur which stop your heartbeat. Your heartbeat is what determins combat rounds and healing and so forth. Without a heartbeat you will find your actions in the game severly limited. This command also should fix any problems with riding horses if they should happen.',
  },
  {
    id: 'sacrifice',
    name: 'sacrifice',
    syntax: 'sacrifice corpse|alignment',
    description:
      'Allows you to sacrifice the corpse of a slain enemy to the gods in reward of a light heal. Monks may toggle the alignment gain of their sacrifice. See also: autosac, bury',
  },
  {
    id: 'save',
    name: 'save',
    syntax: 'save',
    description:
      'This command saves the present status of your character to disk. This is important as it is this file that will be used to set your character back up if the mud should crash. Your character is automatically saved if you quit.',
  },
  {
    id: 'say',
    name: 'say',
    syntax: 'say [in <language>] <message>',
    description:
      'This allows you to speak in any language you know. Only those around you who understand the language will see the real text. The others will see parts of it based on their speaking ability. If you do not enter a language to speak in you will speak in a common language known to all.',
  },
  {
    id: 'score',
    name: 'score',
    syntax: 'score',
    description:
      'This command gives you information about your character. See also: status, body, biography, skills, stats, money, inventory',
  },
  {
    id: 'setcolor',
    name: 'setcolor',
    syntax: 'setcolor [<channel> <color>]',
    description:
      "Configure your chatlines to be colored the way you like. This includes say and shout. The <color> variable is one or more words, in caps, for the colors. If you don't input a channel and color and just type <setcolor> you will get a listing of all your color settings. Example: setcolor newbie GREEN. Example: setcolor newbie BOLD GREEN. BAD Example: setcolor newbie green. See also: color",
  },
  {
    id: 'setenv',
    name: 'setenv',
    syntax: 'setenv [<variable>] [<value>]',
    description:
      "Sets environment variables which customize the way the game appears to you. You may set the following values: LINES: sets how many lines appear for paged information, SCREEN: sets how wide your screen is, SCREENREADER: sets mode to screenreader for less ASCII output, EXTRAENTER: puts in an extra 'newline' when printing output (on or off), MORE: sets how your <more> functioning works (on or off), TERM: sets colour, TZONE: sets what time zone you are in, NO_CLEAR: sets if your screen clears (on or off), ADVANCE: sets your advancement notification lines, can be one or more of: class guild kingdom off. Examples: setenv LINES 20, setenv ADVANCE class kingdom. Variables marked can be queried to see the currently set value. See also: switchmore, timezone, clear, setcolor",
  },
  {
    id: 'setvitals',
    name: 'setvitals',
    syntax: 'setvitals [numbers|percents|lines]',
    description:
      'This command displays your vitals in different formats depending on wether you want numbers, percents or bar graphs. It effects such commands as hp. status. report and score where such information is displayed.',
  },
  {
    id: 'shout',
    name: 'shout',
    syntax: 'shout [in <language>] <message>',
    description: 'Sends a shout in whatever language to the entire mud. Misuse of this power may result in action from law.',
  },
  {
    id: 'skills',
    name: 'skills',
    syntax: 'skills [maxes|cost]',
    description:
      "This command displays your skills. If you specify either the maxes or the cost it will display that info as well. Your skills are just as important here as your stats. Your stats may be rolled in your class hall. Skills are increased with use or else by training experience on them. You may set your skill notify on or off to let you know when a skill has gained a level. Type 'notify skills' to toggle this option. See also: abilities, cost, notify",
  },
  {
    id: 'sleep',
    name: 'sleep',
    syntax: 'sleep',
    description:
      'Someone who is sleeping will regain their lost health at a far quicker rate than if they were simply awake. The exact rate at which they will rejuvenate is dependant upon their constitution. To awaken from a slumber, simply type <wake>; and while in a slumber, you are unable to perform any actions, other than awakening. See also: rest',
  },
  {
    id: 'songs',
    name: 'songs',
    syntax: 'songs [all]',
    description:
      'Returns a list of the songs a bard or fire dragon knows. If <songs all> is entered, a list of all the songs of Merentha are displayed.',
  },
  {
    id: 'speak',
    name: 'speak',
    syntax: 'speak [in <language>] <message>',
    description:
      'This allows you to speak in any language you know. Only those around you who understand the language will see the real text. The others will see parts of it based on their speaking ability. If you do not enter a language to speak in you will speak in a common language known to all.',
  },
  {
    id: 'spells',
    name: 'spells',
    syntax: 'spells mine|all|subclass',
    description:
      "List all of the available spells for the given argument. Use 'healermonk' or 'healermage' to clarify which healer subclass to query.",
  },
  {
    id: 'start',
    name: 'start',
    syntax: 'start here',
    description:
      'The <start here> command allows you to start in specific locations within the game. You are only able to start in certain locations, for example class halls, the town square of major cities and the central square of kingdoms. See also: setenv',
  },
  {
    id: 'stats',
    name: 'stats',
    syntax: 'stats',
    description:
      'Stats (short for statistics) are several numbers for your character that represent how able you are in each category. You can see your current stats using the cost command. The following stats are available: Strength, Charisma, Constitution, Dexterity, Intelligence, Wisdom. Stats can be improved by training them at your class hall using experience. The cost is affected by several factors such as race and class and how high your stats are. Each stat is helpful for all classes, but some stats have reduced costs for each class (in order of reduced cost): Fighter - Strength, Constitution, Dexterity; Rogue - Dexterity, Charisma, Strength; Mage - Intelligence, Wisdom; Monk - Wisdom, Constitution, Dexterity, Strength; Cleric - Intelligence, Wisdom, Charisma, Strength. As you start to grow in level, stats become more and more important and you will be required to have a minimum of stats for each level.',
  },
  {
    id: 'status',
    name: 'status',
    syntax: 'status',
    description: 'This command shows various player attributes visualized as horizontal bar graphs.',
  },
  {
    id: 'survey',
    name: 'survey',
    syntax: 'survey',
    description: 'Allows you to look into the neighbouring rooms if nothing blocks your sight.',
  },
  {
    id: 'switchmore',
    name: 'switchmore',
    syntax: 'switchmore',
    description:
      "There are 2 different ways clients handle input and output. In some cases you will be asked to hit enter after reading part of a file, for example when reading a large help file. Depending on your client you may need to press <space> then hit enter before it will properly continue scrolling. Type 'switchmore' to change it so that you need to just hit enter.",
  },
  {
    id: 'tellblock',
    name: 'tellblock',
    syntax: 'tellblock',
    description: 'Toggles the blocking of tells on and off.',
  },
  {
    id: 'tie',
    name: 'tie',
    syntax: 'tie <mount>',
    description: "Ties a mount down so it can't wander about. See also: mount, whistle",
  },
  {
    id: 'timezone',
    name: 'timezone',
    syntax: 'timezone',
    description: 'This command will allow you to set the correct timezone so <date> and <time> give your correct time.',
  },
  {
    id: 'tongues',
    name: 'tongues',
    syntax: 'tongues',
    description: 'This lists the languages spoken by the different races. See also: languages, speak, shout, study',
  },
  {
    id: 'truce',
    name: 'truce',
    syntax: 'truce <player>',
    description: 'This command allows you to stop fighting with another player if both parties agree to a truce.',
  },
  {
    id: 'unalias',
    name: 'unalias',
    syntax: 'unalias <word>',
    description: 'Unalias removes an alias which you no longer need or want. See also: alias, nickname, unnickname',
  },
  {
    id: 'users',
    name: 'users',
    syntax: 'users',
    description: 'Lists the names of players logged in. A shorter and quicker version of <who>. See also: who',
  },
  {
    id: 'wear',
    name: 'wear',
    syntax: 'wear <item> | wear all',
    description:
      'This allows you to wear an armour item so that it protects you in combat. You can specify a particular item to wear, or use "all" to wear everything you can. Note that some items may have extra magic protections which need to be activated by calling the magic through a magic word. The armour is automatically equipped to the body parts for which it is meant, if no armour of the same type is already worn there.',
  },
  {
    id: 'whisper',
    name: 'whisper',
    syntax: 'whisper <player> <message>',
    description:
      'This command is used to whisper a message to another player who is in the same room as you without other players being able to hear what you are saying. See also: say, emote, yell',
  },
  {
    id: 'whistle',
    name: 'whistle',
    syntax: 'whistle [tames|mount]',
    description: 'A player may recall summoned creatures, tamed beast, or a mount with this command. See also: mount, tie',
  },
  {
    id: 'who',
    name: 'who',
    syntax: 'who [-][abdklpqt] [args]',
    description:
      "Lists all players online or all players of the race(s) given. If no arguments are given, it simply lists all players sorted by level. [args] can be one or more (or none) of the following: name, race, class, subclass, kingdom, guild, council, ghost, newbie, mid, hm, elite, legend. If you are searching for a player by name or guild and that player has a <space> in their name or guild name, enter the name without the <space>. So if you are searching for people in the 'Alpha Guild' enter 'who alphaguild'. Options: a = alphabetical, m = mini-quests (deeds), b = birth date, p = playing time, d = number of deaths, q = quests, k = number of kills, t = login time, l = level, s = score.",
  },
  {
    id: 'wimpy',
    name: 'wimpy',
    syntax: 'wimpy [number]',
    description:
      'When on, wimpy will automatically flee you from combat when your hitpoints are reduced below [number]% of your total. The number should be between 0 and 50. See also: wimpydir',
  },
  {
    id: 'wimpydir',
    name: 'wimpydir',
    syntax: 'wimpydir [<direction>]',
    description:
      'If you specify a direction, then when you wimpy, you will first try to wimpy in that direction. If you do not specify a direction, it will tell you your current direction of preference. See also: wimpy',
  },
  {
    id: 'xprate',
    name: 'xprate',
    syntax: 'xprate start|pause|reset|report|reportparty',
    description:
      'This command allows you to track how many experience points you are gaining while adventuring. <xprate start> starts or resumes tracking experience points gained. <xprate pause> pauses the experience points gained timer, ignoring any new gains in experience or time. <xprate reset> resets tracked experience points back to zero. <xprate report> shows the average experience point gain per hour based on the starting time to the current or paused time. <xprate reportparty> shows the <xprate report> on your party line.',
  },
  {
    id: 'yell',
    name: 'yell',
    syntax: 'yell [message]',
    description:
      'It yells a message to surrounding rooms. The sound does dissipate over distance, however. It also takes a bit of strength to do this. See also: say, whisper, emote, shout',
  },
].sort((a, b) => a.name.localeCompare(b.name));

const breadcrumbs = [
  { label: 'General', link: '/' },
  { label: 'Common Commands', isActive: true },
];

const PlayerCommands = () => {
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleCommandClick = (command) => {
    setSelectedCommand(command);
  };

  const renderDescriptionWithLinks = (description) => {
    const parts = [];

    // Look for "See also:" pattern and link commands after it
    const seeAlsoMatch = description.match(/(.*See also:\s*)(.+)/i);

    if (seeAlsoMatch) {
      const beforeSeeAlso = seeAlsoMatch[1];
      const afterSeeAlso = seeAlsoMatch[2];

      parts.push(beforeSeeAlso);

      // Split the commands by comma and space
      const potentialCommands = afterSeeAlso.split(/,\s*/);

      potentialCommands.forEach((item, index) => {
        const commandName = item.trim();
        const cleanCommandName = commandName.replace(/[.,;:!?]+$/, ''); // Strip trailing punctuation
        const existingCommand = commands.find((cmd) => cmd.name.toLowerCase() === cleanCommandName.toLowerCase());

        if (existingCommand) {
          parts.push(
            <Link
              key={`link-${index}`}
              component="button"
              variant="body1"
              onClick={(e) => {
                e.preventDefault();
                handleCommandClick(existingCommand);
              }}
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                '&:hover': {
                  color: 'primary.dark',
                },
              }}>
              {commandName}
            </Link>,
          );
        } else {
          parts.push(commandName);
        }

        if (index < potentialCommands.length - 1) {
          parts.push(', ');
        }
      });

      return <>{parts}</>;
    }

    return description;
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Common Commands">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {commands.map((command) => (
                    <Chip
                      key={command.id}
                      label={command.name}
                      onClick={() => handleCommandClick(command)}
                      sx={{
                        cursor: 'pointer',
                        bgcolor: selectedCommand?.id === command.id ? 'primary.main' : 'grey.100',
                        color: selectedCommand?.id === command.id ? 'white' : 'text.primary',
                        '&:hover': {
                          bgcolor:
                            selectedCommand?.id === command.id
                              ? 'primary.dark'
                              : (theme) => alpha(theme.palette.primary.main, 0.1),
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Command Details */}
              {selectedCommand && (
                <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.main',
                      textTransform: 'lowercase',
                    }}>
                    {selectedCommand.name}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Syntax:
                  </Typography>
                  <Paper sx={{ p: 2, mb: 3, bgcolor: 'grey.900', color: 'white' }}>
                    <Typography variant="body1" component="code" sx={{ fontFamily: 'monospace' }}>
                      {selectedCommand.syntax}
                    </Typography>
                  </Paper>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Description:
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {renderDescriptionWithLinks(selectedCommand.description)}
                  </Typography>
                </Paper>
              )}

              {!selectedCommand && (
                <Paper sx={{ p: 3, bgcolor: 'grey.50', textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Select a command from the list above to view its details.
                  </Typography>
                </Paper>
              )}
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default PlayerCommands;
