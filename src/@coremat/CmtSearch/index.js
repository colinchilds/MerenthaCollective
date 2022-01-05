import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './index.style';

const CmtSearch = ({
  border,
  placeholder,
  iconPosition,
  align,
  onlyIcon,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...rest
}) => {
  const classes = useStyles({ align });
  const inputBaseStyle = {
    border: border ? '1px solid' : '0 none',
    ...inputStyle,
  };
  const inputBaseClasses = {
    root: clsx(classes.inputRoot, 'CmtSearch-input-root'),
    input: clsx(classes.inputInput, 'CmtSearch-input'),
  };

  return (
    <div className={clsx(classes.root, 'CmtSearch-root', className)} style={containerStyle}>
      <div className={clsx(classes.search, onlyIcon ? classes.searchIconBox : null)}>
        <div
          className={clsx(classes.searchIcon, 'CmtSearch-icon-wrapper', {
            right: iconPosition === 'right',
          })}
          style={iconStyle}>
          <SearchIcon style={iconStyle} />
        </div>
        <InputBase
          placeholder={placeholder || 'Search…'}
          style={inputBaseStyle}
          classes={inputBaseClasses}
          inputProps={{ 'aria-label': 'search' }}
          {...rest}
        />
      </div>
    </div>
  );
};

export default CmtSearch;

CmtSearch.prototype = {
  border: PropTypes.bool,
  iconPosition: PropTypes.string,
  align: PropTypes.string,
  onlyIcon: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  className: PropTypes.string,
};

CmtSearch.defaultProps = {
  border: true,
  containerStyle: {},
  inputStyle: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    color: 'grey',
    borderRadius: 4,
  },
  iconPosition: 'left',
  onlyIcon: false,
  align: 'left',
  iconStyle: {
    color: 'grey',
  },
};
