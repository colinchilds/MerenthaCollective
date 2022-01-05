import React from 'react';

import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import Header from '../../partials/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import SideBar from '../../partials/SideBar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import ContentLoader from '../../../ContentLoader';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Vertical/Footer';
import Footer from '../../partials/Footer';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const layoutOptions = {
  headerType: defaultContext.headerType,
  footerType: 'fixed',
  sidebarType: defaultContext.sidebarType,
  isSidebarFixed: defaultContext.isSidebarFixed,
  isSidebarOpen: false,
  showTourOpt: true,
  showFooterOpt: true,
  miniSidebarWidth: 80,
  layoutStyle: defaultContext.layoutType,
  drawerBreakPoint: defaultContext.drawerBreakPoint,
  sidebarWidth: defaultContext.sidebarWidth,
};

const VerticalDefault = ({ children }) => {
  return (
    <CmtVerticalLayout
      className="verticalDefaultLayout"
      layoutOptions={layoutOptions}
      header={
        <CmtHeader>
          <Header />
        </CmtHeader>
      }
      sidebar={
        <CmtSidebar>
          <SideBar />
        </CmtSidebar>
      }
      footer={
        <CmtFooter>
          <Footer />
        </CmtFooter>
      }>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtVerticalLayout>
  );
};

export default VerticalDefault;
