import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

const CustomScrollbar = ({ children, ...restProps }) => {
  return <PerfectScrollbar {...restProps}>{children}</PerfectScrollbar>;
};

export default CustomScrollbar;
