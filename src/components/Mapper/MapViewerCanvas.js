import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as go from 'gojs';
import { Box } from '@mui/material';
import {
  createNodeTemplate,
  createLinkTemplate,
  registerArrowheadGeometries,
  createModel,
  setupScrollZoomHandling,
} from './core';

// Set GoJS license key from environment variable
if (process.env.REACT_APP_GOJS_LICENSE_KEY) {
  go.Diagram.licenseKey = process.env.REACT_APP_GOJS_LICENSE_KEY;
}

/**
 * MapViewerCanvas - A read-only GoJS diagram for viewing maps
 *
 * Props:
 * - data: { nodeDataArray, linkDataArray } - The map data to display
 * - onRoomClick: (roomData) => void - Callback when a room is clicked
 * - height: string - Height of the canvas (default: '100%')
 */
const MapViewerCanvas = forwardRef(({ data, onRoomClick, height = '100%' }, ref) => {
  const diagramDivRef = useRef(null);
  const diagramRef = useRef(null);

  // Expose diagram methods to parent via ref
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      const diagram = diagramRef.current;
      if (diagram) {
        diagram.scale = Math.min(diagram.scale * 1.2, 5);
      }
    },
    zoomOut: () => {
      const diagram = diagramRef.current;
      if (diagram) {
        diagram.scale = Math.max(diagram.scale / 1.2, 0.1);
      }
    },
    zoomToFit: () => {
      const diagram = diagramRef.current;
      if (diagram) {
        diagram.zoomToFit();
      }
    },
    resetView: () => {
      const diagram = diagramRef.current;
      if (diagram) {
        diagram.scale = 1;
        diagram.alignDocument(go.Spot.Center, go.Spot.Center);
      }
    },
  }));

  useEffect(() => {
    if (!diagramDivRef.current) return;

    const $ = go.GraphObject.make;

    // Register custom arrowhead geometries for links
    registerArrowheadGeometries();

    const diagram = $(go.Diagram, diagramDivRef.current, {
      // Read-only settings
      isReadOnly: true,
      allowMove: false,
      allowDelete: false,
      allowInsert: false,
      allowLink: false,
      allowRelink: false,
      allowReshape: false,
      allowResize: false,
      allowRotate: false,
      allowDrop: false,

      // Visual settings
      'grid.visible': false, // Hide grid in view mode
      initialContentAlignment: go.Spot.Center,
      'animationManager.isEnabled': false,

      // Enable panning
      'panningTool.isEnabled': true,
      'toolManager.mouseWheelBehavior': go.ToolManager.WheelNone, // We'll handle zoom ourselves

      model: createModel(),
    });

    // Use shared node template with view-only options and tooltips
    diagram.nodeTemplate = createNodeTemplate($, {
      isEditable: false,
      showTooltip: true,
    });

    // Use shared link template with view-only options
    diagram.linkTemplate = createLinkTemplate($, {
      isEditable: false,
    });

    // Handle room clicks
    diagram.addDiagramListener('ObjectSingleClicked', (e) => {
      const part = e.subject.part;
      if (part instanceof go.Node && onRoomClick) {
        onRoomClick(part.data);
      }
    });

    // Set up custom scroll/zoom handling (view-only mode)
    const cleanupScrollZoom = setupScrollZoomHandling(diagram, diagramDivRef.current, {
      isEditable: false,
    });

    diagramRef.current = diagram;

    // Cleanup
    return () => {
      cleanupScrollZoom();
      if (diagramRef.current) {
        diagramRef.current.div = null;
      }
    };
  }, [onRoomClick]);

  // Update diagram when data changes
  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram || !data) return;

    // Load the new data
    diagram.model = createModel({
      nodeDataArray: data.nodeDataArray || [],
      linkDataArray: data.linkDataArray || [],
    });

    // Fit content in view
    diagram.zoomToFit();
  }, [data]);

  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        backgroundColor: '#fff',
        cursor: 'grab',
        '&:active': {
          cursor: 'grabbing',
        },
      }}>
      <div
        ref={diagramDivRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
});

MapViewerCanvas.displayName = 'MapViewerCanvas';

export default MapViewerCanvas;
