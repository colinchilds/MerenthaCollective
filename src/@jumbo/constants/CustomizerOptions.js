import { LAYOUT_STYLES, LAYOUT_TYPES, SIDEBAR_TYPE, THEME_TYPES } from './ThemeOptions';

export const THEME_COLORS = [
  { primary: '#6200EE', secondary: '#03DAC5' },
  { primary: '#1C61CA', secondary: '#E56B6F' },
  { primary: '#2EC4B6', secondary: '#FF9F1C' },
  { primary: '#EF8354', secondary: '#4F5D75' },
  { primary: '#D71371', secondary: '#5AB77F' },
  { primary: '#072AC8', secondary: '#FFC600' },
  { primary: '#7530FF', secondary: '#369FFF' },
  { primary: '#F26419', secondary: '#F9C80E' },
  { primary: '#2BA444', secondary: '#0A2E36' },
  { primary: '#33658A', secondary: '#55DDE0' },
];

export const LAYOUT_OPTIONS = [
  {
    id: LAYOUT_TYPES.VERTICAL_DEFAULT,
    layoutName: 'Default',
    image: '/images/layouts/layout1.png',
  },
  {
    id: LAYOUT_TYPES.VERTICAL_MINIMAL,
    layoutName: 'Minimal',
    image: '/images/layouts/layout2.png',
  },
  {
    id: LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER,
    layoutName: 'Minimal No Header',
    image: '/images/layouts/layout3.png',
  },
  {
    id: LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR,
    layoutName: 'Modern',
    image: '/images/layouts/layout8.png',
  },
  {
    id: LAYOUT_TYPES.HORIZONTAL_DEFAULT,
    layoutName: 'Horizontal Default',
    image: '/images/layouts/layout4.png',
  },
  {
    id: LAYOUT_TYPES.HORIZONTAL_DARK,
    layoutName: 'Horizontal Dark Header',
    image: '/images/layouts/layout5.png',
  },
  {
    id: LAYOUT_TYPES.HORIZONTAL_MINIMAL,
    layoutName: 'Horizontal Minimal',
    image: '/images/layouts/layout6.png',
  },
  {
    id: LAYOUT_TYPES.HORIZONTAL_TOP_MENU,
    layoutName: 'Horizontal Top Bar',
    image: '/images/layouts/layout7.png',
  },
];

export const THEME_TYPE_OPTIONS = [
  {
    title: 'Light',
    image: '/images/customizer/light.png',
    type: THEME_TYPES.LIGHT,
  },
  {
    title: 'Semi Dark',
    image: '/images/customizer/semidark.png',
    type: THEME_TYPES.SEMI_DARK,
  },
  {
    title: 'Dark',
    image: '/images/customizer/dark.png',
    type: THEME_TYPES.DARK,
  },
];

export const CONTAINER_OPTIONS = [
  {
    id: LAYOUT_STYLES.BOXED,
    layoutName: 'Boxed',
    image: '/images/customizer/boxed.png',
  },
  {
    id: LAYOUT_STYLES.FULL_WIDTH,
    layoutName: 'Full Width',
    image: '/images/customizer/fullwidth.png',
  },
  {
    id: LAYOUT_STYLES.FRAMED,
    layoutName: 'Framed',
    image: '/images/customizer/framed.png',
  },
];

export const SIDEBAR_LAYOUT_OPTIONS = [
  {
    id: SIDEBAR_TYPE.MINI,
    layoutName: 'Folded',
    image: '/images/customizer/sidebar/layouts/folded.png',
  },
  {
    id: SIDEBAR_TYPE.FULL,
    layoutName: 'Default',
    image: '/images/customizer/sidebar/layouts/default.png',
  },
  {
    id: SIDEBAR_TYPE.DRAWER,
    layoutName: 'Drawer',
    image: '/images/customizer/sidebar/layouts/drawer.png',
  },
];

export const FLAT_COLOR_OPTIONS = [
  {
    backgroundColor: '#6200EE',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: '#B94343',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: '#03DAC5',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: '#369FFF',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: '#2BA444',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: '#23036A',
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
];

export const GRADIENTS_COLOR_OPTIONS = [
  {
    backgroundColor: ['#8E2DE2 0%', '#320097 100%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: ['#03DAC5 -18.96%', '#6200EE 108.17%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: ['#EB4511 0%', '#861C00 100%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: ['#03CE97 5%', '#00619A 90%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: ['#061161 0%', '#C31432 100%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  {
    backgroundColor: ['#C33764 0%', '#1D2671 100%'],
    textColor: 'rgba(255, 255, 255, 0.8)',
    textDarkColor: '#fff',
    textActiveColor: '#000',
    navHoverBgColor: 'rgba(255, 255, 255, 0.3)',
    navActiveBgColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
];

export const SIDEBAR_BG_IMAGE_OPTIONS = [
  {
    name: 'sidebarImage1',
    image: '/images/customizer/sidebar/sidebar-1.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-1.jpg',
  },
  {
    name: 'sidebarImage2',
    image: '/images/customizer/sidebar/sidebar-2.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-2.jpg',
  },
  {
    name: 'sidebarImage3',
    image: '/images/customizer/sidebar/sidebar-3.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-3.jpg',
  },
  {
    name: 'sidebarImage4',
    image: '/images/customizer/sidebar/sidebar-4.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-4.jpg',
  },
  {
    name: 'sidebarImage5',
    image: '/images/customizer/sidebar/sidebar-5.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-5.jpg',
  },
  {
    name: 'sidebarImage6',
    image: '/images/customizer/sidebar/sidebar-6.png',
    fullImage: '/images/customizer/sidebar/full-images/sidebar-6.jpg',
  },
];
