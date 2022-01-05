import React from 'react';
import clsx from 'clsx';

import Hidden from '@material-ui/core/Hidden';

import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderTop from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';

import SideBar from '../../partials/SideBar';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import ContentLoader from '../../../ContentLoader';
import HeaderMain from './HeaderMain';
import HeaderTopMenus from './HeaderTopMenus';
import Footer from '../../partials/Footer';
import { HEADER_TYPE } from '../../../../constants/ThemeOptions';
import useStyles from './index.style';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const layoutOptions = {
  showFooter: true,
  headerType: HEADER_TYPE.STATIC,
  layoutStyle: defaultContext.layoutType,
};

const HorizontalTopMenu = ({ className, children }) => {
  const classes = useStyles();

  return (
    <CmtHorizontalLayout
      layoutOptions={layoutOptions}
      className={clsx('Cmt-horizontalTopMenuLayout', className)}
      header={
        <CmtHeader className={classes.appHeaderDark}>
          <Hidden mdDown>
            <CmtHeaderMain>
              <HeaderTopMenus />
            </CmtHeaderMain>
          </Hidden>
          <CmtHeaderNav>
            <HeaderLogin />
          </CmtHeaderNav>
          <CmtHeaderTop>
            <HeaderMain />
          </CmtHeaderTop>
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

export default HorizontalTopMenu;
