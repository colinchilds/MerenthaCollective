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
        backgroundColor: '#f5f5f5',
      }}>
      {children}
    </Typography>
  );
};

export default Code;
