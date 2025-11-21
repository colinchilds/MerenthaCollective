import React from 'react';
import { Chip } from '@mui/material';

const ZoneAttributes = ({ zone }) => {
  return (
    <>
      {zone.aoe === 'yes' && <Chip label="AOE" size="small" color="warning" variant="outlined" />}
      {zone.aoe === 'some' && <Chip label="Some AOE" size="small" color="warning" variant="outlined" />}
      {zone.strong === 'yes' && <Chip label="Strong Mobs" size="small" color="error" variant="outlined" />}
      {zone.strong === 'some' && <Chip label="Some Strong" size="small" color="error" variant="outlined" />}
      {zone.elite === 'yes' && <Chip label="Elite" size="small" color="secondary" variant="outlined" />}
      {zone.elite === 'some' && <Chip label="Some Elite" size="small" color="secondary" variant="outlined" />}
      {zone.legendary === 'yes' && (
        <Chip label="Legendary" size="small" sx={{ borderColor: 'grey.500', color: 'grey.600' }} variant="outlined" />
      )}
      {zone.legendary === 'some' && (
        <Chip label="Some Legendary" size="small" sx={{ borderColor: 'grey.500', color: 'grey.600' }} variant="outlined" />
      )}
    </>
  );
};

export default ZoneAttributes;
