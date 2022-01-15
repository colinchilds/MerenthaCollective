import React from 'react';
import { Box } from '@mui/material';
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
