import { area, subArea, map, zone } from './helpers/areaFactory';

export const cardania = area({
  wolvesdale: subArea({
    summary: 'The balloon is to the east with ships to the south. The tower is to the north. Mountains to the south.',
    levels: '15-50',
    maps: [
      map('Wolvesdale', '/images/maps/WD.jpg'),
      map('Wolvesdale Landing', '/images/maps/WDLanding.jpg'),
      map('Wolvesdale - Full', '/images/maps/Wolvesdale-Full.png'),
    ],
    zones: [
      zone('City', 'Late Mid', "Watch out for the bounty hunter. *You* can't kill them", '', '', '', 'yes'),
      zone('Tower', 'Late Mid', 'Descent pre-High Mortal AOE hunting ground', 'yes', 'some'),
      zone('Mountain', 'Late Mid', ''),
    ],
  }),

  mystic: subArea({
    summary: 'West of Wolvesdale',
    levels: '15-30',
    maps: [
      map('Wolvesdale Crypts 1/2', '/images/maps/WDCrypts1_2.jpg'),
      map('Wolvesdale Crypts 3/4', '/images/maps/WDCrypts3_4.jpg'),
    ],
    zones: [
      zone('Forest', 'Late Mid', ''),
      zone('Underworld', 'High Mortal', ''),
      zone(
        "Velomuzst's Lair",
        'High Mortal',
        [
          'Be careful of Velomuzst. There is a quest that you need to take part in to kill his shade.',
          "Don't try and kill it without the quest.",
        ],
        'yes',
        'no',
        'no',
        'no',
      ),
      zone('Tree Tower', 'High Mortal', ''),
    ],
  }),

  deathspiral: subArea({
    summary: 'Mountains to the south of Wolvesdale',
    levels: '15-20',
    maps: [
      map('Wolvesdale Lower Death Spirals', '/images/maps/WDLowerDeathSpirals.jpg'),
      map('Wolvesdale Middle Death Spirals', '/images/maps/WDMiddleDeathSpirals.jpg'),
      map('Wolvesdale Upper Death Spirals', '/images/maps/WDUpperDeathSpirals.jpg'),
    ],
    zones: [
      zone(
        'Mountains',
        'Late Mid',
        "Very confusing area if you're not used to it. check the maps.",
        'some',
        'no',
        'no',
        'no',
      ),
      zone(
        'Imlandris',
        'Late Mid',
        ['South of Death Spiral.', 'Requires 18 Intelligence to enter.', 'Sometimes you can hear howling from the south.'],
        'yes',
        'yes',
        'yes',
        'no',
      ),
    ],
  }),

  lanerell: subArea({
    summary: 'The Kingdom of Lanerell',
    levels: '20-30',
    maps: [
      map('Lanerell Dragon Caves', '/images/maps/LanerellDragonCaves.jpg'),
      map('Lanerell Forest', '/images/maps/LanerellForest.jpg'),
    ],
    zones: [
      zone('City', 'High Mortal', ''),
      zone('Forest', 'High Mortal', ''),
      zone('Cave', 'High Mortal', ''),
      zone('Forgotten Kingdom', 'High Mortal', ''),
      zone('Mountains', '???'),
    ],
  }),

  jewel: subArea({
    summary: 'The Queendom of Jewel',
    levels: '15-20',
    maps: [],
    zones: [
      zone('City', 'Late Mid', '', 'yes', 'no', 'no', 'no'),
      zone('Catacombs', 'Late Mid', '', 'yes', 'no', 'no', 'no'),
      zone('Forest', 'Late Mid', '', 'yes', 'no', 'no', 'no'),
      zone('Artrell Hive', 'Late Mid', '', 'yes', 'no', 'no', 'no'),
    ],
  }),

  hiemelia: subArea({
    summary: 'The Kingdom of Ice',
    levels: '15-30',
    maps: [map('Hiemelia', '/images/maps/Hiemelia.jpg')],
    zones: [
      zone('Glacier', 'Late Mid', '', 'no', 'no', 'no', 'no'),
      zone('Palace', 'Late Mid', '', 'no', 'no', 'no', 'no'),
      zone('Mountains', 'Late Mid', '', 'no', 'no', 'no', 'no'),
      zone('Wilderness', 'Late Mid', '', 'no', 'no', 'no', 'no'),
      zone('Ice Path', 'High Mortal', '', 'no', 'no', 'no', 'no'),
      zone('Northern Outpost', 'no', '', 'no', 'no', 'no', 'no'),
    ],
  }),

  xenora: subArea({
    summary: 'The Kingdom of Fire',
    levels: '15-20 & 30-50',
    maps: [
      map('Drow', '/images/maps/Drow.gif'),
      map('Drow 2', '/images/maps/Drow2.jpg'),
      map('Gablesville', '/images/maps/Gablesville.jpg'),
      map('Xenora Walls', '/images/maps/XenoraWalls.jpg'),
    ],
    zones: [
      zone('Palace', 'Late Mid'),
      zone('Caves', 'Late Mid'),
      zone('Town', 'Late Mid'),
      zone('Mines', 'Late Mid'),
      zone('Fire Lake', 'Mid High Mortal'),
      zone('Fortress', 'Late High Mortal', '', 'yes', 'yes', 'yes', 'yes'),
      zone('Gablesville', 'Late High Mortal'),
      zone('Zalaria', '???'),
    ],
  }),

  lakehurst: subArea({
    summary: 'West of the Lanerell balloon, north of the town.',
    levels: '???',
    maps: [],
    zones: [zone('Lakehurst', '???')],
  }),
});
