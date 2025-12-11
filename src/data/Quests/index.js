const questData = [
  {
    name: "The Lover's Sin",
    short: 'Lovers',
    description: [
      'Two souls, banished from ever meeting again.',
      'Two souls, forbidden to join in one embrace.',
      'One walks by day never to see the moons.',
      'One walks by night, prohibited from feeling the rays of the sun.',
      'It is up to you to join these two.',
    ],
    level: 1,
    rewards: 'Charisma',
  },
  {
    name: 'The Forest of Deception',
    short: 'Deception',
    description: `Great troubles from centuries long ago are once again stirring. You must travel
                  to Marrdan and learn of the past before setting out on this quest. A guru can
                  aid you on this quest which will bring you one step closer to immortality.`,
    level: 6,
  },
  {
    name: 'Into the Woods',
    short: 'Woods',
    description: [
      'Long ago, when you were just a.....',
      'Ahhhh, forget it.Lets just say there is a witch in the Forest of Deception and well she needs your help.Go to Deception, past Marrdan and help her out.',
      'Well what are you waiting for? Go to the Woods!',
    ],
    level: 10,
  },
  {
    name: 'The Destruction of Trogrelin',
    short: 'Destruction',
    description: [
      `An evil troll empire has appeared in the swamps of Fenris. With the trolls live
      goblins and ogres and it is rumored that they are planning an invasion into
      civilized cities.`,
      'If you have already saved the prisoners, you must now destroy the city.',
    ],
    level: 10,
    rewards: 'If Prisoner is done first, Strength',
  },
  {
    name: 'The Quest for Honey',
    short: 'Honey',
    description: `The sweetest sweets require the sweetest honey of course, but Ishy is nearly out
                  of honey and needs more or the realms of Jewel will have no sweets. Go collect
                  some honey and give it to her.`,
    level: 10,
  },
  {
    name: "Velomuzst's Soul",
    short: 'Velomuzst',
    description: `A new and growing evil has been discovered in an underground lair. Undead have
                  begun to plague the area and there are stories of a long-forgotten evil now
                  stirring once again. Seek out a paladin already in search of the answers.`,
    level: 15,
  },
  {
    name: "Summer's Ring",
    short: "S's Ring",
    description: `A bride to be has lost her diamond engagement ring somewhere while visiting her
                  sister in the Lands of Xenora. Go help her by replacing the lost ring.`,
    level: 15,
  },
  {
    name: 'The Mystic Quest',
    short: 'Mystic',
    description: `The prince of darkness has stolen the faerie princess. Return the princess to
                  her mother. Talk to the Queen of Faeries in Cardania for more details.`,
    level: 15,
    rewards: 'Charisma',
  },
  {
    name: 'The Missing Neighbors',
    short: 'Neighbors',
    description: `An old man who lives near Preus is worried about his neighbors. It has been days
                  since he has heard from them. Find the old man and put his mind at rest.`,
    level: 15,
  },
  {
    name: 'Book of Kings',
    short: 'Kings',
    description: 'The Sage of Whitestorm seeks to enhance the library. He has a very special request for an adventurer.',
    level: 15,
  },
  {
    name: 'The Heir to Talis',
    short: 'Talis',
    description: `Talis is an island in search of its heir. Many have tried to claim the throne
                  for themselves, but the true ruler has still not been found. In fact the isle of
                  Talis itself is somewhat a mystery, although many claim to have once been there,
                  no one can find it a second time. Help them find their rightful King.`,
    level: 15,
  },
  {
    name: "The Captain's Ghost",
    short: 'Captain',
    description: `A troubled soul lies on the high seas. Now he needs your help to spend the rest
                  of eternity at peace. Don't forget to respect those who deserve it.`,
    level: 15,
  },
  {
    name: 'Catyle',
    short: 'Catyle',
    description: `Many years ago a centaur pirate was lost at sea. Others suspect that it was the
                  ill doings of one of their scurvy mates. They await news, anxious to hang the
                  bloody bloke from the yardarm, or make him walk the plank into a sea of hungry
                  sharks! Arggh, find the centaur!`,
    level: 15,
  },
  {
    name: 'The Quest of Odysseus',
    short: 'Odysseus',
    description:
      'Something is very wrong in another time and another place. Your first step is seek the fruit of knowledge and see where it takes you.',
    level: 20,
  },
  {
    name: 'The God KurKar',
    short: 'KurKar',
    description: `The Kobold God, KurKar, has been trying to enter into the realm of Merentha
                  since the dawn of time. Now, the Kobolds are close to realizing this
                  achievement. Will you help them, or impede them?!`,
    level: 20,
    rewards: 'Good Alignment: Wisdom | Evil Alignment: Intelligence & Wisdom',
  },
  {
    name: 'The Quest for Immortality',
    short: 'Immortality',
    description: `The quest to be immortal is not a quest for the weak of heart. You must journey
                  to all the ends of the world and back to accomplish this quest if you wish to
                  join the gods in the sky.`,
    level: 20,
  },
  {
    name: 'The Doppelganger',
    short: 'Doppelganger',
    description: `A great kingdom once ruled in the lands of the Hiemelia, but as all kingdoms do,
                  this one fell and the Kingdom of Hiemelia grew forth. But now an evil
                  doppelganger has invaded the old kingdom, and by taking the form of an old king
                  plans to rebuild the kingdom and cause chaos throughout the world again. Take
                  whatever actions you need to stop him.`,
    hint: 'Best you learn the language of the giants.',
    level: 20,
  },
  {
    name: 'The Apothecary',
    short: 'Apothecary',
    description: `On the Island of Rimaga is an Apothecary in need of help. Aid him in his quest
                  to heal the ill. To begin this quest, locate the Apothecary on the Island of
                  Rimaga and speak to him about his quest.`,
    level: 20,
    rewards: 'Intelligence',
  },
  {
    name: 'The Ottograd Royal Regime',
    short: 'Ottograd',
    description: `The realm of Ottograd has been held under the repressive regime of the Royal
                  Czar. Help the people of Ottograd find their own way and break free from the
                  Royal Czar's grasp.`,
    level: 30,
    rewards: 'Constitution',
  },
  {
    name: 'Korlis Ruins',
    short: 'Korlis',
    description: `A terror has plagued Korlis for centuries, even the dead do not rest there. The
                  beast had slept for years, until the Kobolds expanded into its domain. Now it
                  has risen and begun to create havoc in its path.`,
    level: 30,
    rewards: 'Strength & Intelligence',
  },
  {
    name: 'Holy Chalice',
    short: 'Chalice',
    description:
      'The Arch Black Cleric stole the Holy Chalice. It must be retrieved and placed back into its proper resting place.',
    level: 40,
    rewards: 'Wisdom',
  },
  {
    name: 'The Prisoner of Trogrelin',
    short: 'Prisoner',
    description: `An evil troll empire has appeared in the swamps of Fenris. With the trolls live
                  goblins and ogres and it is rumored that they are planning an invasion into
                  civilized cities. As the First step in this evil plan they have taken several
                  people prisoners. Go rescue them!`,
    level: 10,
    rewards: 'Wisdom',
  },
  {
    name: 'The Quest for Steel',
    short: 'Steel',
    description: `A blacksmith requires a new source for meeting the demands of a large army. A
                  new source for the raw materials to make steel is needed. Find and assist this
                  blacksmith to begin this quest.`,
    level: 60,
  },
  {
    name: 'The Quest for Rare Gems',
    short: 'Rare Gems',
    description: `An elven king wishes to present his queen with a new crown on her next birthday.
                  For such a special occasion, only the finest will do. Could you be the brave
                  adventurer which the king seeks? Speak with this elven king to begin this quest.`,
    level: 60,
  },
  {
    name: 'The Lost Druid',
    short: 'Druid',
    description: `One of the druids of Imperia has gone missing. Who knows what evilmay lurk
                  within the Imperial forest. Speak with the druids in the elven town of Imperia
                  to begin this quest.`,
    level: 60,
  },
  {
    name: 'The Tome of the Ancients',
    short: 'Ancients',
    description: `In the far north a race of goblins has organized their 
                  crude society and are trying to communicate with their old 
                  god, but to no avail. Seek out one who is wizened and learned beneath the frozen
                  lands of Aerioth.`,
    level: 70,
    rewards: '2 Constitution',
  },
  {
    name: 'The Dracolich',
    short: 'Dracolich',
    description: `A sinister being has gained power in the North through the practice of forbidden
                  black magic, and an isolated abbey of monks seeks to put an end to his plans.
                  Bring evidence of Kel'rek's intentions to their leader to help out.`,
    level: 80,
    rewards: 'Depends on class, 5 of either Strength, Dexterity, Intelligence, or Wisdom',
  },
  {
    name: 'The Unholy War',
    short: 'Unholy',
    description: `Two powerful forces are at war on a distant island. Things are looking grim for
                  Lloth's followers, though their pride will never allow them to admit that. The
                  Elder Magi understand that their forces may be too weak for their new nemesis
                  and they're looking for help from outsiders.`,
    level: 100,
    rewards: 'Wisdom',
  },
  {
    name: "Fairdale's Mythical Creatures",
    short: 'Creatures',
    description: 'A hunter of the wilds tells a legend of mythical creatues in the lands of Fairdale.',
    level: 100,
    rewards: 'Charisma, Dexterity, Wisdom',
  },
  {
    name: 'The Quest for Amity',
    short: 'Amity',
    description: `Many moons ago a tribe colonized an island and created a community. Dissension
                  and differing opinions over the generations have slowly driven this community
                  apart. Help this tribe remember the amity that once bonded them together.`,
    level: 100,
    rewards: '1 Random Stat',
  },
  {
    name: 'The Hunt for the Kraken',
    short: 'Kraken',
    description: `Rumors have circulated of a company of dwarves hunting across the oceans of
                  Merentha for an enemy that has terrorized their past and eluded them for too
                  long. Brave the frozen sea to join their dangerous quest of slaying a beast of
                  titan proportions.`,
    level: 120,
    rewards: 'Strength & Intelligence',
  },
];

export default questData;
