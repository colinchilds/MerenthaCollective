import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import { classes, intToString, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';
import CharacterInfo from '../Components/character-info.component';
import WarriorSpecializations from '../Components/WarriorSpecializations';
import { getSkillCost, getSkillMax, getSkillMultipliers, skillNames } from '../Helpers/skills.helpers';
import { getMaxExp } from '../Helpers/stats.helpers';
import { Box, Button, Divider, Grid, InputAdornment, TextField, Tooltip, Typography, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { useSharedCharacterState } from '../shared/useSharedCharacterState';
import CharacterSelector from '../StatCalculator/CharacterSelector';

const breadcrumbs = [
  { label: 'Calculators', link: '/calculators' },
  { label: 'Skills', isActive: true },
];

function hasItemInSection(section, multipliers) {
  const sectionSkills = skillNames[section];
  for (var i = 0; i < sectionSkills.length; i++) {
    if (multipliers[sectionSkills[i]]) {
      return true;
    }
  }
  return false;
}

const SkillCalculator = () => {
  const {
    characters,
    activeCharacter,
    addCharacter,
    deleteCharacter,
    renameCharacter,
    duplicateCharacter,
    updateActiveCharacter,
    switchCharacter,
    characterList,
    setCharacterLevel,
    setCharacterClass,
    setCharacterRace,
    setCharacterSubclass,
  } = useSharedCharacterState();

  var sn = [].concat.apply([], Object.values(skillNames));
  const initSkills = sn.reduce((result, skill) => ({ ...result, [skill]: 0 }), {});

  const charClass = (activeCharacter && activeCharacter.charClass) || classes[0];
  const validSubclass =
    subclasses[charClass] && subclasses[charClass].includes(activeCharacter && activeCharacter.subclass)
      ? activeCharacter.subclass
      : subclasses[charClass][0];
  const subclass = validSubclass;
  const race = (activeCharacter && activeCharacter.race) || races[0];
  const level = (activeCharacter && activeCharacter.level) || 1;
  const skillLevels = (activeCharacter && activeCharacter.skillLevels) || initSkills;
  const skillInc = (activeCharacter && activeCharacter.skillIncrements) || initSkills;
  const [multipliers, setMultipliers] = useState(
    getSkillMultipliers(charClass, subclass, race, activeCharacter && activeCharacter.warriorSpecializations),
  );
  const [skillCost, setSkillCost] = useState({ ...initSkills });

  const [charSkillTotal, setCharSkillTotal] = useState(0);
  const [skillTotal, setSkillTotal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);
  const [maxExp, setMaxExp] = useState(0);

  const updateSkillLevels = (k, v) => {
    if (v < 0) {
      v = 0;
    } else if (v > 999) {
      v = 999;
    }
    updateActiveCharacter({
      skillLevels: {
        ...skillLevels,
        [k]: v,
      },
    });
  };
  const updateSkillInc = (k, v) => {
    if (v < 0) {
      v = 0;
    } else if (v > 999) {
      v = 999;
    }
    updateActiveCharacter({
      skillIncrements: {
        ...skillInc,
        [k]: v,
      },
    });
  };

  const handleMaxIncrement = (skill) => {
    const currentValue = parseInt(skillLevels[skill]) || 0;
    const maxValue = parseInt(getSkillMax(multipliers, skill, level)) || 0;
    const maxIncrement = Math.max(0, maxValue - currentValue);
    updateSkillInc(skill, maxIncrement);
  };

  const updateWarriorSpecializations = (newSpecializations) => {
    updateActiveCharacter({
      warriorSpecializations: newSpecializations,
    });
  };

  const getSkillSpecializationLevel = (skill) => {
    if (!activeCharacter || !activeCharacter.warriorSpecializations || subclass !== 'Warrior') {
      return null;
    }

    const specs = activeCharacter.warriorSpecializations;
    if (specs.legend === skill) return 'legend';
    if (specs.elite === skill) return 'elite';
    if (specs.newbie === skill) return 'newbie';
    return null;
  };

  const getSpecializationIndicator = (specializationLevel) => {
    switch (specializationLevel) {
      case 'legend':
        return '★★';
      case 'elite':
        return '★';
      case 'newbie':
        return '★';
      default:
        return '';
    }
  };

  useEffect(() => {
    var cst = 0;
    var st = 0;
    var et = 0;
    Object.keys(multipliers).forEach((skill) => {
      const cost = getSkillCost(multipliers, charClass, skill, skillLevels[skill], skillInc[skill]);
      setSkillCost((skillCost) => ({
        ...skillCost,
        [skill]: cost,
      }));
      cst += parseInt(skillLevels[skill]);
      st += parseInt(getSkillMax(multipliers, skill, level));
      et += parseInt(cost);
    });
    setCharSkillTotal(cst);
    setSkillTotal(st);
    setExpTotal(et);
  }, [skillLevels, skillInc, charClass, subclass, race, level, multipliers]);

  useEffect(() => {
    const warriorSpecs = activeCharacter && activeCharacter.warriorSpecializations;
    setMultipliers(getSkillMultipliers(charClass, subclass, race, warriorSpecs));
  }, [charClass, subclass, race, activeCharacter]);

  useEffect(() => {
    setMaxExp(getMaxExp(level));
  }, [level]);

  useEffect(() => {
    if (
      activeCharacter &&
      activeCharacter.subclass &&
      !(subclasses[charClass] && subclasses[charClass].includes(activeCharacter.subclass))
    ) {
      updateActiveCharacter({
        subclass: subclasses[charClass][0],
      });
    }
  }, [activeCharacter, charClass, updateActiveCharacter]);

  if (!activeCharacter) {
    return (
      <PageContainer breadcrumbs={breadcrumbs} heading="Skill Calculator">
        <Typography>Loading...</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Skill Calculator">
      <CmtCard>
        <CmtCardContent>
          <CharacterSelector
            characters={characters}
            activeCharacter={activeCharacter}
            characterList={characterList}
            onAddCharacter={addCharacter}
            onDeleteCharacter={deleteCharacter}
            onRenameCharacter={renameCharacter}
            onDuplicateCharacter={duplicateCharacter}
            onSwitchCharacter={switchCharacter}
          />
        </CmtCardContent>
        <CharacterInfo
          level={level}
          charClass={charClass}
          subclass={subclass}
          race={race}
          setLevel={setCharacterLevel}
          setCharClass={setCharacterClass}
          setSubclass={setCharacterSubclass}
          setRace={setCharacterRace}
          showWerewolf={false}
        />
        {subclass === 'Warrior' && (
          <Fragment>
            <CmtCardHeader title="Specializations" />
            <CmtCardContent>
              <WarriorSpecializations
                warriorSpecializations={activeCharacter && activeCharacter.warriorSpecializations}
                onUpdate={updateWarriorSpecializations}
              />
            </CmtCardContent>
          </Fragment>
        )}
        {Object.keys(skillNames).map((section, sectionIndex) => (
          <Fragment key={sectionIndex}>
            {hasItemInSection(section, multipliers) && (
              <Fragment>
                <CmtCardHeader title={section} />
                <CmtCardContent>
                  <Grid container direction="column">
                    {skillNames[section].map((skill, skillIndex) => (
                      <Fragment key={skillIndex}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          style={{ padding: 10 }}
                          display={multipliers[skill] ? 'div' : 'none'}>
                          <Grid item xs={6} sm={3}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <Typography>{skill}</Typography>
                              {getSpecializationIndicator(getSkillSpecializationLevel(skill)) && (
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: getSkillSpecializationLevel(skill) === 'legend' ? '#gold' : '#1976d2',
                                    fontWeight: 'bold',
                                  }}>
                                  {getSpecializationIndicator(getSkillSpecializationLevel(skill))}
                                </Typography>
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={3} align={{ xs: 'left', sm: 'center' }}>
                            <TextField
                              size="small"
                              type="number"
                              inputProps={{ min: 0, max: 500 }}
                              style={{ minWidth: '120px' }}
                              value={skillLevels[skill]}
                              variant="outlined"
                              onChange={(event) => updateSkillLevels(skill, event.target.value)}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end" size="small">
                                    <Typography>{`/ ${getSkillMax(multipliers, skill, level)}`}</Typography>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid item xs={6} sm={3} order={{ xs: 3, sm: 2 }} align={{ xs: 'left', sm: 'center' }}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <TextField
                                size="small"
                                type="number"
                                label="+"
                                inputProps={{ min: 0, max: 500 }}
                                style={{ minWidth: '75px' }}
                                value={skillInc[skill]}
                                variant="outlined"
                                onChange={(event) => updateSkillInc(skill, event.target.value)}
                              />
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() => handleMaxIncrement(skill)}
                                style={{
                                  minWidth: '45px',
                                  fontSize: '0.7rem',
                                  padding: '4px 8px',
                                }}>
                                MAX
                              </Button>
                              {skillInc[skill] > 0 && (
                                <IconButton
                                  size="small"
                                  onClick={() => updateSkillInc(skill, 0)}
                                  style={{
                                    border: '1px solid rgba(0, 0, 0, 0.23)',
                                    borderRadius: '4px',
                                    padding: '4px',
                                  }}>
                                  <ClearIcon fontSize="small" />
                                </IconButton>
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }}>
                            <Tooltip title={parseInt(skillCost[skill]).toLocaleString('en-US') + ' exp'}>
                              <Typography>
                                {intToString(parseInt(skillCost[skill]), 2)}
                                {' exp'}
                              </Typography>
                            </Tooltip>
                          </Grid>
                        </Grid>
                        {multipliers[skill] && <Divider />}
                      </Fragment>
                    ))}
                  </Grid>
                </CmtCardContent>
              </Fragment>
            )}
          </Fragment>
        ))}
        <CmtCardContent>
          <Grid container direction="row" alignItems="center" spacing={2} style={{ padding: 10 }}>
            <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h4">Total</Typography>
            </Grid>
            <Grid item xs={6} sm={3} order={{ xs: 2, sm: 1 }} align={{ xs: 'left', sm: 'center' }}>
              <Typography align="left" sx={{ paddingLeft: { xs: 0, sm: '30px' } }}>
                {charSkillTotal} / {skillTotal}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} order={{ xs: 1, sm: 2 }} align={{ xs: 'left', sm: 'center' }}>
              <Typography align="left" sx={{ paddingLeft: { xs: 0, sm: '30px' } }}>
                {(() => {
                  let totalWithPlanned = 0;
                  Object.keys(multipliers).forEach((skill) => {
                    totalWithPlanned += parseInt(skillLevels[skill] || 0) + parseInt(skillInc[skill] || 0);
                  });
                  return `${totalWithPlanned} / ${skillTotal}`;
                })()}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} order={{ xs: 0, sm: 3 }}>
              <Tooltip title={parseInt(expTotal).toLocaleString('en-US') + ' exp'}>
                <Typography>
                  {intToString(parseInt(expTotal), 2)}
                  {' exp '}
                  {maxExp > 0 && expTotal > 0 && (
                    <span style={{ fontSize: '0.9em', color: '#666' }}>({(expTotal / maxExp).toFixed(2)} maxes)</span>
                  )}
                </Typography>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider />
        </CmtCardContent>
      </CmtCard>
    </PageContainer>
  );
};

export default SkillCalculator;
