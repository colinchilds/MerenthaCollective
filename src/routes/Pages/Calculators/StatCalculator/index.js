import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  InputAdornment,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { getEncumbrance, getVitals, getWeight } from '../shared/vitals';
import { getAdvanceExp, getMaxExp, getStatCost, getMaxStat } from '../Helpers/stats.helpers';
import { classes, stats, intToString, getPartyRangeMin, getPartyRangeMax, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';
import LevelInfo from '../Components/level-info.component';
import CharacterInfo from '../Components/character-info.component';
import { useSharedCharacterState } from '../shared/useSharedCharacterState';
import CharacterSelector from '../shared/CharacterSelector';

const breadcrumbs = [
  { label: 'Calculators', link: '/calculators' },
  { label: 'Stats', isActive: true },
];

const StatCalculator = () => {
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
    setCharacterWerewolf,
    setStatWerewolfToggle,
  } = useSharedCharacterState();

  const [advExp, setAdvExp] = useState(0);
  const [maxExp, setMaxExp] = useState(0);

  const initStats = stats.reduce((result, stat) => ({ ...result, [stat]: 0 }), {});
  const [statCost, setStatCost] = useState({ ...initStats });

  const charClass = (activeCharacter && activeCharacter.charClass) || classes[0];
  const validSubclass =
    subclasses[charClass] && subclasses[charClass].includes(activeCharacter && activeCharacter.subclass)
      ? activeCharacter.subclass
      : subclasses[charClass][0];
  const subclass = validSubclass;
  const race = (activeCharacter && activeCharacter.race) || races[0];
  const level = (activeCharacter && activeCharacter.level) || 1;
  const isWerewolf = (activeCharacter && activeCharacter.isWerewolf) || false;
  const statWerewolfToggles = (activeCharacter && activeCharacter.statWerewolfToggles) || null;
  const statLevels = (activeCharacter && activeCharacter.statLevels) || initStats;
  const statTargets = (activeCharacter && activeCharacter.statIncrements) || initStats;

  const [invalidTargets, setInvalidTargets] = useState({});

  const [charStatTotal, setCharStatTotal] = useState(0);
  const [statTotal, setStatTotal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);

  const [vitals, setVitals] = useState({});
  const [vitalsNight, setVitalsNight] = useState({});

  const updateStatLevels = (k, v) => {
    if (v < 0) {
      v = 0;
    } else if (v > 500) {
      v = 500;
    }
    updateActiveCharacter({
      statLevels: {
        ...statLevels,
        [k]: v,
      },
    });
  };
  const updateStatTarget = (k, v) => {
    // Don't clamp on change - allow typing any value
    // Validation happens on blur
    updateActiveCharacter({
      statIncrements: {
        ...statTargets,
        [k]: v,
      },
    });
  };

  const handleTargetBlur = (stat) => {
    const currentValue = parseInt(statLevels[stat]) || 0;
    let targetValue = parseInt(statTargets[stat]) || 0;
    const werewolfTimeOfDay = isWerewolf && statWerewolfToggles ? statWerewolfToggles[stat] : 'day';
    const maxValue = parseInt(getMaxStat(stat, charClass, race, level, isWerewolf, werewolfTimeOfDay)) || 0;

    // Clamp to [current, max]
    if (targetValue < currentValue) targetValue = currentValue;
    if (targetValue > maxValue) targetValue = maxValue;

    updateActiveCharacter({
      statIncrements: {
        ...statTargets,
        [stat]: targetValue,
      },
    });
    setInvalidTargets((prev) => ({ ...prev, [stat]: false }));
  };

  const handleMaxTarget = (stat) => {
    const werewolfTimeOfDay = isWerewolf && statWerewolfToggles ? statWerewolfToggles[stat] : 'day';
    const maxValue = parseInt(getMaxStat(stat, charClass, race, level, isWerewolf, werewolfTimeOfDay)) || 0;
    updateStatTarget(stat, maxValue);
    setInvalidTargets((prev) => ({ ...prev, [stat]: false }));
  };

  const handleApplyTarget = (stat) => {
    const targetValue = parseInt(statTargets[stat]) || 0;
    // Set current = target, leave target unchanged
    updateActiveCharacter({
      statLevels: {
        ...statLevels,
        [stat]: targetValue,
      },
    });
  };

  useEffect(() => {
    var cst = 0;
    var st = 0;
    var et = 0;
    stats.forEach((stat) => {
      const werewolfTimeOfDay = isWerewolf && statWerewolfToggles ? statWerewolfToggles[stat] : 'day';
      const currentLevel = parseInt(statLevels[stat]) || 0;
      const targetLevel = parseInt(statTargets[stat]) || 0;
      const increment = Math.max(0, targetLevel - currentLevel);
      const cost = getStatCost(stat, charClass, race, currentLevel, increment, isWerewolf, werewolfTimeOfDay);
      setStatCost((statCost) => ({
        ...statCost,
        [stat]: cost,
      }));
      cst += currentLevel;
      st += parseInt(getMaxStat(stat, charClass, race, level, isWerewolf, werewolfTimeOfDay));
      et += parseInt(cost);
    });
    setCharStatTotal(cst);
    setStatTotal(st);
    setExpTotal(et);
  }, [statLevels, statTargets, charClass, race, level, isWerewolf, statWerewolfToggles]);

  useEffect(() => {
    setAdvExp(getAdvanceExp(level));
    setMaxExp(getMaxExp(level));
  }, [level]);

  useEffect(() => {
    // Calculate vitals for base race (day form)
    var vDay = getVitals(charClass, race, level, statLevels, subclass);
    setVitals(vDay);

    // If werewolf, also calculate vitals for werewolf form (night)
    if (isWerewolf) {
      var vNight = getVitals(charClass, 'Were-wolf', level, statLevels, subclass);
      setVitalsNight(vNight);
    }
  }, [charClass, race, level, statLevels, subclass, isWerewolf]);

  // Sync targets when current exceeds them
  useEffect(() => {
    const updates = {};
    let needsUpdate = false;
    stats.forEach((stat) => {
      const current = parseInt(statLevels[stat]) || 0;
      const target = parseInt(statTargets[stat]) || 0;
      if (current > target) {
        updates[stat] = current;
        needsUpdate = true;
      }
    });
    if (needsUpdate) {
      updateActiveCharacter({
        statIncrements: { ...statTargets, ...updates },
      });
    }
  }, [statLevels]);

  if (!activeCharacter) {
    return (
      <PageContainer breadcrumbs={breadcrumbs} heading="Stat Calculator">
        <Typography>Loading...</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Stat Calculator">
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
          isWerewolf={isWerewolf}
          setLevel={setCharacterLevel}
          setCharClass={setCharacterClass}
          setSubclass={setCharacterSubclass}
          setRace={setCharacterRace}
          setWerewolf={setCharacterWerewolf}
        />
        <LevelInfo level={level} advExp={advExp} maxExp={maxExp} />
        <CmtCardHeader title="Stat Information" />
        <CmtCardContent>
          {isMobile ? (
            // Mobile: Stacked card layout
            <>
              {stats.map((stat) => (
                <Box key={stat} sx={{ mb: 2, p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center" gap={1}>
                      {isWerewolf && statWerewolfToggles && (
                        <Tooltip title={statWerewolfToggles[stat] === 'night' ? 'Night (Werewolf)' : `Day (${race})`}>
                          <IconButton
                            size="small"
                            onClick={() =>
                              setStatWerewolfToggle(stat, statWerewolfToggles[stat] === 'night' ? 'day' : 'night')
                            }
                            sx={{
                              padding: '2px',
                              color: statWerewolfToggles[stat] === 'night' ? '#1976d2' : '#f57c00',
                            }}>
                            {statWerewolfToggles[stat] === 'night' ? (
                              <NightsStayIcon fontSize="small" />
                            ) : (
                              <WbSunnyIcon fontSize="small" />
                            )}
                          </IconButton>
                        </Tooltip>
                      )}
                      <Typography fontWeight="bold">{stat}</Typography>
                    </Box>
                    <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                      <Typography color="text.secondary">{intToString(parseInt(statCost[stat]), 2)} exp</Typography>
                    </Tooltip>
                  </Box>
                  <Box display="flex" gap={2} mt={1.5}>
                    <TextField
                      size="small"
                      type="number"
                      label="Current"
                      inputProps={{ min: 0, max: 500 }}
                      sx={{ flex: 1 }}
                      value={statLevels[stat]}
                      variant="outlined"
                      onChange={(event) => updateStatLevels(stat, event.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" size="small">
                            <Typography>{`/ ${getMaxStat(
                              stat,
                              charClass,
                              race,
                              level,
                              isWerewolf,
                              isWerewolf && statWerewolfToggles ? statWerewolfToggles[stat] : 'day',
                            )}`}</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      size="small"
                      type="number"
                      label="Target"
                      inputProps={{ min: 0, max: 500 }}
                      sx={{ flex: 1 }}
                      value={statTargets[stat]}
                      variant="outlined"
                      error={invalidTargets[stat]}
                      onChange={(event) => {
                        const val = event.target.value;
                        updateStatTarget(stat, val);
                        setInvalidTargets((prev) => ({
                          ...prev,
                          [stat]: parseInt(val) < parseInt(statLevels[stat]),
                        }));
                      }}
                      onBlur={() => handleTargetBlur(stat)}
                    />
                  </Box>
                  <Box display="flex" justifyContent="flex-start" alignItems="center" mt={1.5} gap={0.5}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleMaxTarget(stat)}
                      sx={{
                        minWidth: '45px',
                        fontSize: '0.7rem',
                        padding: '4px 8px',
                      }}>
                      MAX
                    </Button>
                    {parseInt(statTargets[stat]) > parseInt(statLevels[stat]) && (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => handleApplyTarget(stat)}
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
                          onClick={() => updateStatTarget(stat, statLevels[stat])}
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
              ))}
              {/* Mobile summary */}
              <Box sx={{ p: 2, backgroundColor: 'action.hover', borderRadius: 1 }}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Current Total:</Typography>
                  <Typography>
                    {charStatTotal} / {statTotal}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Target Total:</Typography>
                  <Typography>
                    {(() => {
                      let totalTarget = 0;
                      stats.forEach((stat) => {
                        totalTarget += parseInt(statTargets[stat] || 0);
                      });
                      return `${totalTarget} / ${statTotal}`;
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
                    <TableCell>
                      <Typography variant="subtitle2">Stat</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Current</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Target</Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ minWidth: '140px' }}>
                      <Typography variant="subtitle2">Exp Cost</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stats.map((stat) => (
                    <TableRow key={stat}>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          {isWerewolf && statWerewolfToggles && (
                            <Tooltip title={statWerewolfToggles[stat] === 'night' ? 'Night (Werewolf)' : `Day (${race})`}>
                              <IconButton
                                size="small"
                                onClick={() =>
                                  setStatWerewolfToggle(stat, statWerewolfToggles[stat] === 'night' ? 'day' : 'night')
                                }
                                sx={{
                                  padding: '2px',
                                  color: statWerewolfToggles[stat] === 'night' ? '#1976d2' : '#f57c00',
                                }}>
                                {statWerewolfToggles[stat] === 'night' ? (
                                  <NightsStayIcon fontSize="small" />
                                ) : (
                                  <WbSunnyIcon fontSize="small" />
                                )}
                              </IconButton>
                            </Tooltip>
                          )}
                          <Typography>{stat}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          inputProps={{ min: 0, max: 500 }}
                          value={statLevels[stat]}
                          variant="outlined"
                          onChange={(event) => updateStatLevels(stat, event.target.value)}
                          sx={{ minWidth: '120px' }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end" size="small">
                                <Typography>{`/ ${getMaxStat(
                                  stat,
                                  charClass,
                                  race,
                                  level,
                                  isWerewolf,
                                  isWerewolf && statWerewolfToggles ? statWerewolfToggles[stat] : 'day',
                                )}`}</Typography>
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
                            inputProps={{ min: 0, max: 500 }}
                            value={statTargets[stat]}
                            variant="outlined"
                            error={invalidTargets[stat]}
                            onChange={(event) => {
                              const val = event.target.value;
                              updateStatTarget(stat, val);
                              setInvalidTargets((prev) => ({
                                ...prev,
                                [stat]: parseInt(val) < parseInt(statLevels[stat]),
                              }));
                            }}
                            onBlur={() => handleTargetBlur(stat)}
                            sx={{ width: '120px' }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end" size="small">
                                  <Typography sx={{ color: 'text.secondary', minWidth: '28px', textAlign: 'right' }}>
                                    {(() => {
                                      const diff = (parseInt(statTargets[stat]) || 0) - (parseInt(statLevels[stat]) || 0);
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
                            onClick={() => handleMaxTarget(stat)}
                            sx={{
                              minWidth: '45px',
                              fontSize: '0.7rem',
                              padding: '4px 8px',
                            }}>
                            MAX
                          </Button>
                          {parseInt(statTargets[stat]) > parseInt(statLevels[stat]) && (
                            <>
                              <IconButton
                                size="small"
                                onClick={() => handleApplyTarget(stat)}
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
                                onClick={() => updateStatTarget(stat, statLevels[stat])}
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
                      <TableCell align="right" sx={{ whiteSpace: 'nowrap', width: '120px' }}>
                        <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                          <Typography>{intToString(parseInt(statCost[stat]), 2)} exp</Typography>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Summary row */}
                  <TableRow sx={{ backgroundColor: 'action.hover' }}>
                    <TableCell>
                      <Typography fontWeight="bold">Total</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {charStatTotal} / {statTotal}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {(() => {
                          let totalTarget = 0;
                          stats.forEach((stat) => {
                            totalTarget += parseInt(statTargets[stat] || 0);
                          });
                          return `${totalTarget} / ${statTotal}`;
                        })()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
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
        <CmtCardHeader title="Character Information" />
        <CmtCardContent>
          <Box pb={{ xs: 6, md: 10, xl: 16 }}>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>Vitals</Typography>
                    </TableCell>
                    <TableCell>
                      {isWerewolf ? (
                        <Box display="flex" flexDirection="column" gap={0.5}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <WbSunnyIcon fontSize="small" sx={{ color: '#f57c00' }} />
                            <Typography>
                              {vitals['hp']} hp, {vitals['sp']} sp, {vitals['mp']} mp
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center" gap={1}>
                            <NightsStayIcon fontSize="small" sx={{ color: '#1976d2' }} />
                            <Typography>
                              {vitalsNight['hp']} hp, {vitalsNight['sp']} sp, {vitalsNight['mp']} mp
                            </Typography>
                          </Box>
                        </Box>
                      ) : (
                        <Typography>
                          {vitals['hp']} hp, {vitals['sp']} sp, {vitals['mp']} mp
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Encumbrance</Typography>
                    </TableCell>
                    <TableCell>
                      {isWerewolf ? (
                        <Box display="flex" flexDirection="column" gap={0.5}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <WbSunnyIcon fontSize="small" sx={{ color: '#f57c00' }} />
                            <Typography>{getEncumbrance(race, statLevels).toLocaleString('en-US')}</Typography>
                          </Box>
                          <Box display="flex" alignItems="center" gap={1}>
                            <NightsStayIcon fontSize="small" sx={{ color: '#1976d2' }} />
                            <Typography>{getEncumbrance('Were-wolf', statLevels).toLocaleString('en-US')}</Typography>
                          </Box>
                        </Box>
                      ) : (
                        <Typography>{getEncumbrance(race, statLevels).toLocaleString('en-US')}</Typography>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Weight</Typography>
                    </TableCell>
                    <TableCell>
                      {isWerewolf ? (
                        <Box display="flex" flexDirection="column" gap={0.5}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <WbSunnyIcon fontSize="small" sx={{ color: '#f57c00' }} />
                            <Typography>{getWeight(race, statLevels).toLocaleString('en-US')}</Typography>
                          </Box>
                          <Box display="flex" alignItems="center" gap={1}>
                            <NightsStayIcon fontSize="small" sx={{ color: '#1976d2' }} />
                            <Typography>{getWeight('Were-wolf', statLevels).toLocaleString('en-US')}</Typography>
                          </Box>
                        </Box>
                      ) : (
                        <Typography>{getWeight(race, statLevels).toLocaleString('en-US')}</Typography>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Party Range</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {getPartyRangeMin(level)} - {getPartyRangeMax(level)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CmtCardContent>
      </CmtCard>
    </PageContainer>
  );
};

export default StatCalculator;
