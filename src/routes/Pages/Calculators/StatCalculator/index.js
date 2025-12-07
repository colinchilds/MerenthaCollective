import React, { Fragment, useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  InputAdornment,
  Divider,
  IconButton,
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
  const [showButtons, setShowButtons] = useState(true);
  const targetInputRef = useRef(null);
  const expRef = useRef(null);

  // Check for overlap between buttons and exp text
  // We measure from target input's right edge and check if there's enough space for buttons
  const checkOverlap = useCallback(() => {
    if (targetInputRef.current && expRef.current) {
      const targetRect = targetInputRef.current.getBoundingClientRect();
      const expRect = expRef.current.getBoundingClientRect();
      // Only check if they're on the same row
      const sameRow = Math.abs(targetRect.top - expRect.top) < targetRect.height;
      // Check if any stat has apply/clear buttons showing (target > current)
      const hasApplyButtons = stats.some((stat) => parseInt(statTargets[stat]) > parseInt(statLevels[stat]));

      const minButtonSpace = hasApplyButtons ? 100 : 50;
      const availableSpace = expRect.left - targetRect.right;
      const hasSpace = !sameRow || availableSpace >= minButtonSpace;
      setShowButtons(hasSpace);
    }
  }, [statTargets, statLevels]);

  useLayoutEffect(() => {
    checkOverlap();
    window.addEventListener('resize', checkOverlap);
    return () => window.removeEventListener('resize', checkOverlap);
  }, [checkOverlap]);

  // Re-check overlap when targets/levels change (affects button count)
  useEffect(() => {
    checkOverlap();
  }, [statTargets, statLevels, checkOverlap]);

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
          {stats.map((stat, index) => (
            <Fragment key={index}>
              <Grid container direction="row" alignItems="center" spacing={2} style={{ padding: 10 }}>
                <Grid item xs={6} sm={3}>
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
                </Grid>
                <Grid item xs={6} sm={3} align={{ xs: 'left', sm: 'center' }}>
                  <TextField
                    size="small"
                    type="number"
                    inputProps={{ min: 0, max: 500 }}
                    style={{ minWidth: '120px' }}
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
                </Grid>
                <Grid item xs={6} sm={3} order={{ xs: 3, sm: 2 }} align={{ xs: 'left', sm: 'center' }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      ref={index === 0 ? targetInputRef : null}
                      size="small"
                      type="number"
                      label="Target"
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
                      sx={{ minWidth: '120px' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" size="small">
                            <Typography sx={{ color: 'text.secondary' }}>
                              {(() => {
                                const diff = (parseInt(statTargets[stat]) || 0) - (parseInt(statLevels[stat]) || 0);
                                return diff > 0 ? `+${diff}` : diff === 0 ? '' : `${diff}`;
                              })()}
                            </Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box sx={{ display: showButtons ? 'flex' : 'none', alignItems: 'center', gap: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleMaxTarget(stat)}
                        style={{
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
                            style={{
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
                            style={{
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
                </Grid>
                <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }} ref={index === 0 ? expRef : null}>
                  <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                    <Typography sx={{ pl: 2 }}>
                      {intToString(parseInt(statCost[stat]), 2)}
                      {' exp'}
                    </Typography>
                  </Tooltip>
                </Grid>
              </Grid>
              <Divider />
            </Fragment>
          ))}
          <Grid container direction="row" alignItems="center" spacing={2} style={{ padding: 10 }}>
            <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Grid item xs={6} sm={3} order={{ xs: 2, sm: 1 }} align={{ xs: 'left', sm: 'center' }}>
              <Typography align="left" sx={{ paddingLeft: { xs: 0, sm: '30px' } }}>
                {charStatTotal} / {statTotal}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} order={{ xs: 1, sm: 2 }} align={{ xs: 'left', sm: 'center' }}>
              <Typography align="left" sx={{ paddingLeft: { xs: 0, sm: '30px' } }}>
                {(() => {
                  let totalTarget = 0;
                  stats.forEach((stat) => {
                    totalTarget += parseInt(statTargets[stat] || 0);
                  });
                  return `${totalTarget} / ${statTotal}`;
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
