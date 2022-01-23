import { raceCfg } from 'data/Races';

const CLASS_NONE = 0,
  CLASS_LOW = 1,
  CLASS_MEDIUM = 2,
  CLASS_HIGH = 3;

const adjustments = {
  Artrell: { hp: -1, sp: 2, mp: 1 },
  Centaur: { hp: 2, sp: 1, mp: -2 },
  Dragon: { hp: 2, sp: 2, mp: 2 },
  'Drow-elf': { hp: 1, sp: 0, mp: 1 },
  Dwarf: { hp: 1, sp: 1, mp: -2 },
  Elf: { hp: -1, sp: -1, mp: 2 },
  Faerie: { hp: -1, sp: 0, mp: 1 },
  Giant: { hp: 2, sp: -1, mp: -1 },
  Gnoll: { hp: 1, sp: 0, mp: -1 },
  Gnome: { hp: 0, sp: 0, mp: 1 },
  Goblin: { hp: 1, sp: 0, mp: -1 },
  'Half-elf': { hp: -1, sp: 0, mp: 1 },
  'Half-ogre': { hp: 1, sp: 0, mp: -1 },
  'Half-orc': { hp: 1, sp: 0, mp: -1 },
  Halfling: { hp: -1, sp: 2, mp: 1 },
  Hobbit: { hp: -1, sp: 2, mp: 0 },
  Human: { hp: 0, sp: 0, mp: 0 },
  Imp: { hp: -1, sp: 0, mp: 2 },
  Kender: { hp: 0, sp: 1, mp: 0 },
  Kobold: { hp: 1, sp: 0, mp: -1 },
  Lich: { hp: 1, sp: 0, mp: 2 },
  Nymph: { hp: -1, sp: 0, mp: 1 },
  Ogre: { hp: 2, sp: 0, mp: -2 },
  'Ogre-magi': { hp: 1, sp: 0, mp: 1 },
  Orc: { hp: 2, sp: 0, mp: -2 },
  Satyr: { hp: 1, sp: 1, mp: -2 },
  Troll: { hp: 0, sp: 0, mp: -1 },
  'Were-wolf': { hp: 1, sp: 1, mp: -1 },
};

function getClassHealthAdjustment(c) {
  switch (c) {
    case 'Cleric':
    case 'Water':
      return CLASS_MEDIUM;
    case 'Fighter':
    case 'Earth':
      return CLASS_HIGH;
    case 'Mage':
    case 'Ice':
    case 'Bone':
      return CLASS_LOW;
    case 'Monk':
    case 'Air':
      return CLASS_LOW;
    case 'Rogue':
    case 'Fire':
      return CLASS_MEDIUM;
    default:
      return CLASS_NONE;
  }
}

function getClassStaminaAdjustment(c) {
  switch (c) {
    case 'Cleric':
    case 'Water':
      return CLASS_LOW;
    case 'Fighter':
    case 'Earth':
      return CLASS_MEDIUM;
    case 'Mage':
    case 'Ice':
    case 'Bone':
      return CLASS_LOW;
    case 'Monk':
    case 'Air':
      return CLASS_MEDIUM;
    case 'Rogue':
    case 'Fire':
      return CLASS_HIGH;
    default:
      return CLASS_NONE;
  }
}

function getClassManaAdjustment(c) {
  switch (c) {
    case 'Cleric':
    case 'Water':
      return CLASS_MEDIUM;
    case 'Fighter':
    case 'Earth':
      return CLASS_NONE;
    case 'Mage':
    case 'Ice':
    case 'Bone':
      return CLASS_HIGH;
    case 'Monk':
    case 'Air':
      return CLASS_MEDIUM;
    case 'Rogue':
    case 'Fire':
      return CLASS_NONE;
    default:
      return CLASS_NONE;
  }
}

function getHealthAdjustment(charClass, race) {
  return (adjustments[race]['hp'] || 0) + getClassHealthAdjustment(charClass);
}

function getStaminaAdjustment(charClass, race) {
  return (adjustments[race]['sp'] || 0) + getClassStaminaAdjustment(charClass);
}

function getManaAdjustment(charClass, race) {
  return (adjustments[race]['mp'] || 0) + getClassManaAdjustment(charClass);
}

export function getVitals(charClass, race, level, statLevels, subclass) {
  const cl = charClass === 'Dragon' ? subclass : charClass;
  var hpAdj = getHealthAdjustment(cl, race);
  var spAdj = getStaminaAdjustment(cl, race);
  var mpAdj = getManaAdjustment(cl, race);

  var maxHP = 50 + level * (10 + hpAdj) + statLevels['Constitution'] * (10 + hpAdj);
  var maxSP = 5 + level * (2 + spAdj) + statLevels['Dexterity'] * (6 + spAdj);
  var maxMP = 50 + level * (10 + mpAdj) + statLevels['Intelligence'] * (10 + mpAdj) + statLevels['Wisdom'] * (5 + mpAdj);

  return { hp: maxHP, sp: maxSP, mp: maxMP };
}

export function getEncumbrance(race, statLevels) {
  if (!race || !raceCfg[race]) return 0;

  const strAdjustment = raceCfg[race] ? raceCfg[race]['str'] : 0;
  return 2 * (((strAdjustment > -4 ? strAdjustment + 10 : 5) + statLevels['Strength'] * 3) * 2 + 35);
}

export function getWeight(race, statLevels) {
  if (!race || !raceCfg[race]) return 10000;

  return Math.max(0, statLevels['Constitution'] - 10) * 100 + raceCfg[race]['weight'];
}
