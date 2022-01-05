import React from 'react';
import { Box } from '@material-ui/core';
import { linkify } from '../../../utils/commonHelper';

const TextToHtml = ({ content, ...restProps }) => {
  return (
    <Box
      component="p"
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: linkify(content.replace(/(?:\r\n|\r|\n)/g, '<br />')),
      }}
    />
  );
};

export default React.memo(TextToHtml);
