import * as React from 'react';
import { Typography } from '@mui/material';

const Code = ({ children }) => {
  return (
    <Typography
      component="code"
      sx={{
        fontWeight: 'bold',
        px: 0.5,
        borderRadius: '4px',
        fontFamily: 'monospace',
        backgroundColor: 'action.selected',
        color: 'text.primary',
      }}>
      {children}
    </Typography>
  );
};

export default Code;
