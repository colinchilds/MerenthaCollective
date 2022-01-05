import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appSidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: props => props.sidebarWidth,
    height: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1103,
  },
  appSidebarContent: {
    height: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundColor: props => props.sidebarTheme.bgColor,
    color: props => props.sidebarTheme.textColor,
    overflow: 'hidden',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
    '.Cmt-miniLayout &': {
      width: props => props.miniSidebarWidth,
      '&:hover': {
        width: props => props.sidebarWidth,
      },
    },
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
  },
  actionSidebarWrapper: {
    display: 'flex',
    width: props => props.sidebarWidth + props.actionSidebarWidth,
    transition: 'all 0.3s ease',

    '& .actionSidebar': {
      width: props => props.actionSidebarWidth,
    },
  },
  overlayRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
