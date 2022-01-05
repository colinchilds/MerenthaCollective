import React from 'react';

import PropTypes from 'prop-types';

import LayoutContextProvider from './LayoutContextProvider';
import MainContainer from './MainContainer';
import SidebarThemeProvider from '../SidebarThemeContext';

const CmtVerticalLayout = ({ layoutOptions, children, header, sidebar, footer, ...rest }) => {
  return (
    <LayoutContextProvider {...layoutOptions}>
      <SidebarThemeProvider>
        <MainContainer header={header} sidebar={sidebar} footer={footer} {...rest}>
          {children}
        </MainContainer>
      </SidebarThemeProvider>
    </LayoutContextProvider>
  );
};

CmtVerticalLayout.prototype = {
  layoutOptions: PropTypes.object,
};

CmtVerticalLayout.defaultProps = {
  layoutOptions: {},
};

export default CmtVerticalLayout;
