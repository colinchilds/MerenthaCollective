# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Merentha Collective is a React-based game companion website for the Merentha MUD, built using the Jumbo React template with Material-UI. It provides calculators, area guides, maps, and reference tools for players.

## Commands

```bash
yarn start        # Start development server at http://localhost:3000
yarn build        # Production build to /build directory
yarn test         # Run tests in interactive watch mode
yarn format       # Format all JS/JSX/JSON/CSS files with Prettier
```

## Architecture

### Technology Stack
- **React 17** with Create React App
- **Material-UI v5** (`@mui/material`) for components
- **React Router v5** with HashRouter for client-side routing
- **GoJS** for the interactive mapper component
- **JSS** for styling via `@mui/styles`

### Directory Structure

```
src/
├── @coremat/          # Reusable UI component library (cards, lists, layouts, etc.)
├── @jumbo/            # App framework: layout, context providers, utilities
│   ├── components/    # AppWrapper, AppLayout, form elements, page components
│   ├── constants/     # Theme options, layout types, app constants
│   └── utils/         # Helper functions
├── common/            # Shared utilities (Code display, UpdateAlert)
├── components/        # Feature-specific components (Mapper)
├── data/              # Static data files organized by feature
├── routes/            # Route definitions and page components
└── theme/             # MUI theme configuration
```

### Theming

Theme is managed via `AppContextProvider` which provides theme state through React Context. The app uses MUI's `createTheme` with custom palette extensions.

Key files:
- `src/theme/defaultTheme.js` - Base MUI theme configuration
- `src/theme/themeColors.js` - Predefined themes: `lightTheme`, `darkTheme`, `semiDarkTheme`
- `src/@jumbo/constants/ThemeOptions.js` - Theme type constants (`THEME_TYPES.LIGHT/DARK/SEMI_DARK`)

To switch themes, update the `theme` value in `AppContextProvider` using one of the predefined themes from `themeColors.js`.

### Routing

Uses React Router v5 with `HashRouter`. All routes defined in `src/routes/index.js`. Page components live in `src/routes/Pages/`.

Route structure:
- `/` - Home
- `/calculators/*` - Stats, skills, party, time calculators
- `/areas/*` - Area list, maps, tames, individual area guides
- `/guides/*` - Class guides (cleric, fighter, mage, monk, rogue), newbie guide, pet guide
- `/mapper` - Interactive GoJS-based map editor
- Various general pages: `/coords`, `/combat`, `/alchemy`, `/quests`, etc.

### Data Layer

Static data is organized in `src/data/` by feature. Each feature typically has an `index.js` exporting the data. Area data uses a factory pattern (`src/data/Areas/helpers/areaFactory.js`).

### Mapper Component

The interactive mapper at `/mapper` uses GoJS for canvas rendering. Located in `src/components/Mapper/`:
- `MapperCanvas.js` - Main GoJS diagram component
- `MapperToolbar.js` - Editing tools
- `ColorPickerDropdown.js`, `SymbolPickerDropdown.js` - Picker UI components

## Code Style

- ESLint extends `react-app` and `prettier` configs
- Prettier: single quotes, trailing commas, 125 char print width
- Pre-commit hooks via Husky run ESLint and Prettier on staged files
