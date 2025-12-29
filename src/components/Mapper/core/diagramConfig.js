import * as go from 'gojs';

/**
 * Creates the base diagram configuration
 * @param {function} $ - GoJS GraphObject.make function
 * @param {HTMLElement} diagramDiv - The div element to attach the diagram to
 * @param {Object} options - Configuration options
 * @param {boolean} options.isEditable - Whether the diagram allows editing
 * @param {boolean} options.showGrid - Whether to show the grid
 */
export const createDiagramConfig = ($, diagramDiv, options = {}) => {
  const { isEditable = true, showGrid = true } = options;

  const config = {
    'undoManager.isEnabled': isEditable,
    'undoManager.maxHistoryLength': isEditable ? 100 : 0,
    'grid.visible': showGrid,
    'grid.gridCellSize': new go.Size(100, 100),
    'grid.gridOrigin': new go.Point(0, 0),
    initialContentAlignment: go.Spot.Center,
    allowDrop: isEditable,
    'animationManager.isEnabled': false,
    allowLink: isEditable,
    // Disable default panning - we'll control it via tool mode or custom handling
    'panningTool.isEnabled': false,
    'dragSelectingTool.isEnabled': isEditable,
  };

  // View-only specific settings
  if (!isEditable) {
    config.isReadOnly = true;
    config.allowMove = false;
    config.allowDelete = false;
    config.allowInsert = false;
    config.allowRelink = false;
    config.allowReshape = false;
    config.allowResize = false;
    config.allowRotate = false;
    // Enable panning in view mode
    config['panningTool.isEnabled'] = true;
  }

  return config;
};

/**
 * Creates a styled drag selecting tool box
 * @param {function} $ - GoJS GraphObject.make function
 */
export const createDragSelectingBox = ($) => {
  return $(
    go.Part,
    { layerName: 'Tool' },
    $(go.Shape, 'Rectangle', {
      fill: 'rgba(66, 133, 244, 0.1)',
      stroke: '#4285f4',
      strokeWidth: 1,
    }),
  );
};

/**
 * Creates a GraphLinksModel with port ID properties
 * @param {Object} data - Optional initial data
 * @param {Array} data.nodeDataArray - Initial node data
 * @param {Array} data.linkDataArray - Initial link data
 */
export const createModel = (data = {}) => {
  return new go.GraphLinksModel({
    linkKeyProperty: 'key',
    linkFromPortIdProperty: 'fromPort',
    linkToPortIdProperty: 'toPort',
    nodeDataArray: data.nodeDataArray || [],
    linkDataArray: data.linkDataArray || [],
  });
};

/**
 * Sets up custom scroll/zoom handling
 * @param {go.Diagram} diagram - The GoJS diagram
 * @param {HTMLElement} diagramDiv - The div element containing the diagram
 * @param {Object} options - Configuration options
 * @param {boolean} options.isEditable - Whether the diagram is editable (affects zoom behavior)
 */
export const setupScrollZoomHandling = (diagram, diagramDiv, options = {}) => {
  const { isEditable = true } = options;

  // Disable default wheel behavior
  diagram.toolManager.mouseWheelBehavior = go.ToolManager.WheelNone;

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomModifier = isMac ? e.metaKey : e.ctrlKey;

    if (zoomModifier || !isEditable) {
      // Zoom - always enabled in view mode, requires modifier in edit mode
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

  diagramDiv.addEventListener('wheel', handleWheel, { passive: false });

  // Return cleanup function
  return () => {
    diagramDiv.removeEventListener('wheel', handleWheel);
  };
};

/**
 * Sets up linking tool callbacks to show/hide ports
 * @param {go.Diagram} diagram - The GoJS diagram
 * @param {function} setAllPortsVisible - Function to show/hide all ports
 */
export const setupLinkingToolCallbacks = (diagram, setAllPortsVisible) => {
  // Show all ports when linking tool activates
  diagram.toolManager.linkingTool.doActivate = function () {
    go.LinkingTool.prototype.doActivate.call(this);
    setAllPortsVisible(diagram, true);
  };

  // Hide all ports when linking tool deactivates
  diagram.toolManager.linkingTool.doDeactivate = function () {
    go.LinkingTool.prototype.doDeactivate.call(this);
    setAllPortsVisible(diagram, false);
  };

  // Same for relinking tool
  diagram.toolManager.relinkingTool.doActivate = function () {
    go.RelinkingTool.prototype.doActivate.call(this);
    setAllPortsVisible(diagram, true);
  };

  diagram.toolManager.relinkingTool.doDeactivate = function () {
    go.RelinkingTool.prototype.doDeactivate.call(this);
    setAllPortsVisible(diagram, false);
  };
};
