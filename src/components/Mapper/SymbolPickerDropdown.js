import React, { useState } from 'react';
import { Box, Popover, TextField, Typography, Divider } from '@mui/material';
import ToolbarButton from './ToolbarButton';

// Preset symbols for MUD mapping
const PRESET_SYMBOLS = [
  // Row 1: Common markers
  '+', '-', '*', 'X', '?', '!', '@', '#',
  // Row 2: Directional/special
  '^', 'v', '<', '>', 'S', 'T', 'E', 'D',
];

/**
 * Symbol picker dropdown with preset symbols and custom input.
 */
const SymbolPickerDropdown = ({
  icon,
  tooltip,
  symbol,
  onChange,
  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [customValue, setCustomValue] = useState('');

  const handleClick = (event) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
      setCustomValue(symbol || '');
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePresetClick = (presetSymbol) => {
    onChange(presetSymbol);
    handleClose();
  };

  const handleCustomChange = (event) => {
    const value = event.target.value.slice(0, 1); // Only allow 1 character
    setCustomValue(value);
    onChange(value);
  };

  const handleClear = () => {
    onChange('');
    handleClose();
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
          sx: { p: 1.5, minWidth: 200 }
        }}
      >
        <Typography variant="caption" color="textSecondary" sx={{ mb: 1, display: 'block' }}>
          Common Symbols
        </Typography>

        {/* Preset symbol grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: 0.5,
            mb: 1.5,
          }}
        >
          {PRESET_SYMBOLS.map((presetSymbol, index) => (
            <Box
              key={index}
              onClick={() => handlePresetClick(presetSymbol)}
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: symbol === presetSymbol ? '#e8f0fe' : '#f5f5f5',
                border: symbol === presetSymbol
                  ? '2px solid #1a73e8'
                  : '1px solid #dadce0',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#e8f0fe',
                  borderColor: '#1a73e8',
                },
              }}
            >
              {presetSymbol}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Custom input */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Custom:
          </Typography>
          <TextField
            size="small"
            value={customValue}
            onChange={handleCustomChange}
            placeholder="A"
            inputProps={{
              maxLength: 1,
              style: { textAlign: 'center', width: 30, padding: '4px 8px' }
            }}
          />
          <Typography
            variant="caption"
            color="primary"
            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            onClick={handleClear}
          >
            Clear
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default SymbolPickerDropdown;
