import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import MapModal from 'routes/Pages/Components/MapModal';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Maps', isActive: true },
];

const maps = [
  {
    name: 'Aerioth',
    url: '/images/maps/Aerioth.gif',
  },
  {
    name: 'Ancient Forest',
    url: '/images/maps/AncientForest.jpg',
  },
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
  {
    name: 'Atheria',
    url: '/images/maps/Atheria.jpg',
  },
  {
    name: 'Boar Island',
    url: '/images/maps/BoarIsland.gif',
  },
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
  {
    name: 'Charanth',
    url: '/images/maps/Charanth.jpg',
  },
  {
    name: 'Charanth 2',
    url: '/images/maps/Charanth2.jpg',
  },
  {
    name: 'Crystal Caverns',
    url: '/images/maps/CrystalCaverns.png',
  },
  {
    name: 'CTF',
    url: '/images/maps/CTF.jpg',
  },
  {
    name: 'Dreywold',
    url: '/images/maps/Dreywold.png',
  },
  {
    name: 'Drow',
    url: '/images/maps/Drow.gif',
  },
  {
    name: 'Drow 2',
    url: '/images/maps/Drow2.jpg',
  },
  {
    name: 'Fairdale',
    url: '/images/maps/Fairdale.png',
  },
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
    name: 'Flying Map',
    url: '/images/maps/flying_map.gif',
  },
  {
    name: 'Gablesville',
    url: '/images/maps/Gablesville.jpg',
  },
  {
    name: 'Ghost Ship',
    url: '/images/maps/GhostShip.jpg',
  },
  {
    name: 'Ghost Ship 2',
    url: '/images/maps/GhostShip2.gif',
  },
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
  {
    name: 'Haven',
    url: '/images/maps/Haven.jpg',
  },
  {
    name: 'Hiemelia',
    url: '/images/maps/Hiemelia.jpg',
  },
  {
    name: 'Holgresh',
    url: '/images/maps/Holgresh.jpg',
  },
  {
    name: 'Imladris',
    url: '/images/maps/Imladris.jpg',
  },
  {
    name: 'Imperial Forest',
    url: '/images/maps/ImperialForest.gif',
  },
  {
    name: 'Imperial Fortress',
    url: '/images/maps/ImperialFortress.jpg',
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
    name: 'Korlis',
    url: '/images/maps/Korlis.gif',
  },
  {
    name: 'Korlis Rainforest',
    url: '/images/maps/KorlisRainforest.gif',
  },
  {
    name: 'Korlis Ruins',
    url: '/images/maps/KorlisRuins.jpg',
  },
  {
    name: 'Korlis Tunnels',
    url: '/images/maps/KorlisTunnels.gif',
  },
  {
    name: 'Korlis Tunnels 2',
    url: '/images/maps/KorlisTunnels2.jpg',
  },
  {
    name: 'Lanerell Dragon Caves',
    url: '/images/maps/LanerellDragonCaves.jpg',
  },
  {
    name: 'Lanerell Forest',
    url: '/images/maps/LanerellForest.jpg',
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
    name: 'Mjharr',
    url: '/images/maps/Mjharr.jpg',
  },
  {
    name: 'Monkay Island',
    url: '/images/maps/MonkayIsland.jpg',
  },
  {
    name: 'Orc Caves',
    url: '/images/maps/OrcCaves.gif',
  },
  {
    name: 'Ottograd',
    url: '/images/maps/Ottograd.png',
  },
  {
    name: 'Oz',
    url: '/images/maps/Oz.jpg',
  },
  {
    name: 'Rimaga',
    url: '/images/maps/Rimaga.jpg',
  },
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
  {
    name: 'Spiral Caverns',
    url: '/images/maps/SpiralCaverns.jpg',
  },
  {
    name: 'Strongwood',
    url: '/images/maps/Strongwood.jpg',
  },
  {
    name: 'Sunken City',
    url: '/images/maps/SunkenCity.jpg',
  },
  {
    name: 'Sunken City 2',
    url: '/images/maps/SunkenCity2.jpg',
  },
  {
    name: 'Trogrelin',
    url: '/images/maps/Trogrelin.jpg',
  },
  {
    name: 'Uruk',
    url: '/images/maps/Uruk.gif',
  },
  {
    name: 'Wolvesdale',
    url: '/images/maps/WD.jpg',
  },
  {
    name: 'Wolvesdale Crypts 1/2',
    url: '/images/maps/WDCrypts1_2.jpg',
  },
  {
    name: 'Wolvesdale Crypts 3/4',
    url: '/images/maps/WDCrypts3_4.jpg',
  },
  {
    name: 'Wolvesdale Landing',
    url: '/images/maps/WDLanding.jpg',
  },
  {
    name: 'Wolvesdale Lower Death Spirals',
    url: '/images/maps/WDLowerDeathSpirals.jpg',
  },
  {
    name: 'Wolvesdale Middle Death Spirals',
    url: '/images/maps/WDMiddleDeathSpirals.jpg',
  },
  {
    name: 'Wolvesdale Upper Deather Spirals',
    url: '/images/maps/WDUpperDeatherSpirals.jpg',
  },
  {
    name: 'Whitestorm',
    url: '/images/maps/Whitestorm.jpg',
  },
  {
    name: 'Whitestorm 2',
    url: '/images/maps/Whitestorm2.jpg',
  },
  {
    name: 'Whitestorm 3',
    url: '/images/maps/Whitestorm3.gif',
  },
  {
    name: 'Whitestorm Farm',
    url: '/images/maps/WhitestormFarm.jpg',
  },
  {
    name: 'World Map',
    url: '/images/maps/world_map.png',
  },
  {
    name: 'Xenora Walls',
    url: '/images/maps/XenoraWalls.jpg',
  },
];

const Maps = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Maps">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Table size="small">
                <TableBody>
                  {maps.map((map, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <MapModal name={map.name} url={map.url} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Maps;
