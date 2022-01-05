import React from 'react';

const CmtImage = ({ alt, ...restProps }) => {
  const altValue = alt ? alt : '';
  return <img alt={altValue} {...restProps} />;
};

export default CmtImage;
