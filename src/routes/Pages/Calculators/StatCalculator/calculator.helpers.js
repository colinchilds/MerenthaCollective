
export const classes = ['Cleric', 'Dragon', 'Fighter', 'Monk', 'Mage', 'Rogue'];

export const races = [
  'Artrell',
  'Centaur',
  'Dwarf',
  'Elf',
  'Faerie',
  'Giant',
  'Gnoll',
  'Gnome',
  'Goblin',
  'Half-elf',
  'Half-ogre',
  'Half-orc',
  'Halfling',
  'Hobbit',
  'Human',
  'Imp',
  'Kender',
  'Kobold',
  'Nymph',
  'Ogre',
  'Ogre-magi',
  'Orc',
  'Satyr',
  'Troll',
  'Dragon',
  'Drow-elf',
  'Lich',
  'Were-wolf',
];

export const stats = ['Strength', 'Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom'];

export const raceStats = {
  Strength: {
    1: ['Satyr', 'Troll', 'Dragon', 'Giant', 'Were-wolf'],
    2: ['Centaur', 'Dwarf', 'Orc', 'Half-ogre', 'Ogre', 'Goblin', 'Ogre-magi', 'Drow-elf', 'Gnoll', 'Kobold'],
    4: ['Nymph', 'Faerie', 'Imp'],
  },
  Charisma: {
    1: ['Dragon', 'Nymph', 'Human'],
    2: ['Half-elf', 'Hobbit', 'Faerie'],
    4: ['Satyr', 'Centaur', 'Gnome', 'Troll', 'Ogre', 'Drow-elf', 'Artrell', 'Ogre-magi', 'Giant'],
  },
  Constitution: {
    1: ['Dragon', 'Ogre', 'Centaur', 'Kender'],
    2: ['Ogre-magi', 'Orc', 'Half-orc', 'Kobold', 'Gnoll', 'Giant', 'Troll'],
    4: ['Faerie', 'Halfling', 'Nymph', 'Imp'],
  },
  Dexterity: {
    1: ['Artrell', 'Dragon', 'Halfling', 'Hobbit'],
    2: [
      'Half-elf',
      'Nymph',
      'Satyr',
      'Kender',
      'Faerie',
      'Goblin',
      'Kobold',
      'Half-orc',
      'Drow-elf',
      'Were-wolf',
      'Imp',
      'Centaur',
    ],
    4: ['Ogre-magi'],
  },
  Intelligence: {
    1: ['Dragon', 'Lich', 'Imp', 'Elf', 'Gnome'],
    2: ['Imp', 'Faerie', 'Ogre-magi', 'Drow-elf', 'Half-ogre', 'Halfling', 'Kender'],
    4: ['Hobbit', 'Centaur'],
  },
  Wisdom: {
    1: ['Dragon', 'Lich', 'Dwarf', 'Nymph', 'Imp'],
    2: ['Gnome', 'Elf', 'Faerie', 'Ogre-magi', 'Halfling', 'Human', 'Drow-elf', 'Giant', 'Artrell'],
    4: ['Kender', 'Centaur'],
  },
};

export const BASE_FACTOR = 0.525;
export const CLASS = {
  1: 0.0,
  2: 0.425,
  3: 0.7,
  4: 2.5,
};
export const RACE = {
  1: 0.0,
  2: 0.325,
  3: 0.8,
  4: 2.0,
  5: 3.0,
};

// ------------------------------------------------------------

export function getAdvanceExp(level) {
  let result = level * level * level * 80;
  if (level < 20) result = (result * level) / 20;
  return result + 5350;
}

export function getMaxExp(level) {
  return getAdvanceExp(level) + getAdvanceExp(level + 1) + getAdvanceExp(level + 2);
}

// ------------------------------------------------------------

export function getClassModifier(charClass, stat) {
  let result = CLASS[4];
  if (charClass === 'Dragon') {
    result = CLASS[3];
  } else if (charClass === 'Cleric') {
    switch (stat) {
      case 'Charisma':
      case 'Intelligence':
        result = CLASS[1];
        break;
      case 'Strength':
      case 'Wisdom':
        result = CLASS[2];
        break;
    }
  } else if (charClass === 'Fighter') {
    switch (stat) {
      case 'Strength':
      case 'Constitution':
        result = CLASS[1];
        break;
      case 'Dexterity':
        result = CLASS[2];
        break;
    }
  } else if (charClass === 'Mage') {
    switch (stat) {
      case 'Intelligence':
      case 'Wisdom':
        result = CLASS[1];
        break;
      case 'Charisma':
        result = CLASS[2];
        break;
    }
  } else if (charClass === 'Monk') {
    switch (stat) {
      case 'Strength':
      case 'Constitution':
      case 'Dexterity':
      case 'Intelligence':
      case 'Wisdom':
        result = CLASS[2];
        break;
    }
  } else if (charClass === 'Rogue') {
    switch (stat) {
      case 'Charisma':
      case 'Dexterity':
        result = CLASS[1];
        break;
      case 'Strength':
        result = CLASS[2];
        break;
      case 'Constitution':
        result = CLASS[3];
        break;
    }
  }
  return result;
}

export function getRaceModifier(race, stat) {
  let rank = RACE[5];
  if (race === 'Dragon') {
    return RACE[1];
  } else if (!raceStats[stat]) {
    rank = 3;
  } else {
    Object.keys(raceStats[stat]).forEach(tier => {
      if (raceStats[stat][tier].indexOf(race) > -1) {
        rank = +tier;
      }
    });
  }
  let result = 0.0;
  if (RACE[rank]) {
    result = RACE[rank];
  }
  return result;
}

export function getBaseCost(level) {
  let result = 0;
  for (let i = level; i > 0; i -= 15) {
    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result += 1;
        break;
      case 5:
      case 6:
        result += 2;
        break;
      case 7:
      case 8:
        result += 5;
        break;
      case 9:
        result += 9;
        break;
      case 10:
        result += 14;
        break;
      default:
        result += (i * i * (100 + i * 5) + (i * 1000) / 3) / 1000;
        break;
    }
  }

  if (result < 9) {
    return result;
  } else {
    return Math.trunc(result * BASE_FACTOR);
  }
}

export function getStatCost(stat, charClass, race, statLevel = 1, count = 1) {
  statLevel = parseInt(statLevel);
  count = parseInt(count);
  if (count <= 0) {
    return 0;
  } else if (count > 500) {
    count = 500;
  }

  let cost = 0;
  const classModifier = getClassModifier(charClass, stat);
  const raceModifier = getRaceModifier(race, stat);
  cost = Math.trunc(getBaseCost(statLevel) * (1.0 + classModifier + raceModifier)) * 1000;

  /* // @TODO need a Were-wolf toggle
    if((this_player()->query_were_wolf() && (this_player()->query_race() != "were-wolf")))
      if((stat == "wisdom") || (stat == "intelligence") || (stat == "charisma"))
        cost *= 1.15;
  */

  return cost + getStatCost(stat, charClass, race, statLevel + 1, count - 1);
}

export function getMaxStat(stat, charClass, race, level) {
  const maxEXP = getMaxExp(level);
  let statLvl = 0;

  while (statLvl < 500 && getStatCost(stat, charClass, race, statLvl, 1) <= maxEXP) {
    statLvl++;
  }
  return statLvl;
}

export function intToString(num, fixed) {
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return '0';
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
  var b = num.toPrecision(2).split('e'), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ' ' + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}
