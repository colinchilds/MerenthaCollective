import React from 'react';

import clsx from 'clsx';

import CmtFooter from '../../../../../@coremat/CmtLayouts/Vertical/Footer';
import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';

import Header from '../../partials/Header';
import SidebarHeader from '../../partials/SidebarHeader';
import SideBar from '../../partials/SideBar';
import ContentLoader from '../../../ContentLoader';
import { SIDEBAR_TYPE } from '../../../../constants/ThemeOptions';
import Footer from '../../partials/Footer';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const layoutOptions = {
  headerType: defaultContext.headerType,
  footerType: 'fixed',
  sidebarType: SIDEBAR_TYPE.MINI,
  isSidebarFixed: defaultContext.isSidebarFixed,
  isSidebarOpen: false,
  miniSidebarWidth: 80,
  layoutStyle: defaultContext.layoutType,
};

const VerticalMinimal = ({ className, children }) => {
  return (
    <CmtVerticalLayout
      layoutOptions={layoutOptions}
      className={clsx('verticalMinimalLayout', className)}
      header={
        <CmtHeader>
          <Header />
        </CmtHeader>
      }
      sidebar={
        <CmtSidebar>
          <SidebarHeader />
          <SideBar />
        </CmtSidebar>
      }
      footer={
        <CmtFooter type="static">
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

export default VerticalMinimal;
