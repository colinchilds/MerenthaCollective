import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Popover,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Divider,
  Slider,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ToolbarButton from './ToolbarButton';

const FONT_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36];
const FONT_FAMILIES = [
  { value: 'monospace', label: 'Monospace' },
  { value: 'sans-serif', label: 'Sans-serif' },
  { value: 'serif', label: 'Serif' },
];

/**
 * Text picker dropdown with text input, font size, font family, and style options.
 * For rooms: single text input
 * For connections: from/to label inputs + orientation toggle
 */
const TextPickerDropdown = ({
  icon,
  tooltip,
  // Room text (single field)
  text = '',
  // Connection labels (from/to fields)
  fromLabel = '',
  toLabel = '',
  labelOrientation = 'along',
  fromLabelPosition = 0.15,
  toLabelPosition = 0.85,
  // Shared font properties
  fontSize = 24,
  fontFamily = 'monospace',
  fontBold = false,
  fontItalic = false,
  // Whether this is a connection (show from/to UI) or room (show single text UI)
  isConnection = false,
  onChange,
  disabled = false,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // Room text state
  const [localText, setLocalText] = useState(text);
  // Connection label state
  const [localFromLabel, setLocalFromLabel] = useState(fromLabel);
  const [localToLabel, setLocalToLabel] = useState(toLabel);
  const [localLabelOrientation, setLocalLabelOrientation] = useState(labelOrientation);
  const [localFromLabelPosition, setLocalFromLabelPosition] = useState(fromLabelPosition);
  const [localToLabelPosition, setLocalToLabelPosition] = useState(toLabelPosition);
  // Shared font state
  const [localFontSize, setLocalFontSize] = useState(fontSize);
  const [localFontFamily, setLocalFontFamily] = useState(fontFamily);
  const [localFontBold, setLocalFontBold] = useState(fontBold);
  const [localFontItalic, setLocalFontItalic] = useState(fontItalic);
  const textFieldRef = useRef(null);
  const buttonRef = useRef(null);

  // Sync local state when props change (new selection)
  useEffect(() => {
    setLocalText(text);
    setLocalFromLabel(fromLabel);
    setLocalToLabel(toLabel);
    setLocalLabelOrientation(labelOrientation);
    setLocalFromLabelPosition(fromLabelPosition);
    setLocalToLabelPosition(toLabelPosition);
    setLocalFontSize(fontSize);
    setLocalFontFamily(fontFamily);
    setLocalFontBold(fontBold);
    setLocalFontItalic(fontItalic);
  }, [
    text,
    fromLabel,
    toLabel,
    labelOrientation,
    fromLabelPosition,
    toLabelPosition,
    fontSize,
    fontFamily,
    fontBold,
    fontItalic,
  ]);

  // Handle controlled open state (e.g., from keyboard shortcut)
  useEffect(() => {
    if (controlledOpen && !disabled && buttonRef.current) {
      setAnchorEl(buttonRef.current);
    }
  }, [controlledOpen, disabled]);

  const handleClick = (event) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
      if (onOpenChange) {
        onOpenChange(true);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  // For rooms: (text, fontSize, fontFamily, fontBold, fontItalic)
  // For connections: (fromLabel, toLabel, labelOrientation, fromLabelPos, toLabelPos, fontSize, fontFamily, fontBold, fontItalic)
  const triggerOnChange = (
    newText,
    newFromLabel,
    newToLabel,
    newOrientation,
    newFromLabelPos,
    newToLabelPos,
    newSize,
    newFamily,
    newBold,
    newItalic,
  ) => {
    if (isConnection) {
      onChange(
        newFromLabel,
        newToLabel,
        newOrientation,
        newFromLabelPos,
        newToLabelPos,
        newSize,
        newFamily,
        newBold,
        newItalic,
      );
    } else {
      onChange(newText, newSize, newFamily, newBold, newItalic);
    }
  };

  // Room text handler
  const handleTextChange = (event) => {
    const value = event.target.value;
    setLocalText(value);
    triggerOnChange(
      value,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      localFontSize,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  // Connection label handlers
  const handleFromLabelChange = (event) => {
    const value = event.target.value;
    setLocalFromLabel(value);
    triggerOnChange(
      localText,
      value,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      localFontSize,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  const handleToLabelChange = (event) => {
    const value = event.target.value;
    setLocalToLabel(value);
    triggerOnChange(
      localText,
      localFromLabel,
      value,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      localFontSize,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  const handleOrientationChange = (event, newOrientation) => {
    if (newOrientation !== null) {
      setLocalLabelOrientation(newOrientation);
      triggerOnChange(
        localText,
        localFromLabel,
        localToLabel,
        newOrientation,
        localFromLabelPosition,
        localToLabelPosition,
        localFontSize,
        localFontFamily,
        localFontBold,
        localFontItalic,
      );
    }
  };

  const handleFromLabelPositionChange = (event, value) => {
    setLocalFromLabelPosition(value);
    triggerOnChange(
      localText,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      value,
      localToLabelPosition,
      localFontSize,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  const handleToLabelPositionChange = (event, value) => {
    setLocalToLabelPosition(value);
    triggerOnChange(
      localText,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      value,
      localFontSize,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  // Font handlers
  const handleFontSizeChange = (event) => {
    const value = event.target.value;
    setLocalFontSize(value);
    triggerOnChange(
      localText,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      value,
      localFontFamily,
      localFontBold,
      localFontItalic,
    );
  };

  const handleFontFamilyChange = (event) => {
    const value = event.target.value;
    setLocalFontFamily(value);
    triggerOnChange(
      localText,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      localFontSize,
      value,
      localFontBold,
      localFontItalic,
    );
  };

  const handleStyleChange = (event, newStyles) => {
    const newBold = newStyles.includes('bold');
    const newItalic = newStyles.includes('italic');
    setLocalFontBold(newBold);
    setLocalFontItalic(newItalic);
    triggerOnChange(
      localText,
      localFromLabel,
      localToLabel,
      localLabelOrientation,
      localFromLabelPosition,
      localToLabelPosition,
      localFontSize,
      localFontFamily,
      newBold,
      newItalic,
    );
  };

  const handleClear = () => {
    if (isConnection) {
      setLocalFromLabel('');
      setLocalToLabel('');
      triggerOnChange(
        localText,
        '',
        '',
        localLabelOrientation,
        localFromLabelPosition,
        localToLabelPosition,
        localFontSize,
        localFontFamily,
        localFontBold,
        localFontItalic,
      );
    } else {
      setLocalText('');
      triggerOnChange(
        '',
        localFromLabel,
        localToLabel,
        localLabelOrientation,
        localFromLabelPosition,
        localToLabelPosition,
        localFontSize,
        localFontFamily,
        localFontBold,
        localFontItalic,
      );
    }
  };

  const open = Boolean(anchorEl);

  const styleValue = [];
  if (localFontBold) styleValue.push('bold');
  if (localFontItalic) styleValue.push('italic');

  // Auto-focus text field when popover opens
  const handlePopoverEntered = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
      // Select all text for easy replacement
      textFieldRef.current.select();
    }
  };

  // Handle Enter/Escape key to close dialog (Shift+Enter for newlines)
  const handleTextKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleClose();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  return (
    <>
      <ToolbarButton ref={buttonRef} icon={icon} tooltip={tooltip} onClick={handleClick} disabled={disabled} hasDropdown />

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
          sx: { p: 2, minWidth: 280 },
        }}
        TransitionProps={{
          onEntered: handlePopoverEntered,
        }}>
        {/* Text inputs - different for rooms vs connections */}
        {isConnection ? (
          <>
            {/* Connection: From/To labels */}
            <Typography variant="caption" color="textSecondary" sx={{ mb: 0.5, display: 'block' }}>
              From Label
            </Typography>
            <TextField
              inputRef={textFieldRef}
              size="small"
              fullWidth
              value={localFromLabel}
              onChange={handleFromLabelChange}
              onKeyDown={handleTextKeyDown}
              onKeyUp={(e) => e.stopPropagation()}
              placeholder="e.g., +"
              autoComplete="off"
              inputProps={{ autoComplete: 'off', 'data-lpignore': 'true', 'data-form-type': 'other' }}
              sx={{ mb: 0.5 }}
            />
            <Box sx={{ px: 1, mb: 1.5 }}>
              <Typography variant="caption" color="textSecondary">
                Position
              </Typography>
              <Slider
                size="small"
                value={localFromLabelPosition}
                onChange={handleFromLabelPositionChange}
                min={0}
                max={1}
                step={0.05}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => `${Math.round(v * 100)}%`}
              />
            </Box>
            <Typography variant="caption" color="textSecondary" sx={{ mb: 0.5, display: 'block' }}>
              To Label
            </Typography>
            <TextField
              size="small"
              fullWidth
              value={localToLabel}
              onChange={handleToLabelChange}
              onKeyDown={handleTextKeyDown}
              onKeyUp={(e) => e.stopPropagation()}
              placeholder="e.g., -"
              autoComplete="off"
              inputProps={{ autoComplete: 'off', 'data-lpignore': 'true', 'data-form-type': 'other' }}
              sx={{ mb: 0.5 }}
            />
            <Box sx={{ px: 1, mb: 2 }}>
              <Typography variant="caption" color="textSecondary">
                Position
              </Typography>
              <Slider
                size="small"
                value={localToLabelPosition}
                onChange={handleToLabelPositionChange}
                min={0}
                max={1}
                step={0.05}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => `${Math.round(v * 100)}%`}
              />
            </Box>
          </>
        ) : (
          <>
            {/* Room: Single text input */}
            <Typography variant="caption" color="textSecondary" sx={{ mb: 0.5, display: 'block' }}>
              Text
            </Typography>
            <TextField
              inputRef={textFieldRef}
              size="small"
              fullWidth
              multiline
              minRows={1}
              maxRows={4}
              value={localText}
              onChange={handleTextChange}
              onKeyDown={handleTextKeyDown}
              onKeyUp={(e) => e.stopPropagation()}
              placeholder="Enter text..."
              autoComplete="off"
              inputProps={{ autoComplete: 'off', 'data-lpignore': 'true', 'data-form-type': 'other' }}
              sx={{ mb: 2 }}
            />
          </>
        )}

        {/* Font Size and Font Family row */}
        <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <InputLabel>Size</InputLabel>
            <Select value={localFontSize} label="Size" onChange={handleFontSizeChange}>
              {FONT_SIZES.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ flexGrow: 1 }}>
            <InputLabel>Font</InputLabel>
            <Select value={localFontFamily} label="Font" onChange={handleFontFamilyChange}>
              {FONT_FAMILIES.map((font) => (
                <MenuItem key={font.value} value={font.value}>
                  {font.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Style toggles */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: isConnection ? 2 : 0 }}>
          <Box>
            <Typography variant="caption" color="textSecondary" sx={{ mb: 0.5, display: 'block' }}>
              Style
            </Typography>
            <ToggleButtonGroup value={styleValue} onChange={handleStyleChange} size="small">
              <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon fontSize="small" />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon fontSize="small" />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Button variant="text" size="small" onClick={handleClear} sx={{ textTransform: 'none' }}>
            Clear
          </Button>
        </Box>

        {/* Orientation toggle - only for connections */}
        {isConnection && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="caption" color="textSecondary" sx={{ mb: 0.5, display: 'block' }}>
              Orientation
            </Typography>
            <ToggleButtonGroup
              value={localLabelOrientation}
              exclusive
              onChange={handleOrientationChange}
              size="small"
              fullWidth>
              <ToggleButton value="horizontal" aria-label="horizontal">
                Horizontal
              </ToggleButton>
              <ToggleButton value="along" aria-label="along line">
                Along
              </ToggleButton>
              <ToggleButton value="vertical" aria-label="vertical">
                Vertical
              </ToggleButton>
            </ToggleButtonGroup>
          </>
        )}
      </Popover>
    </>
  );
};

export default TextPickerDropdown;
