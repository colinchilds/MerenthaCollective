import React from 'react';
import LayoutContextProvider from './LayoutContextProvider';
import MainContainer from './MainContainer';
import SidebarThemeProvider from '../SidebarThemeContext';

const CmtHorizontalLayout = ({ layoutOptions, children, header, footer, ...rest }) => {
  return (
    <LayoutContextProvider {...layoutOptions}>
      <SidebarThemeProvider>
        <MainContainer header={header} footer={footer} {...rest}>
          {children}
        </MainContainer>
      </SidebarThemeProvider>
    </LayoutContextProvider>
  );
};

export default CmtHorizontalLayout;
