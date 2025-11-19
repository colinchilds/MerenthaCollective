import { area, subArea, map, zone } from './helpers/areaFactory';

export const raptorSaTori = area({
  liku: subArea({
    summary: '',
    levels: '50-90',
    maps: [
      map('Imperial Forest', '/images/maps/ImperialForest.gif'),
      map('Imperial Fortress', '/images/maps/ImperialFortress.jpg'),
      map('Liku', '/images/maps/Liku.png'),
      map('Lost Caverns', '/images/maps/LostCaverns.gif'),
      map('Spiral Caverns', '/images/maps/SpiralCaverns.jpg'),
    ],
    zones: [
      zone('Diamondback Flats', 'Elite'),
      zone('Broadhurst', 'Elite', '', 'yes', 'yes', 'yes'),
      zone('Highlands', 'Elite'),
      zone('Lost Caverns', 'Elite', 'no'),
      zone('Ogre Gorge', 'Elite'),
      zone('Troll Halls', 'Elite'),
      zone('Village', 'Elite'),
      zone("Widow's Ravine", 'Elite'),

      // Level 70–90 set
      zone('Imperial City', 'Late Elite'),
      zone('Imperial Forest', 'Late Elite'),
      zone('Imperial Fortress', 'Late Elite'),
      zone('Spiral Caverns', 'Late Elite'),
    ],
  }),
});
