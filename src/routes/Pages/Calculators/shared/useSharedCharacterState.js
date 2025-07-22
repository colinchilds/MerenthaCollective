import { useState, useEffect, useCallback } from 'react';
import { useStickyState } from '../../../../@jumbo/utils/commonHelper';
import { skillNames } from '../Helpers/skills.helpers';
import { classes, subclasses } from '../Helpers/calculator.helpers';
import { races } from '../../../../data/Races';

const STATS = ['Strength', 'Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom'];

const createDefaultSkillLevels = () => {
  const initSkills = {};
  Object.values(skillNames).forEach((categorySkills) => {
    categorySkills.forEach((skill) => {
      initSkills[skill] = 0;
    });
  });
  return initSkills;
};

const createDefaultStatLevels = () => {
  return STATS.reduce((acc, stat) => {
    acc[stat] = 0;
    return acc;
  }, {});
};

const createDefaultStatIncrements = () => {
  return STATS.reduce((acc, stat) => {
    acc[stat] = 0;
    return acc;
  }, {});
};

const createDefaultSkillIncrements = () => {
  const initIncrements = {};
  Object.values(skillNames).forEach((categorySkills) => {
    categorySkills.forEach((skill) => {
      initIncrements[skill] = 0;
    });
  });
  return initIncrements;
};

const createDefaultCharacter = (name = 'Character 1', id = null) => ({
  id: id || `character_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
  name,
  charClass: 'Cleric',
  subclass: 'White',
  race: 'Human',
  level: 1,
  skillLevels: createDefaultSkillLevels(),
  statLevels: createDefaultStatLevels(),
  skillIncrements: createDefaultSkillIncrements(),
  statIncrements: createDefaultStatIncrements(),
  warriorSpecializations: {
    newbie: null,
    elite: null,
    legend: null,
  },
  createdAt: Date.now(),
  lastModified: Date.now(),
});

export const useSharedCharacterState = () => {
  const [characters, setCharacters] = useStickyState('shared_characters', {});
  const [activeCharacterId, setActiveCharacterId] = useStickyState('shared_activeCharacter', null);
  const [hasPerformedMigration, setHasPerformedMigration] = useState(false);

  const performMigrationIfNeeded = useCallback(() => {
    const existingSharedCharacters = window.localStorage.getItem('shared_characters');
    let existingSharedData = {};

    try {
      if (existingSharedCharacters) {
        existingSharedData = JSON.parse(existingSharedCharacters);
      }
    } catch (e) {
      // console.warn('Error parsing shared_characters:', e);
    }

    if (!existingSharedCharacters || Object.keys(existingSharedData).length === 0) {
      const skillCalcCharacters = window.localStorage.getItem('skillCalc_characters');
      const statCalcCharacters = window.localStorage.getItem('statCalc_characters');
      const skillActiveId = window.localStorage.getItem('skillCalc_activeCharacter');
      const statActiveId = window.localStorage.getItem('statCalc_activeCharacter');

      let migratedCharacters = {};
      let activeId = null;

      if (skillCalcCharacters) {
        const skillChars = JSON.parse(skillCalcCharacters);
        Object.values(skillChars).forEach((char) => {
          migratedCharacters[char.id] = {
            ...char,
            statLevels: createDefaultStatLevels(),
            skillLevels: char.skillLevels || createDefaultSkillLevels(),
            skillIncrements: createDefaultSkillIncrements(),
            statIncrements: createDefaultStatIncrements(),
            warriorSpecializations: char.warriorSpecializations || {
              newbie: null,
              elite: null,
              legend: null,
            },
          };
        });
        if (skillActiveId && skillChars[JSON.parse(skillActiveId)]) {
          activeId = JSON.parse(skillActiveId);
        }
      }

      if (statCalcCharacters) {
        const statChars = JSON.parse(statCalcCharacters);
        Object.values(statChars).forEach((char) => {
          if (migratedCharacters[char.id]) {
            migratedCharacters[char.id].statLevels = char.statLevels || createDefaultStatLevels();
            migratedCharacters[char.id].warriorSpecializations = char.warriorSpecializations || {
              newbie: null,
              elite: null,
              legend: null,
            };
          } else {
            migratedCharacters[char.id] = {
              ...char,
              skillLevels: createDefaultSkillLevels(),
              statLevels: char.statLevels || createDefaultStatLevels(),
              skillIncrements: createDefaultSkillIncrements(),
              statIncrements: createDefaultStatIncrements(),
              warriorSpecializations: char.warriorSpecializations || {
                newbie: null,
                elite: null,
                legend: null,
              },
            };
          }
        });
        if (!activeId && statActiveId && statChars[JSON.parse(statActiveId)]) {
          activeId = JSON.parse(statActiveId);
        }
      }

      if (Object.keys(migratedCharacters).length === 0) {
        const oldCharClass = window.localStorage.getItem('calc_charClass');
        const oldSubclass = window.localStorage.getItem('calc_subclass');
        const oldRace = window.localStorage.getItem('calc_race');
        const oldLevel = window.localStorage.getItem('calc_level');
        const oldSkillLevels = window.localStorage.getItem('skillCalc_skillLevels');
        const oldStatLevels = window.localStorage.getItem('statCalc_statLevels');

        if (oldCharClass || oldSubclass || oldRace || oldLevel || oldSkillLevels || oldStatLevels) {
          const migratedCharacter = createDefaultCharacter('Character 1');

          if (oldCharClass) migratedCharacter.charClass = JSON.parse(oldCharClass);
          if (oldSubclass) migratedCharacter.subclass = JSON.parse(oldSubclass);
          if (oldRace) migratedCharacter.race = JSON.parse(oldRace);
          if (oldLevel) migratedCharacter.level = JSON.parse(oldLevel);
          if (oldSkillLevels) migratedCharacter.skillLevels = JSON.parse(oldSkillLevels);
          if (oldStatLevels) migratedCharacter.statLevels = JSON.parse(oldStatLevels);

          migratedCharacters = {
            [migratedCharacter.id]: migratedCharacter,
          };
          activeId = migratedCharacter.id;

          window.localStorage.removeItem('calc_charClass');
          window.localStorage.removeItem('calc_subclass');
          window.localStorage.removeItem('calc_race');
          window.localStorage.removeItem('calc_level');
          window.localStorage.removeItem('skillCalc_skillLevels');
          window.localStorage.removeItem('statCalc_statLevels');
        }
      }

      if (Object.keys(migratedCharacters).length > 0) {
        setCharacters(migratedCharacters);
        setActiveCharacterId(activeId || Object.keys(migratedCharacters)[0]);
      }
    } else if (!activeCharacterId) {
      const characterIds = Object.keys(characters);
      if (characterIds.length > 0) {
        setActiveCharacterId(characterIds[0]);
      }
    }
  }, [setCharacters, setActiveCharacterId, characters, activeCharacterId]);

  useEffect(() => {
    if (!hasPerformedMigration) {
      performMigrationIfNeeded();
      setHasPerformedMigration(true);
    }
  }, [hasPerformedMigration, performMigrationIfNeeded]);

  const ensureCharacterHasIncrements = useCallback(
    (character) => {
      if (!character) return character;

      const needsUpdate = !character.skillIncrements || !character.statIncrements || !character.warriorSpecializations;

      if (needsUpdate) {
        const updatedCharacter = {
          ...character,
          skillIncrements: character.skillIncrements || createDefaultSkillIncrements(),
          statIncrements: character.statIncrements || createDefaultStatIncrements(),
          warriorSpecializations: character.warriorSpecializations || {
            newbie: null,
            elite: null,
            legend: null,
          },
        };

        setCharacters((prev) => ({
          ...prev,
          [character.id]: updatedCharacter,
        }));

        return updatedCharacter;
      }

      return character;
    },
    [setCharacters],
  );

  const ensureActiveCharacter = useCallback(() => {
    const characterIds = Object.keys(characters);
    if (characterIds.length === 0) {
      // Only create default character if migration has completed
      if (hasPerformedMigration) {
        const defaultCharacter = createDefaultCharacter();
        const newCharacters = { [defaultCharacter.id]: defaultCharacter };
        setCharacters(newCharacters);
        setActiveCharacterId(defaultCharacter.id);
        return defaultCharacter;
      }
      return null; // Return null if migration hasn't completed yet
    }

    if (!activeCharacterId || !characters[activeCharacterId]) {
      const firstCharacterId = characterIds[0];
      setActiveCharacterId(firstCharacterId);
      return ensureCharacterHasIncrements(characters[firstCharacterId]);
    }

    return ensureCharacterHasIncrements(characters[activeCharacterId]);
  }, [
    characters,
    activeCharacterId,
    hasPerformedMigration,
    setCharacters,
    setActiveCharacterId,
    ensureCharacterHasIncrements,
  ]);

  const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    setActiveCharacter(ensureActiveCharacter());
  }, [characters, activeCharacterId, ensureActiveCharacter]);

  const addCharacter = (name) => {
    const newCharacter = createDefaultCharacter(name);
    const newCharacters = {
      ...characters,
      [newCharacter.id]: newCharacter,
    };
    setCharacters(newCharacters);
    setActiveCharacterId(newCharacter.id);
    return newCharacter.id;
  };

  const deleteCharacter = (characterId) => {
    const characterIds = Object.keys(characters);
    if (characterIds.length <= 1) {
      return false;
    }

    const newCharacters = { ...characters };
    delete newCharacters[characterId];
    setCharacters(newCharacters);

    if (characterId === activeCharacterId) {
      const remainingIds = Object.keys(newCharacters);
      setActiveCharacterId(remainingIds[0]);
    }

    return true;
  };

  const renameCharacter = (characterId, newName) => {
    if (!characters[characterId]) return false;

    const updatedCharacter = {
      ...characters[characterId],
      name: newName,
      lastModified: Date.now(),
    };

    setCharacters({
      ...characters,
      [characterId]: updatedCharacter,
    });

    return true;
  };

  const duplicateCharacter = (characterId) => {
    if (!characters[characterId]) return null;

    const originalCharacter = characters[characterId];
    const newCharacter = {
      ...originalCharacter,
      id: `character_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: `${originalCharacter.name} (Copy)`,
      createdAt: Date.now(),
      lastModified: Date.now(),
    };

    const newCharacters = {
      ...characters,
      [newCharacter.id]: newCharacter,
    };

    setCharacters(newCharacters);
    setActiveCharacterId(newCharacter.id);
    return newCharacter.id;
  };

  const updateActiveCharacter = (updates) => {
    if (!activeCharacter) return;

    const updatedCharacter = {
      ...activeCharacter,
      ...updates,
      lastModified: Date.now(),
    };

    setCharacters({
      ...characters,
      [activeCharacter.id]: updatedCharacter,
    });
  };

  const switchCharacter = (characterId) => {
    if (characters[characterId]) {
      setActiveCharacterId(characterId);
      return true;
    }
    return false;
  };

  const setCharacterLevel = (newLevel) => {
    if (!activeCharacter) return;

    const parsedLevel = parseInt(newLevel);

    if (isNaN(parsedLevel)) return;
    const validatedLevel = Math.max(1, Math.min(250, parsedLevel));
    updateActiveCharacter({ level: validatedLevel });
  };

  const setCharacterClass = (newClass) => {
    if (!activeCharacter) return;
    if (!classes.includes(newClass)) return;

    const updates = {
      charClass: newClass,
      subclass: subclasses[newClass]?.[0] || '',
    };

    if (newClass === 'Dragon') {
      updates.race = 'Dragon';
    } else if (activeCharacter.race === 'Dragon') {
      updates.race = races[0];
    }

    updateActiveCharacter(updates);
  };

  const setCharacterRace = (newRace) => {
    if (!activeCharacter) return;
    if (!races.includes(newRace)) return;

    const updates = { race: newRace };

    if (newRace === 'Dragon') {
      updates.charClass = 'Dragon';
      updates.subclass = subclasses['Dragon']?.[0] || '';
    } else if (activeCharacter.charClass === 'Dragon') {
      updates.charClass = classes[0];
      updates.subclass = subclasses[classes[0]]?.[0] || '';
    }

    updateActiveCharacter(updates);
  };

  const setCharacterSubclass = (newSubclass) => {
    if (!activeCharacter) return;

    const validSubclasses = subclasses[activeCharacter.charClass] || [];
    if (!validSubclasses.includes(newSubclass)) return;

    updateActiveCharacter({ subclass: newSubclass });
  };

  return {
    characters,
    activeCharacter,
    activeCharacterId,
    addCharacter,
    deleteCharacter,
    renameCharacter,
    duplicateCharacter,
    updateActiveCharacter,
    switchCharacter,
    setCharacterLevel,
    setCharacterClass,
    setCharacterRace,
    setCharacterSubclass,
    characterList: Object.values(characters).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
  };
};
