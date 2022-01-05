import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const CmtTitle = ({ content, ...titleProps }) => {
  if (!content) return null;

  return isValidElement(content) ? content : <Typography {...titleProps}>{content}</Typography>;
};

CmtTitle.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

CmtTitle.defaultProps = {
  content: '',
  variant: 'h2',
  component: 'div',
  className: null,
};

export default CmtTitle;
