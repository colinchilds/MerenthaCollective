import { area, subArea, map, zone } from './helpers/areaFactory';

export const atheria = area({
  cabeiri: subArea({
    summary: `Cabeiri is the area designated for new characters. To the north is the cemetary. To the east is the faerie forest. To the south is the balloon to Whitestorm and the dinghy to the island. To the west is the Orc, Goblin, and Kobold areas.`,
    levels: '1-15',
    maps: [map('Cabeiri', '/images/maps/Cabeiri.png')],
    zones: [
      zone(
        'Town',
        'Newbie',
        ['Area includes:', '> Shop to the east', '> Bar to the northeast', '> Bank to the south', '> Library to the west'],
        'no',
        'no',
        'no',
        'no',
      ),

      zone(
        'Cemetary',
        'Newbie',
        'Northeast of the square, sports ghouls (minor and major). Be sure to *consider* your enemies',
        '',
        'some',
      ),

      zone('Island', 'Newbie', 'Take the dinghy to the south of the square.'),

      zone('Orc Valley', 'Newbie', 'West of the square and has some decently strong enemies for this zone.', 'some', 'some'),

      zone('Clouds', 'Mid', ''),

      zone('Faerie Forest', 'Mid', "A 'quest' area, so don't ask how to get here. Take a look east of the square."),

      zone(
        'Mountains',
        'Mid',
        'The Kobold Mountains are to the west of Orc Valley. Be sure to check your surroundings carefully.',
      ),
    ],
  }),

  fenris: subArea({
    summary: 'Basically a swamp and rainforest, Fenris boasts a multitude of quests and deeds. Check everywhere!',
    levels: '6-30',
    maps: [
      map('Fenris', '/images/maps/Fenris.jpg'),
      map('Fenris Rainforest', '/images/maps/FenrisRainforest.gif'),
      map('Fenris Rainforest 2', '/images/maps/FenrisRainforest2.jpg'),
      map('Fenris Tunnels', '/images/maps/FenrisTunnels.jpg'),
      map('Oz', '/images/maps/Oz.jpg'),
      map('Trogrelin', '/images/maps/Trogrelin.jpg'),
    ],
    zones: [
      zone(
        'Forest of Deception',
        'Mid',
        ['Imagine folktales come to life.', 'Area has multiple quests and deeds. Keep an eye out.'],
        'no',
        'no',
        'no',
        'no',
      ),

      zone('Marrdan', 'Mid', [
        'The town in Fenris.',
        'West is the Forest of Deception.',
        'South is the balloon back to Whitestorm.',
        'Southwest is Trogrelin.',
      ]),

      zone('Swamp', 'Mid'),

      zone('Trogrelin', 'Late Mid', 'Nice little area with a few deeds/quests.'),

      zone('Mudforest', 'High Mortal'),

      zone(
        'Oz',
        'High Mortal',
        ['This area is leveled by AOE type players.', 'Be sure to watch your surrounding rooms for other players.'],
        'yes',
      ),

      zone('Rainforest', 'High Mortal'),
    ],
  }),

  whitestorm: subArea({
    summary: 'Whitestorm is largely considered the center of the world.',
    levels: '6-30',
    maps: [
      map('Orc Caves', '/images/maps/OrcCaves.gif'),
      map('Strongwood', '/images/maps/Strongwood.jpg'),
      map('Uruk', '/images/maps/Uruk.gif'),
      map('Whitestorm', '/images/maps/Whitestorm.png'),
      map('Whitestorm 2', '/images/maps/Whitestorm2.jpg'),
      map('Whitestorm 3', '/images/maps/Whitestorm3.jpg'),
      map('Whitestorm Farm', '/images/maps/WhitestormFarm.jpg'),
    ],
    zones: [
      zone(
        'City',
        'Mid',
        [
          'Teens to the east and west are good level 10-15 targets.',
          'Shops to the east and west, with a library to the south.',
          'Players frequently leave free items in the square. Be sure to check the chest.',
        ],
        'no',
      ),

      zone(
        'Forest',
        'Mid',
        [
          'Located to the east of Whitestorm, contains many animals (good for AOE hunting).',
          'Strongwood, Uruk, and the Orc Caves are all found in here.',
        ],
        'no',
      ),

      zone(
        'Farms',
        'Late Mid',
        ['North of Whitestorm and the balloon.', 'Has a couple quests/deeds, so keep an eye out.'],
        'no',
        'no',
        'no',
        'no',
      ),

      zone(
        'Strongwood Fortress',
        'Late Mid',
        ['Elven Fortress.', 'Located on the southeastern area of the forest.', 'Attacks Satyrs on sight'],
        'no',
        'no',
        'no',
        'no',
      ),

      zone(
        'Uruk Fortress',
        'Late Mid',
        ['Satyr Fortress.', 'Located on the northwestern area of the forest.', 'Attacks Elves on sight'],
        'no',
      ),

      zone('Badlands', 'Late Mid'),

      zone(
        'Desert',
        'High Mortal',
        ["North of the farms. Can be very confusing if it's your first time here.", 'Airship is located in this area.'],
        'some',
        'no',
        'no',
        'no',
      ),

      zone(
        'Orc Caves',
        'High Mortal',
        ['Located in a hidden area of the forest.', 'Been said to have good AOE hunting.'],
        'yes',
      ),

      zone('Palace', '???'),
    ],
  }),

  clouds: subArea({
    summary: "On top of the clouds above Whitestorm. Quest area, so don't ask how to get here.",
    levels: '40-50',
    maps: [],
    zones: [zone('City', 'Late High Mortal', '', 'no')],
  }),
});
