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
};

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
