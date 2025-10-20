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
  TravelExplore,
  AccessTime,
  Terminal,
  Science,
} from '@mui/icons-material';

export const sidebarNavs = [
  {
    name: 'Calculators',
    type: 'section',
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
        name: 'Coordinates',
        type: 'item',
        icon: <MyLocation />,
        link: '/coords',
      },
      {
        name: 'World Map',
        type: 'item',
        icon: <TravelExplore />,
        link: '/worldmap',
      },
      {
        name: 'Maps',
        type: 'item',
        icon: <Map />,
        link: '/maps',
      },
      {
        name: 'Areas',
        type: 'item',
        icon: <Terrain />,
        link: '/areas',
      },
      {
        name: 'Alchemy',
        type: 'item',
        icon: <Science />,
        link: '/alchemy',
      },
      {
        name: 'Rolling',
        type: 'item',
        icon: <Casino />,
        link: '/rolling',
      },
      {
        name: 'Combat Messages',
        type: 'item',
        icon: <Shield />,
        link: '/combat',
      },
      {
        name: 'Socials',
        type: 'item',
        icon: <Textsms />,
        link: '/socials',
      },
      {
        name: 'Fireworks',
        type: 'item',
        icon: <LocalFireDepartment />,
        link: '/fireworks',
      },
      {
        name: 'Common Commands',
        type: 'item',
        icon: <Terminal />,
        link: '/commands',
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
