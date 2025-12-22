# MUD Mapper Feature - Todo List

## Project Overview
Create an interactive MUD mapper for Merentha using GoJS that allows users to create, edit, and visualize detailed game maps with rooms, connections, and properties.

## Technology Stack
- **GoJS** - Diagramming library (full license available)
- **React 17.0.2** - UI framework
- **Material-UI v5** - UI components
- **Styled Components** - Styling

---

## Phase 0: Setup & Infrastructure

### Setup Tasks
- [x] Install GoJS via npm (`npm install gojs`)
- [ ] Verify GoJS license key and add to project configuration
- [x] Create `/src/components/Mapper/` directory structure
- [ ] Create `/src/data/Mapper/` directory for data/templates

### Page Structure
- [x] Create `src/routes/Pages/General/Mapper.js` main page component
  - [x] Follow PageContainer pattern with breadcrumbs
  - [x] Use GridContainer and Grid for layout
  - [x] Add CmtCard wrapper for content
- [x] Add route to `src/routes/index.js`
  - [x] Import Mapper component
  - [x] Add route: `<Route path="/mapper" component={Mapper} />`
- [x] Update `src/@jumbo/components/AppLayout/partials/menus.js`
  - [x] Add Mapper item to General section
  - [x] Use appropriate icon (MapOutlined, Explore, or EditLocation)
  - [x] Set link to `/mapper`

---

## Phase 1: MVP - Basic Grid & Rooms

### GoJS Initialization
- [x] Create `src/components/Mapper/MapperCanvas.js` component
- [x] Initialize GoJS Diagram with proper configuration
  - [x] Set up model: GraphLinksModel for nodes and links
  - [x] Configure grid: `diagram.grid.visible = true`
  - [x] Set grid spacing to match room size (e.g., 50 pixels)
  - [x] Enable snap-to-grid: `diagram.toolManager.draggingTool.isGridSnapEnabled = true`

### Coordinate System
- [x] Center diagram at 0,0 coordinates
  - [x] Configure diagram.initialPosition to center origin
  - [ ] Map pixel coordinates to cartesian grid coordinates
- [ ] Add coordinate display/debugging overlay

### Room Nodes
- [ ] Define room node template in `src/data/Mapper/defaultTemplates.js`
  - [x] Create 1x1 square shape (50x50 pixels)
  - [x] Add border styling (color, thickness)
  - [x] Add fill color support
  - [x] Ensure perfect grid alignment
- [x] Implement unique ID generation for rooms
  - [x] Use UUID or sequential ID system
  - [x] Store in node data model

### Room Creation
- [x] Add click-to-place room functionality
  - [x] Calculate grid coordinates from mouse position
  - [x] Check for existing room at coordinates (prevent overlap)
  - [x] Create new room node at calculated position
  - [x] Add to diagram model
- [x] Implement room selection on click
  - [x] Highlight selected room (border color/thickness change)
  - [x] Track currently selected room in state
  - [x] Support deselection (click empty space)

### Room Manipulation
- [x] Add delete room functionality
  - [x] Delete key removes selected room
  - [x] Remove associated connections
  - [x] Update diagram model
- [x] Implement basic color customization
  - [x] Set border color for selected room
  - [x] Set fill color for selected room
  - [x] Update node template to support colors

---

## Phase 2: MVP - Connections Between Rooms

### Connection Points
- [x] Define 9 connection points on room nodes
  - [x] 4 corners: NW, NE, SE, SW
  - [x] 4 edges: N, E, S, W (midpoints)
  - [x] 1 center point (for up/down)
- [x] Configure GoJS ports for each connection point
  - [x] Add port definitions to node template
  - [x] Position ports at correct locations

### Connection Creation
- [ ] Create link/connection template in `src/data/Mapper/defaultTemplates.js`
  - [x] Default line style (solid)
  - [x] Configurable arrow directions (none, forward, backward, both)
  - [x] Snap to defined ports
- [ ] Implement click-to-connect mode (uses drag-to-connect instead)
  - [ ] Click first room to start connection
  - [ ] Click second room to complete connection
  - [ ] Auto-select best port based on room positions
  - [ ] Visual feedback during connection creation

### Connection Styling
- [x] Add line style options
  - [x] Solid lines
  - [x] Dashed lines
  - [ ] Dotted lines (optional)
- [x] Add arrow direction options
  - [x] No arrows (bidirectional implicit)
  - [x] One-way arrows (→)
  - [x] Two-way arrows (↔)
  - [x] Reverse arrows (←)

### Connection Labels
- [x] Implement label support on connections
  - [x] Add text label to link template
  - [x] Position labels along the line
  - [ ] Support special characters: "+", "-", etc.
  - [x] Editable labels on double-click
- [ ] Add pre-defined label shortcuts
  - [ ] "+" for up movement
  - [ ] "-" for down movement
  - [ ] Custom text labels

### Connection Manipulation
- [x] Add delete connection functionality
  - [x] Click to select connection
  - [x] Delete key removes connection
  - [x] Update diagram model
- [x] Add reconnection support
  - [x] Drag connection endpoints to new ports
  - [ ] Validate port compatibility

---

## Phase 3: MVP - Menu Bar & Toolbar Essentials

### Menu Bar Component
- [x] Create `src/components/Mapper/MapperMenuBar.js`
- [x] Implement File menu (MVP features)
  - [x] New Map (clear diagram)
  - [x] Save Map (export to JSON)
  - [x] Load Map (import from JSON)
  - [x] **Export to PNG** ⭐ (CRITICAL FOR MVP)
- [x] Implement Edit menu
  - [x] Undo (Ctrl+Z)
  - [x] Redo (Ctrl+Y or Ctrl+Shift+Z)
  - [ ] Clear selection
  - [ ] Select all

### Undo/Redo System
- [x] Configure GoJS UndoManager
  - [x] Enable: `diagram.undoManager.isEnabled = true`
  - [x] Set max history size
- [x] Connect undo/redo to UI buttons and keyboard shortcuts
- [ ] Display undo/redo state in UI (enabled/disabled buttons)

### Toolbar Component - Selection-First Design ⭐ NEW APPROACH
- [x] Create `src/components/Mapper/MapperToolbar.js`
- [x] **Core Interaction Model:**
  - [x] Always in select mode (no mode switching)
  - [x] Click empty grid square → selects that location
  - [x] Click "Add" button → creates room in selected grid square
  - [x] Click existing room → selects room, reveals room styling
  - [x] Click existing connection → selects connection, reveals connection styling
  - [x] Delete key → removes selected room/connection (no delete button)
  - [x] Drag from port to port → creates connection (GoJS default)

### Context-Sensitive Styling Controls
- [x] **No Selection State:**
  - [x] Show minimal toolbar
  - [x] "Add" button disabled or hidden
  - [x] No styling controls visible

- [x] **Grid Square Selected:**
  - [x] Enable "Add Room" button
  - [x] Clicking "Add" creates room at selected grid location
  - [x] Use current default colors for new room

- [x] **Room Selected:**
  - [x] Show "Room Style" section
  - [x] Fill color picker (apply to selected room)
  - [x] Border color picker (apply to selected room)
  - [x] Symbol/character input field
  - [x] Delete hint: "Press Delete to remove"

- [x] **Connection Selected:**
  - [x] Show "Connection Style" section
  - [x] Line style selector: solid, dashed
  - [x] Arrow direction dropdown (not buttons):
    - [x] Options: None, → (forward), ← (backward), ↔ (bidirectional)
    - [ ] Future: +, -, custom labels
  - [x] Connection color picker
  - [x] Delete hint: "Press Delete to remove"

### Implementation Details
- [x] Track selection state in parent component
- [x] Track selected grid square coordinates
- [x] Conditionally render toolbar sections based on selection type
- [x] Use Material-UI Select/MenuItem for arrow dropdown
- [x] Update room/connection properties immediately on change
- [x] Clear selection on background click

### Import/Export Functionality
- [x] Implement Save Map to JSON
  - [x] Serialize diagram model: `diagram.model.toJson()`
  - [x] Include all room properties and connections
  - [x] Save coordinate information
  - [x] Download as .json file
- [x] Implement Load Map from JSON
  - [x] File input to select JSON file
  - [x] Parse and validate JSON structure
  - [x] Load into diagram: `diagram.model = go.Model.fromJson(json)`
  - [ ] Re-center and fit diagram

---

## Phase 4: Numpad Navigation - Default Mode

### Keyboard Setup
- [ ] Add keyboard event listener to diagram or document
- [ ] Map numpad keys to directional movements
  - [ ] 7 = Northwest (NW)
  - [ ] 8 = North (N)
  - [ ] 9 = Northeast (NE)
  - [ ] 4 = West (W)
  - [ ] 5 = (reserved or current room)
  - [ ] 6 = East (E)
  - [ ] 1 = Southwest (SW)
  - [ ] 2 = South (S)
  - [ ] 3 = Southeast (SE)
  - [ ] + = Up (U)
  - [ ] - = Down (D)

### Default Mode Logic
- [ ] Implement room creation in direction
  - [ ] Get currently selected room
  - [ ] Calculate target coordinates based on direction
  - [ ] Check if room exists at target coordinates
  - [ ] If empty: create new room at target
  - [ ] If occupied: create connection between rooms
  - [ ] Auto-select newly created room
- [ ] Add visual feedback
  - [ ] Highlight active/selected room
  - [ ] Flash or animate newly created rooms/connections
- [ ] Handle edge cases
  - [ ] No room selected: start at 0,0 or show warning
  - [ ] Creating connection to already-connected room

### Mode Indicator
- [ ] Create mode toggle UI element
  - [ ] Button or switch: "Default Mode" / "Bump Mode"
  - [ ] Display current mode prominently
- [ ] Style indicator to show active mode

---

## Phase 5: Numpad Navigation - Bump Mode

### Bump Mode Toggle
- [ ] Add toggle functionality between Default and Bump modes
- [ ] Store mode state in component state or context

### Cascade Algorithm
- [ ] Implement room movement logic
  - [ ] When creating room in occupied space
  - [ ] Move conflicting room in the same direction
  - [ ] Check if moved room conflicts with another
  - [ ] Recursively cascade movements until no conflicts
- [ ] Preserve all connections during movement
  - [ ] GoJS automatically updates link positions with node positions
  - [ ] Verify connections remain intact after cascade

### Conflict Detection
- [ ] Create utility function to check room at coordinates
- [ ] Build conflict chain to determine all rooms to move
- [ ] Validate no infinite loops (circular dependencies)

### Visual Feedback
- [ ] Animate room movements during bump
  - [ ] Use GoJS animation API for smooth transitions
  - [ ] Highlight moved rooms temporarily
- [ ] Add visual indicator for bump mode (icon, color change)

---

## Phase 6: Room Properties & Advanced Editing

### Properties Panel Component
- [ ] Create `src/components/Mapper/RoomPropertiesPanel.js`
- [ ] Display when room is selected
- [ ] Hide when no selection or deselect

### Basic Properties
- [ ] Add room name field
  - [ ] Text input for room name
  - [ ] Update node data model on change
  - [ ] Display name in room or tooltip
- [ ] Add room description field
  - [ ] Textarea for multi-line description
  - [ ] Store in node data model
  - [ ] Display in tooltip (viewer mode)
- [ ] Add unique ID display (read-only)

### Visual Customization
- [ ] Color pickers in properties panel
  - [ ] Border color selection
  - [ ] Fill color selection
  - [ ] Update selected room immediately
- [ ] Symbol/character selection
  - [ ] Dropdown or input for single character
  - [ ] Support letters (A-Z)
  - [ ] Support symbols: ↑, ↓, ←, →, ×, +, -, *, etc.
  - [ ] Display symbol in center of room

### Room Operations
- [ ] Implement duplicate room functionality
  - [ ] Copy button in properties panel
  - [ ] Duplicate all properties (except ID)
  - [ ] Place at offset location
  - [ ] Optionally copy connections
- [ ] Add room note/comment field
  - [ ] For mapper notes (not shown in viewer)

---

## Phase 7: MVP - Export to PNG ⭐ (CRITICAL)

### PNG Export Functionality (MVP REQUIRED)
- [x] Use GoJS makeSvg or makeImageData methods
- [x] Create export button in menu bar (File > Export to PNG)
- [x] Implement PNG generation
  - [x] Hide grid lines before export
  - [x] Set appropriate scale/resolution
  - [x] Convert diagram to image data
- [x] Download PNG file
  - [x] Generate blob from image data
  - [x] Trigger download with proper filename (e.g., "merentha-map-2025-11-16.png")
  - [x] Restore grid visibility after export

### Export Options (Post-MVP Enhancement)
- [ ] Add export settings dialog
  - [ ] Scale factor (1x, 2x, 4x for high-res)
  - [ ] Include/exclude grid
  - [ ] Background color or transparent
  - [ ] Crop to content or full canvas

---

## Phase 8: Viewer Mode (Stretch Goal)

### Viewer Page/Mode
- [ ] Create viewer component or route (e.g., `/mapper/view`)
  - [ ] Option 1: Separate page component
  - [ ] Option 2: Toggle mode within Mapper.js
- [ ] Load map from JSON file or URL parameter

### Viewer Configuration
- [ ] Initialize GoJS diagram in read-only mode
  - [ ] `diagram.isReadOnly = true`
  - [ ] Disable all editing tools
- [ ] Hide grid lines
  - [ ] `diagram.grid.visible = false`
- [ ] Hide toolbars and menu bars
  - [ ] Only show viewer-specific controls

### Pan & Zoom
- [ ] Enable pan functionality
  - [ ] Click and drag to pan
  - [ ] Or use built-in GoJS panning tool
- [ ] Enable zoom controls
  - [ ] Mouse wheel zoom
  - [ ] Zoom in/out buttons
  - [ ] Fit to viewport button
  - [ ] Reset zoom button

### Room Tooltips
- [ ] Implement custom tooltip on room hover
  - [ ] Use GoJS Adornment or HTML tooltip
- [ ] Display room information in tooltip
  - [ ] Room name
  - [ ] Room description
  - [ ] Visible exits (connection labels)
  - [ ] Hidden exits (stored property)
  - [ ] Items of interest
  - [ ] Unique ID
  - [ ] Custom notes

### JSON Import for Viewer
- [ ] Extend JSON export to include viewer data
  - [ ] Room descriptions
  - [ ] Hidden exits
  - [ ] Items of interest
  - [ ] Any other tooltip data
- [ ] Create viewer-friendly JSON schema
- [ ] Implement validation for imported JSON

---

## Additional Considerations

### Testing
- [ ] Test on different screen sizes (responsive design)
- [ ] Test all keyboard shortcuts
- [ ] Test undo/redo with complex operations
- [ ] Test import/export with large maps (100+ rooms)
- [ ] Test cascade/bump with complex room arrangements

### Performance
- [ ] Optimize for large maps (500+ rooms)
  - [ ] Use GoJS virtualization if needed
  - [ ] Lazy load room properties
- [ ] Test PNG export performance

### User Experience
- [ ] Add loading indicators for long operations
- [ ] Add confirmation dialogs for destructive actions (clear map)
- [ ] Add keyboard shortcut reference (help dialog)
- [ ] Add tutorial or quick start guide

### Documentation
- [ ] Document GoJS integration and configuration
- [ ] Create user guide for mapper features
- [ ] Document JSON schema for import/export
- [ ] Add code comments for complex algorithms (cascade, coordinate mapping)

---

## MVP Definition

**Minimum Viable Product includes:**
- ✅ Phase 0: Setup & Infrastructure
- ✅ Phase 1: Basic Grid & Rooms
- ✅ Phase 2: Connections Between Rooms
- ✅ Phase 3: Menu Bar & Toolbar Essentials
  - File menu (New, Save/Load JSON, **Export to PNG**)
  - Edit menu (Undo/Redo)
  - Basic toolbar (tool selection, color pickers)
- ✅ **Phase 7: Export to PNG** ⭐ (CRITICAL - without this, maps can't be used!)

**Why PNG Export is Critical for MVP:**
Without the ability to export maps as PNG images, users cannot share or use the maps they create. This makes the entire tool impractical for its intended purpose of mapping MUDs.

**Post-MVP Features:**
- Phase 4: Numpad Navigation - Default Mode
- Phase 5: Numpad Navigation - Bump Mode
- Phase 6: Room Properties & Advanced Editing (names, descriptions, symbols)
- Phase 8: Viewer Mode (Stretch Goal)

---

## Progress Tracking

**Current Phase:** MVP Complete - Ready for Post-MVP Features
**Overall Progress:** ~55 of ~60 MVP tasks completed

**Development Order for MVP:**
1. ✅ Phase 0 (Setup & Infrastructure) - MOSTLY COMPLETE
2. ✅ Phase 1 (Basic Grid & Rooms) - COMPLETE
3. ✅ Phase 2 (Connections Between Rooms) - MOSTLY COMPLETE
4. ✅ Phase 3 (Menu Bar & Toolbar - including PNG export button) - MOSTLY COMPLETE
5. ✅ Phase 7 (PNG Export Implementation) - COMPLETE

**Remaining MVP Items:**
- Verify GoJS license key configuration
- Create `/src/data/Mapper/` directory for templates (optional refactor)
- Coordinate display overlay (nice-to-have)
- Clear selection & Select all menu items
- Re-center diagram on load

Last Updated: 2025-12-21
