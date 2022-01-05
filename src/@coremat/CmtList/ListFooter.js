import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { CircularProgress, makeStyles } from '@material-ui/core';
import SidebarThemeContext from '../CmtLayouts/SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles(theme => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
  listFooterLoaderRoot: {
    width: '100%',
    display: 'flex',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    padding: 8,
    borderTop: props => `1px solid ${props.sidebarTheme.borderColor}`,
    boxSizing: 'border-box',
  },
}));

const ListFooter = ({ loading, footerText }) => {
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });

  return loading ? (
    <div className={classes.listFooterLoaderRoot}>
      <CircularProgress size={16} />
      <span className="ml-2">Loading...</span>
    </div>
  ) : (
    <div className={clsx(classes.listFooterRoot, 'Cmt-list-footer')}>
      <p>{footerText}</p>
    </div>
  );
};

ListFooter.prototype = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

ListFooter.defaultProps = {
  loading: false,
};

export default ListFooter;
