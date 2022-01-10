import React from 'react';
import { InsertChart, AccessibilityNew, Home, MyLocation, People, Report } from '@material-ui/icons';

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
        name: 'Party',
        type: 'item',
        icon: <People />,
        link: '/party',
      },
      {
        name: 'Combat Messages',
        type: 'item',
        icon: <Report />,
        link: '/combat',
      },
    ],
  },
  {
    name: 'Guides',
    type: 'section',
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
      {
        name: 'Newbie',
        type: 'item',
        icon: <AccessibilityNew />,
        link: '/guides/newbie',
      },
    ],
  },
];

export const horizontalDefaultNavs = sidebarNavs;

export const minimalHorizontalMenus = sidebarNavs;
