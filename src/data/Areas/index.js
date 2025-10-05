// helper function
const add = (name, level = 'n/a', aoe = '', strong = '', elite = '', legendary = '') => {
  const [minLevel, maxLevel] = getLevel(level);
  return { name, minLevel, maxLevel, aoe, strong, elite, legendary };
};

// Level Ranges
const getLevel = (level) => {
  switch (level) {
    case 'Newbie':
      return [1, 5];
    case 'Mid':
      return [6, 14];
    case 'Late Mid':
      return [15, 19];
    case 'High Mortal':
      return [20, 29];
    case 'Mid High Mortal':
      return [30, 39];
    case 'Late High Mortal':
      return [40, 49];
    case 'Elite':
      return [50, 69];
    case 'Late Elite':
      return [70, 89];
    case 'Legend':
      return [90, 109];
    case 'Mid Legend':
      return [110, 129];
    case 'Late Legend':
      return [130, 149];
    case 'Titan':
      return [150, 179];
    default:
      return [null, null];
  }
};

export const continents = [
  {
    name: 'Atheria',
    regions: [
      {
        name: 'Cabeiri',
        areas: [
          add('Town', 'Newbie', 'no', 'no', 'no', 'no'),
          add('Cemetary', 'Newbie', '', 'some'),
          add('Faerie Forest', 'Mid'),
          add('Clouds', 'Mid'),
          add('Island', 'Newbie'),
          add('Orc Valley', 'Newbie', 'some', 'some'),
          add('Mountains', 'Mid'),
        ],
      },
      {
        name: 'Whitestorm',
        areas: [
          add('City', 'Mid', 'no'),
          add('Farms', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Strongwood Fortress', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Desert', 'High Mortal', 'some', 'no', 'no', 'no'),
          add('Palace'),
          add('Forest', 'Mid', 'no'),
          add('Uruk Fortress', 'Late Mid'),
          add('Badlands', 'Late Mid'),
          add('Orc Caves', 'High Mortal', 'yes'),
        ],
      },
      {
        name: 'Fenris',
        areas: [
          add('Forest of Deception', 'Mid', 'no', 'no', 'no', 'no'),
          add('Marrdan', 'Mid'),
          add('Mudforest', 'High Mortal'),
          add('Rainforest', 'High Mortal'),
          add('Swamp', 'Mid'),
          add('Trogrelin', 'Late Mid'),
          add('Oz', 'High Mortal', 'yes'),
        ],
      },
      {
        name: 'Clouds',
        areas: [add('City', 'Late High Mortal', 'no')],
      },
    ],
  },
  {
    name: 'Cardania',
    regions: [
      {
        name: 'Wolvesdale',
        areas: [
          add('City', 'Late Mid', '', '', '', 'yes'),
          add('Tower', 'Late Mid', 'yes', 'some'),
          add('Mountain', 'Late Mid'),
        ],
      },
      {
        name: 'Mystic',
        areas: [
          add('Forest', 'Late Mid'),
          add('Underworld', 'High Mortal'),
          add("Velomuzst's Lair", 'High Mortal', 'yes', 'no', 'no', 'no'),
          add('Tree Tower', 'High Mortal'),
        ],
      },
      {
        name: 'DeathSpiral',
        areas: [
          add('Mountains', 'Late Mid', 'some', 'no', 'no', 'no'),
          add('Imladris', 'Late Mid', 'yes', 'yes', 'yes', 'no'),
        ],
      },
      {
        name: 'Lanerell',
        areas: [
          add('City', 'High Mortal'),
          add('Forest', 'High Mortal'),
          add('Cave', 'High Mortal'),
          add('Forgotten Kingdom', 'High Mortal'),
          add('Mountains'),
        ],
      },
      {
        name: 'Jewel',
        areas: [
          add('City', 'Late Mid', 'yes', 'no', 'no', 'no'),
          add('Catacombs', 'Late Mid', 'yes', 'no', 'no', 'no'),
          add('Forest', 'Late Mid', 'yes', 'no', 'no', 'no'),
          add('Artrell Hive', 'Late Mid', 'yes', 'no', 'no', 'no'),
        ],
      },
      {
        name: 'Hiemelia',
        areas: [
          add('Glacier', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Palace', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Northern Outpost', 'no', 'no', 'no', 'no'),
          add('Mountains', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Wilderness', 'Late Mid', 'no', 'no', 'no', 'no'),
          add('Ice Path', 'High Mortal', 'no', 'no', 'no', 'no'),
        ],
      },
      {
        name: 'Xenora',
        areas: [
          add('Palace', 'Late Mid'),
          add('Caves', 'Late Mid'),
          add('Fire Lake', 'Mid High Mortal'),
          add('Gablesville', 'Late High Mortal'),
          add('Town', 'Late Mid'),
          add('Mines', 'Late Mid'),
          add('Fortress', 'Mid High Mortal', 'yes', 'yes', 'yes', 'yes'),
          add('Zalaria'),
        ],
      },
      {
        name: 'Lakehurst',
        areas: [add('Palace')],
      },
    ],
  },
  {
    name: 'Asmar',
    regions: [
      {
        name: 'Asmar',
        areas: [
          add('Airfield', 'Mid High Mortal', 'yes'),
          add('Plains', 'Mid High Mortal', 'yes'),
          add('City walls', 'Mid High Mortal', 'yes'),
          add('Forest', 'Mid High Mortal', 'yes'),
          add('City', 'Mid High Mortal', 'yes'),
          add('City Tunnels', 'Late High Mortal', 'yes'),
        ],
      },
      {
        name: 'Dreywold',
        areas: [
          add('Ancient Forest', 'Elite', 'yes', '', 'yes'),
          add('Crystal Cavern', 'Late Elite', 'no', 'yes', 'no', 'yes'),
          add('Imp Treetops', 'Late Elite', 'yes', 'yes', 'no', 'yes'),
        ],
      },
      {
        name: 'Fairdale',
        areas: [
          add('Harbor', 'Legend'),
          add('Pastures', 'Legend'),
          add('Barrows', 'Mid Legend'),
          add('Forest', 'Mid Legend'),
          add('Plains'),
          add('City', 'Legend'),
          add('Sewers', 'Mid Legend'),
          add('Crypts', 'Mid Legend'),
          add('Mountain', 'Mid Legend'),
          add('Airship'),
        ],
      },
    ],
  },
  {
    name: 'Asmar-kon',
    regions: [
      {
        name: 'Ottograd',
        areas: [
          add('Town', 'Elite', 'no', 'yes', 'yes'),
          add('Lower Steppes', 'Elite', 'yes'),
          add('Base Steppes', 'Elite'),
          add('Upper Steppes', 'Late Elite', 'yes', 'yes', 'yes'),
        ],
      },
    ],
  },
  {
    name: 'Kyria',
    regions: [
      {
        name: 'Haven',
        areas: [
          add('Town', 'High Mortal', '', 'no', 'no', 'no'),
          add('Fields', 'High Mortal', '', 'no', 'no', 'no'),
          add('Farms', 'High Mortal', '', 'no', 'no', 'no'),
          add('Woods', 'High Mortal', '', 'no', 'no', 'no'),
        ],
      },
      {
        name: 'Gofur',
        areas: [add('Town', 'Mid High Mortal', 'no', 'yes', 'yes', 'no'), add('Mines', 'Mid High Mortal')],
      },
    ],
  },
  {
    name: 'Ice Flows',
    regions: [
      {
        name: 'Aerioth',
        areas: [
          add('City', 'Mid High Mortal', 'no'),
          add('Castle', 'Elite', 'no'),
          add('Goblin Lair', 'Elite', 'no'),
          add('Valley', 'Late Elite', 'no'),
          add('Abbey', 'Late Elite', 'no'),
          add('Wilds', 'Mid High Mortal', 'no'),
          add('Ice Cavern', 'Elite', 'no'),
          add('Frozen Lake', 'Late Elite', 'no'),
          add('Dead Fields', 'Late Elite', 'no'),
        ],
      },
      {
        name: 'Ice Flows',
        areas: [add('Ice Flows', 'High Mortal')],
      },
      {
        name: 'Christmas',
        areas: [add('Island')],
      },
    ],
  },
  {
    name: 'Puntos',
    regions: [
      {
        name: 'Calamyr',
        areas: [
          add('Tundra', 'Mid High Mortal'),
          add('Fortress', 'Late High Mortal'),
          add('Onyx Mines', 'Late High Mortal'),
          add('City', 'Mid High Mortal'),
          add('Sewers', 'Late High Mortal'),
        ],
      },
    ],
  },
  {
    name: 'South Teile',
    regions: [
      {
        name: 'Shanadan',
        areas: [add('Cliffs', 'Elite'), add('Gardens', 'Elite'), add('Castle', 'Elite'), add('Bat Caves', 'Elite')],
      },
    ],
  },
  {
    name: 'Raptor-Sa-Tori',
    regions: [
      {
        name: 'Liku',
        areas: [
          add('Village', 'Elite'),
          add('Highlands', 'Elite'),
          add('Ogre Gorge', 'Elite'),
          add("Widow's Ravine", 'Elite'),
          add('Imperial Forest', 'Late Elite'),
          add('Imperial Fortress', 'Late Elite'),
          add('Diamondback Flats', 'Elite'),
          add('Broadhurst', 'Elite', '', 'yes', 'yes', 'yes'),
          add('Lost Caverns', 'Elite', 'no'),
          add('Troll Halls', 'Elite'),
          add('Imperial City', 'Late Elite'),
          add('Spiral Caverns', 'Late Elite'),
        ],
      },
    ],
  },
  {
    name: 'World',
    regions: [
      {
        name: 'Ocean',
        areas: [
          add('Sailing'),
          add('Pirate Ship', 'Late High Mortal'),
          add('Ghost Ship', 'High Mortal'),
          add('Ushil Uzol Uker', 'Mid Legend'),
        ],
      },
      {
        name: 'Sky',
        areas: [add('Flying')],
      },
      {
        name: 'Plane',
        areas: [add('Fire', 'Elite'), add('Astral', 'Elite')],
      },
    ],
  },
  {
    name: 'Isles',
    regions: [
      {
        name: 'Fucawee',
        areas: [add('Island', 'Late Mid', '', 'no', 'no', 'no')],
      },
      {
        name: 'Boar',
        areas: [add('Island', 'Late Mid')],
      },
      {
        name: 'Dragon',
        areas: [
          add('Island'), // N/A
        ],
      },
      {
        name: 'Trinlar',
        areas: [add('Island', 'High Mortal', 'yes')],
      },
      {
        name: 'Talus',
        areas: [add('Island', 'Late Mid')],
      },
      {
        name: 'Cove',
        areas: [add('Island', 'Late Mid')],
      },
      {
        name: 'Sunken City',
        areas: [add('City', 'High Mortal')],
      },
      {
        name: 'Coral Islands',
        areas: [add('Islands', 'Late Mid')],
      },
      {
        name: 'Kobold',
        areas: [
          add('Surface', 'Late Mid'),
          add('Tunnels', 'Mid High Mortal'),
          add('Ruins', 'Late High Mortal'),
          add('Forest', 'High Mortal'),
          add('City', 'Late High Mortal'),
        ],
      },
      {
        name: 'Kender',
        areas: [add('Island', 'High Mortal')],
      },
      {
        name: 'Tsfaru',
        areas: [add('Isle', 'Mid High Mortal')],
      },
      {
        name: 'Rimaga',
        areas: [add('Island', 'Mid High Mortal')],
      },
      {
        name: 'Mjharr',
        areas: [add('Desert', 'Elite'), add('Mines', 'Elite'), add('Mountain', 'Elite'), add('Tombs', 'Elite')],
      },
      {
        name: 'Charanth',
        areas: [add('City', 'Late Elite', 'yes'), add('Caves', 'Late Elite')],
      },
      {
        name: "Mon'kay",
        areas: [add('Island', 'Late Elite', 'yes')],
      },
      {
        name: 'Holgresh',
        areas: [add('Cliffs', 'Late Elite', 'no'), add('Temple', 'Late Elite', 'no')],
      },
      {
        name: 'Ensi',
        areas: [
          add('Beach', 'Late Elite'),
          add('Minotaur Hills', 'Late Elite'),
          add('Centaur Forest', 'Late Elite'),
          add('Ant Tunnels', 'Late Elite'),
          add('Orc Caves', 'Legend'),
        ],
      },
      {
        name: 'Abbadon',
        areas: [
          add('Forest', 'Legend', 'yes', 'yes', 'yes', 'yes'),
          add('Mountains', 'Mid Legend', 'yes', 'yes', 'yes', 'yes'),
          add('Drow-elf City', 'Mid Legend', 'yes', 'yes', 'yes', 'yes'),
          add('Spider Caves', 'Mid Legend', 'yes', 'yes', 'yes', 'yes'),
          add('Illithid Airship', 'Mid Legend', 'yes', 'yes', 'yes', 'yes'),
        ],
      },
      {
        name: "Kit'tay",
        areas: [add('Island', 'Mid Legend', 'yes', 'yes', 'yes')],
      },
    ],
  },
];
