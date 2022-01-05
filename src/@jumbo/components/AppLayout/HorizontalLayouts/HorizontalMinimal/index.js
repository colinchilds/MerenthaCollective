import React from 'react';
import clsx from 'clsx';

import SideBar from '../../partials/SideBar';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import ContentLoader from '../../../ContentLoader';
import MainHeader from './MainHeader';
import useStyles from './index.style';
import Footer from '../../partials/Footer';
import { HEADER_TYPE } from '../../../../constants/ThemeOptions';

import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const layoutOptions = {
  showFooter: true,
  headerType: HEADER_TYPE.STATIC,
  layoutStyle: defaultContext.layoutType,
};

const HorizontalMinimal = ({ className, children }) => {
  const classes = useStyles();

  return (
    <CmtHorizontalLayout
      layoutOptions={layoutOptions}
      className={clsx('Cmt-horizontalMinimalLayout', className)}
      header={
        <CmtHeader className={classes.appHeaderDark}>
          <CmtHeaderNav>
            <HeaderLogin />
          </CmtHeaderNav>
          <CmtHeaderMain>
            <MainHeader />
          </CmtHeaderMain>
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

export default HorizontalMinimal;
