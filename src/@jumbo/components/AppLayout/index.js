import React from 'react';
import globalStyles from 'theme/GlobalCss';

import VerticalDefault from './VerticalLayouts/VerticalDefault';

const AppLayout = ({ children }) => {
  globalStyles();

  return <VerticalDefault children={children} />;
};

export default AppLayout;
