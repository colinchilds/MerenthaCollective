const fs = require('fs');
const path = require('path');

// Map domain paths to readable area names
const domainToArea = {
  '/domains/Isles/Ensi/items/Minotaurs': 'Ensi',
  '/domains/Isles/Ensi/items/Centaurs': 'Ensi',
  '/domains/Fenris': 'Fenris',
  '/domains/Lizland': 'Liku',
  '/domains/DeathSpiral': 'DeathSpiral',
  '/domains/Isles/Mjharr': 'Mjharr',
  '/domains/Cloud': 'Clouds',
  '/domains/Deception': 'Deception',
  '/domains/Hiemelia/Kingdom/wild': 'Hiemelia',
  '/domains/Isles/Kittay': 'Kittay',
  '/domains/Isles/Abbadon': 'Abbadon',
  '/domains/Cardania/Mystic/forest': 'Mystic Forest',
  '/domains/Rforest': 'Rainforest',
  '/domains/Isles/Kobold/Korlis': 'Korlis',
  '/domains/Isles/Ottograd': 'Ottograd',
  '/domains/Praxis': 'Cabeiri',
  '/domains/Atheria/Uruk/forest': 'Uruk Forest',
  '/domains/Beaches/Aerioth/aerioth2': 'Aerioth (Frozen)',
  '/domains/Beaches/Aerioth': 'Aerioth',
  '/domains/Isles/Shanadan': 'Shanadan',
  '/domains/Isles/Storm': 'Storm Isle',
  '/domains/Isles/Boar': 'Boar Isle',
  '/domains/Haven': 'Haven',
  '/domains/Oz/valentine': 'Oz',
};

// Domain paths to skip entirely
const skipDomains = ['/domains/Natives'];

function parseValue(baseStr, minStr, maxStr) {
  const base = parseInt(baseStr, 10);
  if (minStr && maxStr) {
    return { min: parseInt(minStr, 10), max: parseInt(maxStr, 10) };
  }
  return { min: base, max: base };
}

function getAreaName(domainPath) {
  // Check for exact or prefix matches in order of specificity (longer paths first)
  const sortedPaths = Object.keys(domainToArea).sort((a, b) => b.length - a.length);
  for (const path of sortedPaths) {
    if (domainPath.startsWith(path)) {
      return domainToArea[path];
    }
  }

  // Fallback: extract first domain component
  if (domainPath.startsWith('/domains/')) {
    const parts = domainPath.replace('/domains/', '').split('/');
    return parts[0];
  }

  return null;
}

function parseTames(inputPath, outputPath) {
  const content = fs.readFileSync(inputPath, 'utf8');
  const lines = content.split('\n');

  const tames = [];
  let currentArea = null;

  const areaHeaderRegex = /-=-=-\|\s*([^|]+?)\s*\|/;
  const mobLineRegex =
    /^NAME\s+(.+?)\s{2,}LVL\s+(\d+)(?:\s*=\s*\[(\d+)\.\.(\d+)\])?\s+TAME\s+(\d+)(?:\s*=\s*\[(\d+)\.\.(\d+)\])?/;

  for (const line of lines) {
    // Skip pagination lines and empty lines
    if (line.includes('--More--') || line.trim() === '') continue;

    // Check for area header
    const areaMatch = line.match(areaHeaderRegex);
    if (areaMatch) {
      const domainPath = areaMatch[1].trim();

      // Skip /realms/ and /std/ paths (wizard areas and system files)
      if (domainPath.startsWith('/realms/') || domainPath.startsWith('/std')) {
        currentArea = null;
        continue;
      }

      // Skip domains in the skip list
      if (skipDomains.some((skip) => domainPath.startsWith(skip))) {
        currentArea = null;
        continue;
      }

      currentArea = getAreaName(domainPath);
      continue;
    }

    // Check for mob line
    const mobMatch = line.match(mobLineRegex);
    if (mobMatch && currentArea) {
      const name = mobMatch[1].trim();
      const level = parseValue(mobMatch[2], mobMatch[3], mobMatch[4]);
      const tame = parseValue(mobMatch[5], mobMatch[6], mobMatch[7]);

      // Skip invalid entries
      if (level.min === 0 || tame.min === 0) continue;
      if (name === '0') continue;

      tames.push({
        name,
        area: currentArea,
        levelMin: level.min,
        levelMax: level.max,
        tameMin: tame.min,
        tameMax: tame.max,
      });
    }
  }

  // Sort by tameMax descending
  tames.sort((a, b) => b.tameMax - a.tameMax);

  // Generate output
  const output = `// Auto-generated from tames.txt - do not edit manually
// Run: node scripts/parseTames.js

export const tames = ${JSON.stringify(tames, null, 2)};
`;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, output);
  console.log(`Generated ${tames.length} tame entries to ${outputPath}`);

  // Print area summary
  const areaCounts = {};
  tames.forEach((t) => {
    areaCounts[t.area] = (areaCounts[t.area] || 0) + 1;
  });
  console.log('\nMobs by area:');
  Object.entries(areaCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([area, count]) => {
      console.log(`  ${area}: ${count}`);
    });
}

// Run
const inputPath = path.join(__dirname, '../src/data/tames.txt');
const outputPath = path.join(__dirname, '../src/data/Tames/index.js');

parseTames(inputPath, outputPath);
