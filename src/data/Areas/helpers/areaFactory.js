import getLevel from './getLevels';

// Zone inside a sub-area (e.g., Town, Cemetary, Island)
export function zone(name, levelString, summary = '', aoe = '', strong = '', elite = '', legendary = '') {
  const [minLevel, maxLevel] = getLevel(levelString);

  return {
    name,
    levels: levelString,
    minLevel,
    maxLevel,
    summary,
    aoe,
    strong,
    elite,
    legendary,
  };
}

// Map inside an area or sub-area
// interactiveMapName is optional - if provided, the map will use the interactive GoJS viewer
export const map = (name, url, interactiveMapName = null) => ({
  name,
  url,
  interactiveMapName,
});

// Sub-area inside a continent (e.g., Cabeiri inside Atheria)
export const subArea = ({ summary, levels, maps = [], zones = [] }) => ({
  summary,
  levels,
  maps,
  zones,
});

// Area (continent-level) – contains multiple sub-areas
export const area = (subAreas = {}) => subAreas;
