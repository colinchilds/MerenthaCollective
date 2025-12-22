import React, { useState } from 'react';
import { Box, Divider, Popover, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  NoteAdd,
  Save,
  FolderOpen,
  Image,
  Undo,
  Redo,
  Delete,
  NearMe,
  AddBox,
  FormatColorFill,
  BorderColor,
  TextFields,
  LinearScale,
  TrendingFlat,
  Palette,
} from '@mui/icons-material';
import ToolbarButton from './ToolbarButton';
import ColorPickerDropdown from './ColorPickerDropdown';
import SymbolPickerDropdown from './SymbolPickerDropdown';

/**
 * Unified toolbar component combining file operations, edit tools,
 * tool modes, and styling controls in a compact icon-based layout.
 */
const MapperToolbar = ({
  diagramRef,
  toolMode,
  setToolMode,
  selectionType,
  selectedObject,
  canUndo,
  canRedo,
  defaultFillColor,
  setDefaultFillColor,
  defaultBorderColor,
  setDefaultBorderColor,
}) => {
  const [lineStyleAnchor, setLineStyleAnchor] = useState(null);
  const [arrowAnchor, setArrowAnchor] = useState(null);

  // ============ FILE OPERATIONS ============

  const handleNew = () => {
    if (!diagramRef) return;
    if (window.confirm('Clear the current map? This cannot be undone.')) {
      diagramRef.model = new diagramRef.model.constructor();
    }
  };

  const handleSave = () => {
    if (!diagramRef) return;
    const json = diagramRef.model.toJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const timestamp = new Date().toISOString().slice(0, 10);
    link.download = `merentha-map-${timestamp}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLoad = () => {
    if (!diagramRef) return;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = event.target.result;
          diagramRef.model = diagramRef.model.constructor.fromJson(json);
        } catch (error) {
          alert('Error loading map file: ' + error.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleExportPNG = () => {
    if (!diagramRef) return;
    const originalGridVisible = diagramRef.grid.visible;
    diagramRef.grid.visible = false;
    const imgData = diagramRef.makeImageData({
      background: 'white',
      scale: 2,
      type: 'image/png'
    });
    diagramRef.grid.visible = originalGridVisible;
    const link = document.createElement('a');
    link.href = imgData;
    const timestamp = new Date().toISOString().slice(0, 10);
    link.download = `merentha-map-${timestamp}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ============ EDIT OPERATIONS ============

  const handleUndo = () => {
    if (!diagramRef) return;
    diagramRef.commandHandler.undo();
  };

  const handleRedo = () => {
    if (!diagramRef) return;
    diagramRef.commandHandler.redo();
  };

  const handleDelete = () => {
    if (!diagramRef) return;
    diagramRef.commandHandler.deleteSelection();
  };

  // ============ ROOM STYLING ============

  const handleRoomFillColorChange = (color) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.model.setDataProperty(selectedObject.data, 'fillColor', color);
  };

  const handleRoomBorderColorChange = (color) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.model.setDataProperty(selectedObject.data, 'borderColor', color);
  };

  const handleRoomSymbolChange = (symbol) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.model.setDataProperty(selectedObject.data, 'symbol', symbol);
  };

  // ============ CONNECTION STYLING ============

  const handleConnectionLineStyleChange = (style) => {
    if (!diagramRef || !selectedObject) return;
    const dashArray = style === 'dashed' ? [4, 4] : null;
    diagramRef.model.setDataProperty(selectedObject.data, 'dash', dashArray);
    setLineStyleAnchor(null);
  };

  const handleConnectionArrowChange = (arrowType) => {
    if (!diagramRef || !selectedObject) return;
    const showArrow = arrowType !== 'none';
    diagramRef.model.setDataProperty(selectedObject.data, 'showArrow', showArrow);
    diagramRef.model.setDataProperty(selectedObject.data, 'arrowType', arrowType);
    setArrowAnchor(null);
  };

  const handleConnectionColorChange = (color) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.model.setDataProperty(selectedObject.data, 'color', color);
  };

  // ============ DERIVED VALUES ============

  const isRoomSelected = selectionType === 'room' && selectedObject;
  const isConnectionSelected = selectionType === 'connection' && selectedObject;
  const hasSelection = isRoomSelected || isConnectionSelected;

  const currentRoomFillColor = selectedObject?.data?.fillColor || defaultFillColor;
  const currentRoomBorderColor = selectedObject?.data?.borderColor || defaultBorderColor;
  const currentRoomSymbol = selectedObject?.data?.symbol || '';
  const currentConnectionColor = selectedObject?.data?.color || '#000000';
  const currentConnectionDash = selectedObject?.data?.dash;
  const currentLineStyle = currentConnectionDash ? 'dashed' : 'solid';
  const currentArrowType = selectedObject?.data?.arrowType || 'none';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        mb: 1.5,
        p: 0.5,
        backgroundColor: '#f8f9fa',
        borderRadius: 1,
        border: '1px solid #e0e0e0',
      }}
    >
      {/* FILE GROUP */}
      <ToolbarButton icon={<NoteAdd fontSize="small" />} tooltip="New Map (Ctrl+N)" onClick={handleNew} />
      <ToolbarButton icon={<Save fontSize="small" />} tooltip="Save Map (Ctrl+S)" onClick={handleSave} />
      <ToolbarButton icon={<FolderOpen fontSize="small" />} tooltip="Load Map (Ctrl+O)" onClick={handleLoad} />
      <ToolbarButton icon={<Image fontSize="small" />} tooltip="Export PNG (Ctrl+E)" onClick={handleExportPNG} />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* EDIT GROUP */}
      <ToolbarButton icon={<Undo fontSize="small" />} tooltip="Undo (Ctrl+Z)" onClick={handleUndo} disabled={!canUndo} />
      <ToolbarButton icon={<Redo fontSize="small" />} tooltip="Redo (Ctrl+Y)" onClick={handleRedo} disabled={!canRedo} />
      <ToolbarButton icon={<Delete fontSize="small" />} tooltip="Delete (Del)" onClick={handleDelete} disabled={!hasSelection} />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* TOOLS GROUP */}
      <ToolbarButton
        icon={<NearMe fontSize="small" />}
        tooltip="Select Tool (V)"
        onClick={() => setToolMode('select')}
        active={toolMode === 'select'}
      />
      <ToolbarButton
        icon={<AddBox fontSize="small" />}
        tooltip="Add Room Tool (R)"
        onClick={() => setToolMode('addRoom')}
        active={toolMode === 'addRoom'}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* ROOM STYLING GROUP */}
      <ColorPickerDropdown
        icon={<FormatColorFill fontSize="small" />}
        tooltip="Fill Color"
        color={currentRoomFillColor}
        onChange={handleRoomFillColorChange}
        disabled={!isRoomSelected}
      />
      <ColorPickerDropdown
        icon={<BorderColor fontSize="small" />}
        tooltip="Border Color"
        color={currentRoomBorderColor}
        onChange={handleRoomBorderColorChange}
        disabled={!isRoomSelected}
      />
      <SymbolPickerDropdown
        icon={<TextFields fontSize="small" />}
        tooltip="Room Symbol"
        symbol={currentRoomSymbol}
        onChange={handleRoomSymbolChange}
        disabled={!isRoomSelected}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* CONNECTION STYLING GROUP */}
      <ToolbarButton
        icon={<LinearScale fontSize="small" />}
        tooltip="Line Style"
        onClick={(e) => setLineStyleAnchor(e.currentTarget)}
        disabled={!isConnectionSelected}
        hasDropdown
      />
      <Popover
        open={Boolean(lineStyleAnchor)}
        anchorEl={lineStyleAnchor}
        onClose={() => setLineStyleAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MenuItem
          onClick={() => handleConnectionLineStyleChange('solid')}
          selected={currentLineStyle === 'solid'}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Box sx={{ width: 40, height: 2, backgroundColor: '#000' }} />
          </ListItemIcon>
          <ListItemText>Solid</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleConnectionLineStyleChange('dashed')}
          selected={currentLineStyle === 'dashed'}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Box sx={{ width: 40, height: 2, backgroundImage: 'linear-gradient(to right, #000 50%, transparent 50%)', backgroundSize: '8px 2px' }} />
          </ListItemIcon>
          <ListItemText>Dashed</ListItemText>
        </MenuItem>
      </Popover>

      <ToolbarButton
        icon={<TrendingFlat fontSize="small" />}
        tooltip="Arrow Direction"
        onClick={(e) => setArrowAnchor(e.currentTarget)}
        disabled={!isConnectionSelected}
        hasDropdown
      />
      <Popover
        open={Boolean(arrowAnchor)}
        anchorEl={arrowAnchor}
        onClose={() => setArrowAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MenuItem onClick={() => handleConnectionArrowChange('none')} selected={currentArrowType === 'none'}>
          <ListItemText>None</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleConnectionArrowChange('forward')} selected={currentArrowType === 'forward'}>
          <ListItemText>→ Forward</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleConnectionArrowChange('backward')} selected={currentArrowType === 'backward'}>
          <ListItemText>← Backward</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleConnectionArrowChange('bidirectional')} selected={currentArrowType === 'bidirectional'}>
          <ListItemText>↔ Both</ListItemText>
        </MenuItem>
      </Popover>

      <ColorPickerDropdown
        icon={<Palette fontSize="small" />}
        tooltip="Line Color"
        color={currentConnectionColor}
        onChange={handleConnectionColorChange}
        disabled={!isConnectionSelected}
      />
    </Box>
  );
};

export default MapperToolbar;
