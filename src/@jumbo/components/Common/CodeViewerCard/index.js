import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import HighlightedCode from './HighlightedCode';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Collapse, IconButton, Snackbar, Tooltip } from '@mui/material';
import CmtCardActions from '../../../../@coremat/CmtCard/CmtCardActions';
import copy from 'clipboard-copy';
import CodeIcon from '@mui/icons-material/Code';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: 'unset',
    marginBottom: 30,
  },
  cardContent: {
    position: 'relative',
    paddingBottom: 0,
  },
  cardContentInner: {
    position: 'relative',
    paddingBottom: 40,
  },
  actionButtons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  collapseStyle: {
    borderBottomRightRadius: theme.components.MuiCard.styleOverrides.root.borderRadius,
    borderBottomLeftRadius: theme.components.MuiCard.styleOverrides.root.borderRadius,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
  },
}));

const CodeViewerCard = ({ code, language, children, ...rest }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(undefined);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCopyClick = async () => {
    await copy(code);
    setSnackbarMessage('The source code has been copied.');
    setSnackbarOpen(true);
  };

  const showCodeLabel = collapsed ? 'Hide the source' : 'Show the source';

  return (
    <CmtCard {...rest} className={classes.card}>
      <CmtCardContent className={classes.cardContent}>
        <Box className={classes.cardContentInner}>
          {children}
          {code && (
            <CmtCardActions className={classes.actionButtons}>
              <Tooltip PopperProps={{ disablePortal: true }} title={showCodeLabel} placement="top">
                <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
                  <CodeIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip PopperProps={{ disablePortal: true }} title={'Copy the source'} placement="top">
                <IconButton size="small" onClick={handleCopyClick}>
                  <FileCopyOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </CmtCardActions>
          )}
        </Box>
      </CmtCardContent>

      <Collapse className={classes.collapseStyle} in={collapsed}>
        <HighlightedCode code={code} language={language} />
      </Collapse>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} message={snackbarMessage} />
    </CmtCard>
  );
};

export default CodeViewerCard;
