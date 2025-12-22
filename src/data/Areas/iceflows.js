import { area, subArea, map, zone } from './helpers/areaFactory';

export const iceflows = area({
  aerioth: subArea({
    summary: '',
    levels: '20-90',
    maps: [
      map('Aerioth', '/images/maps/Aerioth.gif'),
      map('Aerioth Abbey', '/images/maps/AeriothAbbey.gif'),
      map('Aerioth Castle', '/images/maps/AeriothCastle.gif'),
      map('Aerioth Caverns', '/images/maps/AeriothCaverns.gif'),
      map('Aerioth Lake', '/images/maps/AeriothLake.jpg'),
    ],
    zones: [
      zone('City', 'Mid High Mortal', '', 'no'),
      zone('Wilds', 'Mid High Mortal', '', 'no'),
      zone('Castle', 'Elite', '', 'no'),
      zone('Goblin Lair', 'Elite', '', 'no'),
      zone('Ice Cavern', 'Elite', '', 'no'),
      zone('Abbey', 'Late Elite', '', 'no'),
      zone('Dead Fields', 'Late Elite', '', 'no'),
      zone('Frozen Lake', 'Late Elite', '', 'no'),
      zone('Valley', 'Late Elite', '', 'no'),
    ],
  }),

  'ice-flows': subArea({
    summary: '',
    levels: '20-29',
    maps: [map('Ice Flows', '/images/maps/IceFlows.gif')],
    zones: [zone('Ice Flows', 'High Mortal')],
  }),

  christmas: subArea({
    summary: '',
    levels: '???',
    maps: [map('Christmas Zone', '/images/maps/Christmas.gif')],
    zones: [zone('Island', '???')],
  }),
});
