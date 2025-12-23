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
  PanTool,
  ZoomIn,
  ZoomOut,
  FormatColorFill,
  BorderColor,
  TextFields,
  LinearScale,
  TrendingFlat,
} from '@mui/icons-material';
import ToolbarButton from './ToolbarButton';
import ColorPickerDropdown from './ColorPickerDropdown';
import TextPickerDropdown from './SymbolPickerDropdown';

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
  textDialogOpen,
  setTextDialogOpen,
}) => {
  const [lineStyleAnchor, setLineStyleAnchor] = useState(null);
  const [arrowAnchor, setArrowAnchor] = useState(null);

  // ============ FILE OPERATIONS ============

  const handleNew = () => {
    if (!diagramRef) return;
    if (window.confirm('Clear the current map? This cannot be undone.')) {
      diagramRef.model = new diagramRef.model.constructor();
      diagramRef.nextRoomKey = 1;
      localStorage.removeItem('merentha-mapper-data');
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
          // Calculate next room key from loaded data
          const maxKey = diagramRef.model.nodeDataArray.reduce((max, node) => Math.max(max, node.key || 0), 0);
          diagramRef.nextRoomKey = maxKey + 1;
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
      type: 'image/png',
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

  // ============ ZOOM OPERATIONS ============

  const handleZoomIn = () => {
    if (!diagramRef) return;
    const newScale = Math.min(5, diagramRef.scale * 1.2);
    diagramRef.scale = newScale;
  };

  const handleZoomOut = () => {
    if (!diagramRef) return;
    const newScale = Math.max(0.1, diagramRef.scale / 1.2);
    diagramRef.scale = newScale;
  };

  // ============ ROOM STYLING ============

  const handleRoomFillColorChange = (color) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change fill color');
    diagramRef.model.setDataProperty(selectedObject.data, 'fillColor', color);
    diagramRef.commitTransaction('change fill color');
  };

  const handleStrokeColorChange = (color) => {
    if (!diagramRef || !selectedObject) return;
    if (selectionType === 'room') {
      diagramRef.startTransaction('change border color');
      diagramRef.model.setDataProperty(selectedObject.data, 'borderColor', color);
      diagramRef.commitTransaction('change border color');
    } else if (selectionType === 'connection') {
      diagramRef.startTransaction('change line color');
      diagramRef.model.setDataProperty(selectedObject.data, 'color', color);
      diagramRef.commitTransaction('change line color');
    }
  };

  const handleTextChange = (text, fontSize, fontFamily, fontBold, fontItalic) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change text properties');
    const textProp = selectionType === 'room' ? 'symbol' : 'label';
    diagramRef.model.setDataProperty(selectedObject.data, textProp, text);
    diagramRef.model.setDataProperty(selectedObject.data, 'fontSize', fontSize);
    diagramRef.model.setDataProperty(selectedObject.data, 'fontFamily', fontFamily);
    diagramRef.model.setDataProperty(selectedObject.data, 'fontBold', fontBold);
    diagramRef.model.setDataProperty(selectedObject.data, 'fontItalic', fontItalic);
    diagramRef.commitTransaction('change text properties');
  };

  // ============ CONNECTION STYLING ============

  const handleConnectionLineStyleChange = (style) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change line style');
    const dashArray = style === 'dashed' ? [4, 4] : null;
    diagramRef.model.setDataProperty(selectedObject.data, 'dash', dashArray);
    diagramRef.commitTransaction('change line style');
    setLineStyleAnchor(null);
  };

  const handleConnectionDecorChange = (fromDecor, toDecor) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change line ends');
    diagramRef.model.setDataProperty(selectedObject.data, 'fromDecor', fromDecor);
    diagramRef.model.setDataProperty(selectedObject.data, 'toDecor', toDecor);
    diagramRef.commitTransaction('change line ends');
    setArrowAnchor(null);
  };

  // ============ DERIVED VALUES ============

  const isRoomSelected = selectionType === 'room' && selectedObject;
  const isConnectionSelected = selectionType === 'connection' && selectedObject;
  const isMultipleSelected = selectionType === 'multiple';
  const hasSelection = isRoomSelected || isConnectionSelected || isMultipleSelected;

  const currentRoomFillColor = selectedObject?.data?.fillColor || defaultFillColor;
  const currentStrokeColor = isRoomSelected
    ? selectedObject?.data?.borderColor || defaultBorderColor
    : selectedObject?.data?.color || '#000000';
  const currentConnectionDash = selectedObject?.data?.dash;
  const currentLineStyle = currentConnectionDash ? 'dashed' : 'solid';
  const currentFromDecor = selectedObject?.data?.fromDecor || '';
  const currentToDecor = selectedObject?.data?.toDecor || '';

  // Text properties - use 'symbol' for rooms, 'label' for connections
  const currentText = isRoomSelected ? selectedObject?.data?.symbol || '' : selectedObject?.data?.label || '';
  const currentFontSize = selectedObject?.data?.fontSize || 24;
  const currentFontFamily = selectedObject?.data?.fontFamily || 'monospace';
  const currentFontBold = selectedObject?.data?.fontBold || false;
  const currentFontItalic = selectedObject?.data?.fontItalic || false;
  const isTextPickerEnabled = isRoomSelected || isConnectionSelected;

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
      }}>
      {/* FILE GROUP */}
      <ToolbarButton icon={<NoteAdd fontSize="small" />} tooltip="New Map (Ctrl+N)" onClick={handleNew} />
      <ToolbarButton icon={<Save fontSize="small" />} tooltip="Save Map (Ctrl+S)" onClick={handleSave} />
      <ToolbarButton icon={<FolderOpen fontSize="small" />} tooltip="Load Map (Ctrl+O)" onClick={handleLoad} />
      <ToolbarButton icon={<Image fontSize="small" />} tooltip="Export PNG (Ctrl+E)" onClick={handleExportPNG} />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* EDIT GROUP */}
      <ToolbarButton icon={<Undo fontSize="small" />} tooltip="Undo (Ctrl+Z)" onClick={handleUndo} disabled={!canUndo} />
      <ToolbarButton icon={<Redo fontSize="small" />} tooltip="Redo (Ctrl+Y)" onClick={handleRedo} disabled={!canRedo} />
      <ToolbarButton
        icon={<Delete fontSize="small" />}
        tooltip="Delete (Del)"
        onClick={handleDelete}
        disabled={!hasSelection}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* TOOLS GROUP */}
      <ToolbarButton
        icon={<NearMe fontSize="small" />}
        tooltip="Select Tool (V)"
        onClick={() => setToolMode('select')}
        active={toolMode === 'select'}
      />
      <ToolbarButton
        icon={<PanTool fontSize="small" />}
        tooltip="Pan Tool (H)"
        onClick={() => setToolMode('pan')}
        active={toolMode === 'pan'}
      />
      <ToolbarButton
        icon={<AddBox fontSize="small" />}
        tooltip="Add Room Tool (R)"
        onClick={() => setToolMode('addRoom')}
        active={toolMode === 'addRoom'}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: '#dadce0' }} />

      {/* ZOOM GROUP */}
      <ToolbarButton icon={<ZoomIn fontSize="small" />} tooltip="Zoom In" onClick={handleZoomIn} />
      <ToolbarButton icon={<ZoomOut fontSize="small" />} tooltip="Zoom Out" onClick={handleZoomOut} />

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
        tooltip="Stroke Color"
        color={currentStrokeColor}
        onChange={handleStrokeColorChange}
        disabled={!isRoomSelected && !isConnectionSelected}
      />
      <TextPickerDropdown
        icon={<TextFields fontSize="small" />}
        tooltip="Text (T)"
        text={currentText}
        fontSize={currentFontSize}
        fontFamily={currentFontFamily}
        fontBold={currentFontBold}
        fontItalic={currentFontItalic}
        onChange={handleTextChange}
        disabled={!isTextPickerEnabled}
        open={textDialogOpen}
        onOpenChange={setTextDialogOpen}
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <MenuItem onClick={() => handleConnectionLineStyleChange('solid')} selected={currentLineStyle === 'solid'}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Box sx={{ width: 40, height: 2, backgroundColor: '#000' }} />
          </ListItemIcon>
          <ListItemText>Solid</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleConnectionLineStyleChange('dashed')} selected={currentLineStyle === 'dashed'}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Box
              sx={{
                width: 40,
                height: 2,
                backgroundImage: 'linear-gradient(to right, #000 50%, transparent 50%)',
                backgroundSize: '8px 2px',
              }}
            />
          </ListItemIcon>
          <ListItemText>Dashed</ListItemText>
        </MenuItem>
      </Popover>

      <ToolbarButton
        icon={<TrendingFlat fontSize="small" />}
        tooltip="Line Ends"
        onClick={(e) => setArrowAnchor(e.currentTarget)}
        disabled={!isConnectionSelected}
        hasDropdown
      />
      <Popover
        open={Boolean(arrowAnchor)}
        anchorEl={arrowAnchor}
        onClose={() => setArrowAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{ sx: { p: 1 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0.5 }}>
          {/* None */}
          <Box
            onClick={() => handleConnectionDecorChange('', '')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: !currentFromDecor && !currentToDecor ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ———
          </Box>
          {/* Arrow To */}
          <Box
            onClick={() => handleConnectionDecorChange('', 'Standard')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: !currentFromDecor && currentToDecor === 'Standard' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ——▶
          </Box>
          {/* Arrow From */}
          <Box
            onClick={() => handleConnectionDecorChange('Standard', '')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: currentFromDecor === 'Standard' && !currentToDecor ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ◀——
          </Box>
          {/* Arrow Both */}
          <Box
            onClick={() => handleConnectionDecorChange('Standard', 'Standard')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: currentFromDecor === 'Standard' && currentToDecor === 'Standard' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ◀—▶
          </Box>
          {/* Single Line To */}
          <Box
            onClick={() => handleConnectionDecorChange('', 'Line')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: !currentFromDecor && currentToDecor === 'Line' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ——|
          </Box>
          {/* Single Line From */}
          <Box
            onClick={() => handleConnectionDecorChange('Line', '')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: currentFromDecor === 'Line' && !currentToDecor ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            |——
          </Box>
          {/* Single Line Both */}
          <Box
            onClick={() => handleConnectionDecorChange('Line', 'Line')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: currentFromDecor === 'Line' && currentToDecor === 'Line' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            |—|
          </Box>
          {/* Spacer */}
          <Box />
          {/* Double Line To */}
          <Box
            onClick={() => handleConnectionDecorChange('', 'DoubleLine')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: !currentFromDecor && currentToDecor === 'DoubleLine' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            —||
          </Box>
          {/* Double Line From */}
          <Box
            onClick={() => handleConnectionDecorChange('DoubleLine', '')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: currentFromDecor === 'DoubleLine' && !currentToDecor ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ||—
          </Box>
          {/* Double Line Both */}
          <Box
            onClick={() => handleConnectionDecorChange('DoubleLine', 'DoubleLine')}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor:
                currentFromDecor === 'DoubleLine' && currentToDecor === 'DoubleLine' ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 50,
              fontSize: 14,
            }}>
            ||—||
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default MapperToolbar;
