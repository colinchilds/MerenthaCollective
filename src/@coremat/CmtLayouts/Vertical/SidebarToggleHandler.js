import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LayoutContext from '../LayoutContext';

const SidebarToggleHandler = ({ children, ...restProps }) => {
  const { isSidebarOpen, setSidebarOpen } = useContext(LayoutContext);

  return (
    <IconButton className="Cmt-toggle-menu" onClick={() => setSidebarOpen(!isSidebarOpen)} {...restProps}>
      {children || <MenuIcon />}
    </IconButton>
  );
};

export default SidebarToggleHandler;
