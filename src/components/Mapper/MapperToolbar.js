import React, { useState } from 'react';
import * as go from 'gojs';
import { Box, Divider, Popover } from '@mui/material';
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
 * SVG icon component for line end decorations
 */
const LineEndIcon = ({ fromDecor, toDecor }) => {
  const paths = [];

  // Horizontal line (adjusted based on decorations)
  const leftX = fromDecor === 'DoubleLine' ? 8 : fromDecor ? 6 : 2;
  const rightX = toDecor === 'DoubleLine' ? 24 : toDecor ? 26 : 30;
  paths.push(`M${leftX},8 L${rightX},8`);

  // Left decorations (from)
  if (fromDecor === 'Standard') {
    paths.push('M6,4 L2,8 L6,12'); // Arrow pointing left
  } else if (fromDecor === 'Line') {
    paths.push('M2,3 L2,13'); // Single bar
  } else if (fromDecor === 'DoubleLine') {
    paths.push('M2,3 L2,13 M6,3 L6,13'); // Double bar
  }

  // Right decorations (to)
  if (toDecor === 'Standard') {
    paths.push('M26,4 L30,8 L26,12'); // Arrow pointing right
  } else if (toDecor === 'Line') {
    paths.push('M30,3 L30,13'); // Single bar
  } else if (toDecor === 'DoubleLine') {
    paths.push('M30,3 L30,13 M26,3 L26,13'); // Double bar
  }

  return (
    <svg width="32" height="16" viewBox="0 0 32 16">
      <path
        d={paths.join(' ')}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * SVG icon component for line styles
 */
const LineStyleIcon = ({ style }) => {
  const patterns = {
    solid: 'M2,8 L38,8',
    dashed: 'M2,8 L10,8 M16,8 L24,8 M30,8 L38,8',
    dotted: 'M4,8 L6,8 M12,8 L14,8 M20,8 L22,8 M28,8 L30,8 M36,8 L38,8',
    dashdot: 'M2,8 L10,8 M14,8 L16,8 M20,8 L28,8 M32,8 L34,8',
  };

  return (
    <svg width="40" height="16" viewBox="0 0 40 16">
      <path d={patterns[style]} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
};

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
          // Parse JSON and convert old formats
          const modelData = JSON.parse(event.target.result);
          // Migrate old 'symbol' format to 'text' on nodes
          if (modelData.nodeDataArray) {
            modelData.nodeDataArray = modelData.nodeDataArray.map((node) => {
              if (node.symbol !== undefined && node.text === undefined) {
                const { symbol, ...rest } = node;
                return { ...rest, text: symbol };
              }
              return node;
            });
          }
          // Migrate old 'label' property to 'fromLabel' on links
          if (modelData.linkDataArray) {
            modelData.linkDataArray = modelData.linkDataArray.map((link) => {
              if (link.label !== undefined && link.fromLabel === undefined) {
                const { label, ...rest } = link;
                return { ...rest, fromLabel: label };
              }
              return link;
            });
          }
          const json = JSON.stringify(modelData);
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
    const originalSelection = diagramRef.selection.toArray();
    diagramRef.grid.visible = false;
    diagramRef.clearSelection();
    const imgData = diagramRef.makeImageData({
      background: 'white',
      scale: 2,
      type: 'image/png',
      maxSize: new go.Size(Infinity, Infinity),
    });
    diagramRef.grid.visible = originalGridVisible;
    diagramRef.selectCollection(originalSelection);
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

  // For rooms: handleTextChange(text, fontSize, fontFamily, fontBold, fontItalic)
  // For connections: handleTextChange(fromLabel, toLabel, labelOrientation, fontSize, fontFamily, fontBold, fontItalic)
  const handleTextChange = (...args) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change text properties');

    if (selectionType === 'room') {
      // Room: (text, fontSize, fontFamily, fontBold, fontItalic)
      const [text, fontSize, fontFamily, fontBold, fontItalic] = args;
      diagramRef.model.setDataProperty(selectedObject.data, 'text', text);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontSize', fontSize);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontFamily', fontFamily);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontBold', fontBold);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontItalic', fontItalic);
    } else {
      // Connection: (fromLabel, toLabel, labelOrientation, fontSize, fontFamily, fontBold, fontItalic)
      const [fromLabel, toLabel, labelOrientation, fontSize, fontFamily, fontBold, fontItalic] = args;
      diagramRef.model.setDataProperty(selectedObject.data, 'fromLabel', fromLabel);
      diagramRef.model.setDataProperty(selectedObject.data, 'toLabel', toLabel);
      diagramRef.model.setDataProperty(selectedObject.data, 'labelOrientation', labelOrientation);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontSize', fontSize);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontFamily', fontFamily);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontBold', fontBold);
      diagramRef.model.setDataProperty(selectedObject.data, 'fontItalic', fontItalic);
    }

    diagramRef.commitTransaction('change text properties');
  };

  // ============ CONNECTION STYLING ============

  const handleConnectionLineStyleChange = (style) => {
    if (!diagramRef || !selectedObject) return;
    diagramRef.startTransaction('change line style');
    const dashArrays = {
      solid: null,
      dashed: [6, 4],
      dotted: [2, 3],
      dashdot: [6, 3, 2, 3],
    };
    diagramRef.model.setDataProperty(selectedObject.data, 'dash', dashArrays[style]);
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
  const currentLineStyle = (() => {
    if (!currentConnectionDash) return 'solid';
    if (currentConnectionDash.length === 4) return 'dashdot';
    if (currentConnectionDash[0] <= 2) return 'dotted';
    return 'dashed';
  })();
  const currentFromDecor = selectedObject?.data?.fromDecor || '';
  const currentToDecor = selectedObject?.data?.toDecor || '';

  // Text properties - 'text' for rooms, 'fromLabel'/'toLabel' for connections
  const currentText = selectedObject?.data?.text || '';
  const currentFromLabel = selectedObject?.data?.fromLabel || '';
  const currentToLabel = selectedObject?.data?.toLabel || '';
  const currentLabelOrientation = selectedObject?.data?.labelOrientation || 'along';
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
      <ToolbarButton icon={<NoteAdd fontSize="small" />} tooltip="New Map" onClick={handleNew} />
      <ToolbarButton icon={<Save fontSize="small" />} tooltip="Save Map" onClick={handleSave} />
      <ToolbarButton icon={<FolderOpen fontSize="small" />} tooltip="Load Map" onClick={handleLoad} />
      <ToolbarButton icon={<Image fontSize="small" />} tooltip="Export PNG" onClick={handleExportPNG} />

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
        fromLabel={currentFromLabel}
        toLabel={currentToLabel}
        labelOrientation={currentLabelOrientation}
        fontSize={currentFontSize}
        fontFamily={currentFontFamily}
        fontBold={currentFontBold}
        fontItalic={currentFontItalic}
        isConnection={isConnectionSelected}
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{ sx: { p: 1 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0.5 }}>
          {['solid', 'dashed', 'dotted', 'dashdot'].map((style) => (
            <Box
              key={style}
              onClick={() => handleConnectionLineStyleChange(style)}
              sx={{
                p: 1,
                cursor: 'pointer',
                borderRadius: 1,
                backgroundColor: currentLineStyle === style ? '#e8f0fe' : 'transparent',
                '&:hover': { backgroundColor: '#f1f3f4' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <LineStyleIcon style={style} />
            </Box>
          ))}
        </Box>
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
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.5 }}>
          {/* None - centered across all columns */}
          <Box
            onClick={() => handleConnectionDecorChange('', '')}
            sx={{
              gridColumn: '1 / -1',
              p: 1,
              cursor: 'pointer',
              borderRadius: 1,
              backgroundColor: !currentFromDecor && !currentToDecor ? '#e8f0fe' : 'transparent',
              '&:hover': { backgroundColor: '#f1f3f4' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LineEndIcon fromDecor="" toDecor="" />
          </Box>
          {/* Arrow row: To, From, Both */}
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
            }}>
            <LineEndIcon fromDecor="" toDecor="Standard" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="Standard" toDecor="" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="Standard" toDecor="Standard" />
          </Box>
          {/* Single bar row: To, From, Both */}
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
            }}>
            <LineEndIcon fromDecor="" toDecor="Line" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="Line" toDecor="" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="Line" toDecor="Line" />
          </Box>
          {/* Double bar row: To, From, Both */}
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
            }}>
            <LineEndIcon fromDecor="" toDecor="DoubleLine" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="DoubleLine" toDecor="" />
          </Box>
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
            }}>
            <LineEndIcon fromDecor="DoubleLine" toDecor="DoubleLine" />
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default MapperToolbar;
