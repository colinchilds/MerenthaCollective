export const areas = {
  atheria: {
    cabeiri: {
      summary: `Cabeiri is the area designated for new characters. To the north is the cemetary. To the east is the faerie forest. To the south is the balloon to whitestorm and the dinghy to the island. To the west is the Orc, Goblin, and Kobold areas.`,
      levels: '1-15',
      maps: [
        {
          name: 'Cabeiri',
          url: '/images/maps/Cabeiri.png',
        },
      ],
      zones: [
        {
          name: 'Town',
          levels: '1-5',
          summary: [
            'Area includes:',
            '> Shop to the east',
            '> Bar to the northeast',
            '> Bank to the south',
            '> Library to the west',
          ],
        },
        {
          name: 'Cemetary',
          levels: '1-5',
          summary: 'Northeast of the square, sports ghouls (minor and major). Be sure to *consider* your enemies',
        },
        {
          name: 'Island',
          levels: '1-5',
          summary: 'Take the dinghy to the south of the square.',
        },
        {
          name: 'Orc Valley',
          levels: '1-5',
          summary: 'West of the square and has some descently strong enemies for this zone.',
        },
        {
          name: 'Faerie Forest',
          levels: '6-15',
          summary: "A 'quest' area, so don't ask how to get here. Take a look east of the square.",
        },
        {
          name: 'Clouds',
          levels: '6-15',
          summary: '',
        },
        {
          name: 'Mountains',
          levels: '6-15',
          summary: 'The Kobold Mountains are to the west of Orc Valley. Be sure to check your surroundings carefully.',
        },
      ],
    },
    fenris: {
      summary: 'Basically a swamp and rainforest, Fenris boosts a multitude of quests and deeds. Check everywhere!',
      levels: '6-30',
      maps: [
        {
          name: 'Fenris',
          url: '/images/maps/Fenris.jpg',
        },
        {
          name: 'Fenris Rainforest',
          url: '/images/maps/FenrisRainforest.gif',
        },
        {
          name: 'Fenris Rainforest 2',
          url: '/images/maps/FenrisRainforest2.jpg',
        },
        {
          name: 'Fenris Tunnels',
          url: '/images/maps/FenrisTunnels.jpg',
        },
        {
          name: 'Oz',
          url: '/images/maps/Oz.jpg',
        },
        {
          name: 'Trogrelin',
          url: '/images/maps/Trogrelin.jpg',
        },
      ],
      zones: [
        {
          name: 'Forest of Deception',
          levels: '6-15',
          summary: ['Imagine folktales come to life.', 'Area has multiple quests and deeds. Keep an eye out.'],
        },
        {
          name: 'Marrdan',
          levels: '6-15',
          summary: [
            'The town in Fenris.',
            'West is the Forest of Deception.',
            'South is the balloon back to Whitestorm.',
            'Southwest is Trogrelin',
          ],
        },
        {
          name: 'Mudforest',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Rainforest',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Swamp',
          levels: '6-15',
          summary: '',
        },
        {
          name: 'Trogrelin',
          levels: '15-20',
          summary: 'Nice little area with a few deeds/quests.',
        },
        {
          name: 'Oz',
          levels: '20-50',
          summary: [
            'This area is leveled by AOE type players.',
            'Be sure to watch your surrounding rooms for other players.',
          ],
        },
      ],
    },
    whitestorm: {
      summary: 'Whitestorm is largely considered the center of the world.',
      levels: '6-30',
      maps: [
        {
          name: 'Orc Caves',
          url: '/images/maps/OrcCaves.gif',
        },
        {
          name: 'Strongwood',
          url: '/images/maps/Strongwood.jpg',
        },
        {
          name: 'Uruk',
          url: '/images/maps/Uruk.gif',
        },
        {
          name: 'Whitestorm',
          url: '/images/maps/Whitestorm.png',
        },
        {
          name: 'Whitestorm 2',
          url: '/images/maps/Whitestorm2.jpg',
        },
        {
          name: 'Whitestorm 3',
          url: '/images/maps/Whitestorm3.jpg',
        },
        {
          name: 'Whitestorm Farm',
          url: '/images/maps/WhitestormFarm.jpg',
        },
      ],
      zones: [
        {
          name: 'City',
          levels: '6-15',
          summary: [
            'Teens to the east and west are good level 10-15 targets.',
            'Shops to the east and west, with a library to the south.',
            'Players frequently leave free items in the square.Be sure to check the chest.',
          ],
        },
        {
          name: 'Forest',
          levels: '6-15',
          summary: [
            'Located to the east of Whitestorm, contains many animals (good for AOE hunting).',
            'Strongwood, Uruk, and the Orc Caves are all found in here.',
          ],
        },
        {
          name: 'Farms',
          levels: '15-20',
          summary: ['North of Whitestorm and the balloon.', 'Has a couple quests/deeds, so keep an eye out.'],
        },
        {
          name: 'Strongwood Fortress',
          levels: '15-20',
          summary: ['Elven Fortress.', 'Located on the southeastern area of the forest.', 'Attacks Satyrs on sight'],
        },
        {
          name: 'Uruk Fortress',
          levels: '15-20',
          summary: ['Satyr Fortress.', 'Located on the northwestern area of the forest.', 'Attacks Elves on sight'],
        },
        {
          name: 'Badlands',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Desert',
          levels: '20-30',
          summary: [
            "North of the farms. Can be very confusing if it's your first time here.",
            'Airship is located in this area',
          ],
        },
        {
          name: 'Orc Caves',
          levels: '20-30',
          summary: ['Located in a hidden area of the forest.', 'Been said to have good AOE hunting'],
        },
        {
          name: 'Palace',
          levels: '???',
          summary: '',
        },
      ],
    },
    clouds: {
      summary: "On top of the clouds above Whitestorm. Quest area, so don't ask how to get here",
      levels: '40-50',
      maps: [],
      zones: [
        {
          name: 'City',
          levels: '40-50',
          summary: '',
        },
      ],
    },
  },
  cardania: {
    wolvesdale: {
      summary: 'The balloon is to the east with ships to the south. The tower is to the north. Mountains to the south.',
      levels: '15-50',
      maps: [
        {
          name: 'Wolvesdale',
          url: '/images/maps/WD.jpg',
        },
        {
          name: 'Wolvesdale Landing',
          url: '/images/maps/WDLanding.jpg',
        },
        {
          name: 'Wolvesdale - Full',
          url: '/images/maps/Wolvesdale-Full.png',
        },
      ],
      zones: [
        {
          name: 'City',
          id: 'city',
          levels: '15-20',
          summary: "Watch out for the bounty hunter. *You* can't kill them",
        },
        {
          name: 'Tower',
          id: 'tower',
          levels: '15-20',
          summary: 'Descent pre-High Mortal AOE hunting ground',
        },
        {
          name: 'Mountain',
          id: 'mountain',
          levels: '15-20',
          summary: '',
        },
      ],
    },
    mystic: {
      summary: 'West of Wolvesdale',
      levels: '15-30',
      maps: [
        {
          name: 'Wolvesdale Crypts 1/2',
          url: '/images/maps/WDCrypts1_2.jpg',
        },
        {
          name: 'Wolvesdale Crypts 3/4',
          url: '/images/maps/WDCrypts3_4.jpg',
        },
      ],
      zones: [
        {
          name: 'Forest',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Underworld',
          levels: '20-30',
          summary: '',
        },
        {
          name: "Velomuzst's Lair",
          levels: '20-30',
          summary: [
            'Be careful of Velomuzst. There is a quest that you need to take part in to kill his shade.',
            "Don't try and kill it without the quest.",
          ],
        },
        {
          name: 'Tree Tower',
          levels: '20-30',
          summary: '',
        },
      ],
    },
    deathspiral: {
      summary: 'Mountains to the south of Wolvesdale',
      levels: '15-20',
      maps: [
        {
          name: 'Wolvesdale Lower Death Spirals',
          url: '/images/maps/WDLowerDeathSpirals.jpg',
        },
        {
          name: 'Wolvesdale Middle Death Spirals',
          url: '/images/maps/WDMiddleDeathSpirals.jpg',
        },
        {
          name: 'Wolvesdale Upper Death Spirals',
          url: '/images/maps/WDUpperDeathSpirals.jpg',
        },
      ],
      zones: [
        {
          name: 'Mountains',
          levels: '15-20',
          summary: "Very confusing area if you're not used to it. check the maps.",
        },
        {
          name: 'Imlandris',
          levels: '15-20',
          summary: [
            'South of Death Spiral.',
            'Requires 18 Intelligence to enter.',
            'Sometimes you can hear howling from the south.',
          ],
        },
      ],
    },
    lanerell: {
      summary: 'The Kingdom of Lanerell',
      levels: '20-30',
      maps: [
        {
          name: 'Lanerell Dragon Caves',
          url: '/images/maps/LanerellDragonCaves.jpg',
        },
        {
          name: 'Lanerell Forest',
          url: '/images/maps/LanerellForest.jpg',
        },
      ],
      zones: [
        {
          name: 'City',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Forest',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Cave',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Forgotten Kingdom',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Mountains',
          levels: '???',
          summary: '',
        },
      ],
    },
    jewel: {
      summary: 'The Queendom of Jewel',
      levels: '15-20',
      maps: [],
      zones: [
        {
          name: 'City',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Catacombs',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Forest',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Artrell Hive',
          levels: '15-20',
          summary: '',
        },
      ],
    },
    hiemelia: {
      summary: 'The Kingdom of Ice',
      levels: '15-30',
      maps: [
        {
          name: 'Hiemelia',
          url: '/images/maps/Hiemelia.jpg',
        },
      ],
      zones: [
        {
          name: 'Glacier',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Palace',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Mountains',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Wilderness',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Ice Path',
          levels: '20-29',
          summary: '',
        },
        {
          name: 'Northern Outpost',
          levels: '???',
          summary: '',
        },
      ],
    },
    xenora: {
      summary: 'The Kingdom of Fire',
      levels: '15-20 & 30-50',
      maps: [
        {
          name: 'Drow',
          url: '/images/maps/Drow.gif',
        },
        {
          name: 'Drow 2',
          url: '/images/maps/Drow2.jpg',
        },
        {
          name: 'Gablesville',
          url: '/images/maps/Gablesville.jpg',
        },
        {
          name: 'Xenora Walls',
          url: '/images/maps/XenoraWalls.jpg',
        },
      ],
      zones: [
        {
          name: 'Palace',
          levels: '15-20',
          summary: 'The walls are a good place to AOE hunt. Also, bring multiple bags.',
        },
        {
          name: 'Caves',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Town',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Mines',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Fire Lake',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Fortress',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'Gablesville',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'Zalaria',
          levels: '???',
          summary: 'Do not enter Drow Lands without an invitation, or you may be hunted.',
        },
      ],
    },
    lakehurst: {
      summary: 'West of the Lanerell balloon, north of the town.',
      levels: '???',
      maps: [],
      zones: [
        {
          name: 'Lakehurst',
          levels: '???',
          summary: '',
        },
      ],
    },
  },
  asmar: {
    asmar: {
      summary: '',
      levels: '30-50',
      maps: [
        {
          name: 'Asmar Caves',
          url: '/images/maps/AsmarCaves.gif',
        },
        {
          name: 'Asmar City',
          url: '/images/maps/AsmarCity.jpg',
        },
        {
          name: 'Asmar City 2',
          url: '/images/maps/AsmarCity2.jpg',
        },
        {
          name: 'Asmar City 3',
          url: '/images/maps/AsmarCity3.gif',
        },
        {
          name: 'Asmar Forest',
          url: '/images/maps/AsmarForest.gif',
        },
        {
          name: 'Asmar Plains',
          url: '/images/maps/AsmarPlains.jpg',
        },
        {
          name: 'Asmar Plains 2',
          url: '/images/maps/AsmarPlains2.gif',
        },
        {
          name: 'Asmar Plains 3',
          url: '/images/maps/AsmarPlains3.jpg',
        },
        {
          name: 'Asmar Sewers',
          url: '/images/maps/AsmarSewers.jpg',
        },
        {
          name: 'Asmar Underground',
          url: '/images/maps/AsmarUnderground.jpg',
        },
        {
          name: 'Asmar Walls',
          url: '/images/maps/AsmarWalls.jpg',
        },
      ],
      zones: [
        {
          name: 'Airfield',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Plains',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'City Walls',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Forest',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'City',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Tunnels',
          levels: '40-50',
          summary: '',
        },
      ],
    },
    drewold: {
      summary: '',
      levels: '50-90',
      maps: [
        {
          name: 'Dreywold',
          url: '/images/maps/Dreywold.png',
        },
      ],
      zones: [
        {
          name: 'Ancient Forest',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Crystal Cavern',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Imp Treetops',
          levels: '70-90',
          summary: '',
        },
      ],
    },
    fairdale: {
      summary: '',
      levels: '90-130',
      maps: [
        {
          name: 'Fairdale',
          url: '/images/maps/Fairdale.png',
        },
      ],
      zones: [
        {
          name: 'Harbor',
          levels: '90-110',
          summary: '',
        },
        {
          name: 'Pastures',
          levels: '90-110',
          summary: '',
        },
        {
          name: 'City',
          levels: '90-110',
          summary: '',
        },
        {
          name: 'Barrows',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Forest',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Sewers',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Crypts',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Mountain',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Plains',
          levels: '???',
          summary: '',
        },
        {
          name: 'Airship',
          levels: '???',
          summary: '',
        },
      ],
    },
    ottograd: {
      summary: '',
      levels: '50-90',
      maps: [
        {
          name: 'Ottograd',
          url: '/images/maps/Ottograd.png',
        },
      ],
      zones: [
        {
          name: 'Town',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Lower Steppes',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Base Steppes',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Upper Steppes',
          levels: '70-90',
          summary: '',
        },
      ],
    },
  },
  kyria: {
    haven: {
      summary: '',
      levels: '20-30',
      maps: [
        {
          name: 'Haven',
          url: '/images/maps/Haven.jpg',
        },
      ],
      zones: [
        {
          name: 'Town',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Fields',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Farms',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Woods',
          levels: '20-30',
          summary: '',
        },
      ],
    },
    gofur: {
      summary: '',
      levels: '30-40',
      maps: [
        {
          name: 'Gofur City',
          url: '/images/maps/GofurCity.gif',
        },
        {
          name: 'Gofur City 2',
          url: '/images/maps/GofurCity.jpg',
        },
        {
          name: 'Gofur Mines',
          url: '/images/maps/GofurMines.jpg',
        },
        {
          name: 'Gofur Mines 2',
          url: '/images/maps/GofurMines2.gif',
        },
        {
          name: 'Gofur Mines 3',
          url: '/images/maps/GofurMines3.gif',
        },
      ],
      zones: [
        {
          name: 'Town',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Mines',
          levels: '30-40',
          summary: '',
        },
      ],
    },
  },
  iceflows: {
    aeiroth: {
      summary: '',
      levels: '30-90',
      maps: [
        {
          name: 'Aerioth',
          url: '/images/maps/Aerioth.gif',
        },
      ],
      zones: [
        {
          name: 'City',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Wilds',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Castle',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Goblin Lair',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Ice Cavern',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Valley',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Abbey',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Frozen Lake',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Dead Fields',
          levels: '70-90',
          summary: '',
        },
      ],
    },
    iceflows: {
      summary: '',
      levels: '20-30',
      maps: [],
      zones: [
        {
          name: 'Ice Flows',
          levels: '20-30',
          summary: '',
        },
      ],
    },
    christmas: {
      summary: '',
      levels: '???',
      maps: [],
      zones: [
        {
          name: 'Island',
          levels: '???',
          summary: '',
        },
      ],
    },
  },
  puntos: {
    calamyr: {
      summary: '',
      levels: '30-50',
      maps: [
        {
          name: 'Calamyr City',
          url: '/images/maps/CalamyrCity.gif',
        },
        {
          name: 'Calamyr Sewers',
          url: '/images/maps/CalamyrSewers.gif',
        },
        {
          name: 'Calamyr Tundra',
          url: '/images/maps/CalamyrTundra.gif',
        },
      ],
      zones: [
        {
          name: 'Tundra',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'City',
          levels: '30-40',
          summary: ['Check in your hall for a class specific quest.'],
        },
        {
          name: 'Fortress',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'Onyx Mines',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'Sewers',
          levels: '40-50',
          summary: '',
        },
      ],
    },
  },
  teile: {
    shanadan: {
      summary: '',
      levels: '50-70',
      maps: [
        {
          name: 'Shanadan Bat Cave',
          url: '/images/maps/ShanadanBatCave.gif',
        },
        {
          name: 'Shanadan Castle',
          url: '/images/maps/ShanadanCastle.gif',
        },
        {
          name: 'Shanadan Garden',
          url: '/images/maps/ShanadanGarden.gif',
        },
      ],
      zones: [
        {
          name: 'Cliffs',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Gardens',
          levels: '50-70',
          summary: [
            'Monsters here can stat poison you. Be sure to have the Antivenin, or it may just kill you.',
            'Search for Alchemy ingredients here.',
          ],
        },
        {
          name: 'Castle',
          levels: '50-70',
          summary: ['Can mix alchemic potions northeast of the square.', 'Search for Alchemy ingredients here.'],
        },
        {
          name: 'Bat Caves',
          levels: '50-70',
          summary: '',
        },
      ],
    },
  },
  raptorSaTori: {
    liku: {
      summary: '',
      levels: '50-90',
      maps: [
        {
          name: 'Imperial Forest',
          url: '/images/maps/ImperialForest.gif',
        },
        {
          name: 'Imperial Fortress',
          url: '/images/maps/ImperialFortress.jpg',
        },
        {
          name: 'Liku',
          url: '/images/maps/Liku.png',
        },
        {
          name: 'Lost Caverns',
          url: '/images/maps/LostCaverns.gif',
        },
        {
          name: 'Spiral Caverns',
          url: '/images/maps/SpiralCaverns.jpg',
        },
      ],
      zones: [
        {
          name: 'Village',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Highlands',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Ogre Gorge',
          levels: '50-70',
          summary: '',
        },
        {
          name: "Widow's Ravine",
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Diamondback Flats',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Broadhurst',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Lost Caverns',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Troll Halls',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Imperial Forest',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Imperial Fortress',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Imperial City',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Spiral Caverns',
          levels: '70-90',
          summary: '',
        },
      ],
    },
  },
  world: {
    ocean: {
      summary: '',
      levels: 'See Local Areas',
      maps: [
        {
          name: 'Ghost Ship',
          url: '/images/maps/GhostShip.jpg',
        },
        {
          name: 'Ghost Ship 2',
          url: '/images/maps/GhostShip2.gif',
        },
        {
          name: 'World Map',
          url: '/images/maps/world_map.png',
        },
      ],
      zones: [
        {
          name: 'Ghost Ship',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Pirate Ship',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'Ushil Uzol Uker',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Sailing',
          levels: 'N/A',
          summary: '',
        },
      ],
    },
    sky: {
      summary: '',
      levels: 'Unknown',
      maps: [
        {
          name: 'Flying Map',
          url: '/images/maps/flying_map.gif',
        },
      ],
      zones: [
        {
          name: 'Flying',
          levels: 'Unknown',
          summary: '',
        },
      ],
    },
    plane: {
      summary: '',
      levels: '50-70',
      maps: [],
      zones: [
        {
          name: 'Fire',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Astral',
          levels: '50-70',
          summary: '',
        },
      ],
    },
    sunkenCity: {
      summary: '',
      levels: '20-30',
      maps: [
        {
          name: 'Sunken City',
          url: '/images/maps/SunkenCity.jpg',
        },
        {
          name: 'Sunken City 2',
          url: '/images/maps/SunkenCity2.jpg',
        },
      ],
      zones: [
        {
          name: 'City',
          levels: '20-30',
          summary: '',
        },
      ],
    },
  },
  isles: {
    islands: {
      summary: '',
      levels: '15-20',
      maps: [
        {
          name: 'Boar Island',
          url: '/images/maps/BoarIsland.gif',
        },
        {
          name: 'Kender Island',
          url: '/images/maps/KenderIsland.jpg',
        },
        {
          name: 'Kobold Island',
          url: '/images/maps/KoboldIsland.jpg',
        },
        {
          name: 'Monkay Island',
          url: '/images/maps/MonkayIsland.jpg',
        },
      ],
      zones: [
        {
          name: 'Fucawee',
          levels: '15-19',
          summary: '',
        },
        {
          name: 'Boar',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Dragon',
          levels: '???',
          summary: '',
        },
        {
          name: 'Trinlar',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Talus',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Cove',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Coral',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Kender',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Tsfaru',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Rimaga',
          levels: '30-40',
          summary: '',
        },
        {
          name: "Mon'kay",
          levels: '70-90',
          summary: '',
        },
        {
          name: "Kit'tay",
          levels: '110-130',
          summary: '',
        },
      ],
    },
    kobold: {
      summary: '',
      levels: '15-50',
      maps: [
        {
          name: 'Kobold Island',
          url: '/images/maps/KoboldIsland.jpg',
        },
      ],
      zones: [
        {
          name: 'Suface',
          levels: '15-20',
          summary: '',
        },
        {
          name: 'Forest',
          levels: '20-30',
          summary: '',
        },
        {
          name: 'Tunnels',
          levels: '30-40',
          summary: '',
        },
        {
          name: 'Ruins',
          levels: '40-50',
          summary: '',
        },
        {
          name: 'City',
          levels: '40-50',
          summary: '',
        },
      ],
    },
    mjharr: {
      summary: '',
      levels: '50-70',
      maps: [
        {
          name: 'Mjharr',
          url: '/images/maps/Mjharr.jpg',
        },
      ],
      zones: [
        {
          name: 'Desert',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Mines',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Mountain',
          levels: '50-70',
          summary: '',
        },
        {
          name: 'Tombs',
          levels: '50-70',
          summary: '',
        },
      ],
    },
    charanth: {
      summary: '',
      levels: '70-90',
      maps: [
        {
          name: 'Charanth',
          url: '/images/maps/Charanth.jpg',
        },
        {
          name: 'Charanth 2',
          url: '/images/maps/Charanth2.jpg',
        },
      ],
      zones: [
        {
          name: 'City',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Caves',
          levels: '70-90',
          summary: '',
        },
      ],
    },
    holgresh: {
      summary: '',
      levels: '70-90',
      maps: [
        {
          name: 'Holgresh',
          url: '/images/maps/Holgresh.jpg',
        },
      ],
      zones: [
        {
          name: 'Cliffs',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Temple',
          levels: '70-90',
          summary: '',
        },
      ],
    },
    ensi: {
      summary: '',
      levels: '70-110',
      maps: [
        {
          name: 'Ensi Fire Ants',
          url: '/images/maps/EnsiFireAnts.png',
        },
        {
          name: 'Orc Caves',
          url: '/images/maps/OrcCaves.gif',
        },
      ],
      zones: [
        {
          name: 'Beach',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Minotaur Hills',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Centaur Forest',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Ant Tunnels',
          levels: '70-90',
          summary: '',
        },
        {
          name: 'Orc Caves',
          levels: '90-110',
          summary: '',
        },
      ],
    },
    abbadon: {
      summary: '',
      levels: '90-130',
      maps: [
        {
          name: 'Drow',
          url: '/images/maps/Drow.gif',
        },
        {
          name: 'Drow 2',
          url: '/images/maps/Drow2.jpg',
        },
      ],
      zones: [
        {
          name: 'Forest',
          levels: '90-110',
          summary: '',
        },
        {
          name: 'Mountains',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Drow-elf City',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Spider Caves',
          levels: '110-130',
          summary: '',
        },
        {
          name: 'Illithid Airship',
          levels: '110-130',
          summary: '',
        },
      ],
    },
  },
};
