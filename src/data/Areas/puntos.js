import { area, subArea, map, zone } from './helpers/areaFactory';

export const puntos = area({
  calamyr: subArea({
    summary: '',
    levels: '30-50',
    maps: [
      map('Calamyr City', '/images/maps/CalamyrCity.gif'),
      map('Calamyr Sewers', '/images/maps/CalamyrSewers.gif'),
      map('Calamyr Tundra', '/images/maps/CalamyrTundra.gif'),
    ],
    zones: [
      zone('Tundra', 'Mid High Mortal'),
      zone('City', 'Mid High Mortal'),
      zone('Fortress', 'Late High Mortal'),
      zone('Onyx Mines', 'Late High Mortal'),
      zone('Sewers', 'Late High Mortal'),
    ],
  }),
});
