import React from 'react';

import PropTypes from 'prop-types';

import ListFooter from './ListFooter';
import ListView from './ListView';

const CmtList = ({ footerProps, ...props }) => {
  return (
    <ListView
      {...props}
      ListFooterComponent={footerProps && <ListFooter loading={footerProps.loading} footerText={footerProps.footerText} />}
    />
  );
};

export default CmtList;

CmtList.propTypes = {
  ListEmptyComponent: PropTypes.element,
  ListFooterComponent: PropTypes.element,
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
  footerProps: PropTypes.object,
};
CmtList.defaultProps = {
  data: [],
};
