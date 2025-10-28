import React from 'react';
import {
  InsertChart,
  AccessibilityNew,
  Home,
  MyLocation,
  Textsms,
  Map,
  Calculate,
  LocalFireDepartment,
  Casino,
  Shield,
  Terrain,
  Groups,
  AccessTime,
  Terminal,
  Science,
} from '@mui/icons-material';

export const sidebarNavs = [
  {
    name: 'General',
    type: 'section',
    children: [
      {
        name: 'Home',
        type: 'item',
        icon: <Home />,
        link: '/',
      },
      {
        name: 'Alchemy',
        type: 'item',
        icon: <Science />,
        link: '/alchemy',
      },
      {
        name: 'Calculators',
        type: 'collapse',
        icon: <Calculate />,
        children: [
          {
            name: 'Stats',
            type: 'item',
            icon: <InsertChart />,
            link: '/calculators/stats',
          },
          {
            name: 'Skills',
            type: 'item',
            icon: <Calculate />,
            link: '/calculators/skills',
          },
          {
            name: 'Party',
            type: 'item',
            icon: <Groups />,
            link: '/calculators/party',
          },
          {
            name: 'Time Converter',
            type: 'item',
            icon: <AccessTime />,
            link: '/calculators/time',
          },
        ],
      },
      {
        name: 'Combat Messages',
        type: 'item',
        icon: <Shield />,
        link: '/combat',
      },
      {
        name: 'Common Commands',
        type: 'item',
        icon: <Terminal />,
        link: '/commands',
      },
      {
        name: 'Coordinates',
        type: 'item',
        icon: <MyLocation />,
        link: '/coords',
      },
      {
        name: 'Fireworks',
        type: 'item',
        icon: <LocalFireDepartment />,
        link: '/fireworks',
      },
      {
        name: 'Maps',
        type: 'item',
        icon: <Map />,
        link: '/maps',
      },
      {
        name: 'Rolling',
        type: 'item',
        icon: <Casino />,
        link: '/rolling',
      },
      {
        name: 'Socials',
        type: 'item',
        icon: <Textsms />,
        link: '/socials',
      },
    ],
  },
  {
    name: 'Areas',
    type: 'section',
    children: [
      {
        name: 'Atheria',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Cabeiri',
            type: 'item',
            link: '/areas/atheria/cabeiri',
          },
          {
            name: 'Clouds',
            type: 'item',
            link: '/areas/atheria/clouds',
          },
          {
            name: 'Fenris',
            type: 'item',
            link: '/areas/atheria/fenris',
          },
          {
            name: 'Whitestorm',
            type: 'item',
            link: '/areas/atheria/whitestorm',
          },
        ],
      },
      {
        name: 'Cardania',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Wolvesdale',
            type: 'item',
            link: '/areas/cardania/wolvesdale',
          },
          {
            name: 'Mystic',
            type: 'item',
            link: '/areas/cardania/mystic',
          },
          {
            name: 'Death Spiral',
            type: 'item',
            link: '/areas/cardania/deathspiral',
          },
          {
            name: 'Lanerell',
            type: 'item',
            link: '/areas/cardania/lanerell',
          },
          {
            name: 'Jewel',
            type: 'item',
            link: '/areas/cardania/jewel',
          },
          {
            name: 'Hiemelia',
            type: 'item',
            link: '/areas/cardania/hiemelia',
          },
          {
            name: 'Xenora',
            type: 'item',
            link: '/areas/cardania/xenora',
          },
          {
            name: 'Lakehurst',
            type: 'item',
            link: '/areas/cardania/lakehurst',
          },
        ],
      },
      {
        name: 'Asmar',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Asmar',
            type: 'item',
            link: '/areas/asmar/asmar',
          },
          {
            name: 'Drewold',
            type: 'item',
            link: '/areas/asmar/drewold',
          },
          {
            name: 'Fairdale',
            type: 'item',
            link: '/areas/asmar/fairdale',
          },
          {
            name: 'Ottograd',
            type: 'item',
            link: '/areas/asmar/ottograd',
          },
        ],
      },
      {
        name: 'Kyria',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Haven',
            type: 'item',
            link: '/areas/kyria/haven',
          },
          {
            name: 'Gofur',
            type: 'item',
            link: '/areas/kyria/gofur',
          },
        ],
      },
      {
        name: 'Ice Flows',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Aeiroth',
            type: 'item',
            link: '/areas/iceflows/aeiroth',
          },
          {
            name: 'Ice Flows',
            type: 'item',
            link: '/areas/iceflows/iceflows',
          },
          {
            name: 'Christmas',
            type: 'item',
            link: '/areas/iceflows/christmas',
          },
        ],
      },
      {
        name: 'Puntos',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Calamyr',
            type: 'item',
            link: '/areas/puntos/calamyr',
          },
        ],
      },
      {
        name: 'South Teile',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Shanadan',
            type: 'item',
            link: '/areas/teile/shanadan',
          },
        ],
      },
      {
        name: 'Raptor-Sa-Tori',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Liku',
            type: 'item',
            link: '/areas/raptorSaTori/liku',
          },
        ],
      },
      {
        name: 'World',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Ocean',
            type: 'item',
            link: '/areas/world/ocean',
          },
          {
            name: 'Sky',
            type: 'item',
            link: '/areas/world/sky',
          },
          {
            name: 'Plane',
            type: 'item',
            link: '/areas/world/plane',
          },
          {
            name: 'Sunken City',
            type: 'item',
            link: '/areas/world/sunkenCity',
          },
        ],
      },
      {
        name: 'Isles',
        type: 'collapse',
        icon: <Terrain />,
        children: [
          {
            name: 'Islands',
            type: 'item',
            link: '/areas/isles/islands',
          },
          {
            name: 'Kobold',
            type: 'item',
            link: '/areas/isles/kobold',
          },
          {
            name: 'Mjharr',
            type: 'item',
            link: '/areas/isles/mjharr',
          },
          {
            name: 'Charanth',
            type: 'item',
            link: '/areas/isles/charanth',
          },
          {
            name: 'Holgresh',
            type: 'item',
            link: '/areas/isles/holgresh',
          },
          {
            name: 'Ensi',
            type: 'item',
            link: '/areas/isles/ensi',
          },
          {
            name: 'Abbadon',
            type: 'item',
            link: '/areas/isles/abbadon',
          },
        ],
      },
    ],
  },
  {
    name: 'Guides',
    type: 'section',
    children: [
      {
        name: 'Newbie',
        type: 'item',
        icon: <AccessibilityNew />,
        link: '/guides/newbie',
      },
      {
        name: 'Classes',
        type: 'collapse',
        icon: <AccessibilityNew />,
        children: [
          {
            name: 'Cleric',
            type: 'item',
            icon: <AccessibilityNew />,
            link: '/guides/cleric',
          },
          {
            name: 'Fighter',
            type: 'item',
            icon: <AccessibilityNew />,
            link: '/guides/fighter',
          },
          {
            name: 'Mage',
            type: 'item',
            icon: <AccessibilityNew />,
            link: '/guides/mage',
          },
          {
            name: 'Monk',
            type: 'item',
            icon: <AccessibilityNew />,
            link: '/guides/monk',
          },
          {
            name: 'Rogue',
            type: 'item',
            icon: <AccessibilityNew />,
            link: '/guides/rogue',
          },
        ],
      },
      {
        name: 'Pet',
        type: 'item',
        icon: <AccessibilityNew />,
        link: '/guides/pets',
      },
      // {
      //   name: 'Builder',
      //   type: 'collapse',
      //   icon: <Construction />,
      //   children: [
      //     {
      //       name: 'General',
      //       type: 'item',
      //       icon: <Construction />,
      //       link: '/guides/builder',
      //     },
      //     {
      //       name: 'Rooms',
      //       type: 'item',
      //       icon: <House />,
      //       link: '/guides/builder/rooms',
      //     },
      //   ],
      // },
    ],
  },
];

export const horizontalDefaultNavs = sidebarNavs;

export const minimalHorizontalMenus = sidebarNavs;
