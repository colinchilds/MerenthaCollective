/**
 * Map Data Registry
 *
 * This module provides a registry for interactive map data.
 * Maps are stored as JSON files and can be dynamically loaded.
 *
 * Usage:
 *   import { getMapData, hasMapData, mapRegistry } from 'data/Maps';
 *
 *   // Check if a map exists
 *   if (hasMapData('cabeiri')) { ... }
 *
 *   // Get map data (returns Promise)
 *   const data = await getMapData('cabeiri');
 */

// Registry of available interactive maps
// Add entries here as new maps are created
// Format: mapName -> import function (for code splitting)
const mapRegistry = {
  // Sample map for testing
  sample: () => import('./sample.json'),
  // Add more maps here as they are created:
  // 'cabeiri': () => import('./cabeiri.json'),
};

/**
 * Check if a map has interactive data available
 * @param {string} mapName - The name of the map to check
 * @returns {boolean} True if the map has interactive data
 */
export const hasMapData = (mapName) => {
  return mapName in mapRegistry;
};

/**
 * Get the map data for a given map name
 * @param {string} mapName - The name of the map to load
 * @returns {Promise<Object|null>} The map data or null if not found
 */
export const getMapData = async (mapName) => {
  if (!hasMapData(mapName)) {
    return null;
  }

  try {
    const module = await mapRegistry[mapName]();
    return module.default || module;
  } catch (err) {
    console.warn(`Failed to load map data for "${mapName}":`, err);
    return null;
  }
};

/**
 * Get all available map names
 * @returns {string[]} Array of available map names
 */
export const getAvailableMaps = () => {
  return Object.keys(mapRegistry);
};

export { mapRegistry };
