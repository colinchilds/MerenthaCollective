import { area, subArea, map, zone } from './helpers/areaFactory';

export const isles = area({
  fucawee: subArea({
    summary: '',
    levels: '15-20',
    maps: [map('Fucawee', '/images/maps/Fucawee.gif')],
    zones: [zone('Island', 'Late Mid', '', '', 'no', 'no', 'no')],
  }),

  boar: subArea({
    summary: '',
    levels: '15-20',
    maps: [map('Boar Island', '/images/maps/Boar.png')],
    zones: [zone('Island', 'Late Mid')],
  }),

  dragon: subArea({
    summary: '',
    levels: '???',
    maps: [map('Dragon Island', '/images/maps/Dragon.jpg')],
    zones: [zone('Island', '???')],
  }),

  trinlar: subArea({
    summary: '',
    levels: '20-40',
    maps: [],
    zones: [zone('Island', 'High Mortal', '', 'yes')],
  }),

  talus: subArea({
    summary: '',
    levels: '15-20',
    maps: [],
    zones: [zone('Island', 'Late Mid')],
  }),

  cove: subArea({
    summary: '',
    levels: '15-20',
    maps: [],
    zones: [zone('Island', 'Late Mid')],
  }),

  'sunken-city': subArea({
    summary: '',
    levels: '20-29',
    maps: [],
    zones: [zone('City', 'High Mortal')],
  }),

  'coral-islands': subArea({
    summary: '',
    levels: '15-20',
    maps: [],
    zones: [zone('Islands', 'Late Mid')],
  }),

  kobold: subArea({
    summary: '',
    levels: '20-50',
    maps: [],
    zones: [
      zone('Surface', 'Late Mid'),
      zone('Forest', 'High Mortal'),
      zone('Tunnels', 'Mid High Mortal'),
      zone('Ruins', 'Late High Mortal'),
      zone('City', 'Late High Mortal'),
    ],
  }),

  kender: subArea({
    summary: '',
    levels: '20-29',
    maps: [],
    zones: [zone('Island', 'High Mortal')],
  }),

  tsfaru: subArea({
    summary: '',
    levels: '30-39',
    maps: [],
    zones: [zone('Isle', 'Mid High Mortal')],
  }),

  rimaga: subArea({
    summary: '',
    levels: '30-39',
    maps: [],
    zones: [zone('Island', 'Mid High Mortal')],
  }),

  mjharr: subArea({
    summary: '',
    levels: '50-69',
    maps: [map('Mjharr', '/images/maps/Mjharr.png')],
    zones: [zone('Desert', 'Elite'), zone('Mines', 'Elite'), zone('Mountain', 'Elite'), zone('Tombs', 'Elite')],
  }),

  charanth: subArea({
    summary: '',
    levels: '70-89',
    maps: [],
    zones: [zone('City', 'Late Elite', '', 'yes'), zone('Caves', 'Late Elite')],
  }),

  monkay: subArea({
    summary: '',
    levels: '70-89',
    maps: [],
    zones: [zone('Island', 'Late Elite', '', 'yes')],
  }),

  holgresh: subArea({
    summary: '',
    levels: '70-89',
    maps: [],
    zones: [zone('Cliffs', 'Late Elite', '', 'no'), zone('Temple', 'Late Elite', '', 'no')],
  }),

  ensi: subArea({
    summary: '',
    levels: '70-109',
    maps: [],
    zones: [
      zone('Beach', 'Late Elite'),
      zone('Minotaur Hills', 'Late Elite'),
      zone('Centaur Forest', 'Late Elite'),
      zone('Ant Tunnels', 'Late Elite'),
      zone('Orc Caves', 'Legend'),
    ],
  }),

  abbadon: subArea({
    summary: '',
    levels: '90-129',
    maps: [],
    zones: [
      zone('Forest', 'Legend', '', 'yes', 'yes', 'yes', 'yes'),
      zone('Mountains', 'Mid Legend', '', 'yes', 'yes', 'yes', 'yes'),
      zone('Drow-elf City', 'Mid Legend', '', 'yes', 'yes', 'yes', 'yes'),
      zone('Spider Caves', 'Mid Legend', '', 'yes', 'yes', 'yes', 'yes'),
      zone('Illithid Airship', 'Mid Legend', '', 'yes', 'yes', 'yes', 'yes'),
    ],
  }),

  kittay: subArea({
    summary: '',
    levels: '110-129',
    maps: [],
    zones: [zone('Island', 'Mid Legend', '', 'yes', 'yes', 'yes')],
  }),
});
