import { area, subArea, map, zone } from './helpers/areaFactory';

export const teile = area({
  shanadan: subArea({
    summary: '',
    levels: '50-70',
    maps: [
      map('Shanadan Bat Cave', '/images/maps/ShanadanBatCave.gif'),
      map('Shanadan Castle', '/images/maps/ShanadanCastle.gif'),
      map('Shanadan Garden', '/images/maps/ShanadanGarden.gif'),
    ],
    zones: [zone('Cliffs', 'Elite'), zone('Gardens', 'Elite'), zone('Castle', 'Elite'), zone('Bat Caves', 'Elite')],
  }),
});
