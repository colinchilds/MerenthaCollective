import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const CmtSubTitle = ({ content, ...subTitleProps }) => {
  if (!content) return null;

  return isValidElement(content) ? content : <Typography {...subTitleProps}>{content}</Typography>;
};

CmtSubTitle.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

CmtSubTitle.defaultProps = {
  content: '',
  variant: 'subtitle1',
  gutterBottom: true,
};

export default CmtSubTitle;
