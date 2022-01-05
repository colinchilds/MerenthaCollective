import React from 'react';
import clsx from 'clsx';

import Hidden from '@material-ui/core/Hidden';

import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderTop from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import HeaderTop from '../../partials/Header/HeaderTop';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import ContentLoader from '../../../ContentLoader';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import SideBar from '../../partials/SideBar';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import Footer from '../../partials/Footer';
import { HEADER_TYPE } from '../../../../constants/ThemeOptions';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';
import CmtHorizontal from '../../../../../@coremat/CmtNavigation/Horizontal';
import { horizontalDefaultNavs } from '../../partials/menus';

const layoutOptions = {
  showFooter: false,
  headerType: HEADER_TYPE.STATIC,
  layoutStyle: defaultContext.layoutType,
};

const HorizontalDefault = ({ className, children }) => {
  return (
    <CmtHorizontalLayout
      layoutOptions={layoutOptions}
      className={clsx('Cmt-horizontalDefaultLayout', className)}
      header={
        <CmtHeader>
          <CmtHeaderNav>
            <HeaderLogin />
          </CmtHeaderNav>
          <CmtHeaderTop>
            <HeaderTop />
          </CmtHeaderTop>
          <Hidden mdDown>
            <CmtHeaderMain bgcolor="primary.main" color="white">
              <CmtHorizontal menuItems={horizontalDefaultNavs} />
            </CmtHeaderMain>
          </Hidden>
        </CmtHeader>
      }
      footer={
        <CmtFooter type="static">
          <Footer />
        </CmtFooter>
      }
      sidebar={
        <CmtSidebar>
          <SideBar />
        </CmtSidebar>
      }>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtHorizontalLayout>
  );
};

export default HorizontalDefault;
