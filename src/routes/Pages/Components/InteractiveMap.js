import React from 'react';
import Button from '@mui/material/Button';
import { hasMapData } from 'data/Maps';

const buttonStyle = {
  minWidth: 20,
  textTransform: 'none',
};

/**
 * MapLink - Renders a link to the map viewer page
 * (No longer uses modals - kept the filename for compatibility)
 *
 * Props:
 * - name: string - The display name of the map
 * - url: string - The URL to the static image (used for static maps)
 * - interactiveMapName: string|null - The name of the interactive map in the registry
 */
export default function InteractiveMap({ name, url, interactiveMapName }) {
  // Check if interactive map is available
  const hasInteractive = interactiveMapName && hasMapData(interactiveMapName);

  // Build the appropriate URL
  const mapUrl = hasInteractive
    ? `#/map/${interactiveMapName}`
    : `#/map/static?url=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}`;

  return (
    <Button href={mapUrl} sx={buttonStyle}>
      {name}
    </Button>
  );
}
