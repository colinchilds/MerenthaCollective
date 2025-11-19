import { area, subArea, map, zone } from './helpers/areaFactory';

export const asmar = area({
  asmar: subArea({
    summary: '',
    levels: '30-50',
    maps: [
      map('Asmar Caves', '/images/maps/AsmarCaves.gif'),
      map('Asmar City', '/images/maps/AsmarCity.jpg'),
      map('Asmar City 2', '/images/maps/AsmarCity2.jpg'),
      map('Asmar City 3', '/images/maps/AsmarCity3.gif'),
      map('Asmar Forest', '/images/maps/AsmarForest.gif'),
      map('Asmar Plains', '/images/maps/AsmarPlains.jpg'),
      map('Asmar Plains 2', '/images/maps/AsmarPlains2.gif'),
      map('Asmar Plains 3', '/images/maps/AsmarPlains3.jpg'),
      map('Asmar Sewers', '/images/maps/AsmarSewers.jpg'),
      map('Asmar Underground', '/images/maps/AsmarUnderground.jpg'),
      map('Asmar Walls', '/images/maps/AsmarWalls.jpg'),
    ],
    zones: [
      zone('Airfield', 'Mid High Mortal', '', 'yes'),
      zone('Plains', 'Mid High Mortal', '', 'yes'),
      zone('City Walls', 'Mid High Mortal', '', 'yes'),
      zone('Forest', 'Mid High Mortal', '', 'yes'),
      zone('City', 'Mid High Mortal', '', 'yes'),
      zone('Tunnels', 'Late High Mortal', '', 'yes'),
    ],
  }),

  drewold: subArea({
    summary: '',
    levels: '50-90',
    maps: [map('Dreywold', '/images/maps/Dreywold.png')],
    zones: [
      zone('Ancient Forest', 'Elite', '', 'yes', '', 'yes'),
      zone('Crystal Cavern', 'Late Elite', '', 'no', 'yes', 'no', 'yes'),
      zone('Imp Treetops', 'Late Elite', '', 'yes', 'yes', 'no', 'yes'),
    ],
  }),

  fairdale: subArea({
    summary: '',
    levels: '90-130',
    maps: [map('Fairdale', '/images/maps/Fairdale.png')],
    zones: [
      zone('Harbor', 'Legend'),
      zone('Pastures', 'Legend'),
      zone('City', 'Legend'),
      zone('Barrows', 'Mid Legend'),
      zone('Forest', 'Mid Legend'),
      zone('Sewers', 'Mid Legend'),
      zone('Crypts', 'Mid Legend'),
      zone('Mountain', 'Mid Legend'),
      zone('Plains', '???'),
      zone('Airship', '???'),
    ],
  }),

  ottograd: subArea({
    summary: '',
    levels: '50-90',
    maps: [map('Ottograd', '/images/maps/Ottograd.png')],
    zones: [
      zone('Town', 'Elite', '', 'no', 'yes', 'yes'),
      zone('Lower Steppes', 'Elite', '', 'yes'),
      zone('Base Steppes', 'Elite'),
      zone('Upper Steppes', 'Late Elite', '', 'yes', 'yes', 'yes'),
    ],
  }),
});
