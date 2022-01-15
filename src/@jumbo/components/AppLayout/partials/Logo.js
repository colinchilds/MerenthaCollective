import React from 'react';
import Hidden from '@mui/material/Hidden';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CmtImage from '../../../../@coremat/CmtImage';

const Logo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logo-white.png' : '/images/logo.png';
  const logoSymbolUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/logo-symbol.png';

  return (
    <Box className="pointer" {...props}>
      <Hidden smDown>
        <NavLink to="/">
          <CmtImage src={logoUrl} alt="logo" />
        </NavLink>
      </Hidden>
      <Hidden smUp>
        <NavLink to="/">
          <CmtImage src={logoSymbolUrl} alt="logo" />
        </NavLink>
      </Hidden>
    </Box>
  );
};

export default Logo;
