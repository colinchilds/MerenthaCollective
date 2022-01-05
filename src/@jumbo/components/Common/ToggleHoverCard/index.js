import React, { useState } from 'react';
import clsx from 'clsx';

import { Typography, useTheme } from '@material-ui/core';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

const ToggleHoverCard = ({ title, hoverAction, isHovered, toggleAction, isToggled, children, ...rest }) => {
  const [actionToggled, setActionToggled] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    if (isHovered) isHovered(true);
  };
  const handleMouseLeave = () => {
    if (isHovered) isHovered(false);
  };

  const handleToggleClick = () => {
    if (isToggled) isToggled(!actionToggled);
    setActionToggled(!actionToggled);
  };

  return (
    <CmtCard {...rest}>
      <CmtCardHeader
        title={title}
        separator={{
          color: theme.palette.borderColor.main,
        }}>
        {hoverAction && (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {typeof hoverAction === 'string' ? <Typography>{hoverAction}</Typography> : hoverAction}
          </div>
        )}
        {toggleAction && (
          <div className={clsx('pointer', 'ml-2')} onClick={handleToggleClick}>
            {typeof toggleAction === 'string' ? <Typography>{toggleAction}</Typography> : toggleAction}
          </div>
        )}
      </CmtCardHeader>
      <CmtCardContent>{children}</CmtCardContent>
    </CmtCard>
  );
};

export default ToggleHoverCard;
