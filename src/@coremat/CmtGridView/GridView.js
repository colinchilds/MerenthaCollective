import React, { useEffect, useState } from 'react';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, makeStyles, withWidth } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  gridContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  columnRow: props => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: `-${props.itemPadding / 2}px`,
  }),
  columnCount: props => ({
    flexGrow: 0,
    maxWidth: `${100 / props.displayColumn}%`,
    flexBasis: `${100 / props.displayColumn}%`,
    padding: `${props.itemPadding / 2}px`,
    boxSizing: 'border-box',
  }),
}));

const getColumnCount = (responsive, width, column) => {
  if (responsive) {
    if (width === 'xs') {
      return responsive.xs || column;
    } else if (width === 'sm') {
      return responsive.sm || responsive.xs || column;
    } else if (width === 'md') {
      return responsive.md || responsive.sm || responsive.xs || column;
    } else if (width === 'lg') {
      return responsive.lg || responsive.md || responsive.sm || responsive.xs || column;
    } else if (width === 'xl') {
      return responsive.xl || responsive.lg || responsive.md || responsive.sm || responsive.xs || column;
    }
  } else {
    return column;
  }
};

const getEmptyContainer = ListEmptyComponent => {
  if (ListEmptyComponent) {
    return React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : <ListEmptyComponent />;
  }
  return null;
};

const getFooterContainer = ListFooterComponent => {
  if (ListFooterComponent) {
    return React.isValidElement(ListFooterComponent) ? ListFooterComponent : <ListFooterComponent />;
  }
  return null;
};

const GridView = ({
  width,
  column,
  responsive,
  itemPadding,
  renderRow,
  onEndReached,
  data,
  ListFooterComponent,
  ListEmptyComponent,
  ...rest
}) => {
  const [displayColumn, setDisplayColumn] = useState(column);
  const classes = useStyles({ displayColumn, itemPadding });

  if (!onEndReached) {
    onEndReached = () => {};
  }

  useEffect(() => {
    setDisplayColumn(getColumnCount(responsive, width, column));
  }, [width, column, responsive]);

  useBottomScrollListener(onEndReached, 200);

  return (
    <div className={classes.gridContainer}>
      <Box className={clsx(classes.columnRow, 'Cmt-column-row')} {...rest}>
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className={clsx(classes.columnCount, 'Cmt-column-count')}>
                {renderRow(item, index)}
              </div>
            ))
          : null}
      </Box>
      {data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null}
      {getFooterContainer(ListFooterComponent)}
    </div>
  );
};

export default withWidth()(GridView);
GridView.propTypes = {
  column: PropTypes.number,
  responsive: PropTypes.object,
  itemPadding: PropTypes.number,
  ListEmptyComponent: PropTypes.element,
  ListFooterComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
  renderRow: PropTypes.func,
};
GridView.defaultProps = {
  data: [],
  itemPadding: 0,
  column: 3,
};
