import React, { useEffect, useRef, useCallback } from 'react';
import * as go from 'gojs';
import { Box } from '@mui/material';

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
  onUndoRedoChange
}) => {
  const diagramDivRef = useRef(null);
  const diagramRef = useRef(null);
  const toolModeRef = useRef(toolMode);

  // Keep toolModeRef in sync with toolMode prop
  useEffect(() => {
    toolModeRef.current = toolMode;
  }, [toolMode]);

  // Helper to create a room at given coordinates
  const createRoomAt = useCallback((diagram, x, y) => {
    const nextKey = diagram.nextRoomKey || 1;
    diagram.model.addNodeData({
      key: nextKey,
      loc: `${x} ${y}`,
      fillColor: defaultFillColor,
      borderColor: defaultBorderColor,
      symbol: ''
    });
    diagram.nextRoomKey = nextKey + 1;

    // Find and select the newly created node
    const newNode = diagram.findNodeForKey(nextKey);
    if (newNode) {
      diagram.select(newNode);
    }

    // Switch back to select mode
    setToolMode('select');
  }, [defaultFillColor, defaultBorderColor, setToolMode]);

  // Helper to update undo/redo state
  const updateUndoRedoState = useCallback((diagram) => {
    if (onUndoRedoChange && diagram) {
      onUndoRedoChange({
        canUndo: diagram.undoManager.canUndo(),
        canRedo: diagram.undoManager.canRedo()
      });
    }
  }, [onUndoRedoChange]);

  useEffect(() => {
    if (!diagramDivRef.current) return;

    const $ = go.GraphObject.make;

    // Create port shape - centered on the room edge
    // Links connect to the center of the port, which sits exactly on the room edge
    const makePort = (portId, alignment) => {
      return $(go.Shape, 'Circle', {
        name: `PORT_${portId}`,
        desiredSize: new go.Size(16, 16),  // Large enough to click
        fill: 'transparent',
        stroke: 'transparent',
        portId: portId,
        fromSpot: go.Spot.Center,  // Links connect to center of port
        toSpot: go.Spot.Center,    // which is at the room edge
        fromLinkable: true,
        toLinkable: true,
        fromLinkableDuplicates: true,
        toLinkableDuplicates: true,
        fromEndSegmentLength: 0,
        toEndSegmentLength: 0,
        alignment: alignment,
        alignmentFocus: go.Spot.Center,  // Center of port sits at room edge
        cursor: 'crosshair'
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
      model: new go.GraphLinksModel({
        linkKeyProperty: 'key',
        linkFromPortIdProperty: 'fromPort',  // Save port ID when link created
        linkToPortIdProperty: 'toPort',      // Save port ID when link created
        nodeDataArray: [],
        linkDataArray: []
      })
    });

    // Define room node template with hover-visible ports
    diagram.nodeTemplate =
      $(go.Node, 'Spot',
        {
          locationSpot: go.Spot.Center,
          selectionAdorned: true,
          selectionObjectName: 'SHAPE',
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
            const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            portIds.forEach(id => {
              const port = node.findObject(`PORT_${id}`);
              if (port) {
                port.fill = 'rgba(66, 133, 244, 0.7)';
                port.stroke = '#2962ff';
              }
            });
          },
          // Hide ports on mouse leave (make them transparent)
          mouseLeave: (e, node) => {
            if (!e.diagram.toolManager.linkingTool.isActive &&
                !e.diagram.toolManager.relinkingTool.isActive) {
              const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
              portIds.forEach(id => {
                const port = node.findObject(`PORT_${id}`);
                if (port) {
                  port.fill = 'transparent';
                  port.stroke = 'transparent';
                }
              });
            }
          },
          // Show ports when dragging a link over this node
          mouseDragEnter: (e, node) => {
            const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            portIds.forEach(id => {
              const port = node.findObject(`PORT_${id}`);
              if (port) {
                port.fill = 'rgba(66, 133, 244, 0.7)';
                port.stroke = '#2962ff';
              }
            });
          },
          // Hide ports when dragging a link away from this node
          mouseDragLeave: (e, node) => {
            const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            portIds.forEach(id => {
              const port = node.findObject(`PORT_${id}`);
              if (port) {
                port.fill = 'transparent';
                port.stroke = 'transparent';
              }
            });
          }
        },
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
        // Main square shape - NOT linkable, only ports are linkable
        $(go.Shape, 'Square',
          {
            name: 'SHAPE',
            width: 100,
            height: 100,
            strokeWidth: 2,
            cursor: 'move',
            fromLinkable: false,
            toLinkable: false
          },
          new go.Binding('fill', 'fillColor'),
          new go.Binding('stroke', 'borderColor')
        ),
        // Room symbol/character
        $(go.TextBlock,
          {
            font: 'bold 16px sans-serif',
            stroke: '#000',
            alignment: go.Spot.Center
          },
          new go.Binding('text', 'symbol')
        ),
        // 8 connection ports - centered on room edges
        makePort('N', new go.Spot(0.5, 0)),
        makePort('NE', new go.Spot(1, 0)),
        makePort('E', new go.Spot(1, 0.5)),
        makePort('SE', new go.Spot(1, 1)),
        makePort('S', new go.Spot(0.5, 1)),
        makePort('SW', new go.Spot(0, 1)),
        makePort('W', new go.Spot(0, 0.5)),
        makePort('NW', new go.Spot(0, 0))
      );

    // Define link template for connections
    diagram.linkTemplate =
      $(go.Link,
        {
          routing: go.Link.Normal,
          corner: 0,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: false,
          adjusting: go.Link.None, // Don't auto-adjust when nodes move
          fromShortLength: -8,  // Extend link endpoint 8px inward (port radius)
          toShortLength: -4     // Extend toward room, accounting for arrow head
        },
        new go.Binding('fromPortId', 'fromPort').makeTwoWay(),
        new go.Binding('toPortId', 'toPort').makeTwoWay(),
        $(go.Shape,
          { strokeWidth: 2 },
          new go.Binding('stroke', 'color'),
          new go.Binding('strokeDashArray', 'dash')
        ),
        $(go.Shape,
          {
            toArrow: 'Standard',
            scale: 1.5,
            fill: '#000',
            stroke: null,
            segmentOffset: new go.Point(8, 0)  // Move arrow 8px toward destination
          },
          new go.Binding('visible', 'showArrow')
        ),
        // Connection label
        $(go.Panel, 'Auto',
          $(go.Shape, 'RoundedRectangle',
            {
              fill: 'white',
              stroke: '#ccc',
              strokeWidth: 1
            },
            new go.Binding('visible', 'label', l => !!l)
          ),
          $(go.TextBlock,
            {
              margin: 3,
              font: 'bold 12px sans-serif',
              editable: true
            },
            new go.Binding('text', 'label').makeTwoWay(),
            new go.Binding('visible', 'label', l => !!l)
          )
        )
      );

    // Initialize with empty model (with port ID properties configured)
    diagram.model = new go.GraphLinksModel({
      linkKeyProperty: 'key',
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray: [],
      linkDataArray: []
    });
    diagram.nextRoomKey = 1;

    // Helper to show/hide all ports on all nodes (using colors, not visibility)
    const setAllPortsVisible = (visible) => {
      const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      diagram.nodes.each(node => {
        portIds.forEach(id => {
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
    };

    // Show all ports when linking tool activates
    diagram.toolManager.linkingTool.doActivate = function() {
      go.LinkingTool.prototype.doActivate.call(this);
      setAllPortsVisible(true);
    };

    // Hide all ports when linking tool deactivates
    diagram.toolManager.linkingTool.doDeactivate = function() {
      go.LinkingTool.prototype.doDeactivate.call(this);
      setAllPortsVisible(false);
    };

    // Same for relinking tool
    diagram.toolManager.relinkingTool.doActivate = function() {
      go.RelinkingTool.prototype.doActivate.call(this);
      setAllPortsVisible(true);
    };

    diagram.toolManager.relinkingTool.doDeactivate = function() {
      go.RelinkingTool.prototype.doDeactivate.call(this);
      setAllPortsVisible(false);
    };

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
      e.diagram.nodes.each(node => {
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
      }
    });

    // Listen for model changes to update undo/redo state
    diagram.addModelChangedListener((e) => {
      // Update undo/redo state after any model change
      updateUndoRedoState(diagram);
    });

    // Initial undo/redo state
    updateUndoRedoState(diagram);

    // Cleanup
    return () => {
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
            if (e.shiftKey) {
              diagram.commandHandler.redo();
            } else {
              diagram.commandHandler.undo();
            }
            break;
          case 'y':
            e.preventDefault();
            diagram.commandHandler.redo();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setToolMode, setSelectionType, setSelectedGridSquare, setSelectedObject, selectedObject]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        border: '1px solid #ccc',
        borderRadius: 1,
        overflow: 'hidden',
        backgroundColor: '#fff',
        cursor: toolMode === 'addRoom' ? 'crosshair' : 'default'
      }}
    >
      <div
        ref={diagramDivRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: toolMode === 'addRoom' ? 'crosshair' : 'default'
        }}
      />
    </Box>
  );
};

export default MapperCanvas;
