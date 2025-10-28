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
          summary: 'Kill Edwina and Edwards on sight!',
        },
        {
          name: 'Cemetary',
          levels: '1-5',
          summary: 'Dead things!',
        },
        {
          name: 'Island',
          levels: '1-5',
          summary: "They're surrounded by water...",
        },
        {
          name: 'Orc Valley',
          levels: '1-5',
          summary: 'Hulk Smash',
        },
        {
          name: 'Faerie Forest',
          levels: '6-15',
          summary: "I'll do it for your first born child..",
        },
        {
          name: 'Clouds',
          levels: '6-15',
          summary: 'Fluffy Sky Sheep',
        },
        {
          name: 'Mountains',
          levels: '6-15',
          summary: 'Tall... exhausting',
        },
      ],
    },
    fenris: {
      summary: 'Fenris is gross.',
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
          summary: 'LIES!',
        },
        {
          name: 'Marrdan',
          levels: '6-15',
          summary: "It's the 'town'",
        },
        {
          name: 'Mudforest',
          levels: '20-30',
          summary: 'A forest... of mud...',
        },
        {
          name: 'Rainforest',
          levels: '20-30',
          summary: 'There once was a rainforest... Then it was turned in to paper.',
        },
        {
          name: 'Swamp',
          levels: '6-15',
          summary: 'Washington DC',
        },
        {
          name: 'Trogrelin',
          levels: '15-20',
          summary: 'Also Washington DC',
        },
        {
          name: 'Oz',
          levels: '20-50',
          summary: 'No wizard here.',
        },
      ],
    },
    whitestorm: {
      summary: 'Whitestorm is the center of the world.',
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
          summary: "It's the 'town'",
        },
        {
          name: 'Forest',
          levels: '6-15',
          summary: "It's the 'forest'",
        },
        {
          name: 'Farms',
          levels: '15-20',
          summary: "There's like, cows and stuff",
        },
        {
          name: 'Strongwood Fortress',
          levels: '15-20',
          summary: 'Elven Fortress - hates Satyrs',
        },
        {
          name: 'Uruk Fortress',
          levels: '15-20',
          summary: 'Satyr Fortress - hates Elves',
        },
        {
          name: 'Badlands',
          levels: '15-20',
          summary: "It's... bad",
        },
        {
          name: 'Desert',
          levels: '20-30',
          summary: 'I hate sand, it gets everywhere',
        },
        {
          name: 'Orc Caves',
          levels: '20-30',
          summary: 'Orc Smash',
        },
        {
          name: 'Palace',
          levels: '???',
          summary: 'Ohhh shiney',
        },
      ],
    },
    clouds: {
      summary: 'I can show you the world!',
      levels: '40-50',
      maps: [],
      zones: [
        {
          name: 'City',
          levels: '40-50',
          summary: 'I can show you the world!',
        },
      ],
    },
  },
  cardania: {
    wolvesdale: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Tower',
          id: 'tower',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Mountain',
          id: 'mountain',
          levels: '15-20',
          summary: 'Summary goes here',
        },
      ],
    },
    mystic: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Underworld',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: "Velomuzst's Lair",
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Tree Tower',
          levels: '20-30',
          summary: 'Summary goes here',
        },
      ],
    },
    deathspiral: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Imlandris',
          levels: '15-20',
          summary: 'Summary goes here',
        },
      ],
    },
    lanerell: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Forest',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Cave',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Forgotten Kingdom',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Mountains',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
    jewel: {
      summary: 'Summary Goes Here',
      levels: '15-20',
      maps: [],
      zones: [
        {
          name: 'City',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Catacombs',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Forest',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Artrell Hive',
          levels: '15-20',
          summary: 'Summary goes here',
        },
      ],
    },
    hiemelia: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Palace',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Mountains',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Wilderness',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Ice Path',
          levels: '20-29',
          summary: 'Summary goes here',
        },
        {
          name: 'Northern Outpost',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
    xenora: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Caves',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Town',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Mines',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Fire Lake',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Fortress',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'Gablesville',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'Zalaria',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
    lakehurst: {
      summary: 'Summary Goes Here',
      levels: '???',
      maps: [],
      zones: [
        {
          name: 'Lakehurst',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  asmar: {
    asmar: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Plains',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'City Walls',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Forest',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'City',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Tunnels',
          levels: '40-50',
          summary: 'Summary goes here',
        },
      ],
    },
    drewold: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Crystal Cavern',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Imp Treetops',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
    fairdale: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Pastures',
          levels: '90-110',
          summary: 'Summary goes here',
        },
        {
          name: 'City',
          levels: '90-110',
          summary: 'Summary goes here',
        },
        {
          name: 'Barrows',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Forest',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Sewers',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Crypts',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Mountain',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Plains',
          levels: '???',
          summary: 'Summary goes here',
        },
        {
          name: 'Airship',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
    ottograd: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Lower Steppes',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Base Steppes',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Upper Steppes',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  kyria: {
    haven: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Fields',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Farms',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Woods',
          levels: '20-30',
          summary: 'Summary goes here',
        },
      ],
    },
    gofur: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Mines',
          levels: '30-40',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  iceflows: {
    aeiroth: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Wilds',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Castle',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Goblin Lair',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Ice Cavern',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Valley',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Abbey',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Frozen Lake',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Dead Fields',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
    iceflows: {
      summary: 'Summary Goes Here',
      levels: '20-30',
      maps: [],
      zones: [
        {
          name: 'Ice Flows',
          levels: '20-30',
          summary: 'Summary goes here',
        },
      ],
    },
    christmas: {
      summary: 'Summary Goes Here',
      levels: '???',
      maps: [],
      zones: [
        {
          name: 'Island',
          levels: '???',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  puntos: {
    calamyr: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'City',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Fortress',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'Onyx Mines',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'Sewers',
          levels: '40-50',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  teile: {
    shanadan: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Gardens',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Castle',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Bat Caves',
          levels: '50-70',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  raptorSaTori: {
    liku: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Highlands',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Ogre Gorge',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: "Widow's Ravine",
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Diamondback Flats',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Broadhurst',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Lost Caverns',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Troll Halls',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Imperial Forest',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Imperial Fortress',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Imperial City',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Spiral Caverns',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
  },
  world: {
    ocean: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Pirate Ship',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'Ushil Uzol Uker',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Sailing',
          levels: 'N/A',
          summary: 'Summary goes here',
        },
      ],
    },
    sky: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
      ],
    },
    plane: {
      summary: 'Summary Goes Here',
      levels: '50-70',
      maps: [],
      zones: [
        {
          name: 'Fire',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Astral',
          levels: '50-70',
          summary: 'Summary goes here',
        },
      ],
    },
    sunkenCity: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
      ],
    },
  },
  isles: {
    islands: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Boar',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Dragon',
          levels: '???',
          summary: 'Summary goes here',
        },
        {
          name: 'Trinlar',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Talus',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Cove',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Coral',
          levels: '15-20',
          summary: 'Summary goes here',
        },
        {
          name: 'Kender',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Tsfaru',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Rimaga',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: "Mon'kay",
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: "Kit'tay",
          levels: '110-130',
          summary: 'Summary goes here',
        },
      ],
    },
    kobold: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Forest',
          levels: '20-30',
          summary: 'Summary goes here',
        },
        {
          name: 'Tunnels',
          levels: '30-40',
          summary: 'Summary goes here',
        },
        {
          name: 'Ruins',
          levels: '40-50',
          summary: 'Summary goes here',
        },
        {
          name: 'City',
          levels: '40-50',
          summary: 'Summary goes here',
        },
      ],
    },
    mjharr: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Mines',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Mountain',
          levels: '50-70',
          summary: 'Summary goes here',
        },
        {
          name: 'Tombs',
          levels: '50-70',
          summary: 'Summary goes here',
        },
      ],
    },
    charanth: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Caves',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
    holgresh: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Temple',
          levels: '70-90',
          summary: 'Summary goes here',
        },
      ],
    },
    ensi: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Minotaur Hills',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Centaur Forest',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Ant Tunnels',
          levels: '70-90',
          summary: 'Summary goes here',
        },
        {
          name: 'Orc Caves',
          levels: '90-110',
          summary: 'Summary goes here',
        },
      ],
    },
    abbadon: {
      summary: 'Summary Goes Here',
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
          summary: 'Summary goes here',
        },
        {
          name: 'Mountains',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Drow-elf City',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Spider Caves',
          levels: '110-130',
          summary: 'Summary goes here',
        },
        {
          name: 'Illithid Airship',
          levels: '110-130',
          summary: 'Summary goes here',
        },
      ],
    },
  },
};

/*
const template = {
  area: {

    subarea: {
      summary: 'Summary Goes Here',
      levels: '',
      maps: [],
      zones: [

        {
          name: '',
          levels: '',
          summary: 'Summary goes here',
        },

      ],
    },

  },
};
*/
