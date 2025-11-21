import { area, subArea, map, zone } from './helpers/areaFactory';

export const kyria = area({
  haven: subArea({
    summary: '',
    levels: '20-29',
    maps: [map('Haven', '/images/maps/Haven.gif'), map('Haven 2', '/images/maps/Haven2.gif')],
    zones: [
      zone('Town', 'High Mortal', '', '', 'no', 'no', 'no'),
      zone('Fields', 'High Mortal', '', '', 'no', 'no', 'no'),
      zone('Farms', 'High Mortal', '', '', 'no', 'no', 'no'),
      zone('Woods', 'High Mortal', '', '', 'no', 'no', 'no'),
    ],
  }),

  gofur: subArea({
    summary: '',
    levels: '30-39',
    maps: [],
    zones: [zone('Town', 'Mid High Mortal', '', 'no', 'yes', 'yes', 'no'), zone('Mines', 'Mid High Mortal')],
  }),
});
