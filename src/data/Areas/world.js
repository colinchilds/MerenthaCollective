import { area, subArea, map, zone } from './helpers/areaFactory';

export const world = area({
  ocean: subArea({
    summary: '',
    levels: 'See Local Areas',
    maps: [
      map('Ghost Ship', '/images/maps/GhostShip.jpg'),
      map('Ghost Ship 2', '/images/maps/GhostShip2.gif'),
      map('World Map', '/images/maps/world_map.png'),
    ],
    zones: [
      zone('Ghost Ship', 'High Mortal'),
      zone('Pirate Ship', 'Late High Mortal'),
      zone('Ushil Uzol Uker', 'Mid Legend'),
      zone('Sailing', 'N/A'),
    ],
  }),

  sky: subArea({
    summary: '',
    levels: 'Unknown',
    maps: [map('Flying Map', '/images/maps/flying_map.gif')],
    zones: [zone('Flying', 'Unknown')],
  }),

  plane: subArea({
    summary: '',
    levels: '50-70',
    maps: [],
    zones: [zone('Fire', 'Elite'), zone('Astral', 'Elite')],
  }),

  sunkenCity: subArea({
    summary: '',
    levels: '20-30',
    maps: [map('Sunken City', '/images/maps/SunkenCity.jpg'), map('Sunken City 2', '/images/maps/SunkenCity2.jpg')],
    zones: [zone('City', '20-30')],
  }),
});
