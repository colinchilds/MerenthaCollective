import { raceStats } from 'data/Races';

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
      default:
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
      default:
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
      default:
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
      default:
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
      default:
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
    Object.keys(raceStats[stat]).forEach((tier) => {
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

export function getStatCost(stat, charClass, race, statLevel = 1, count = 1, isWerewolf = false, werewolfTimeOfDay = 'day') {
  statLevel = parseInt(statLevel);
  count = parseInt(count);
  if (!count || count <= 0) {
    return 0;
  } else if (count > 500) {
    count = 500;
  }

  let cost = 0;
  const classModifier = getClassModifier(charClass, stat);
  let effectiveRaceModifier = getRaceModifier(race, stat);

  // Apply werewolf mechanics - determine which race stats to use
  if (isWerewolf && werewolfTimeOfDay === 'night') {
    // During night: use werewolf stats instead of base race
    effectiveRaceModifier = getRaceModifier('Were-wolf', stat);
  }

  cost = Math.trunc(getBaseCost(statLevel) * (1.0 + classModifier + effectiveRaceModifier)) * 1000;

  // Apply 15% penalty to mental stats for werewolves ONLY during day
  if (isWerewolf && werewolfTimeOfDay === 'day') {
    if (stat === 'Wisdom' || stat === 'Intelligence' || stat === 'Charisma') {
      cost = Math.trunc(cost * 1.15);
    }
  }

  return cost + getStatCost(stat, charClass, race, statLevel + 1, count - 1, isWerewolf, werewolfTimeOfDay);
}

export function getMaxStat(stat, charClass, race, level, isWerewolf = false, werewolfTimeOfDay = 'day') {
  const maxEXP = getMaxExp(level);
  let statLvl = 0;

  while (statLvl < 500 && getStatCost(stat, charClass, race, statLvl, 1, isWerewolf, werewolfTimeOfDay) <= maxEXP) {
    statLvl++;
  }
  return statLvl;
}
