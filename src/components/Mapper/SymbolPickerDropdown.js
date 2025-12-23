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
 */
const TextPickerDropdown = ({
  icon,
  tooltip,
  text = '',
  fontSize = 24,
  fontFamily = 'monospace',
  fontBold = false,
  fontItalic = false,
  onChange,
  disabled = false,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [localText, setLocalText] = useState(text);
  const [localFontSize, setLocalFontSize] = useState(fontSize);
  const [localFontFamily, setLocalFontFamily] = useState(fontFamily);
  const [localFontBold, setLocalFontBold] = useState(fontBold);
  const [localFontItalic, setLocalFontItalic] = useState(fontItalic);
  const textFieldRef = useRef(null);
  const buttonRef = useRef(null);

  // Sync local state when props change (new selection)
  useEffect(() => {
    setLocalText(text);
    setLocalFontSize(fontSize);
    setLocalFontFamily(fontFamily);
    setLocalFontBold(fontBold);
    setLocalFontItalic(fontItalic);
  }, [text, fontSize, fontFamily, fontBold, fontItalic]);

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

  const triggerOnChange = (newText, newSize, newFamily, newBold, newItalic) => {
    onChange(newText, newSize, newFamily, newBold, newItalic);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setLocalText(value);
    triggerOnChange(value, localFontSize, localFontFamily, localFontBold, localFontItalic);
  };

  const handleFontSizeChange = (event) => {
    const value = event.target.value;
    setLocalFontSize(value);
    triggerOnChange(localText, value, localFontFamily, localFontBold, localFontItalic);
  };

  const handleFontFamilyChange = (event) => {
    const value = event.target.value;
    setLocalFontFamily(value);
    triggerOnChange(localText, localFontSize, value, localFontBold, localFontItalic);
  };

  const handleStyleChange = (event, newStyles) => {
    const newBold = newStyles.includes('bold');
    const newItalic = newStyles.includes('italic');
    setLocalFontBold(newBold);
    setLocalFontItalic(newItalic);
    triggerOnChange(localText, localFontSize, localFontFamily, newBold, newItalic);
  };

  const handleClear = () => {
    setLocalText('');
    triggerOnChange('', localFontSize, localFontFamily, localFontBold, localFontItalic);
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

  // Handle Enter key to close dialog (Shift+Enter for newlines)
  const handleTextKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
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
        {/* Text input */}
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

        {/* Style toggles and Clear button */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
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
      </Popover>
    </>
  );
};

export default TextPickerDropdown;
