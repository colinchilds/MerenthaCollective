import React from 'react';
import SideBar from '../../partials/SideBar';
import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderTop from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import ContentLoader from '../../../ContentLoader';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import useStyles from './index.style';
import Hidden from '@material-ui/core/Hidden';
import HeaderMain from './HeaderMain';
import clsx from 'clsx';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import Footer from '../../partials/Footer';
import { HEADER_TYPE } from '../../../../constants/ThemeOptions';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';
import { horizontalDefaultNavs } from '../../partials/menus';
import CmtHorizontal from '../../../../../@coremat/CmtNavigation/Horizontal';

const layoutOptions = {
  showFooter: true,
  headerType: HEADER_TYPE.STATIC,
  layoutStyle: defaultContext.layoutType,
};
const HorizontalDark = ({ className, children }) => {
  const classes = useStyles();

  return (
    <CmtHorizontalLayout
      className={clsx('Cmt-horizontalDarkLayout', className)}
      layoutOptions={layoutOptions}
      header={
        <CmtHeader className={classes.appHeaderDark}>
          <CmtHeaderNav>
            <HeaderLogin />
          </CmtHeaderNav>
          <CmtHeaderTop>
            <HeaderMain />
          </CmtHeaderTop>
          <Hidden mdDown>
            <CmtHeaderMain>
              <CmtHorizontal menuItems={horizontalDefaultNavs} />
            </CmtHeaderMain>
          </Hidden>
        </CmtHeader>
      }
      sidebar={
        <CmtSidebar>
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
    </CmtHorizontalLayout>
  );
};

export default HorizontalDark;
