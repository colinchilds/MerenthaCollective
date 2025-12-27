import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import { classes, intToString, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';
import LevelInfo from '../Components/level-info.component';
import { getAdvanceExp, getMaxExp } from '../Helpers/stats.helpers';
import CharacterInfo from '../Components/character-info.component';
import WarriorSpecializations from '../Components/WarriorSpecializations';
import { getSkillCost, getSkillMax, getSkillMultipliers, skillNames } from '../Helpers/skills.helpers';
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { useSharedCharacterState } from '../shared/useSharedCharacterState';
import CharacterSelector from '../shared/CharacterSelector';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
  const skillTargets = (activeCharacter && activeCharacter.skillIncrements) || initSkills;

  const [multipliers, setMultipliers] = useState(
    getSkillMultipliers(charClass, subclass, race, activeCharacter && activeCharacter.warriorSpecializations),
  );
  const [skillCost, setSkillCost] = useState({ ...initSkills });
  const [invalidTargets, setInvalidTargets] = useState({});

  const [charSkillTotal, setCharSkillTotal] = useState(0);
  const [skillTotal, setSkillTotal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);
  const [advExp, setAdvExp] = useState(0);
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

  const updateSkillTarget = (k, v) => {
    // Don't clamp on change - allow typing any value
    // Validation happens on blur
    updateActiveCharacter({
      skillIncrements: {
        ...skillTargets,
        [k]: v,
      },
    });
  };

  const handleTargetBlur = (skill) => {
    const currentValue = parseInt(skillLevels[skill]) || 0;
    let targetValue = parseInt(skillTargets[skill]) || 0;
    const maxValue = parseInt(getSkillMax(multipliers, skill, level)) || 0;

    // Clamp to [current, max]
    if (targetValue < currentValue) targetValue = currentValue;
    if (targetValue > maxValue) targetValue = maxValue;

    updateActiveCharacter({
      skillIncrements: {
        ...skillTargets,
        [skill]: targetValue,
      },
    });
    setInvalidTargets((prev) => ({ ...prev, [skill]: false }));
  };

  const handleMaxTarget = (skill) => {
    const maxValue = parseInt(getSkillMax(multipliers, skill, level)) || 0;
    updateSkillTarget(skill, maxValue);
    setInvalidTargets((prev) => ({ ...prev, [skill]: false }));
  };

  const handleApplyTarget = (skill) => {
    const targetValue = parseInt(skillTargets[skill]) || 0;
    // Set current = target, leave target unchanged
    updateActiveCharacter({
      skillLevels: {
        ...skillLevels,
        [skill]: targetValue,
      },
    });
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
      const currentLevel = parseInt(skillLevels[skill]) || 0;
      const targetLevel = parseInt(skillTargets[skill]) || 0;
      const increment = Math.max(0, targetLevel - currentLevel);
      const cost = getSkillCost(multipliers, charClass, skill, currentLevel, increment);
      setSkillCost((skillCost) => ({
        ...skillCost,
        [skill]: cost,
      }));
      cst += currentLevel;
      st += parseInt(getSkillMax(multipliers, skill, level));
      et += parseInt(cost);
    });
    setCharSkillTotal(cst);
    setSkillTotal(st);
    setExpTotal(et);
  }, [skillLevels, skillTargets, charClass, subclass, race, level, multipliers]);

  useEffect(() => {
    const warriorSpecs = activeCharacter && activeCharacter.warriorSpecializations;
    setMultipliers(getSkillMultipliers(charClass, subclass, race, warriorSpecs));
  }, [charClass, subclass, race, activeCharacter]);

  useEffect(() => {
    setAdvExp(getAdvanceExp(level));
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

  // Sync targets when current exceeds them
  useEffect(() => {
    const updates = {};
    let needsUpdate = false;
    sn.forEach((skill) => {
      const current = parseInt(skillLevels[skill]) || 0;
      const target = parseInt(skillTargets[skill]) || 0;
      if (current > target) {
        updates[skill] = current;
        needsUpdate = true;
      }
    });
    if (needsUpdate) {
      updateActiveCharacter({
        skillIncrements: { ...skillTargets, ...updates },
      });
    }
  }, [skillLevels]);

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
        <LevelInfo level={level} advExp={advExp} maxExp={maxExp} />
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

        <CmtCardHeader title="Skill Information" />
        <CmtCardContent>
          {Object.keys(skillNames).map((section, sectionIndex) => (
            <Fragment key={sectionIndex}>
              {hasItemInSection(section, multipliers) && (
                <Fragment>
                  <CmtCardHeader title={section} />
                  <CmtCardContent>
                    {isMobile ? (
                      // Mobile: Card layout
                      <>
                        {skillNames[section].map(
                          (skill, skillIndex) =>
                            multipliers[skill] && (
                              <Box
                                key={skillIndex}
                                sx={{
                                  mb: 2,
                                  p: 2,
                                  border: 1,
                                  borderColor: 'divider',
                                  borderRadius: 1,
                                }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                  <Box display="flex" alignItems="center" gap={1}>
                                    <Typography fontWeight="bold">{skill}</Typography>
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
                                  <Tooltip title={parseInt(skillCost[skill]).toLocaleString('en-US') + ' exp'}>
                                    <Typography color="text.secondary">
                                      {intToString(parseInt(skillCost[skill]), 2)} exp
                                    </Typography>
                                  </Tooltip>
                                </Box>

                                <Box display="flex" gap={2} mt={1.5}>
                                  <TextField
                                    size="small"
                                    type="number"
                                    label="Current"
                                    inputProps={{ min: 0, max: 999 }}
                                    sx={{ flex: 1 }}
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
                                  <TextField
                                    size="small"
                                    type="number"
                                    label="Target"
                                    inputProps={{ min: 0, max: 999 }}
                                    sx={{ flex: 1 }}
                                    value={skillTargets[skill]}
                                    variant="outlined"
                                    error={invalidTargets[skill]}
                                    onChange={(event) => {
                                      const val = event.target.value;
                                      updateSkillTarget(skill, val);
                                      setInvalidTargets((prev) => ({
                                        ...prev,
                                        [skill]: parseInt(val) < parseInt(skillLevels[skill]),
                                      }));
                                    }}
                                    onBlur={() => handleTargetBlur(skill)}
                                  />
                                </Box>

                                <Box display="flex" justifyContent="flex-start" alignItems="center" mt={1.5} gap={0.5}>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => handleMaxTarget(skill)}
                                    sx={{
                                      minWidth: '45px',
                                      fontSize: '0.7rem',
                                      padding: '4px 8px',
                                    }}>
                                    MAX
                                  </Button>
                                  {parseInt(skillTargets[skill]) > parseInt(skillLevels[skill]) && (
                                    <>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleApplyTarget(skill)}
                                        sx={{
                                          border: '1px solid rgba(0, 0, 0, 0.23)',
                                          borderRadius: '4px',
                                          padding: '4px',
                                          color: '#4caf50',
                                        }}>
                                        <CheckIcon fontSize="small" />
                                      </IconButton>
                                      <IconButton
                                        size="small"
                                        onClick={() => updateSkillTarget(skill, skillLevels[skill])}
                                        sx={{
                                          border: '1px solid rgba(0, 0, 0, 0.23)',
                                          borderRadius: '4px',
                                          padding: '4px',
                                        }}>
                                        <ClearIcon fontSize="small" />
                                      </IconButton>
                                    </>
                                  )}
                                </Box>
                              </Box>
                            ),
                        )}
                      </>
                    ) : (
                      // Desktop: Table layout
                      <TableContainer>
                        <Table
                          size="small"
                          sx={{
                            '& .MuiTableCell-root': { py: 1, px: 1 },
                          }}>
                          <TableHead>
                            <TableRow sx={{ '& .MuiTableCell-root': { py: 1.5, borderBottom: 2, borderColor: 'divider' } }}>
                              <TableCell sx={{ width: '200px' }}>
                                <Typography variant="subtitle2">Skill</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="subtitle2">Current</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="subtitle2">Target</Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Typography variant="subtitle2">Exp Cost</Typography>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {skillNames[section].map(
                              (skill, skillIndex) =>
                                multipliers[skill] && (
                                  <TableRow key={skillIndex}>
                                    <TableCell>
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
                                    </TableCell>
                                    <TableCell>
                                      <TextField
                                        size="small"
                                        type="number"
                                        inputProps={{ min: 0, max: 999 }}
                                        value={skillLevels[skill]}
                                        variant="outlined"
                                        onChange={(event) => updateSkillLevels(skill, event.target.value)}
                                        sx={{ width: '160px' }}
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end" size="small">
                                              <Typography>{`/ ${getSkillMax(multipliers, skill, level)}`}</Typography>
                                            </InputAdornment>
                                          ),
                                        }}
                                      />
                                    </TableCell>
                                    <TableCell>
                                      <Box display="flex" alignItems="center" gap={1}>
                                        <TextField
                                          size="small"
                                          type="number"
                                          inputProps={{ min: 0, max: 999 }}
                                          value={skillTargets[skill]}
                                          variant="outlined"
                                          error={invalidTargets[skill]}
                                          onChange={(event) => {
                                            const val = event.target.value;
                                            updateSkillTarget(skill, val);
                                            setInvalidTargets((prev) => ({
                                              ...prev,
                                              [skill]: parseInt(val) < parseInt(skillLevels[skill]),
                                            }));
                                          }}
                                          onBlur={() => handleTargetBlur(skill)}
                                          sx={{ width: '120px' }}
                                          InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end" size="small">
                                                <Typography
                                                  sx={{ color: 'text.secondary', minWidth: '28px', textAlign: 'right' }}>
                                                  {(() => {
                                                    const diff =
                                                      (parseInt(skillTargets[skill]) || 0) -
                                                      (parseInt(skillLevels[skill]) || 0);
                                                    return diff >= 0 ? `+${diff}` : `${diff}`;
                                                  })()}
                                                </Typography>
                                              </InputAdornment>
                                            ),
                                          }}
                                        />
                                        <Button
                                          size="small"
                                          variant="outlined"
                                          onClick={() => handleMaxTarget(skill)}
                                          sx={{
                                            minWidth: '45px',
                                            fontSize: '0.7rem',
                                            padding: '4px 8px',
                                          }}>
                                          MAX
                                        </Button>
                                        {parseInt(skillTargets[skill]) > parseInt(skillLevels[skill]) && (
                                          <>
                                            <IconButton
                                              size="small"
                                              onClick={() => handleApplyTarget(skill)}
                                              sx={{
                                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                                borderRadius: '4px',
                                                padding: '4px',
                                                color: '#4caf50',
                                              }}>
                                              <CheckIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                              size="small"
                                              onClick={() => updateSkillTarget(skill, skillLevels[skill])}
                                              sx={{
                                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                                borderRadius: '4px',
                                                padding: '4px',
                                              }}>
                                              <ClearIcon fontSize="small" />
                                            </IconButton>
                                          </>
                                        )}
                                      </Box>
                                    </TableCell>
                                    <TableCell align="right" sx={{ width: '140px' }}>
                                      <Tooltip title={parseInt(skillCost[skill]).toLocaleString('en-US') + ' exp'}>
                                        <Typography>{intToString(parseInt(skillCost[skill]), 2)} exp</Typography>
                                      </Tooltip>
                                    </TableCell>
                                  </TableRow>
                                ),
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </CmtCardContent>
                </Fragment>
              )}
            </Fragment>
          ))}

          {/* Summary Section */}
          <CmtCardContent>
            <Divider sx={{ mb: 2 }} />
            {isMobile ? (
              <Box sx={{ p: 2, backgroundColor: 'action.hover', borderRadius: 1 }}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Current Total:</Typography>
                  <Typography>
                    {charSkillTotal} / {skillTotal}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Target Total:</Typography>
                  <Typography>
                    {(() => {
                      let totalTarget = 0;
                      sn.forEach((skill) => {
                        totalTarget += parseInt(skillTargets[skill] || 0);
                      });
                      return `${totalTarget} / ${skillTotal}`;
                    })()}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Exp Cost:</Typography>
                  <Tooltip title={parseInt(expTotal).toLocaleString('en-US') + ' exp'}>
                    <Typography>
                      {intToString(parseInt(expTotal), 2)} exp
                      {maxExp > 0 && expTotal > 0 && (
                        <span style={{ fontSize: '0.9em', color: '#666' }}> ({(expTotal / maxExp).toFixed(2)} maxes)</span>
                      )}
                    </Typography>
                  </Tooltip>
                </Box>
              </Box>
            ) : (
              <TableContainer>
                <Table
                  size="small"
                  sx={{
                    '& .MuiTableCell-root': { py: 1, px: 1 },
                    tableLayout: 'fixed',
                    width: '100%',
                  }}>
                  <TableBody>
                    <TableRow sx={{ backgroundColor: 'action.hover' }}>
                      <TableCell sx={{ width: '200px' }}>
                        <Typography fontWeight="bold">Total</Typography>
                      </TableCell>
                      <TableCell sx={{ width: '180px' }}>
                        <Typography>
                          {charSkillTotal} / {skillTotal}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ width: 'auto' }}>
                        <Typography>
                          {(() => {
                            let totalTarget = 0;
                            sn.forEach((skill) => {
                              totalTarget += parseInt(skillTargets[skill] || 0);
                            });
                            return `${totalTarget} / ${skillTotal}`;
                          })()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ width: '140px' }}>
                        <Tooltip title={parseInt(expTotal).toLocaleString('en-US') + ' exp'}>
                          <Box>
                            <Typography>{intToString(parseInt(expTotal), 2)} exp</Typography>
                            {maxExp > 0 && expTotal > 0 && (
                              <Typography sx={{ fontSize: '0.9em', color: 'text.secondary' }}>
                                ({(expTotal / maxExp).toFixed(2)} maxes)
                              </Typography>
                            )}
                          </Box>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </CmtCardContent>
        </CmtCardContent>
      </CmtCard>
    </PageContainer>
  );
};

export default SkillCalculator;
