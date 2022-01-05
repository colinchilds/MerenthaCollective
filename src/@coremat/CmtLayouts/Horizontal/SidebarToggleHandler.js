import React, { useContext, useImperativeHandle } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LayoutContext from '../LayoutContext';

const contentRef = React.createRef();

const SidebarToggleHandler = React.forwardRef(function SidebarToggleHandler(props, ref) {
  const { isSidebarOpen, setSidebarOpen } = useContext(LayoutContext);

  useImperativeHandle(ref, () => ({
    isOpen: isSidebarOpen,
  }));

  return (
    <IconButton className="Cmt-toggle-menu" ref={contentRef} onClick={() => setSidebarOpen(!isSidebarOpen)} {...props}>
      <MenuIcon />
    </IconButton>
  );
});

export default SidebarToggleHandler;
