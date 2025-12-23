import React, { useEffect, useRef, useCallback } from 'react';
import * as go from 'gojs';
import { Box } from '@mui/material';

// Set GoJS license key from environment variable
if (process.env.REACT_APP_GOJS_LICENSE_KEY) {
  go.Diagram.licenseKey = process.env.REACT_APP_GOJS_LICENSE_KEY;
}

const STORAGE_KEY = 'merentha-mapper-data';

// Numpad direction mappings: key -> { dx, dy, fromPort, toPort }
// Each direction moves 2 cells (200px) and connects appropriate ports
const NUMPAD_DIRECTIONS = {
  8: { dx: 0, dy: -200, fromPort: 'N', toPort: 'S' }, // North
  9: { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW' }, // NE
  6: { dx: 200, dy: 0, fromPort: 'E', toPort: 'W' }, // East
  3: { dx: 200, dy: 200, fromPort: 'SE', toPort: 'NW' }, // SE
  2: { dx: 0, dy: 200, fromPort: 'S', toPort: 'N' }, // South
  1: { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE' }, // SW
  4: { dx: -200, dy: 0, fromPort: 'W', toPort: 'E' }, // West
  7: { dx: -200, dy: -200, fromPort: 'NW', toPort: 'SE' }, // NW
  '+': { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW' }, // Up (same as NE)
  '-': { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE' }, // Down (same as SW)
};

const MapperCanvas = ({
  onDiagramInit,
  toolMode,
  setToolMode,
  selectionType,
  setSelectionType,
  selectedGridSquare,
  setSelectedGridSquare,
  selectedObject,
  setSelectedObject,
  defaultFillColor,
  defaultBorderColor,
  onUndoRedoChange,
  onOpenTextDialog,
}) => {
  const diagramDivRef = useRef(null);
  const diagramRef = useRef(null);
  const toolModeRef = useRef(toolMode);

  // Keep toolModeRef in sync with toolMode prop and update diagram tools
  useEffect(() => {
    toolModeRef.current = toolMode;

    // Update diagram tools based on mode
    const diagram = diagramRef.current;
    if (diagram) {
      if (toolMode === 'pan') {
        diagram.toolManager.panningTool.isEnabled = true;
        diagram.toolManager.dragSelectingTool.isEnabled = false;
      } else {
        // select or addRoom mode
        diagram.toolManager.panningTool.isEnabled = false;
        diagram.toolManager.dragSelectingTool.isEnabled = toolMode === 'select';
      }
    }
  }, [toolMode]);

  // Helper to create a room at given coordinates
  const createRoomAt = useCallback(
    (diagram, x, y) => {
      const nextKey = diagram.nextRoomKey || 1;
      diagram.model.commit((m) => {
        m.addNodeData({
          key: nextKey,
          loc: `${x} ${y}`,
          fillColor: defaultFillColor,
          borderColor: defaultBorderColor,
          symbol: '',
        });
      }, 'add room');
      diagram.nextRoomKey = nextKey + 1;

      // Find and select the newly created node (outside transaction)
      const newNode = diagram.findNodeForKey(nextKey);
      if (newNode) {
        diagram.select(newNode);
      }
    },
    [defaultFillColor, defaultBorderColor],
  );

  // Helper to create a room in a direction with a connecting link
  const createRoomWithLink = useCallback(
    (diagram, sourceNode, direction) => {
      const sourceLoc = sourceNode.location;
      const targetX = sourceLoc.x + direction.dx;
      const targetY = sourceLoc.y + direction.dy;

      // Check if room already exists at target location
      let existingNode = null;
      diagram.nodes.each((node) => {
        const nodeLoc = node.location;
        if (nodeLoc.x === targetX && nodeLoc.y === targetY) {
          existingNode = node;
        }
      });

      if (existingNode) {
        // Room already exists - check if link already exists between them
        const sourceKey = sourceNode.data.key;
        const targetKey = existingNode.data.key;
        let linkExists = false;

        diagram.links.each((link) => {
          const fromKey = link.data.from;
          const toKey = link.data.to;
          // Check both directions
          if ((fromKey === sourceKey && toKey === targetKey) || (fromKey === targetKey && toKey === sourceKey)) {
            linkExists = true;
          }
        });

        if (!linkExists) {
          // Create a link to the existing room
          diagram.model.commit((m) => {
            m.addLinkData({
              from: sourceKey,
              to: targetKey,
              fromPort: direction.fromPort,
              toPort: direction.toPort,
              color: '#000000',
            });
          }, 'add link');
        }

        diagram.select(existingNode);
        return;
      }

      // Create the new room and link
      const nextKey = diagram.nextRoomKey || 1;
      diagram.model.commit((m) => {
        m.addNodeData({
          key: nextKey,
          loc: `${targetX} ${targetY}`,
          fillColor: defaultFillColor,
          borderColor: defaultBorderColor,
          symbol: '',
        });
        m.addLinkData({
          from: sourceNode.data.key,
          to: nextKey,
          fromPort: direction.fromPort,
          toPort: direction.toPort,
          color: '#000000',
        });
      }, 'add room with link');
      diagram.nextRoomKey = nextKey + 1;

      // Find and select the newly created node (outside transaction)
      const newNode = diagram.findNodeForKey(nextKey);
      if (newNode) {
        diagram.select(newNode);
      }
    },
    [defaultFillColor, defaultBorderColor],
  );

  // Helper to update undo/redo state
  const updateUndoRedoState = useCallback(
    (diagram) => {
      if (onUndoRedoChange && diagram) {
        onUndoRedoChange({
          canUndo: diagram.undoManager.canUndo(),
          canRedo: diagram.undoManager.canRedo(),
        });
      }
    },
    [onUndoRedoChange],
  );

  useEffect(() => {
    if (!diagramDivRef.current) return;

    const $ = go.GraphObject.make;

    // Create port shape - centered on the room edge, rendered on top of border
    // Links connect to the center of the port, which sits exactly on the room edge
    const makePort = (portId, alignment) => {
      return $(go.Shape, 'Circle', {
        name: `PORT_${portId}`,
        desiredSize: new go.Size(16, 16), // Large enough to click
        fill: 'transparent',
        stroke: 'transparent',
        portId: portId,
        fromSpot: go.Spot.Center, // Links connect to center of port
        toSpot: go.Spot.Center, // which is at the room edge
        fromLinkable: true,
        toLinkable: true,
        fromLinkableDuplicates: true,
        toLinkableDuplicates: true,
        fromEndSegmentLength: 0,
        toEndSegmentLength: 0,
        alignment: alignment,
        alignmentFocus: go.Spot.Center, // Center of port sits at room edge
        cursor: 'crosshair',
        // Ensure ports render on top of room border
        background: 'transparent',
      });
    };

    const diagram = $(go.Diagram, diagramDivRef.current, {
      'undoManager.isEnabled': true,
      'undoManager.maxHistoryLength': 100,
      'grid.visible': true,
      'grid.gridCellSize': new go.Size(100, 100),
      'grid.gridOrigin': new go.Point(0, 0),
      initialContentAlignment: go.Spot.Center,
      allowDrop: true,
      'animationManager.isEnabled': false,
      allowLink: true,
      // Configure drag selecting tool with styled box
      'dragSelectingTool.box': $(
        go.Part,
        { layerName: 'Tool' },
        $(go.Shape, 'Rectangle', {
          fill: 'rgba(66, 133, 244, 0.1)',
          stroke: '#4285f4',
          strokeWidth: 1,
        }),
      ),
      // Disable default panning - we'll control it via tool mode
      'panningTool.isEnabled': false,
      'dragSelectingTool.isEnabled': true,
      model: new go.GraphLinksModel({
        linkKeyProperty: 'key',
        linkFromPortIdProperty: 'fromPort', // Save port ID when link created
        linkToPortIdProperty: 'toPort', // Save port ID when link created
        nodeDataArray: [],
        linkDataArray: [],
      }),
    });

    // Define room node template with hover-visible ports
    diagram.nodeTemplate = $(
      go.Node,
      'Spot',
      {
        locationSpot: go.Spot.Center,
        selectionAdorned: false, // Disable default adornment, we'll handle selection visually
        locationObjectName: 'SHAPE',
        resizable: false,
        rotatable: false,
        dragComputation: (part, pt, gridpt) => {
          const cellSize = 100;
          const offset = 50;
          const x = Math.round((pt.x - offset) / cellSize) * cellSize + offset;
          const y = Math.round((pt.y - offset) / cellSize) * cellSize + offset;
          return new go.Point(x, y);
        },
        // Show ports on mouse enter (make them visible by changing colors)
        mouseEnter: (e, node) => {
          e.diagram.skipsUndoManager = true;
          const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
          portIds.forEach((id) => {
            const port = node.findObject(`PORT_${id}`);
            if (port) {
              port.fill = 'rgba(66, 133, 244, 0.7)';
              port.stroke = '#2962ff';
            }
          });
          e.diagram.skipsUndoManager = false;
        },
        // Hide ports on mouse leave (make them transparent)
        mouseLeave: (e, node) => {
          if (!e.diagram.toolManager.linkingTool.isActive && !e.diagram.toolManager.relinkingTool.isActive) {
            e.diagram.skipsUndoManager = true;
            const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            portIds.forEach((id) => {
              const port = node.findObject(`PORT_${id}`);
              if (port) {
                port.fill = 'transparent';
                port.stroke = 'transparent';
              }
            });
            e.diagram.skipsUndoManager = false;
          }
        },
        // Show ports when dragging a link over this node
        mouseDragEnter: (e, node) => {
          e.diagram.skipsUndoManager = true;
          const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
          portIds.forEach((id) => {
            const port = node.findObject(`PORT_${id}`);
            if (port) {
              port.fill = 'rgba(66, 133, 244, 0.7)';
              port.stroke = '#2962ff';
            }
          });
          e.diagram.skipsUndoManager = false;
        },
        // Hide ports when dragging a link away from this node
        mouseDragLeave: (e, node) => {
          e.diagram.skipsUndoManager = true;
          const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
          portIds.forEach((id) => {
            const port = node.findObject(`PORT_${id}`);
            if (port) {
              port.fill = 'transparent';
              port.stroke = 'transparent';
            }
          });
          e.diagram.skipsUndoManager = false;
        },
      },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      // Room fill (rendered first, below everything)
      $(
        go.Shape,
        'Square',
        {
          name: 'SHAPE',
          width: 100,
          height: 100,
          strokeWidth: 0,
          cursor: 'move',
          fromLinkable: false,
          toLinkable: false,
        },
        new go.Binding('fill', 'fillColor'),
      ),
      // Room border (separate shape so ports can render on top of it)
      $(
        go.Shape,
        'Square',
        {
          width: 100,
          height: 100,
          fill: 'transparent',
          strokeWidth: 2,
          cursor: 'move',
        },
        new go.Binding('stroke', 'borderColor'),
      ),
      // Selection highlight (renders before ports so they stay on top)
      $(
        go.Shape,
        'Square',
        {
          width: 104,
          height: 104,
          fill: null,
          stroke: '#4285f4',
          strokeWidth: 3,
          visible: false,
        },
        new go.Binding('visible', 'isSelected').ofObject(),
      ),
      // Room symbol/character
      $(
        go.TextBlock,
        {
          font: '24px monospace',
          stroke: '#000',
          alignment: go.Spot.Center,
        },
        new go.Binding('text', 'symbol'),
        new go.Binding('font', '', (data) => {
          const size = data.fontSize || 24;
          const family = data.fontFamily || 'monospace';
          const bold = data.fontBold ? 'bold ' : '';
          const italic = data.fontItalic ? 'italic ' : '';
          return `${italic}${bold}${size}px ${family}`;
        }),
      ),
      // 8 connection ports - centered on room edges
      makePort('N', new go.Spot(0.5, 0)),
      makePort('NE', new go.Spot(1, 0)),
      makePort('E', new go.Spot(1, 0.5)),
      makePort('SE', new go.Spot(1, 1)),
      makePort('S', new go.Spot(0.5, 1)),
      makePort('SW', new go.Spot(0, 1)),
      makePort('W', new go.Spot(0, 0.5)),
      makePort('NW', new go.Spot(0, 0)),
    );

    // Define custom arrowhead geometries for perpendicular lines
    // Adjust y-coordinates to center the line on the link path
    go.Shape.defineArrowheadGeometry('Line', 'M0 8 L0 -8'); // Single perpendicular line
    go.Shape.defineArrowheadGeometry('DoubleLine', 'M0 8 L0 -8 M-4 8 L-4 -8'); // Two parallel lines

    // Custom link selection adornment (just shows the relinking handles, no mid-segment handle)
    const linkSelectionAdornmentTemplate = $(
      go.Adornment,
      'Link',
      $(go.Shape, { isPanelMain: true, stroke: '#4285f4', strokeWidth: 3 }),
    );

    // Define link template for connections
    diagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.Normal, // Straight lines work best with port connections
        corner: 0,
        relinkableFrom: true,
        relinkableTo: true,
        reshapable: false,
        resegmentable: false,
        selectionAdornmentTemplate: linkSelectionAdornmentTemplate,
        adjusting: go.Link.None, // Don't auto-adjust when nodes move
        fromShortLength: -8, // Extend line to reach room edge
        toShortLength: -8,
      },
      new go.Binding('fromPortId', 'fromPort').makeTwoWay(),
      new go.Binding('toPortId', 'toPort').makeTwoWay(),
      $(go.Shape, { strokeWidth: 2 }, new go.Binding('stroke', 'color'), new go.Binding('strokeDashArray', 'dash')),
      // "From" end decoration (arrow, line, or double line)
      $(
        go.Shape,
        {
          segmentIndex: 0,
          scale: 1.8,
          fill: '#000',
          stroke: '#000',
          strokeWidth: 2,
          visible: false,
        },
        // Convert 'Standard' to 'Backward' for from-end arrows
        new go.Binding('fromArrow', 'fromDecor', (d) => (d === 'Standard' ? 'Backward' : d)),
        new go.Binding('visible', 'fromDecor', (d) => !!d),
        new go.Binding('segmentOffset', 'fromDecor', (d) => {
          if (d === 'Line' || d === 'DoubleLine') return new go.Point(-4, 0);
          return new go.Point(-8, 0);
        }),
      ),
      // "To" end decoration (arrow, line, or double line)
      $(
        go.Shape,
        {
          segmentIndex: -1,
          scale: 1.8,
          fill: '#000',
          stroke: '#000',
          strokeWidth: 2,
          visible: false,
        },
        new go.Binding('toArrow', 'toDecor'),
        new go.Binding('visible', 'toDecor', (d) => !!d),
        new go.Binding('segmentOffset', 'toDecor', (d) => {
          if (d === 'Line' || d === 'DoubleLine') return new go.Point(4, 0);
          return new go.Point(8, 0);
        }),
      ),
      // Connection label (positioned above the line)
      $(
        go.TextBlock,
        {
          name: 'LABEL',
          visible: false,
          segmentOffset: new go.Point(0, -12), // Position above the line
          font: '24px monospace',
        },
        new go.Binding('visible', 'label', (l) => !!l),
        new go.Binding('text', 'label'),
        new go.Binding('font', '', (data) => {
          const size = data.fontSize || 24;
          const family = data.fontFamily || 'monospace';
          const bold = data.fontBold ? 'bold ' : '';
          const italic = data.fontItalic ? 'italic ' : '';
          return `${italic}${bold}${size}px ${family}`;
        }),
      ),
    );

    // Initialize with empty model (with port ID properties configured)
    diagram.model = new go.GraphLinksModel({
      linkKeyProperty: 'key',
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray: [],
      linkDataArray: [],
    });
    diagram.nextRoomKey = 1;

    // Try to load saved map from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const saveData = JSON.parse(saved);
        diagram.model = diagram.model.constructor.fromJson(saveData.model);
        diagram.nextRoomKey = saveData.nextRoomKey || 1;
      }
    } catch (err) {
      console.warn('Failed to load map from localStorage:', err);
    }

    // Helper to show/hide all ports on all nodes (using colors, not visibility)
    const setAllPortsVisible = (visible) => {
      diagram.skipsUndoManager = true;
      const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      diagram.nodes.each((node) => {
        portIds.forEach((id) => {
          const port = node.findObject(`PORT_${id}`);
          if (port) {
            if (visible) {
              port.fill = 'rgba(66, 133, 244, 0.7)';
              port.stroke = '#2962ff';
            } else {
              port.fill = 'transparent';
              port.stroke = 'transparent';
            }
          }
        });
      });
      diagram.skipsUndoManager = false;
    };

    // Show all ports when linking tool activates
    diagram.toolManager.linkingTool.doActivate = function () {
      go.LinkingTool.prototype.doActivate.call(this);
      setAllPortsVisible(true);
    };

    // Hide all ports when linking tool deactivates
    diagram.toolManager.linkingTool.doDeactivate = function () {
      go.LinkingTool.prototype.doDeactivate.call(this);
      setAllPortsVisible(false);
    };

    // Same for relinking tool
    diagram.toolManager.relinkingTool.doActivate = function () {
      go.RelinkingTool.prototype.doActivate.call(this);
      setAllPortsVisible(true);
    };

    diagram.toolManager.relinkingTool.doDeactivate = function () {
      go.RelinkingTool.prototype.doDeactivate.call(this);
      setAllPortsVisible(false);
    };

    // Custom scroll/zoom handling: Command+scroll on Mac, Ctrl+scroll on Windows for zoom
    diagram.toolManager.mouseWheelBehavior = go.ToolManager.WheelNone;
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    const handleWheel = (e) => {
      e.preventDefault();
      const zoomModifier = isMac ? e.metaKey : e.ctrlKey;

      if (zoomModifier) {
        // Zoom
        const oldScale = diagram.scale;
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = oldScale * delta;
        diagram.scale = Math.max(0.1, Math.min(5, newScale));
      } else if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal pan (shift+scroll or trackpad horizontal gesture)
        const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        const dir = delta > 0 ? 'right' : 'left';
        diagram.scroll('pixel', dir, Math.abs(delta));
      } else {
        // Vertical pan
        const dir = e.deltaY > 0 ? 'down' : 'up';
        diagram.scroll('pixel', dir, Math.abs(e.deltaY));
      }
    };

    diagramDivRef.current.addEventListener('wheel', handleWheel, { passive: false });

    diagramRef.current = diagram;
    if (onDiagramInit) {
      onDiagramInit(diagram);
    }

    // Handle background clicks
    diagram.addDiagramListener('BackgroundSingleClicked', (e) => {
      const pt = e.diagram.lastInput.documentPoint;
      const cellSize = 100;
      const offset = 50;
      const x = Math.round((pt.x - offset) / cellSize) * cellSize + offset;
      const y = Math.round((pt.y - offset) / cellSize) * cellSize + offset;

      // Check if room already exists at this location
      let roomExists = false;
      e.diagram.nodes.each((node) => {
        const nodeLoc = node.location;
        if (nodeLoc.x === x && nodeLoc.y === y) {
          roomExists = true;
        }
      });

      if (!roomExists) {
        // In Add Room mode, create room immediately
        if (toolModeRef.current === 'addRoom') {
          createRoomAt(e.diagram, x, y);
        } else {
          // In Select mode, just clear selection
          setSelectionType('none');
          setSelectedGridSquare(null);
          setSelectedObject(null);
        }
      } else {
        // Clear selection if clicking on occupied square
        setSelectionType('none');
        setSelectedGridSquare(null);
        setSelectedObject(null);
      }
    });

    // Handle selection changes
    diagram.addDiagramListener('ChangedSelection', (e) => {
      const selection = e.diagram.selection;
      if (selection.count === 0) {
        setSelectionType('none');
        setSelectedGridSquare(null);
        setSelectedObject(null);
      } else if (selection.count === 1) {
        const selected = selection.first();
        if (selected instanceof go.Node) {
          setSelectionType('room');
          setSelectedObject(selected);
          setSelectedGridSquare(null);
        } else if (selected instanceof go.Link) {
          setSelectionType('connection');
          setSelectedObject(selected);
          setSelectedGridSquare(null);
        }
      } else {
        // Multiple selection
        setSelectionType('multiple');
        setSelectedObject(null);
        setSelectedGridSquare(null);
      }
    });

    // Listen for model changes to update undo/redo state and auto-save
    diagram.addModelChangedListener((e) => {
      // Update undo/redo state after any model change
      updateUndoRedoState(diagram);

      // Auto-save to localStorage when a transaction is committed
      if (
        e.change === go.ChangedEvent.Transaction &&
        (e.propertyName === 'CommittedTransaction' || e.propertyName === 'FinishedUndo' || e.propertyName === 'FinishedRedo')
      ) {
        try {
          const saveData = {
            model: diagram.model.toJson(),
            nextRoomKey: diagram.nextRoomKey,
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
        } catch (err) {
          console.warn('Failed to auto-save map to localStorage:', err);
        }
      }
    });

    // Initial undo/redo state
    updateUndoRedoState(diagram);

    // Cleanup
    return () => {
      if (diagramDivRef.current) {
        diagramDivRef.current.removeEventListener('wheel', handleWheel);
      }
      if (diagramRef.current) {
        diagramRef.current.div = null;
      }
    };
  }, [onDiagramInit, setSelectionType, setSelectedGridSquare, setSelectedObject, createRoomAt, updateUndoRedoState]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const diagram = diagramRef.current;
      if (!diagram) return;

      // Tool mode shortcuts
      if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        setToolMode('select');
        return;
      }
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        setToolMode('addRoom');
        return;
      }
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setToolMode('pan');
        return;
      }

      // T to open text dialog when a room or connection is selected
      if ((e.key === 't' || e.key === 'T') && (selectionType === 'room' || selectionType === 'connection')) {
        e.preventDefault();
        if (onOpenTextDialog) {
          onOpenTextDialog();
        }
        return;
      }

      // Escape to return to select mode and clear selection
      if (e.key === 'Escape') {
        setToolMode('select');
        diagram.clearSelection();
        setSelectionType('none');
        setSelectedGridSquare(null);
        setSelectedObject(null);
        return;
      }

      // Delete key
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedObject) {
          diagram.commandHandler.deleteSelection();
        }
        return;
      }

      // Ctrl/Cmd shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'z':
            e.preventDefault();
            e.stopPropagation(); // Prevent GoJS from also handling this
            if (e.shiftKey) {
              diagram.commandHandler.redo();
            } else {
              diagram.commandHandler.undo();
            }
            break;
          case 'y':
            e.preventDefault();
            e.stopPropagation(); // Prevent GoJS from also handling this
            diagram.commandHandler.redo();
            break;
          default:
            break;
        }
        return;
      }

      // Numpad shortcuts for creating rooms (only in addRoom mode with a room selected)
      // Check both e.key and handle numpad-specific key names
      if (toolModeRef.current === 'addRoom' && selectionType === 'room' && selectedObject) {
        // Map numpad-specific key names to our direction keys
        let key = e.key;
        if (e.code === 'NumpadAdd') key = '+';
        if (e.code === 'NumpadSubtract') key = '-';

        const direction = NUMPAD_DIRECTIONS[key];
        if (direction) {
          e.preventDefault();
          e.stopPropagation();
          createRoomWithLink(diagram, selectedObject, direction);
          return;
        }
      }
    };

    // Use capture phase to intercept events before GoJS or browser handles them
    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [
    setToolMode,
    setSelectionType,
    setSelectedGridSquare,
    setSelectedObject,
    selectedObject,
    selectionType,
    createRoomWithLink,
    onOpenTextDialog,
  ]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        border: '1px solid #ccc',
        borderRadius: 1,
        overflow: 'hidden',
        backgroundColor: '#fff',
        cursor: toolMode === 'addRoom' ? 'crosshair' : toolMode === 'pan' ? 'grab' : 'default',
      }}>
      <div
        ref={diagramDivRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: toolMode === 'addRoom' ? 'crosshair' : toolMode === 'pan' ? 'grab' : 'default',
        }}
      />
    </Box>
  );
};

export default MapperCanvas;
