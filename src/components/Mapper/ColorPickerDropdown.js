import React, { useState } from 'react';
import { Box, Popover, Button, Divider } from '@mui/material';
import { SketchPicker } from 'react-color';
import ToolbarButton from './ToolbarButton';

// Preset color palette (4 rows x 8 columns)
const PRESET_COLORS = [
  // Row 1: Grays
  '#ffffff', '#f0f0f0', '#d0d0d0', '#a0a0a0', '#707070', '#404040', '#202020', '#000000',
  // Row 2: Pastels
  '#ffcccc', '#ffe6cc', '#ffffcc', '#ccffcc', '#ccffff', '#cce6ff', '#e6ccff', '#ffccff',
  // Row 3: Saturated
  '#ff0000', '#ff8000', '#ffff00', '#00ff00', '#00ffff', '#0080ff', '#8000ff', '#ff00ff',
  // Row 4: Dark
  '#990000', '#994d00', '#999900', '#009900', '#009999', '#004d99', '#4d0099', '#990099',
];

/**
 * Color picker dropdown with preset colors and full picker option.
 */
const ColorPickerDropdown = ({
  icon,
  tooltip,
  color,
  onChange,
  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFullPicker, setShowFullPicker] = useState(false);

  const handleClick = (event) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
      setShowFullPicker(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowFullPicker(false);
  };

  const handlePresetClick = (presetColor) => {
    onChange(presetColor);
    handleClose();
  };

  const handleFullPickerChange = (colorResult) => {
    onChange(colorResult.hex);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ToolbarButton
        icon={icon}
        tooltip={tooltip}
        onClick={handleClick}
        disabled={disabled}
        hasDropdown
        swatchColor={color}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: { p: 1, minWidth: showFullPicker ? 'auto' : 200 }
        }}
      >
        {!showFullPicker ? (
          <Box>
            {/* Preset color grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gap: 0.5,
                mb: 1,
              }}
            >
              {PRESET_COLORS.map((presetColor, index) => (
                <Box
                  key={index}
                  onClick={() => handlePresetClick(presetColor)}
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: presetColor,
                    border: presetColor === color
                      ? '2px solid #1a73e8'
                      : '1px solid rgba(0,0,0,0.2)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 4px rgba(0,0,0,0.3)',
                    },
                  }}
                />
              ))}
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* More colors button */}
            <Button
              size="small"
              fullWidth
              onClick={() => setShowFullPicker(true)}
              sx={{ textTransform: 'none', color: '#5f6368' }}
            >
              More colors...
            </Button>
          </Box>
        ) : (
          <Box>
            <SketchPicker
              color={color}
              onChange={handleFullPickerChange}
              disableAlpha
            />
            <Button
              size="small"
              fullWidth
              onClick={() => setShowFullPicker(false)}
              sx={{ mt: 1, textTransform: 'none', color: '#5f6368' }}
            >
              Back to presets
            </Button>
          </Box>
        )}
      </Popover>
    </>
  );
};

export default ColorPickerDropdown;
