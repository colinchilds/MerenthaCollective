import React from 'react';

import PropTypes from 'prop-types';

import GridView from './GridView';
import GridFooter from './GridFooter';

const CmtGridView = ({ column, itemPadding, ListEmptyComponent, data, onEndReached, renderRow, footerProps, ...rest }) => {
  return (
    <GridView
      {...{
        column,
        itemPadding,
        ListEmptyComponent,
        data,
        onEndReached,
        renderRow,
      }}
      {...rest}
      ListFooterComponent={footerProps && <GridFooter loading={footerProps.loading} footerText={footerProps.footerText} />}
    />
  );
};

CmtGridView.propTypes = {
  column: PropTypes.number,
  itemPadding: PropTypes.number,
  ListEmptyComponent: PropTypes.element,
  ListFooterComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
  renderRow: PropTypes.func,
  footerProps: PropTypes.object,
};

CmtGridView.defaultProps = {
  itemPadding: 0,
  column: 3,
  data: [],
};

export default CmtGridView;
