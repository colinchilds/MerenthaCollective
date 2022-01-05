import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box } from '@material-ui/core';

import useStyles from './index.style';

const getFillBarStyleAndPointerColors = (containedColor, gradientDirection) => {
  let fillBarStyleValue, pointerColorValue;
  const totalColors = containedColor.length;
  if (Array.isArray(containedColor) && totalColors > 0) {
    if (gradientDirection && totalColors === 1) {
      const [firstColor] = containedColor[0].split(' ');
      fillBarStyleValue = {
        backgroundColor: firstColor,
      };
      pointerColorValue = firstColor;
    } else {
      const [firstColor] = containedColor[0].split(' ');
      const [lastColor] = containedColor[containedColor.length - 1].split(' ');
      fillBarStyleValue = {
        backgroundColor: firstColor,
        backgroundImage: `linear-gradient(${gradientDirection}, ${containedColor.join(', ')})`,
      };
      pointerColorValue = lastColor;
    }
  } else {
    fillBarStyleValue = {
      backgroundColor: containedColor,
    };
    pointerColorValue = containedColor;
  }

  return [fillBarStyleValue, pointerColorValue];
};

const topPositions = ['top-left', 'top-right', 'top-center'];
const bottomPositions = ['bottom-left', 'bottom-right', 'bottom-center'];
const positions = [...topPositions, ...bottomPositions, 'right', 'left'];
const CmtProgressBar = ({
  label,
  labelPos,
  valuePos,
  value,
  total,
  renderValue,
  containedColor,
  hideValue,
  gradientDirection,
  onlyContained,
  emptyColor,
  thickness,
  pointer,
  pointerSize,
  ...restProps
}) => {
  const barWidth = (value * 100) / total;

  const [pointerColor, setPointerColor] = useState(containedColor.toString());
  const [fillBarStyle, setFillBarStyle] = useState({
    width: `${Math.round(barWidth)}%`,
    backgroundColor: containedColor.toString(),
  });

  useEffect(() => {
    const [newFillBarStyleValue, pointerColorValue] = getFillBarStyleAndPointerColors(containedColor, gradientDirection);
    setFillBarStyle({
      ...fillBarStyle,
      ...newFillBarStyleValue,
    });
    setPointerColor(pointerColorValue);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containedColor, gradientDirection]);

  const classes = useStyles({
    thickness,
    pointer,
    pointerColor,
    pointerSize,
    valuePos,
  });

  const renderContent = (component = 'span') => {
    return hideValue ? null : (
      <Box
        component={component}
        ml={valuePos === 'right' ? 2 : 0}
        mr={valuePos === 'left' ? 2 : 0}
        className={clsx(classes.textContainer, 'Cmt-text-container', {
          [classes.textContainerRight]: valuePos === 'top-right' || valuePos === 'bottom-right',
          [classes.textContainerCenter]: valuePos === 'top-center' || valuePos === 'bottom-center',
        })}>
        {(renderValue && renderValue(value, total)) || value}
      </Box>
    );
  };

  const renderLabel = () => {
    return label ? (
      <Box
        ml={labelPos === 'right' ? 2 : 0}
        mr={labelPos === 'left' ? 2 : 0}
        className={clsx(classes.labelContainer, 'Cmt-label-container', {
          [classes.labelContainerRight]: labelPos === 'top-right' || labelPos === 'bottom-right',
          [classes.labelContainerCenter]: labelPos === 'top-center' || labelPos === 'bottom-center',
        })}>
        {label}
      </Box>
    ) : null;
  };

  return (
    <Box className={clsx(classes.root, 'CmtProgressBar-root')} {...restProps}>
      {topPositions.includes(labelPos) && <Box mb={2}>{renderLabel()}</Box>}
      {topPositions.includes(valuePos) && <Box mb={2}>{renderContent('div')}</Box>}

      <div className={classes.flexRoot}>
        {labelPos === 'left' && renderLabel()}
        {valuePos === 'left' && renderContent()}

        {onlyContained ? (
          <div className={clsx(classes.fillStyle, 'Cmt-fill-progress')} style={fillBarStyle} />
        ) : (
          <div className={classes.barContainer} style={{ backgroundColor: emptyColor, flex: 1 }}>
            <div className={clsx(classes.fillStyle, 'Cmt-fill-progress')} style={fillBarStyle} />
          </div>
        )}

        {valuePos === 'right' && renderContent()}
        {labelPos === 'right' && renderLabel()}
      </div>

      {bottomPositions.includes(valuePos) && <Box mt={2}>{renderContent('div')}</Box>}
      {bottomPositions.includes(labelPos) && <Box mt={2}>{renderLabel()}</Box>}
    </Box>
  );
};

CmtProgressBar.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelPos: PropTypes.oneOf(positions),
  total: PropTypes.number,
  value: PropTypes.number.isRequired,
  valuePos: PropTypes.oneOf(positions),
  renderValue: PropTypes.func,
  containedColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  emptyColor: PropTypes.string,
  thickness: PropTypes.number,
  pointer: PropTypes.bool,
  pointerSize: PropTypes.number,
  onlyContained: PropTypes.bool,
  hideValue: PropTypes.bool,
  gradientDirection: PropTypes.string,
};

CmtProgressBar.defaultProps = {
  labelPos: 'top-left',
  total: 100,
  valuePos: 'right',
  containedColor: '#1a90ff',
  gradientDirection: 'to right',
  emptyColor: '#e9ecef',
  thickness: 4,
  pointer: false,
  pointerSize: 8,
  onlyContained: false,
  hideValue: false,
};

export default React.memo(CmtProgressBar);
