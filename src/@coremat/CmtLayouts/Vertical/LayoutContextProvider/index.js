import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import LayoutContext from '../../LayoutContext';

const LAYOUT_STYLES = ['full-width', 'boxed', 'framed'];
const SIDEBAR_TYPES = ['full', 'drawer', 'mini'];
const HEADER_TYPES = ['fixed', 'static'];

let sidebarFixed = true;
let headerFixed = true;

const LayoutContextProvider = props => {
  const location = useLocation();
  const [layoutStyle, setLayoutStyle] = useState(props.layoutStyle ? props.layoutStyle : LAYOUT_STYLES[0]);

  const [sidebarType, setSidebarType] = useState(props.sidebarType ? props.sidebarType : SIDEBAR_TYPES[0]);

  const [isSidebarOpen, setSidebarOpen] = useState(props.isSidebarOpen ? props.isSidebarOpen : false); //for both drawer and mini-sidebar

  const [headerType, setHeaderType] = useState(props.headerType ? props.headerType : HEADER_TYPES[0]);
  const [showHeader, setShowHeader] = useState(props.showHeader ? props.showHeader : true);
  const [showFooter, setShowFooter] = useState(props.showFooter ? props.showFooter : true);

  const [sidebarWidth, setSidebarWidth] = useState(props.sidebarWidth ? props.sidebarWidth : 304);

  const [isSidebarFixed, setSidebarFixed] = useState(props.isSidebarFixed ? props.isSidebarFixed : true);

  const [miniSidebarWidth, setMiniSidebarWidth] = useState(props.miniSidebarWidth ? props.miniSidebarWidth : 0);
  const [actionSidebarWidth, setActionSidebarWidth] = useState(props.actionSidebarWidth ? props.actionSidebarWidth : 0);

  useEffect(() => {
    sidebarFixed = props.isSidebarFixed ? props.isSidebarFixed : true;
    headerFixed = props.headerType ? props.headerType : HEADER_TYPES[0];

    const params = new URLSearchParams(location.search);
    if (params.get('theme-type')) {
      setLayoutStyle(params.get('layout-style'));
    }
  }, [location.search, props.headerType, props.isSidebarFixed]);

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
      miniSidebarWidth,
      showTourOpt: props.showTourOpt ? props.showTourOpt : false,
      setMiniSidebarWidth,
      actionSidebarWidth,
      setActionSidebarWidth,
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
      miniSidebarWidth,
      actionSidebarWidth,
      props.drawerBreakPoint,
      props.showTourOpt,
    ],
  );

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

  return <LayoutContext.Provider value={layoutContextValue}>{props.children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;
