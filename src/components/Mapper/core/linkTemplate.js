import * as go from 'gojs';

/**
 * Register custom arrowhead geometries for link decorations
 * Should be called once before creating link templates
 */
export const registerArrowheadGeometries = () => {
  // Bars are authored in a 0..8 box, like built-in arrowheads,
  // so Spot.Right/Spot.Left alignment lands exactly on the endpoint.

  // single bar at endpoint (to-end)
  go.Shape.defineArrowheadGeometry('Bar', 'M8 0 L8 8');
  // single bar at endpoint (from-end)
  go.Shape.defineArrowheadGeometry('BarBack', 'M0 0 L0 8');

  // double bars: one at endpoint + one slightly "inside"
  go.Shape.defineArrowheadGeometry('DoubleBar', 'M5 0 L5 8 M8 0 L8 8');
  go.Shape.defineArrowheadGeometry('DoubleBarBack', 'M0 0 L0 8 M3 0 L3 8');
};

/**
 * Creates a custom link selection adornment
 * @param {function} $ - GoJS GraphObject.make function
 */
const createLinkSelectionAdornment = ($) => {
  return $(go.Adornment, 'Link', $(go.Shape, { isPanelMain: true, stroke: '#4285f4', strokeWidth: 3 }));
};

/**
 * Creates the link template for connections
 * @param {function} $ - GoJS GraphObject.make function
 * @param {Object} options - Configuration options
 * @param {boolean} options.isEditable - Whether the link is editable (relinkable)
 */
export const createLinkTemplate = ($, options = {}) => {
  const { isEditable = true } = options;

  return $(
    go.Link,
    {
      routing: go.Link.Normal,
      corner: 0,
      relinkableFrom: isEditable,
      relinkableTo: isEditable,
      reshapable: false,
      resegmentable: false,
      selectionAdornmentTemplate: createLinkSelectionAdornment($),
      adjusting: go.Link.None,
      fromShortLength: -8,
      toShortLength: -8,
    },
    new go.Binding('fromPortId', 'fromPort').makeTwoWay(),
    new go.Binding('toPortId', 'toPort').makeTwoWay(),
    // Main link line
    $(go.Shape, { strokeWidth: 2 }, new go.Binding('stroke', 'color'), new go.Binding('strokeDashArray', 'dash')),
    // "From" end decoration (arrow, line, or double line)
    $(
      go.Shape,
      {
        segmentIndex: 0,
        strokeWidth: 2,
        visible: false,
      },
      new go.Binding('stroke', 'color'),
      new go.Binding('fill', 'color'),
      // Map from-end decorations to backward variants
      new go.Binding('fromArrow', 'fromDecor', (d) => {
        if (d === 'Standard') return 'Backward';
        if (d === 'Line') return 'BarBack';
        if (d === 'DoubleLine') return 'DoubleBarBack';
        return d;
      }),
      new go.Binding('visible', 'fromDecor', (d) => !!d),
      new go.Binding('scale', 'fromDecor', (d) => {
        if (d === 'Line' || d === 'DoubleLine') return 2.5;
        return 1.5;
      }),
      new go.Binding('segmentOffset', 'fromDecor', (d) => {
        if (d === 'Standard') return new go.Point(-8, 0);
        return new go.Point(0, 0);
      }),
    ),
    // "To" end decoration (arrow, line, or double line)
    $(
      go.Shape,
      {
        segmentIndex: -1,
        strokeWidth: 2,
        visible: false,
      },
      new go.Binding('stroke', 'color'),
      new go.Binding('fill', 'color'),
      // Map to-end decorations to forward variants
      new go.Binding('toArrow', 'toDecor', (d) => {
        if (d === 'Line') return 'Bar';
        if (d === 'DoubleLine') return 'DoubleBar';
        return d;
      }),
      new go.Binding('visible', 'toDecor', (d) => !!d),
      new go.Binding('scale', 'toDecor', (d) => {
        if (d === 'Line' || d === 'DoubleLine') return 2.5;
        return 1.5;
      }),
      new go.Binding('segmentOffset', 'toDecor', (d) => {
        if (d === 'Standard') return new go.Point(8, 0);
        return new go.Point(0, 0);
      }),
    ),
    // "From" end label (near the source of the connection)
    $(
      go.TextBlock,
      {
        name: 'FROM_LABEL',
        visible: false,
        segmentIndex: NaN,
        segmentFraction: 0.15,
        segmentOffset: new go.Point(0, -12),
        font: '24px monospace',
      },
      new go.Binding('visible', 'fromLabel', (l) => !!l),
      new go.Binding('text', 'fromLabel'),
      new go.Binding('segmentFraction', 'fromLabelPosition', (pos) => (pos !== undefined ? pos : 0.15)),
      new go.Binding('font', '', (data) => {
        const size = data.fontSize || 24;
        const family = data.fontFamily || 'monospace';
        const bold = data.fontBold ? 'bold ' : '';
        const italic = data.fontItalic ? 'italic ' : '';
        return `${italic}${bold}${size}px ${family}`;
      }),
      new go.Binding('segmentOrientation', 'labelOrientation', (orient) => {
        const o = orient || 'along';
        return o === 'along' ? go.Link.OrientAlong : go.Link.None;
      }),
      new go.Binding('angle', 'labelOrientation', (orient) => {
        return orient === 'vertical' ? 270 : 0;
      }),
    ),
    // "To" end label (near the target of the connection)
    $(
      go.TextBlock,
      {
        name: 'TO_LABEL',
        visible: false,
        segmentIndex: NaN,
        segmentFraction: 0.85,
        segmentOffset: new go.Point(0, -12),
        font: '24px monospace',
      },
      new go.Binding('visible', 'toLabel', (l) => !!l),
      new go.Binding('text', 'toLabel'),
      new go.Binding('segmentFraction', 'toLabelPosition', (pos) => (pos !== undefined ? pos : 0.85)),
      new go.Binding('font', '', (data) => {
        const size = data.fontSize || 24;
        const family = data.fontFamily || 'monospace';
        const bold = data.fontBold ? 'bold ' : '';
        const italic = data.fontItalic ? 'italic ' : '';
        return `${italic}${bold}${size}px ${family}`;
      }),
      new go.Binding('segmentOrientation', 'labelOrientation', (orient) => {
        const o = orient || 'along';
        return o === 'along' ? go.Link.OrientAlong : go.Link.None;
      }),
      new go.Binding('angle', 'labelOrientation', (orient) => {
        return orient === 'vertical' ? 270 : 0;
      }),
    ),
  );
};
