import React from 'react';
import { InsertChart, PostAdd } from '@material-ui/icons';

export const sidebarNavs = [
  {
    name: 'Main',
    type: 'section',
    children: [
      {
        name: 'Home',
        type: 'item',
        icon: <PostAdd />,
        link: '/',
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
