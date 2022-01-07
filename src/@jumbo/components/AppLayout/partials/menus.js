import React from 'react';
import { InsertChart, PostAdd } from '@material-ui/icons';

export const sidebarNavs = [
  {
    name: 'General',
    type: 'section',
    children: [
      {
        name: 'Home',
        type: 'item',
        icon: <PostAdd />,
        link: '/',
      },
      {
        name: 'Coordinates',
        type: 'item',
        icon: <PostAdd />,
        link: '/coords',
      },
      {
        name: 'Party',
        type: 'item',
        icon: <PostAdd />,
        link: '/party',
      },
    ],
  },
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
];

export const horizontalDefaultNavs = sidebarNavs;

export const minimalHorizontalMenus = sidebarNavs;
