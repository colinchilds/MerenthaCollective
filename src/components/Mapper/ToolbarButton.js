import React, { forwardRef } from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/**
 * Reusable toolbar button component with icon, tooltip, and various states.
 * Designed for a Google Sheets-style compact toolbar.
 */
const ToolbarButton = forwardRef(
  (
    { icon, tooltip, onClick, disabled = false, active = false, hasDropdown = false, swatchColor = null, size = 'small' },
    ref,
  ) => {
    return (
      <Tooltip title={tooltip} arrow placement="bottom">
        <span ref={ref}>
          <IconButton
            onClick={onClick}
            disabled={disabled}
            size={size}
            sx={{
              width: 32,
              height: 32,
              padding: '4px',
              borderRadius: '4px',
              border: '1px solid transparent',
              backgroundColor: active ? '#e8f0fe' : 'transparent',
              borderColor: active ? '#1a73e8' : 'transparent',
              color: active ? '#1a73e8' : '#5f6368',
              position: 'relative',

              '&:hover': {
                backgroundColor: active ? '#d2e3fc' : '#f1f3f4',
                borderColor: active ? '#1a73e8' : '#dadce0',
                color: active ? '#1a73e8' : '#202124',
              },

              '&.Mui-disabled': {
                color: '#bdc1c6',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              },
            }}>
            {icon}

            {/* Color swatch overlay at bottom of button */}
            {swatchColor && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 14,
                  height: 4,
                  borderRadius: '1px',
                  backgroundColor: swatchColor,
                  border: '1px solid rgba(0,0,0,0.2)',
                }}
              />
            )}

            {/* Dropdown arrow indicator */}
            {hasDropdown && (
              <ArrowDropDownIcon
                sx={{
                  position: 'absolute',
                  right: -2,
                  bottom: -2,
                  fontSize: 12,
                  color: 'inherit',
                }}
              />
            )}
          </IconButton>
        </span>
      </Tooltip>
    );
  },
);

export default ToolbarButton;
