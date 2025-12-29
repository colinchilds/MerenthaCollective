import React, { useEffect, useRef, useCallback } from 'react';
import * as go from 'gojs';
import { Box } from '@mui/material';
import {
  createNodeTemplate,
  setAllPortsVisible,
  createLinkTemplate,
  registerArrowheadGeometries,
  createDragSelectingBox,
  createModel,
  setupScrollZoomHandling,
  setupLinkingToolCallbacks,
} from './core';

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
  '+': { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW', fromLabel: '+', toLabel: '-', labelOrientation: 'horizontal' }, // Up
  '-': { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE', fromLabel: '-', toLabel: '+', labelOrientation: 'horizontal' }, // Down
};

// Speedwalk direction mappings: text command -> direction config
// Used when pasting speedwalk strings like "n;e;s;w;u;d"
const SPEEDWALK_DIRECTIONS = {
  n: { dx: 0, dy: -200, fromPort: 'N', toPort: 'S' },
  north: { dx: 0, dy: -200, fromPort: 'N', toPort: 'S' },
  ne: { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW' },
  northeast: { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW' },
  e: { dx: 200, dy: 0, fromPort: 'E', toPort: 'W' },
  east: { dx: 200, dy: 0, fromPort: 'E', toPort: 'W' },
  se: { dx: 200, dy: 200, fromPort: 'SE', toPort: 'NW' },
  southeast: { dx: 200, dy: 200, fromPort: 'SE', toPort: 'NW' },
  s: { dx: 0, dy: 200, fromPort: 'S', toPort: 'N' },
  south: { dx: 0, dy: 200, fromPort: 'S', toPort: 'N' },
  sw: { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE' },
  southwest: { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE' },
  w: { dx: -200, dy: 0, fromPort: 'W', toPort: 'E' },
  west: { dx: -200, dy: 0, fromPort: 'W', toPort: 'E' },
  nw: { dx: -200, dy: -200, fromPort: 'NW', toPort: 'SE' },
  northwest: { dx: -200, dy: -200, fromPort: 'NW', toPort: 'SE' },
  u: { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW', fromLabel: '+', toLabel: '-', labelOrientation: 'horizontal' },
  up: { dx: 200, dy: -200, fromPort: 'NE', toPort: 'SW', fromLabel: '+', toLabel: '-', labelOrientation: 'horizontal' },
  d: { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE', fromLabel: '-', toLabel: '+', labelOrientation: 'horizontal' },
  down: { dx: -200, dy: 200, fromPort: 'SW', toPort: 'NE', fromLabel: '-', toLabel: '+', labelOrientation: 'horizontal' },
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
  // Stack to track source room keys when creating rooms via numpad (for undo selection restoration)
  const sourceRoomKeyStackRef = useRef([]);
  // Ref for onOpenTextDialog to avoid re-running useEffect when callback changes
  const onOpenTextDialogRef = useRef(onOpenTextDialog);

  // Keep refs in sync with props
  useEffect(() => {
    onOpenTextDialogRef.current = onOpenTextDialog;
  }, [onOpenTextDialog]);

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
          text: '',
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
            const linkData = {
              from: sourceKey,
              to: targetKey,
              fromPort: direction.fromPort,
              toPort: direction.toPort,
              color: '#000000',
            };
            // Add labels if specified in direction (for up/down)
            if (direction.fromLabel) linkData.fromLabel = direction.fromLabel;
            if (direction.toLabel) linkData.toLabel = direction.toLabel;
            if (direction.labelOrientation) linkData.labelOrientation = direction.labelOrientation;
            m.addLinkData(linkData);
          }, 'add link');
        }

        diagram.select(existingNode);
        return;
      }

      // Create the new room and link
      const nextKey = diagram.nextRoomKey || 1;
      const sourceKey = sourceNode.data.key;
      // Track source room for undo selection restoration
      sourceRoomKeyStackRef.current.push(sourceKey);
      diagram.model.commit((m) => {
        m.addNodeData({
          key: nextKey,
          loc: `${targetX} ${targetY}`,
          fillColor: defaultFillColor,
          borderColor: defaultBorderColor,
          text: '',
        });
        const linkData = {
          from: sourceKey,
          to: nextKey,
          fromPort: direction.fromPort,
          toPort: direction.toPort,
          color: '#000000',
        };
        // Add labels if specified in direction (for up/down)
        if (direction.fromLabel) linkData.fromLabel = direction.fromLabel;
        if (direction.toLabel) linkData.toLabel = direction.toLabel;
        if (direction.labelOrientation) linkData.labelOrientation = direction.labelOrientation;
        m.addLinkData(linkData);
      }, 'add room with link');
      diagram.nextRoomKey = nextKey + 1;

      // Find and select the newly created node (outside transaction)
      const newNode = diagram.findNodeForKey(nextKey);
      if (newNode) {
        diagram.select(newNode);
        // Scroll to make the new room visible if it's outside the viewport
        diagram.commandHandler.scrollToPart(newNode);
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

    // Register custom arrowhead geometries
    registerArrowheadGeometries();

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
      'dragSelectingTool.box': createDragSelectingBox($),
      // Disable default panning - we'll control it via tool mode
      'panningTool.isEnabled': false,
      'dragSelectingTool.isEnabled': true,
      model: createModel(),
    });

    // Define room node template using shared template
    diagram.nodeTemplate = createNodeTemplate($, { isEditable: true, showTooltip: false });

    // Define link template using shared template
    diagram.linkTemplate = createLinkTemplate($, { isEditable: true });

    // Initialize with empty model
    diagram.model = createModel();
    diagram.nextRoomKey = 1;

    // Try to load saved map from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const saveData = JSON.parse(saved);
        diagram.model = diagram.model.constructor.fromJson(saveData.model);
        diagram.nextRoomKey = saveData.nextRoomKey || 1;
        // Migrate old 'label' property to 'fromLabel' for backward compatibility
        diagram.model.linkDataArray.forEach((link) => {
          if (link.label && !link.fromLabel) {
            diagram.model.setDataProperty(link, 'fromLabel', link.label);
            diagram.model.setDataProperty(link, 'label', undefined);
          }
        });
        // Fit all content in view after loading
        diagram.zoomToFit();
      }
    } catch (err) {
      console.warn('Failed to load map from localStorage:', err);
    }

    // Set up linking tool callbacks to show/hide ports
    setupLinkingToolCallbacks(diagram, setAllPortsVisible);

    // Set up custom scroll/zoom handling
    const cleanupScrollZoom = setupScrollZoomHandling(diagram, diagramDivRef.current, { isEditable: true });

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

    // Handle double-click on nodes or links to open text dialog
    diagram.addDiagramListener('ObjectDoubleClicked', (e) => {
      const part = e.subject.part;
      if (part instanceof go.Node || part instanceof go.Link) {
        if (onOpenTextDialogRef.current) {
          onOpenTextDialogRef.current();
        }
      }
    });

    // Listen for model changes to update undo/redo state and auto-save
    diagram.addModelChangedListener((e) => {
      // Update undo/redo state after any model change
      updateUndoRedoState(diagram);

      // Handle selection restoration after undoing room creation
      if (e.change === go.ChangedEvent.Transaction && e.propertyName === 'FinishedUndo') {
        // Check if this was an 'add room with link' transaction
        const transaction = e.object;
        if (transaction && transaction.name === 'add room with link') {
          // Pop the source room key from our stack and select it
          const sourceKey = sourceRoomKeyStackRef.current.pop();
          if (sourceKey !== undefined) {
            const sourceNode = diagram.findNodeForKey(sourceKey);
            if (sourceNode) {
              diagram.select(sourceNode);
              diagram.commandHandler.scrollToPart(sourceNode);
            }
          }
        }
      }

      // Handle redo of room creation - restore the source key to the stack and select the new room
      if (e.change === go.ChangedEvent.Transaction && e.propertyName === 'FinishedRedo') {
        const transaction = e.object;
        if (transaction && transaction.name === 'add room with link') {
          // Find the source and target room keys from the transaction's link data
          let sourceKey = null;
          let targetKey = null;
          transaction.changes.each((change) => {
            if (change.model && change.propertyName === 'linkDataArray' && change.newValue) {
              const linkData = change.newValue;
              if (linkData.from !== undefined) {
                sourceKey = linkData.from;
              }
              if (linkData.to !== undefined) {
                targetKey = linkData.to;
              }
            }
          });
          // Push source key back to stack for future undos
          if (sourceKey !== null) {
            sourceRoomKeyStackRef.current.push(sourceKey);
          }
          // Select the newly created room and scroll to it
          if (targetKey !== null) {
            const newNode = diagram.findNodeForKey(targetKey);
            if (newNode) {
              diagram.select(newNode);
              diagram.commandHandler.scrollToPart(newNode);
            }
          }
        }
      }

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
      cleanupScrollZoom();
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

      // Tool mode shortcuts (don't capture if command/ctrl pressed - allow browser shortcuts like Cmd+V)
      if ((e.key === 'v' || e.key === 'V') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setToolMode('select');
        return;
      }
      if ((e.key === 'r' || e.key === 'R') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setToolMode('addRoom');
        return;
      }
      if ((e.key === 'h' || e.key === 'H') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setToolMode('pan');
        return;
      }

      // T to open text dialog when a room or connection is selected (don't capture Cmd+T)
      if (
        (e.key === 't' || e.key === 'T') &&
        !e.metaKey &&
        !e.ctrlKey &&
        (selectionType === 'room' || selectionType === 'connection')
      ) {
        e.preventDefault();
        if (onOpenTextDialog) {
          onOpenTextDialog();
        }
        return;
      }

      // Escape to clear selection (but keep current tool mode)
      if (e.key === 'Escape') {
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
          case 'v':
            // Handle speedwalk paste in addRoom mode with a room selected
            if (toolModeRef.current === 'addRoom' && selectionType === 'room' && selectedObject) {
              e.preventDefault();
              e.stopPropagation();
              navigator.clipboard
                .readText()
                .then((pastedText) => {
                  if (!pastedText) return;

                  // Parse speedwalk: split by semicolons and filter valid directions
                  const commands = pastedText
                    .toLowerCase()
                    .split(';')
                    .map((cmd) => cmd.trim())
                    .filter((cmd) => cmd && SPEEDWALK_DIRECTIONS[cmd]);

                  if (commands.length === 0) return;

                  // Wrap all room creations in a single transaction for undo
                  diagram.startTransaction('import speedwalk');

                  // Process each direction sequentially
                  let currentNode = selectedObject;
                  commands.forEach((cmd) => {
                    const direction = SPEEDWALK_DIRECTIONS[cmd];
                    if (direction && currentNode) {
                      createRoomWithLink(diagram, currentNode, direction);
                      // Get the newly selected node for the next iteration
                      currentNode = diagram.selection.first();
                    }
                  });

                  diagram.commitTransaction('import speedwalk');
                })
                .catch((err) => {
                  console.warn('Failed to read clipboard:', err);
                });
            }
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
