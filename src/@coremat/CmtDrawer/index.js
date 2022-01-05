import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Drawer, makeStyles } from '@material-ui/core';

import { getBackgroundStyle, getOverLayStyle } from '../CmtHelpers/JssHelper';

const useStyles = makeStyles(() => ({
  drawerContainer: {
    width: '100%',
    height: '100%',
  },
  drawerContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
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

const CmtDrawer = ({ backgroundColor, backgroundImage, gradientDirection, children, overlay, ...rest }) => {
  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle(overlay);
  const classes = useStyles();

  return (
    <Drawer {...rest}>
      <div className={clsx(classes.drawerContainer, 'Cmt-Drawer-container')} style={backgroundStyles}>
        <div className={clsx(classes.drawerContent, 'Cmt-Drawer-content')}>{children}</div>
        {overlay.colors && <div className={clsx(classes.overlayRoot, 'Cmt-Drawer-overlay')} style={overlayStyles} />}
      </div>
    </Drawer>
  );
};

CmtDrawer.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  overlay: PropTypes.object,
};

CmtDrawer.defaultProps = {
  overlay: { colors: '', opacity: 0, direction: '' },
};

export default React.memo(CmtDrawer);
