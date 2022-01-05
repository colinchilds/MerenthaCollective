export const sidebarLightTheme = {
  bgColor: '#fff',
  textColor: 'rgba(0, 0, 0, 0.6)',
  textDarkColor: 'rgba(0, 0, 0, 0.87)',
  textActiveColor: '#3f51b5',
  navHoverBgColor: 'rgb(229, 229, 229)',
  navActiveBgColor: 'rgb(239, 229, 253)',
  borderColor: 'rgba(33, 33, 33, 0.08)',
  ...JSON.parse(localStorage.getItem('sidebar-colors')),
};

export const sidebarSemiDarkTheme = {
  bgColor: '#363636',
  textColor: 'rgba(255, 255, 255, 0.3)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
  navActiveBgColor: '#3f51b5',
  borderColor: 'rgba(255, 255, 255, 0.08)',
  ...JSON.parse(localStorage.getItem('sidebar-colors')),
};

export const sidebarDarkTheme = {
  bgColor: '#363636',
  textColor: 'rgba(255, 255, 255, 0.3)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
  navActiveBgColor: '#3f51b5',
  borderColor: 'rgba(255, 255, 255, 0.08)',
  ...JSON.parse(localStorage.getItem('sidebar-colors')),
};

const themeSidebarColor = {
  light: sidebarLightTheme,
  'semi-dark': sidebarSemiDarkTheme,
  dark: sidebarDarkTheme,
};

export default themeSidebarColor;
