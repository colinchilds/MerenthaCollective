import * as go from 'gojs';

/**
 * Creates a port shape for node connections
 * @param {function} $ - GoJS GraphObject.make function
 * @param {string} portId - Port identifier (N, NE, E, SE, S, SW, W, NW)
 * @param {go.Spot} alignment - Port alignment on the node
 * @param {Object} options - Configuration options
 * @param {boolean} options.isEditable - Whether ports should be linkable
 */
const makePort = ($, portId, alignment, options = {}) => {
  const { isEditable = true } = options;

  return $(go.Shape, 'Circle', {
    name: `PORT_${portId}`,
    desiredSize: new go.Size(16, 16),
    fill: 'transparent',
    stroke: 'transparent',
    portId: portId,
    fromSpot: go.Spot.Center,
    toSpot: go.Spot.Center,
    fromLinkable: isEditable,
    toLinkable: isEditable,
    fromLinkableDuplicates: isEditable,
    toLinkableDuplicates: isEditable,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    alignment: alignment,
    alignmentFocus: go.Spot.Center,
    cursor: isEditable ? 'crosshair' : 'default',
    background: 'transparent',
  });
};

/**
 * Creates port visibility handlers for hover effects
 * @param {boolean} isEditable - Whether to show ports on hover
 */
const createPortHandlers = (isEditable) => {
  if (!isEditable) {
    return {};
  }

  const portIds = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  const showPorts = (e, node) => {
    e.diagram.skipsUndoManager = true;
    portIds.forEach((id) => {
      const port = node.findObject(`PORT_${id}`);
      if (port) {
        port.fill = 'rgba(66, 133, 244, 0.7)';
        port.stroke = '#2962ff';
      }
    });
    e.diagram.skipsUndoManager = false;
  };

  const hidePorts = (e, node) => {
    if (!e.diagram.toolManager.linkingTool.isActive && !e.diagram.toolManager.relinkingTool.isActive) {
      e.diagram.skipsUndoManager = true;
      portIds.forEach((id) => {
        const port = node.findObject(`PORT_${id}`);
        if (port) {
          port.fill = 'transparent';
          port.stroke = 'transparent';
        }
      });
      e.diagram.skipsUndoManager = false;
    }
  };

  return {
    mouseEnter: showPorts,
    mouseLeave: hidePorts,
    mouseDragEnter: showPorts,
    mouseDragLeave: (e, node) => {
      e.diagram.skipsUndoManager = true;
      portIds.forEach((id) => {
        const port = node.findObject(`PORT_${id}`);
        if (port) {
          port.fill = 'transparent';
          port.stroke = 'transparent';
        }
      });
      e.diagram.skipsUndoManager = false;
    },
  };
};

/**
 * Creates the node template for rooms
 * @param {function} $ - GoJS GraphObject.make function
 * @param {Object} options - Configuration options
 * @param {boolean} options.isEditable - Whether the node is editable (draggable, linkable)
 * @param {boolean} options.showTooltip - Whether to show tooltip on hover
 */
export const createNodeTemplate = ($, options = {}) => {
  const { isEditable = true, showTooltip = false } = options;

  const portHandlers = createPortHandlers(isEditable);

  const nodeConfig = {
    locationSpot: go.Spot.Center,
    selectionAdorned: false,
    locationObjectName: 'SHAPE',
    resizable: false,
    rotatable: false,
    ...portHandlers,
  };

  // Add drag computation only for editable mode
  if (isEditable) {
    nodeConfig.dragComputation = (part, pt) => {
      const cellSize = 100;
      const offset = 50;
      const x = Math.round((pt.x - offset) / cellSize) * cellSize + offset;
      const y = Math.round((pt.y - offset) / cellSize) * cellSize + offset;
      return new go.Point(x, y);
    };
  }

  const nodeElements = [
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
        cursor: isEditable ? 'move' : 'pointer',
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
        cursor: isEditable ? 'move' : 'pointer',
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
      new go.Binding('text', 'text'),
      new go.Binding('font', '', (data) => {
        const size = data.fontSize || 24;
        const family = data.fontFamily || 'monospace';
        const bold = data.fontBold ? 'bold ' : '';
        const italic = data.fontItalic ? 'italic ' : '';
        return `${italic}${bold}${size}px ${family}`;
      }),
    ),
    // 8 connection ports - centered on room edges
    makePort($, 'N', new go.Spot(0.5, 0), { isEditable }),
    makePort($, 'NE', new go.Spot(1, 0), { isEditable }),
    makePort($, 'E', new go.Spot(1, 0.5), { isEditable }),
    makePort($, 'SE', new go.Spot(1, 1), { isEditable }),
    makePort($, 'S', new go.Spot(0.5, 1), { isEditable }),
    makePort($, 'SW', new go.Spot(0, 1), { isEditable }),
    makePort($, 'W', new go.Spot(0, 0.5), { isEditable }),
    makePort($, 'NW', new go.Spot(0, 0), { isEditable }),
  ];

  // Add tooltip for view-only mode
  if (showTooltip) {
    nodeConfig.toolTip = $(
      go.Adornment,
      'Auto',
      $(go.Shape, { fill: '#FFFFCC', stroke: '#666', strokeWidth: 1 }),
      $(
        go.TextBlock,
        { margin: 6, font: '13px sans-serif' },
        new go.Binding('text', '', (data) => {
          const info = data.roomInfo || {};
          const lines = [];
          if (info.name) lines.push(info.name);
          if (info.exits && info.exits.length > 0) {
            lines.push(`Exits: ${info.exits.join(', ')}`);
          }
          return lines.join('\n') || data.text || 'Room';
        }),
      ),
    );
  }

  return $(go.Node, 'Spot', nodeConfig, ...nodeElements);
};

/**
 * Helper to show/hide all ports on all nodes
 * @param {go.Diagram} diagram - The GoJS diagram
 * @param {boolean} visible - Whether ports should be visible
 */
export const setAllPortsVisible = (diagram, visible) => {
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
