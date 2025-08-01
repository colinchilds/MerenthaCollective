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
