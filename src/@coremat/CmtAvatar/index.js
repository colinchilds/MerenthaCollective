import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Avatar } from '@material-ui/core';
import { componentColors } from '../CmtHelpers/JssHelper';
import useStyles from './index.style';

const colorOptions = [...componentColors, 'random'];

const getRandomColor = () => {
  return colorOptions[Math.floor(Math.random() * 11)];
};

const CmtAvatar = React.forwardRef(({ src, alt, className, color, size, phCharLength, children, ...rest }, ref) => {
  const classes = useStyles({ size: typeof size === 'number' ? size : 0 });
  const colorClass = color === 'random' ? classes[getRandomColor()] : classes[color];
  const sizeClass = typeof size === 'number' ? classes.customSize : classes[size];

  const classNames = clsx(classes.root, colorClass, 'Cmt-avatar-size', sizeClass, className && className);

  const placeHolderChar = alt && phCharLength > 0 ? alt.substr(0, phCharLength).toUpperCase() : null;

  return (
    <Avatar ref={ref} className={classNames} src={src} alt={alt} {...rest}>
      {!src && !children && alt ? placeHolderChar : children}
    </Avatar>
  );
});

CmtAvatar.propTypes = {
  color: PropTypes.oneOf(colorOptions),
  phCharLength: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.number]),
};

CmtAvatar.defaultProps = {
  color: 'grey',
  phCharLength: 1,
  size: 'medium',
};

export default CmtAvatar;
