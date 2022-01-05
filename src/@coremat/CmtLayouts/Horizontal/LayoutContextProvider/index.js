import React, { useEffect, useMemo, useState } from 'react';
import LayoutContext from '../../LayoutContext';

const LAYOUT_STYLES = ['full-width', 'boxed', 'framed'];
const SIDEBAR_TYPES = ['full', 'drawer', 'mini'];
const HEADER_TYPES = ['fixed', 'static'];

let sidebarFixed = true;
let headerFixed = true;

const LayoutContextProvider = props => {
  const [layoutStyle, setLayoutStyle] = useState(props.layoutStyle ? props.layoutStyle : LAYOUT_STYLES[0]);
  const [sidebarType, setSidebarType] = useState(props.sidebarType ? props.sidebarType : SIDEBAR_TYPES[0]);

  const [isSidebarOpen, setSidebarOpen] = useState(props.isSidebarOpen ? props.isSidebarOpen : false); //for both drawer and mini-sidebar

  const [headerType, setHeaderType] = useState(props.headerType ? props.headerType : HEADER_TYPES[0]);
  const [showHeader, setShowHeader] = useState(props.showHeader ? props.showHeader : true);
  const [showFooter, setShowFooter] = useState(props.showFooter ? props.showFooter : true);

  const [sidebarWidth, setSidebarWidth] = useState(props.sidebarWidth ? props.sidebarWidth : 304);

  const [isSidebarFixed, setSidebarFixed] = useState(props.isSidebarFixed ? props.isSidebarFixed : true);

  sidebarFixed = props.isSidebarFixed ? props.isSidebarFixed : true;
  headerFixed = props.headerType ? props.headerType : HEADER_TYPES[0];

  useEffect(() => {
    if (layoutStyle === LAYOUT_STYLES[0]) {
      document.body.classList.remove('layout-type-boxed', 'layout-type-framed');
      document.body.classList.add('layout-type-fullwidth');
    } else if (layoutStyle === LAYOUT_STYLES[1]) {
      document.body.classList.remove('layout-type-fullwidth', 'layout-type-framed');
      document.body.classList.add('layout-type-boxed');
    } else if (layoutStyle === LAYOUT_STYLES[2]) {
      document.body.classList.remove('layout-type-boxed', 'layout-type-fullwidth');
      document.body.classList.add('layout-type-framed');
    }
  }, [layoutStyle]);

  const layoutContextValue = useMemo(
    () => ({
      layoutStyle,
      setLayoutStyle,
      sidebarType,
      setSidebarType,
      headerType,
      setHeaderType,
      showHeader,
      setShowHeader,
      showFooter,
      setShowFooter,
      isSidebarOpen,
      setSidebarOpen,
      sidebarWidth,
      setSidebarWidth,
      isSidebarFixed,
      setSidebarFixed,
      headerFixed,
      sidebarFixed,
      drawerBreakPoint: props.drawerBreakPoint ? props.drawerBreakPoint : 'md',
      showFooterOpt: props.showFooterOpt ? props.showFooterOpt : true,
      showTourOpt: props.showTourOpt ? props.showTourOpt : false,
    }),
    [
      layoutStyle,
      sidebarType,
      headerType,
      showHeader,
      showFooter,
      isSidebarOpen,
      sidebarWidth,
      isSidebarFixed,
      props.drawerBreakPoint,
      props.showFooterOpt,
      props.showTourOpt,
    ],
  );

  return <LayoutContext.Provider value={layoutContextValue}>{props.children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;
