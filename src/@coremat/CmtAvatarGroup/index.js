import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { AvatarGroup } from '@material-ui/lab';
import { ClickAwayListener, makeStyles, Tooltip } from '@material-ui/core';

import CmtAvatar from '../CmtAvatar';

const useStyles = makeStyles(theme => ({
  rootAvatarGroup: props => ({
    '& .MuiAvatar-root': {
      borderColor: props.avatarStyle.outlineColor,
      borderWidth: props.avatarStyle.outlineThickness,
      marginLeft: -props.spacing,
      transition: 'all 0.30s ease',
      '&:first-child': {
        marginLeft: 0,
      },
      '&:hover': {
        borderColor: props.avatarActiveStyle.outlineColor
          ? props.avatarActiveStyle.outlineColor
          : theme.palette.primary.main,
        borderWidth: props.avatarActiveStyle.outlineThickness,
        boxShadow: `rgba(0,0,0,0.2) 0px 2px ${props.avatarActiveStyle.elevation}px -1px`,
        zIndex: `${props.totalRecords} !important`,
      },
    },
    '&:hover .Cmt-hoverEffect': {
      marginLeft: 0,
    },
  }),
}));

const getPlaceholderChar = (str, phCharLength) => {
  if (str && phCharLength > 0) {
    return str.substr(0, phCharLength).toUpperCase();
  }
};

const CmtAvatarGroup = ({
  items,
  max,
  srcKey,
  titleKey,
  phCharLength,
  avatarSize,
  onItemClick,
  onMoreClick,
  spacing,
  expandable,
  renderItemSummary,
  renderMore,
  moreVisibleOn,
  itemStyle,
  activeItemStyle,
  tooltipProps,
  ...rest
}) => {
  const avatarStyle = () => ({
    outlineColor: '#fafafa',
    outlineThickness: 2,
    ...itemStyle,
  });

  const avatarActiveStyle = () => ({
    outlineColor: '',
    outlineThickness: 2,
    elevation: 3,
    ...activeItemStyle,
  });

  const totalRecords = items.length;

  const visibleItems = items.slice(0, max < totalRecords ? max - 1 : max);
  const restItems = max < totalRecords ? items.slice(max - 1, totalRecords) : [];

  const [openMoreTooltip, setOpenMoreTooltip] = useState(false);
  const [renderedMoreItems, setRenderedMoreItems] = useState(
    moreVisibleOn && moreVisibleOn !== 'click' && restItems.length && renderMore ? renderMore(restItems) : '',
  );

  const ttProps = moreVisibleOn === 'click' ? { open: openMoreTooltip } : {};

  useEffect(() => {
    if (openMoreTooltip) {
      setRenderedMoreItems(renderMore(restItems));
    } else if (moreVisibleOn === 'click') {
      setRenderedMoreItems('');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMoreTooltip]);

  const classes = useStyles({
    spacing,
    avatarStyle,
    avatarActiveStyle,
    totalRecords,
  });

  const handleItemClick = (item, index, event) => {
    if (onItemClick) onItemClick(item, index, event);
  };

  return (
    <AvatarGroup className={clsx(classes.rootAvatarGroup, 'Cmt-root-avatar-group')} max={max} {...rest}>
      {visibleItems.map((item, index) => {
        return renderItemSummary ? (
          <Tooltip title={renderItemSummary(item, index)} key={index} {...tooltipProps}>
            <CmtAvatar
              className={expandable ? 'Cmt-hoverEffect' : ''}
              alt={item[titleKey]}
              src={item[srcKey]}
              size={avatarSize}
              onClick={event => handleItemClick(item, index, event)}
              style={{ cursor: 'pointer', zIndex: index }}>
              {getPlaceholderChar(item[titleKey], phCharLength)}
            </CmtAvatar>
          </Tooltip>
        ) : (
          <CmtAvatar
            key={index}
            className={expandable ? 'Cmt-hoverEffect' : ''}
            alt={item[titleKey]}
            src={item[srcKey]}
            size={avatarSize}
            onClick={event => handleItemClick(item, index, event)}
            style={{ cursor: 'pointer', zIndex: index }}>
            {getPlaceholderChar(item[titleKey], phCharLength)}
          </CmtAvatar>
        );
      })}

      {max < totalRecords && (
        <Tooltip title={renderedMoreItems} {...ttProps}>
          <CmtAvatar
            className={clsx('Cmt-avatar-more', expandable ? 'Cmt-hoverEffect' : '')}
            alt={restItems.length.toString()}
            size={avatarSize}
            style={{ cursor: 'pointer', zIndex: max }}
            onClick={event => {
              if ((onMoreClick && typeof onMoreClick) === 'function') onMoreClick(event);

              if (moreVisibleOn === 'click') {
                setOpenMoreTooltip(!openMoreTooltip);
              }
            }}>
            <ClickAwayListener onClickAway={() => setOpenMoreTooltip(false)}>
              <div>+{restItems.length}</div>
            </ClickAwayListener>
          </CmtAvatar>
        </Tooltip>
      )}
    </AvatarGroup>
  );
};

CmtAvatarGroup.prototype = {
  items: PropTypes.array.isRequired,
  max: PropTypes.number,
  spacing: PropTypes.number,
  srcKey: PropTypes.string,
  titleKey: PropTypes.string,
  phCharLength: PropTypes.number,
  avatarSize: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.number]),
  onItemClick: PropTypes.func,
  onMoreClick: PropTypes.func,
  expandable: PropTypes.bool,
  renderItemSummary: PropTypes.func,
  renderMore: PropTypes.func,
  moreVisibleOn: PropTypes.oneOf(['hover', 'click']),
  itemStyle: PropTypes.object,
  activeItemStyle: PropTypes.object,
  tooltipProps: PropTypes.object,
};

CmtAvatarGroup.defaultProps = {
  items: [],
  max: 5,
  spacing: 8,
  srcKey: 'src',
  titleKey: 'title',
  phCharLength: 1,
  avatarSize: 'medium',
  expandable: false,
  moreVisibleOn: 'hover',
  itemStyle: { outlineColor: '#fafafa', outlineThickness: 2 },
  activeItemStyle: { outlineColor: '', outlineThickness: 2, elevation: 1 },
};

export default CmtAvatarGroup;
