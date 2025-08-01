import React, { useEffect, useRef, useCallback } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { Box, Button } from '@mui/material';
import { Sailing } from '@mui/icons-material';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';

import { WORLD_DATA, WORLD_ANNOTATIONS, WORLD_COLORS } from './WorldMap.data';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'World Map', isActive: true },
];

const BLOCK_SIZE = 40;
const BLOCK_SIZE_HALF = BLOCK_SIZE / 2;
const GRID_WIDTH = 152;
const GRID_HEIGHT = 152;
const ORIGIN_X = 60;
const ORIGIN_Y = 31;
const ZOOM_LEVELS = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

const initialScale = ZOOM_LEVELS[0];
let currentZoomIndex = ZOOM_LEVELS.indexOf(initialScale); // default to 0.1x

let pinnedAnnotation;

export default function WorldMap() {
  const layerRef = useRef(null);
  const stageRef = useRef(null);
  let [isShip, setIsShip] = React.useState(true);
  let [isBalloon, setIsBalloon] = React.useState(true);

  function add_triangle_marker(rectX, rectY, corner) {
    let points;
    if (corner === 'nw') {
      points = [
        rectX,
        rectY, // Point 1: near top-left
        rectX + BLOCK_SIZE_HALF,
        rectY, // Point 2: right of point 1
        rectX,
        rectY + BLOCK_SIZE_HALF, // Point 3: below point 1
      ];
    } else if (corner === 'sw') {
      points = [
        rectX,
        rectY + BLOCK_SIZE, // Point 1: near bottom-left
        rectX + BLOCK_SIZE_HALF,
        rectY + BLOCK_SIZE, // Point 2: right of point 1
        rectX,
        rectY + BLOCK_SIZE_HALF, // Point 3: above point 1
      ];
    } else if (corner === 'ne') {
      points = [
        rectX + BLOCK_SIZE,
        rectY, // Point 1: near top-right
        rectX + BLOCK_SIZE,
        rectY + BLOCK_SIZE_HALF, // Point 2: left of point 1
        rectX + BLOCK_SIZE_HALF,
        rectY, // Point 3: below point 1
      ];
    } else if (corner === 'se') {
      points = [
        rectX + BLOCK_SIZE,
        rectY + BLOCK_SIZE, // Point 1: near bottom-right
        rectX + BLOCK_SIZE_HALF,
        rectY + BLOCK_SIZE, // Point 2: left of point 1
        rectX + BLOCK_SIZE,
        rectY + BLOCK_SIZE_HALF, // Point 3: below point 1
      ];
    }
    return new Konva.Line({
      points: points,
      fill: WORLD_COLORS['indicator'],
      closed: true,
      listening: false,
    });
  }
  function add_direction_indicators(x, y, rectX, rectY, gridGroup) {
    let directions = [];
    if (x === ORIGIN_X && y === ORIGIN_Y) {
      directions = ['nw', 'ne', 'sw', 'se'];
    } else if (x === ORIGIN_X) {
      directions = y < ORIGIN_Y ? ['nw', 'ne'] : ['sw', 'se'];
    } else if (y === ORIGIN_Y) {
      directions = x < ORIGIN_X ? ['nw', 'sw'] : ['ne', 'se'];
    } else if (x < ORIGIN_X && y < ORIGIN_Y) {
      directions = ['nw'];
    } else if (x > ORIGIN_X && y < ORIGIN_Y) {
      directions = ['ne'];
    } else if (x < ORIGIN_X && y > ORIGIN_Y) {
      directions = ['sw'];
    } else if (x > ORIGIN_X && y > ORIGIN_Y) {
      directions = ['se'];
    }
    directions.forEach((dir) => gridGroup.add(add_triangle_marker(rectX, rectY, dir)));
  }
  function add_annotation(rectX, rectY, rect, annotation, annotationGroup) {
    const annotationLabel = new Konva.Label({
      x: rectX + BLOCK_SIZE_HALF,
      y: rectY + BLOCK_SIZE, // slightly below the rect
      opacity: 0,
      listening: false, // prevent label from intercepting events
    });
    annotationLabel.add(
      new Konva.Tag({
        fill: 'black',
        pointerDirection: 'up',
        pointerWidth: 6,
        pointerHeight: BLOCK_SIZE / 4,
        cornerRadius: 3,
      }),
    );
    annotationLabel.add(
      new Konva.Text({
        text: `${annotation.text}\n(${annotation.x}, ${annotation.y})\n${annotation.type}`,
        fontFamily: 'monospace',
        fontSize: 24,
        padding: 4,
        fill: 'white',
      }),
    );

    rect.on('mouseover', () => {
      if (pinnedAnnotation === annotationLabel) return; // already pinned
      annotationLabel.opacity(1);
      layerRef.current.batchDraw();
    });
    rect.on('mouseout', () => {
      if (pinnedAnnotation === annotationLabel) return; // keep showing
      annotationLabel.opacity(0);
      layerRef.current.batchDraw();
    });
    rect.on('click', () => {
      if (pinnedAnnotation === annotationLabel) {
        annotationLabel.opacity(0);
        pinnedAnnotation = null;
      } else {
        if (pinnedAnnotation) pinnedAnnotation.opacity(0);
        pinnedAnnotation = annotationLabel;
        annotationLabel.opacity(1);
      }
      layerRef.current.batchDraw();
    });

    annotationGroup.add(annotationLabel);
    // Move the rect to top and annotation to bottom (reverse of previous logic)
    rect.moveToTop();
    annotationLabel.moveToBottom();
  }
  const setup_grid = useCallback((gridGroup, annotationGroup) => {
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        let color = WORLD_COLORS[WORLD_DATA[y][x]];

        const x2 = x - ORIGIN_X;
        const y2 = ORIGIN_Y - y;
        const annotation = WORLD_ANNOTATIONS.find((a) => a.x === x2 && a.y === y2);
        if (annotation) {
          color = WORLD_COLORS[annotation.type];
        }

        const rectX = x * BLOCK_SIZE;
        const rectY = y * BLOCK_SIZE;
        const rect = new Konva.Rect({
          x: rectX,
          y: rectY,
          width: BLOCK_SIZE,
          height: BLOCK_SIZE,
          stroke: null,
          fill: color,
          listening: !!annotation,
          // opacity: 0.5,
        });
        gridGroup.add(rect);

        const dx = Math.abs(x - ORIGIN_X);
        const dy = Math.abs(y - ORIGIN_Y);
        if (dx % 10 === 0 && dy % 10 === 0) {
          add_direction_indicators(x, y, rectX, rectY, gridGroup);
        }

        if (annotation) {
          // if (isShip && (annotation.type === 'dock' || annotation.type === 'shore')) {
          add_annotation(rectX, rectY, rect, annotation, annotationGroup);
          // }
        }
      }
    }
  }, []);
  function setup_grid_lines(gridLinesGroup) {
    // Vertical lines
    for (let x = 0; x <= GRID_WIDTH; x++) {
      const strokeWidth = x === ORIGIN_X || x === ORIGIN_X + 1 ? 6 : 2;
      const line = new Konva.Line({
        points: [x * BLOCK_SIZE, 0, x * BLOCK_SIZE, GRID_HEIGHT * BLOCK_SIZE],
        stroke: '#000000',
        strokeWidth: strokeWidth,
      });
      gridLinesGroup.add(line);
    }
    // Horizontal lines
    for (let y = 0; y <= GRID_HEIGHT; y++) {
      const strokeWidth = y === ORIGIN_Y || y === ORIGIN_Y + 1 ? 6 : 2;
      const line = new Konva.Line({
        points: [0, y * BLOCK_SIZE, GRID_WIDTH * BLOCK_SIZE, y * BLOCK_SIZE],
        stroke: '#000000',
        strokeWidth: strokeWidth,
      });
      gridLinesGroup.add(line);
    }
    // gridLinesGroup.cache(); // boost performance
  }

  const default_position = useCallback(() => {
    return {
      x: ((window.innerWidth / initialScale - BLOCK_SIZE * GRID_WIDTH) / 2) * initialScale,
      y: ((window.innerHeight / initialScale - BLOCK_SIZE * GRID_HEIGHT) / 2) * initialScale,
    };
  }, []);
  const set_zoom = useCallback(
    (stage, scale, position = default_position()) => {
      stage.scale({ x: scale, y: scale });
      stage.position({ x: position.x, y: position.y });
      stage.batchDraw();
    },
    [default_position],
  );

  useEffect(() => {
    const layer = layerRef.current.getLayer();
    const stage = stageRef.current;
    let pinnedAnnotation = null;

    const gridGroup = new Konva.Group();
    const gridLinesGroup = new Konva.Group({ listening: false });
    const annotationGroup = new Konva.Group();
    layer.add(gridGroup);
    layer.add(gridLinesGroup);
    layer.add(annotationGroup);

    setup_grid(gridGroup, annotationGroup);
    setup_grid_lines(gridLinesGroup);
    set_zoom(stage, initialScale, { x: default_position().x, y: 0 });

    // Add wheel event handler
    stage.on('wheel', (e) => {
      e.evt.preventDefault();

      const direction = e.evt.deltaY > 0 ? -1 : 1;
      const newIndex = currentZoomIndex + direction;

      if (newIndex < 0 || newIndex >= ZOOM_LEVELS.length) return;

      const oldScale = ZOOM_LEVELS[currentZoomIndex];
      const newScale = ZOOM_LEVELS[newIndex];
      currentZoomIndex = newIndex;

      const pointer = stage.getPointerPosition();
      const newPos = {
        x: pointer.x - ((pointer.x - stage.x()) / oldScale) * newScale,
        y: pointer.y - ((pointer.y - stage.y()) / oldScale) * newScale,
      };
      set_zoom(stage, newScale, newPos);
    });

    layer.draw();

    // Cleanup event listeners
    return () => {
      stage.off('wheel');
    };
  }, [set_zoom, setup_grid]);

  const setShip = () => {
    setIsShip((prev) => !prev);
  };
  const setBalloon = () => {
    setIsBalloon((prev) => !prev);
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="World Map">
      <CmtCard>
        <CmtCardHeader title="Map Controls" />
        <Box mt={2}>
          <Button
            variant={isShip ? 'contained' : 'outlined'}
            color={isShip ? 'primary' : 'inherit'}
            startIcon={<Sailing />}
            onClick={setShip}
            size="small">
            Ship
          </Button>
          <Button
            variant={isBalloon ? 'contained' : 'outlined'}
            color={isBalloon ? 'primary' : 'inherit'}
            startIcon={<Sailing />} /* TODO */
            onClick={setBalloon}
            size="small">
            Balloon
          </Button>
          <Button>Transit</Button>
          <Button>Flying</Button>
        </Box>
      </CmtCard>
      <Stage ref={stageRef} width={GRID_WIDTH * BLOCK_SIZE} height={GRID_HEIGHT * BLOCK_SIZE} draggable>
        <Layer ref={layerRef} />
      </Stage>
    </PageContainer>
  );
}
