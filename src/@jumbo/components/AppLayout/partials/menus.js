import React from 'react';
import { InsertChart, PostAdd } from '@material-ui/icons';

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
      {
        name: 'Combat Messages',
        type: 'item',
        icon: <PostAdd />,
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
        icon: <InsertChart />,
        link: '/guides/cleric',
      },
      {
        name: 'Fighter',
        type: 'item',
        icon: <InsertChart />,
        link: '/guides/fighter',
      },
      {
        name: 'Mage',
        type: 'item',
        icon: <InsertChart />,
        link: '/guides/mage',
      },
      {
        name: 'Monk',
        type: 'item',
        icon: <InsertChart />,
        link: '/guides/monk',
      },
      {
        name: 'Rogue',
        type: 'item',
        icon: <InsertChart />,
        link: '/guides/rogue',
      },
      {
        name: 'Newbie',
        type: 'item',
        icon: <InsertChart />,
        link: '/guides/newbie',
      },
    ],
  },
];

export const horizontalDefaultNavs = sidebarNavs;

export const minimalHorizontalMenus = sidebarNavs;
