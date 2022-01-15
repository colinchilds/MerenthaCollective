import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { create } from 'jss';
import { useTheme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';

function FramedWindow(props) {
  const { children, document } = props;

  const { direction } = useTheme();
  React.useEffect(() => {
    document.body.dir = direction;
  }, [document, direction]);

  const { jss, sheetsManager } = React.useMemo(() => {
    return {
      jss: create({
        plugins: [...jssPreset().plugins],
        insertionPoint: document.head,
      }),
      sheetsManager: new Map(),
    };
  }, [document]);

  const getWindow = React.useCallback(() => document.defaultView, [document]);

  return (
    <StylesProvider jss={jss} sheetsManager={sheetsManager}>
      {React.cloneElement(children, {
        window: getWindow,
      })}
    </StylesProvider>
  );
}

FramedWindow.propTypes = {
  children: PropTypes.node,
  document: PropTypes.object.isRequired,
};

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundColor: theme.palette.background.default,
    height: 300,
    width: '100%',
    border: 'none',
    boxShadow: theme.shadows[1],
  },
}));

const IframeWindow = props => {
  const { children, title, ...other } = props;
  const classes = useStyles();
  /**
   * @type {import('react').Ref<HTMLIFrameElement>}
   */
  const frameRef = React.useRef(null);

  // If we portal content into the iframe before the load event then that content
  // is dropped in firefox.
  const [iframeLoaded, onLoad] = React.useReducer(() => true, false);

  React.useEffect(() => {
    const document = frameRef.current.contentDocument;

    if (document != null && document.readyState === 'complete' && !iframeLoaded) {
      onLoad();
    }
  }, [iframeLoaded]);

  const document = frameRef.current ? frameRef.current.contentDocument : null;

  return (
    <React.Fragment>
      <iframe className={classes.frame} onLoad={onLoad} ref={frameRef} title={title} {...other} />
      {iframeLoaded !== false
        ? ReactDOM.createPortal(<FramedWindow document={document}>{children}</FramedWindow>, document.body)
        : null}
    </React.Fragment>
  );
};

export default IframeWindow;
