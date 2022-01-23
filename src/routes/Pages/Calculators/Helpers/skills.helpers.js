const skillNames = [
  // Combat
  'attack',
  'defense',
  'charging',
  'melee',
  'double wielding',
  'two handed',
  'riding',
  // Weapons
  'axe',
  'blade',
  'blunt',
  'knife',
  'flail',
  'projectile',
  'ranged',
  // Magic/Nature
  'conjuring',
  'faith',
  'magic attack',
  'magic defense',
  'telepathy',
  'healing',
  'nature',
  // Deception
  'acrobatics',
  'bargaining',
  'entertaining',
  'locks',
  'murder',
  'stealing',
  'stealth',
];

function initSkills(charClass) {
  charClass = charClass.toLowerCase();
  const skills = {};
  switch (charClass) {
    case 'fighter':
      skills['melee'] = { base: 1, multiplier: 100 };
      skills['attack'] = { base: 5, multiplier: 100 };
      skills['defense'] = { base: 2, multiplier: 90 };
      skills['double wielding'] = { base: 0, multiplier: 100 };
      skills['knife'] = { base: 1, multiplier: 70 };
      skills['blunt'] = { base: 1, multiplier: 75 };
      skills['projectile'] = { base: 0, multiplier: 60 };
      skills['blade'] = { base: 10, multiplier: 90 };
      skills['two handed'] = { base: 1, multiplier: 100 };
      skills['murder'] = { base: 0, multiplier: 0 };
      skills['stealing'] = { base: 0, multiplier: 10 };
      skills['locks'] = { base: 0, multiplier: 5 };
      skills['stealth'] = { base: 0, multiplier: 10 };
      skills['magic defense'] = { base: 0, multiplier: 0 };
      skills['magic attack'] = { base: 0, multiplier: 0 };
      skills['healing'] = { base: 0, multiplier: 0 };
      skills['faith'] = { base: 0, multiplier: 0 };
      skills['conjuring'] = { base: 0, multiplier: 0 };
      break;
    case 'rogue':
      skills['melee'] = { base: 1, multiplier: 100 };
      skills['attack'] = { base: 1, multiplier: 100 };
      skills['defense'] = { base: 5, multiplier: 100 };
      skills['double wielding'] = { base: 0, multiplier: 75 };
      skills['knife'] = { base: 10, multiplier: 100 };
      skills['blunt'] = { base: 2, multiplier: 100 };
      skills['projectile'] = { base: 7, multiplier: 100 };
      skills['blade'] = { base: 0, multiplier: 40 };
      skills['two handed'] = { base: 0, multiplier: 10 };
      skills['murder'] = { base: 3, multiplier: 100 };
      skills['stealth'] = { base: 10, multiplier: 100 };
      skills['stealing'] = { base: 7, multiplier: 100 };
      skills['locks'] = { base: 10, multiplier: 100 };
      skills['magic defense'] = { base: 0, multiplier: 0 };
      skills['magic attack'] = { base: 0, multiplier: 0 };
      skills['healing'] = { base: 0, multiplier: 0 };
      skills['faith'] = { base: 0, multiplier: 0 };
      skills['conjuring'] = { base: 0, multiplier: 0 };
      break;
    case 'mage':
      skills['melee'] = { base: 1, multiplier: 50 };
      skills['attack'] = { base: 0, multiplier: 30 };
      skills['defense'] = { base: 1, multiplier: 60 };
      skills['double wielding'] = { base: 0, multiplier: 10 };
      skills['knife'] = { base: 1, multiplier: 50 };
      skills['blunt'] = { base: 5, multiplier: 90 };
      skills['projectile'] = { base: 0, multiplier: 53 };
      skills['blade'] = { base: 0, multiplier: 20 };
      skills['two handed'] = { base: 0, multiplier: 17 };
      skills['murder'] = { base: 0, multiplier: 0 };
      skills['stealing'] = { base: 0, multiplier: 0 };
      skills['locks'] = { base: 0, multiplier: 28 };
      skills['magic defense'] = { base: 1, multiplier: 61 };
      skills['magic attack'] = { base: 10, multiplier: 100 };
      skills['healing'] = { base: 0, multiplier: 20 };
      skills['faith'] = { base: 0, multiplier: 0 };
      skills['conjuring'] = { base: 7, multiplier: 100 };
      break;
    case 'monk':
      skills['melee'] = { base: 10, multiplier: 100 };
      skills['attack'] = { base: 1, multiplier: 70 };
      skills['defense'] = { base: 10, multiplier: 100 };
      skills['double wielding'] = { base: 0, multiplier: 0 };
      skills['knife'] = { base: 0, multiplier: 30 };
      skills['blunt'] = { base: 3, multiplier: 95 };
      skills['projectile'] = { base: 7, multiplier: 100 };
      skills['blade'] = { base: 0, multiplier: 3 };
      skills['two handed'] = { base: 0, multiplier: 0 };
      skills['murder'] = { base: 0, multiplier: 0 };
      skills['stealing'] = { base: 0, multiplier: 0 };
      skills['locks'] = { base: 0, multiplier: 0 };
      skills['magic defense'] = { base: 3, multiplier: 100 };
      skills['magic attack'] = { base: 1, multiplier: 25 };
      skills['healing'] = { base: 0, multiplier: 37 };
      skills['faith'] = { base: 7, multiplier: 100 };
      skills['conjuring'] = { base: 0, multiplier: 15 };
      break;
    case 'cleric':
      skills['melee'] = { base: 1, multiplier: 50 };
      skills['attack'] = { base: 0, multiplier: 10 };
      skills['defense'] = { base: 1, multiplier: 20 };
      skills['double wielding'] = { base: 0, multiplier: 1 };
      skills['knife'] = { base: 5, multiplier: 90 };
      skills['blunt'] = { base: 1, multiplier: 70 };
      skills['projectile'] = { base: 0, multiplier: 20 };
      skills['blade'] = { base: 0, multiplier: 15 };
      skills['two handed'] = { base: 0, multiplier: 1 };
      skills['murder'] = { base: 0, multiplier: 0 };
      skills['stealing'] = { base: 0, multiplier: 0 };
      skills['locks'] = { base: 0, multiplier: 0 };
      skills['magic defense'] = { base: 0, multiplier: 80 };
      skills['magic attack'] = { base: 0, multiplier: 7 };
      skills['healing'] = { base: 10, multiplier: 100 };
      skills['faith'] = { base: 5, multiplier: 90 };
      skills['conjuring'] = { base: 0, multiplier: 30 };
      break;
    default:
      skills['melee'] = { base: 1, multiplier: 20 };
      skills['attack'] = { base: 1, multiplier: 20 };
      skills['defense'] = { base: 1, multiplier: 20 };
      skills['double wielding'] = { base: 0, multiplier: 0 };
      skills['knife'] = { base: 1, multiplier: 20 };
      skills['blunt'] = { base: 1, multiplier: 20 };
      skills['projectile'] = { base: 0, multiplier: 0 };
      skills['blade'] = { base: 1, multiplier: 20 };
      skills['ranged'] = { base: 0, multiplier: 0 };
      skills['two handed'] = { base: 0, multiplier: 0 };
      skills['murder'] = { base: 0, multiplier: 0 };
      skills['stealing'] = { base: 0, multiplier: 0 };
      skills['locks'] = { base: 0, multiplier: 0 };
      skills['magic defense'] = { base: 0, multiplier: 0 };
      skills['magic attack'] = { base: 0, multiplier: 0 };
      skills['healing'] = { base: 0, multiplier: 0 };
      skills['faith'] = { base: 0, multiplier: 0 };
      skills['conjuring'] = { base: 0, multiplier: 0 };
      break;
  }
  return skills;
}

function training_formula(charClass, lvl, skill) {
  charClass = charClass.toLowerCase();
  if (charClass === 'dragon') {
    switch (skill) {
      case 'attack':
      case 'defense':
      case 'melee':
      case 'charging':
      case 'stealth':
      case 'entertianing':
      case 'acrobatics':
      case 'conjuring':
      case 'faith':
      case 'healing':
      case 'magic attack':
      case 'magic defense':
      case 'telepathy':
      case 'nature':
      case 'bargaining':
      case 'stealing':
      case 'murder':
      case 'entertaining':
        return lvl * lvl * 3;
      //return to_int( sqrt(to_float(lvl))*lvl*lvl);
      default:
        return lvl * lvl * lvl * lvl;
    }
  } else if (charClass === 'fighter') {
    switch (skill) {
      case 'axe':
      case 'flail':
      case 'melee':
      case 'attack':
      case 'defense':
      case 'double wielding':
      case 'charging':
      case 'riding':
      case 'two handed':
      case 'blade':
      case 'knife':
      case 'blunt':
      case 'projectile':
      case 'ranged':
      case 'blocking':
        return lvl * lvl;
      case 'magic attack':
      case 'nature':
      case 'healing':
      case 'faith':
        return lvl * lvl * 5;
      case 'stealing':
      case 'bargaining':
      case 'murder':
        return lvl * lvl * lvl;
      default:
        return lvl * lvl * lvl * lvl;
    }
  } else if (charClass === 'cleric') {
    switch (skill) {
      case 'magic defense':
      case 'healing':
      case 'faith':
      case 'flail':
      case 'blunt':
      case 'bargaining':
        return lvl * lvl;
      case 'knife':
      case 'murder':
      case 'projectile':
        return lvl * lvl * (lvl / 2);
      case 'axe':
      case 'melee':
      case 'defense':
      case 'conjuring':
      case 'magic attack':
        return lvl * lvl * lvl;
      default:
        return lvl * lvl * lvl * lvl;
    }
  } else if (charClass === 'mage') {
    switch (skill) {
      case 'magic attack':
      case 'magic defense':
      case 'conjuring':
      case 'blunt':
      case 'flail':
      case 'telepathy':
      case 'nature':
        return lvl * lvl;
      case 'projectile':
      case 'melee':
      case 'attack':
      case 'knife':
      case 'axe':
      case 'bargaining':
        return lvl * lvl * lvl;
      case 'healing':
        return lvl * lvl * 5;
      case 'defense':
        return lvl * lvl * (lvl / 10) * (lvl / 20);
      case 'faith':
        return lvl * lvl * lvl * (lvl / 5);
      default:
        return lvl * lvl * lvl * lvl;
    }
  } else if (charClass === 'monk') {
    switch (skill) {
      case 'melee':
      case 'defense':
      case 'blunt':
      case 'projectile':
      case 'attack':
      case 'flail':
      case 'bargaining':
      case 'magic defense':
      case 'faith':
        return lvl * lvl;
      case 'magic attack':
      case 'axe':
        return (lvl * lvl * lvl) / 2;
      case 'healing':
      case 'nature':
        return lvl * lvl * 5;
      case 'knife':
      case 'conjuring':
        return lvl * lvl * lvl;
      default:
        return lvl * lvl * lvl * lvl;
    }
  } else {
    switch (skill) {
      case 'stealth':
      case 'melee':
      case 'attack':
      case 'defense':
      case 'knife':
      case 'bargaining':
      case 'murder':
      case 'stealing':
      case 'locks':
      case 'entertaining':
      case 'blunt':
      case 'double wielding':
        return lvl * lvl;
      case 'flail':
      case 'axe':
      case 'nature':
      case 'telepathy':
      case 'acrobatics':
      case 'blade':
      case 'projectile':
        return lvl * lvl * lvl;
      default:
        return lvl * lvl * lvl * lvl;
    }
  }
}

function query_melee_ac(charClass) {
  switch (charClass) {
    case 'fighter':
      return 15;
    case 'monk':
      return 20;
    case 'rogue':
      return 20;
    case 'cleric':
      return 5;
    case 'mage':
      return 8;
    case 'dragon':
      return 30;
    default:
      return 1;
  }
}

function calculateSkillCost(charClass, skill, level) {
  switch (charClass) {
    case 'dragon':
      switch (skill) {
        case 'attack':
        case 'defense':
        case 'melee':
        case 'charging':
        case 'stealth':
        case 'entertianing':
        case 'acrobatics':
        case 'conjuring':
        case 'faith':
        case 'healing':
        case 'magic attack':
        case 'magic defense':
        case 'telepathy':
        case 'nature':
        case 'bargaining':
        case 'stealing':
        case 'murder':
        case 'entertaining':
          return calculateCostByTier(level, 2);
        default:
          break;
      }
      break;
    case 'fighter':
      switch (skill) {
        case 'axe':
        case 'flail':
        case 'melee':
        case 'attack':
        case 'defense':
        case 'double wielding':
        case 'charging':
        case 'riding':
        case 'two handed':
        case 'blade':
        case 'knife':
        case 'blunt':
        case 'projectile':
        case 'ranged':
        case 'blocking':
          return calculateCostByTier(level, 1);
        case 'stealing':
        case 'bargaining':
        case 'murder':
          return calculateCostByTier(level, 3);
        default:
          break;
      }
      break;
    case 'cleric':
      switch (skill) {
        case 'magic defense':
        case 'healing':
        case 'faith':
        case 'flail':
        case 'blunt':
        case 'bargaining':
          return calculateCostByTier(level, 1);
        case 'melee':
        case 'defense':
        case 'knife':
        case 'murder':
          return calculateCostByTier(level, 3);
        case 'conjuring':
        case 'magic attack':
          return calculateCostByTier(level, 2);
        default:
          break;
      }
      break;
    case 'mage':
      switch (skill) {
        case 'magic attack':
        case 'magic defense':
        case 'conjuring':
        case 'blunt':
        case 'flail':
        case 'telepathy':
        case 'nature':
          return calculateCostByTier(level, 1);
        case 'projectile':
        case 'melee':
        case 'attack':
        case 'knife':
        case 'healing':
          return calculateCostByTier(level, 3);
        case 'bargaining':
          return calculateCostByTier(level, 2);
        default:
          break;
      }
      break;
    case 'monk':
      switch (skill) {
        case 'melee':
        case 'defense':
        case 'blunt':
        case 'projectile':
        case 'attack':
        case 'flail':
        case 'bargaining':
        case 'magic defense':
        case 'faith':
          return calculateCostByTier(level, 1);
        case 'magic attack':
        case 'nature':
          return calculateCostByTier(level, 2);
        case 'healing':
          return calculateCostByTier(level, 3);
        default:
          break;
      }
      break;
    case 'rogue':
      switch (skill) {
        case 'stealth':
        case 'melee':
        case 'attack':
        case 'defense':
        case 'knife':
        case 'bargaining':
        case 'murder':
        case 'stealing':
        case 'locks':
        case 'entertaining':
        case 'blunt':
          return calculateCostByTier(level, 1);
        case 'flail':
        case 'axe':
        case 'nature':
        case 'telepathy':
        case 'acrobatics':
        case 'blade':
        case 'projectile':
        case 'double wielding':
          return calculateCostByTier(level, 3);
        default:
          break;
      }
      break;
    default:
      break;
  }

  return calculateCostByTier(level, 4);
}

function calculateCostByTier(level, tier) {
  switch (tier) {
    case 1:
      return level * level;
    case 2:
      return level * level * 3;
    case 3:
      return level * level * 6;
    default:
      return level * level * 10;
  }
}

function getSkillMultiplier(skills, skill) {
  console.log(skill + ' ' + skills[skill]);
  if (!skills[skill]) return 0;
  else return skills[skill]['multiplier'];
}

function getSkillBase(skills, skill) {
  if (!skills || !skills[skill]) return 0;
  else return skills[skill]['base'];
}

export function getSkills(charClass, subclass, race) {
  charClass = charClass.toLowerCase();
  subclass = subclass.toLowerCase();
  race = race.toLowerCase();

  var skills = initSkills(charClass);
  subclass = subclass + (subclass === 'healer' ? charClass : '');
  const horseSkill = race === 'centaur' || race === 'satyr' ? 'charging' : 'riding';
  var multipliers = {
    // Combat
    attack: 20,
    defense: 20,
    melee: 20,
    'two handed': 0,
    'double wielding': 0,
    riding: 0,
    charging: 0,
    // Weapons
    axe: 0,
    blade: 0,
    blunt: 0,
    knife: 0,
    flail: 0,
    projectile: 0,
    ranged: 0,
    // Magic/Nature
    conjuring: 0,
    faith: 0,
    'magic attack': 0,
    'magic defense': 0,
    telepathy: 0,
    healing: 0,
    acrobatics: 0,
    entertaining: 0,
    nature: 0,
    // Deception
    locks: 0,
    murder: 0,
    stealing: 0,
    stealth: 0,
    bargaining: 20,
  };

  switch (charClass) {
    case 'cleric':
      // Combat
      multipliers['attack'] = 25;
      multipliers['defense'] = 20;
      multipliers['melee'] = 50;
      multipliers['two handed'] = 10;
      multipliers['double wielding'] = 20;
      // Weapons
      multipliers['blade'] = 20;
      multipliers['blunt'] = 80;
      multipliers['knife'] = 80;
      multipliers['projectile'] = 20;
      multipliers['axe'] = 60;
      multipliers['flail'] = 100;
      // Magic/Nature
      multipliers['conjuring'] = 30;
      multipliers['faith'] = 90;
      multipliers['magic attack'] = 10;
      multipliers['magic defense'] = 80;
      multipliers['healing'] = 100;
      break;
    case 'fighter':
      // Combat
      multipliers['attack'] = 100;
      multipliers['defense'] = 90;
      multipliers['melee'] = 100;
      multipliers['two handed'] = 100;
      multipliers['double wielding'] = 100;
      // Weapons
      multipliers['blade'] = 90;
      multipliers['blunt'] = 75;
      multipliers['knife'] = 70;
      multipliers['projectile'] = 60;
      multipliers['axe'] = 90;
      multipliers['flail'] = 90;
      // Deception
      multipliers['stealing'] = 10;
      multipliers['locks'] = 5;
      multipliers['stealth'] = 10;
      break;
    case 'mage':
      // Combat
      multipliers['attack'] = 30;
      multipliers['defense'] = 60;
      multipliers['melee'] = 50;
      multipliers['two handed'] = 15;
      multipliers['double wielding'] = 15;
      // Weapons
      multipliers['blade'] = 20;
      multipliers['blunt'] = 90;
      multipliers['knife'] = 50;
      multipliers['projectile'] = 53;
      multipliers['axe'] = 60;
      multipliers['flail'] = 100;
      // Magic/Nature
      multipliers['conjuring'] = 100;
      multipliers['magic attack'] = 100;
      multipliers['magic defense'] = 61;
      multipliers['telepathy'] = 20;
      multipliers['healing'] = 20;
      // Deception
      multipliers['locks'] = 15;
      break;
    case 'monk':
      // Combat
      multipliers['attack'] = 70;
      multipliers['defense'] = 100;
      multipliers['melee'] = 100;
      // Weapons
      multipliers['blade'] = 5;
      multipliers['blunt'] = 95;
      multipliers['knife'] = 30;
      multipliers['projectile'] = 100;
      multipliers['axe'] = 60;
      multipliers['flail'] = 100;
      // Magic/Nature
      multipliers['conjuring'] = 15;
      multipliers['faith'] = 100;
      multipliers['magic attack'] = 25;
      multipliers['magic defense'] = 100;
      multipliers['healing'] = 37;
      break;
    case 'rogue':
      // Combat
      multipliers['attack'] = 100;
      multipliers['defense'] = 100;
      multipliers['melee'] = 100;
      multipliers['two handed'] = 10;
      multipliers['double wielding'] = 80;
      // Weapons
      multipliers['blade'] = 40;
      multipliers['blunt'] = 100;
      multipliers['knife'] = 100;
      multipliers['projectile'] = 100;
      multipliers['axe'] = 70;
      multipliers['flail'] = 60;
      // Deception
      multipliers['murder'] = 100;
      multipliers['stealing'] = 100;
      multipliers['locks'] = 100;
      multipliers['stealth'] = 100;
      break;
    case 'dragon':
      // Deception
      multipliers['bargaining'] = 63;
      break;
    default:
      // Weapons
      multipliers['blade'] = 20;
      multipliers['blunt'] = 20;
      multipliers['knife'] = 20;
      break;
  }

  switch (subclass) {
    case 'white':
      // Magic/Nature
      multipliers['healing'] = 110;
      break;
    case 'grey':
      // Magic/Nature
      multipliers['faith'] = 95;
      multipliers['magic attack'] = 15;
      // Deception
      multipliers['murder'] = 20;
      break;
    case 'black':
      // Magic/Nature
      multipliers['magic attack'] = 30;
      multipliers['healing'] = 90;
      // Deception
      multipliers['murder'] = 30;
      break;
    case 'berserker':
      // Combat
      multipliers['melee'] = 110;
      multipliers['two handed'] = 95;
      multipliers[horseSkill] = 80;
      // Weapons
      multipliers['blade'] = 95;
      multipliers['blunt'] = 90;
      multipliers['knife'] = 90;
      multipliers['projectile'] = 90;
      // Deception
      multipliers['stealth'] = 0;
      break;
    case 'mercenary':
      // Combat
      multipliers['attack'] = 120;
      multipliers['defense'] = 120;
      multipliers['melee'] = 120;
      multipliers['two handed'] = 120;
      multipliers['double wielding'] = 120;
      multipliers[horseSkill] = 120;
      // Weapons
      multipliers['axe'] = 120;
      multipliers['blade'] = 120;
      multipliers['blunt'] = 120;
      multipliers['knife'] = 120;
      multipliers['flail'] = 120;
      multipliers['projectile'] = 120;
      multipliers['ranged'] = 0;
      // Deception
      multipliers['stealing'] = 0;
      multipliers['locks'] = 0;
      multipliers['stealth'] = 0;
      // Magic/Nature
      multipliers['faith'] = 0;
      multipliers['magic attack'] = 0;
      multipliers['healing'] = 0;
      multipliers['nature'] = 0;
      break;
    case 'paladin':
    case 'antipaladin':
      // Combat
      multipliers['defense'] = 100;
      multipliers[horseSkill] = 100;
      // Weapons
      multipliers['blade'] = 90;
      multipliers['blunt'] = 110;
      multipliers['knife'] = 70;
      // Deception
      multipliers['stealing'] = 0;
      // Magic/Nature
      multipliers['faith'] = 45;
      multipliers['magic attack'] = 50;
      multipliers['healing'] = 50;
      break;
    case 'ranger':
      // Combat
      multipliers['defense'] = 100;
      multipliers[horseSkill] = 100;
      // Weapons
      multipliers['axe'] = 110;
      multipliers['blade'] = 90;
      multipliers['ranged'] = 95;
      // Deception
      multipliers['stealth'] = 20;
      // Magic/Nature
      multipliers['nature'] = 55;
      break;
    case 'warrior': // handled by /std/subclass/warrior/specialize.c
      multipliers['defense'] = 110;
      multipliers[horseSkill] = 100;
      break;
    case 'druid':
      // Magic/Nature
      multipliers['telepathy'] = 20;
      multipliers['faith'] = 21;
      multipliers['magic defense'] = 80;
      multipliers['nature'] = 105;
      break;
    case 'healermage':
      // Magic/Nature
      multipliers['faith'] = 21;
      multipliers['magic attack'] = 92;
      multipliers['magic defense'] = 110;
      multipliers['telepathy'] = 10;
      multipliers['healing'] = 52;
      multipliers['nature'] = 33;
      break;
    case 'necromancer':
      // Magic/Nature
      multipliers['telepathy'] = 63;
      // Deception
      multipliers['murder'] = 20;
      break;
    case 'warlock':
      // Magic/Nature
      multipliers['telepathy'] = 63;
      break;
    case 'wizard':
      // Magic/Nature
      multipliers['telepathy'] = 42;
      multipliers['nature'] = 21;
      break;
    case 'sorcerer':
      // Magic/Nature
      multipliers['magic attack'] = 108;
      multipliers['telepathy'] = 103;
      break;
    case 'illusionist':
      // Combat
      multipliers['attack'] = 50;
      multipliers['two handed'] = 30;
      multipliers['double wielding'] = 30;
      // Magic/Nature
      multipliers['magic attack'] = 110;
      multipliers['magic defense'] = 35;
      multipliers['telepathy'] = 80;
      // Deception
      multipliers['bargaining'] = 20;
      break;
    case 'priest':
      // Magic/Nature
      // multipliers['faith']             = 110;
      multipliers['nature'] = 50;
      break;
    case 'healermonk':
      // Magic/Nature
      multipliers['faith'] = 90;
      multipliers['healing'] = 76;
      multipliers['nature'] = 33;
      break;
    case 'scholar':
      // Magic/Nature
      multipliers['conjuring'] = 25;
      multipliers['nature'] = 50;
      break;
    case 'shaman':
      // Magic/Nature
      multipliers['conjuring'] = 20;
      multipliers['faith'] = 110;
      multipliers['healing'] = 30;
      multipliers['nature'] = 50;
      break;
    case 'bard':
      // Combat
      // Magic/Nature
      multipliers['acrobatics'] = 30;
      multipliers['entertaining'] = 90;
      multipliers['nature'] = 40;
      // Deception
      multipliers['locks'] = 60;
      multipliers['murder'] = 90;
      multipliers['stealing'] = 60;
      multipliers['stealth'] = 60;
      break;
    case 'ninja':
    case 'assassin':
      // Combat
      multipliers['attack'] = 110;
      // Magic/Nature
      multipliers['telepathy'] = 40;
      multipliers['acrobatics'] = 60;
      // Deception
      multipliers['locks'] = 60;
      multipliers['stealing'] = 30;
      multipliers['stealth'] = 80;
      break;
    case 'thief':
      // Combat
      multipliers['attack'] = 105;
      // Magic/Nature
      multipliers['acrobatics'] = 65;
      // Deception
      multipliers['locks'] = 105;
      multipliers['murder'] = 80;
      multipliers['stealing'] = 105;
      multipliers['stealth'] = 100;
      multipliers['bargaining'] = 40;
      break;
    case 'air':
      // Combat
      multipliers['attack'] = 105;
      multipliers['defense'] = 126;
      multipliers['melee'] = 126;
      multipliers['charging'] = 105;
      // Magic/Nature
      multipliers['conjuring'] = 105;
      multipliers['faith'] = 147;
      multipliers['magic attack'] = 126;
      multipliers['magic defense'] = 147;
      multipliers['telepathy'] = 126;
      multipliers['healing'] = 84;
      multipliers['acrobatics'] = 105;
      multipliers['entertaining'] = 63;
      multipliers['nature'] = 126;
      // Deception
      multipliers['locks'] = 21;
      multipliers['stealing'] = 21;
      multipliers['stealth'] = 126;
      break;
    case 'bone':
      // Combat
      multipliers['attack'] = 100;
      multipliers['defense'] = 55;
      multipliers['melee'] = 110;
      multipliers['charging'] = 126;
      // Magic/Nature
      multipliers['conjuring'] = 110;
      multipliers['faith'] = 136;
      multipliers['magic attack'] = 130;
      multipliers['magic defense'] = 130;
      multipliers['telepathy'] = 23;
      multipliers['healing'] = 120;
      multipliers['acrobatics'] = 63;
      multipliers['entertaining'] = 25;
      multipliers['nature'] = 126;
      // Deception
      multipliers['locks'] = 21;
      multipliers['stealing'] = 21;
      multipliers['stealth'] = 84;
      multipliers['murder'] = 147;
      break;
    case 'earth':
      // Combat
      multipliers['attack'] = 147;
      multipliers['defense'] = 147;
      multipliers['melee'] = 147;
      multipliers['charging'] = 126;
      // Magic/Nature
      multipliers['conjuring'] = 105;
      multipliers['faith'] = 84;
      multipliers['magic attack'] = 105;
      multipliers['magic defense'] = 105;
      multipliers['telepathy'] = 126;
      multipliers['healing'] = 84;
      multipliers['acrobatics'] = 63;
      multipliers['entertaining'] = 63;
      multipliers['nature'] = 126;
      // Deception
      multipliers['locks'] = 21;
      multipliers['stealing'] = 21;
      multipliers['stealth'] = 105;
      break;
    case 'fire':
      // Combat
      multipliers['attack'] = 147;
      multipliers['defense'] = 126;
      multipliers['melee'] = 126;
      multipliers['charging'] = 84;
      // Magic/Nature
      multipliers['conjuring'] = 105;
      multipliers['faith'] = 84;
      multipliers['magic attack'] = 126;
      multipliers['magic defense'] = 126;
      multipliers['telepathy'] = 105;
      multipliers['healing'] = 84;
      multipliers['acrobatics'] = 105;
      multipliers['entertaining'] = 105;
      multipliers['nature'] = 105;
      // Deception
      multipliers['locks'] = 21;
      multipliers['murder'] = 147;
      multipliers['stealing'] = 126;
      multipliers['stealth'] = 84;
      break;
    case 'ice':
      // Combat
      multipliers['attack'] = 100;
      multipliers['defense'] = 84;
      multipliers['melee'] = 105;
      multipliers['charging'] = 126;
      // Magic/Nature
      multipliers['conjuring'] = 126;
      multipliers['faith'] = 84;
      multipliers['acrobatics'] = 63;
      multipliers['entertaining'] = 84;
      multipliers['magic attack'] = 147;
      multipliers['magic defense'] = 147;
      multipliers['telepathy'] = 126;
      multipliers['healing'] = 84;
      multipliers['nature'] = 126;
      // Deception
      multipliers['locks'] = 21;
      multipliers['stealing'] = 21;
      multipliers['stealth'] = 84;
      break;
    case 'water':
      // Combat
      multipliers['attack'] = 105;
      multipliers['defense'] = 105;
      multipliers['melee'] = 105;
      multipliers['charging'] = 84;
      // Magic/Nature
      multipliers['conjuring'] = 126;
      multipliers['faith'] = 126;
      multipliers['magic attack'] = 105;
      multipliers['magic defense'] = 147;
      multipliers['telepathy'] = 126;
      multipliers['healing'] = 147;
      multipliers['acrobatics'] = 63;
      multipliers['entertaining'] = 84;
      multipliers['nature'] = 126;
      // Deception
      multipliers['locks'] = 21;
      multipliers['stealing'] = 21;
      multipliers['stealth'] = 84;
      break;
    default:
      break;
  }

  for (const skill in multipliers) {
    if (getSkillMultiplier(skills, skill) !== multipliers[skill]) {
      const new_base = getSkillBase(skills, skill);
      const new_multiplier = multipliers[skill];
      skills[skill] = { base: new_base, multiplier: new_multiplier };
    }
  }

  var result = {};
  for (const skill in skills) {
    if (skills[skill]['multiplier'] > 0) {
      result[skill] = skills[skill];
    }
  }
  return result;
}

export function getSkillMax(skills, skill, level) {
  const multiplier = getSkillMultiplier(skills, skill);
  return Math.floor((multiplier / 20) * (level + 1));
}
