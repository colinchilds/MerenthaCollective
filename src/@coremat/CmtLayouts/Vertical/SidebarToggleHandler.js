import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LayoutContext from '../LayoutContext';

const SidebarToggleHandler = ({ children, ...restProps }) => {
  const { isSidebarOpen, setSidebarOpen } = useContext(LayoutContext);

  return (
    <IconButton className="Cmt-toggle-menu" onClick={() => setSidebarOpen(!isSidebarOpen)} {...restProps} size="large">
      {children || <MenuIcon />}
    </IconButton>
  );
};

export default SidebarToggleHandler;
