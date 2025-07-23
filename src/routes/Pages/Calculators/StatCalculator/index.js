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
  TableRow,
  TextField,
  Tooltip,
  Typography,
  InputAdornment,
  Divider,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { getEncumbrance, getVitals, getWeight } from './vitals';
import { getAdvanceExp, getMaxExp, getStatCost, getMaxStat } from '../Helpers/stats.helpers';
import { classes, stats, intToString, getPartyRangeMin, getPartyRangeMax, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';
import LevelInfo from '../Components/level-info.component';
import CharacterInfo from '../Components/character-info.component';
import { useSharedCharacterState } from '../shared/useSharedCharacterState';
import CharacterSelector from './CharacterSelector';

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
  const statLevels = (activeCharacter && activeCharacter.statLevels) || initStats;
  const statInc = (activeCharacter && activeCharacter.statIncrements) || initStats;

  const [charStatTotal, setCharStatTotal] = useState(0);
  const [statTotal, setStatTotal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);

  const [vitals, setVitals] = useState({});

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
  const updateStatInc = (k, v) => {
    if (v < 0) {
      v = 0;
    } else if (v > 500) {
      v = 500;
    }
    updateActiveCharacter({
      statIncrements: {
        ...statInc,
        [k]: v,
      },
    });
  };

  const handleMaxIncrement = (stat) => {
    const currentValue = parseInt(statLevels[stat]) || 0;
    const maxValue = parseInt(getMaxStat(stat, charClass, race, level)) || 0;
    const maxIncrement = Math.max(0, maxValue - currentValue);
    updateStatInc(stat, maxIncrement);
  };

  useEffect(() => {
    var cst = 0;
    var st = 0;
    var et = 0;
    stats.forEach((stat) => {
      const cost = getStatCost(stat, charClass, race, statLevels[stat], statInc[stat]);
      setStatCost((statCost) => ({
        ...statCost,
        [stat]: cost,
      }));
      cst += parseInt(statLevels[stat]);
      st += parseInt(getMaxStat(stat, charClass, race, level));
      et += parseInt(cost);
    });
    setCharStatTotal(cst);
    setStatTotal(st);
    setExpTotal(et);
  }, [statLevels, statInc, charClass, race, level]);

  useEffect(() => {
    setAdvExp(getAdvanceExp(level));
    setMaxExp(getMaxExp(level));
  }, [level]);

  useEffect(() => {
    var v = getVitals(charClass, race, level, statLevels, subclass);
    setVitals(v);
  }, [charClass, race, level, statLevels, subclass]);

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
          setLevel={setCharacterLevel}
          setCharClass={setCharacterClass}
          setSubclass={setCharacterSubclass}
          setRace={setCharacterRace}
        />
        <LevelInfo level={level} advExp={advExp} maxExp={maxExp} />
        <CmtCardHeader title="Stat Information" />
        <CmtCardContent>
          {stats.map((stat, index) => (
            <Fragment key={index}>
              <Grid container direction="row" alignItems="center" spacing={2} style={{ padding: 10 }}>
                <Grid item xs={6} sm={3}>
                  <Typography>{stat}</Typography>
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
                          <Typography>{`/ ${getMaxStat(stat, charClass, race, level)}`}</Typography>
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
                      value={statInc[stat]}
                      variant="outlined"
                      onChange={(event) => updateStatInc(stat, event.target.value)}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleMaxIncrement(stat)}
                      style={{
                        minWidth: '45px',
                        fontSize: '0.7rem',
                        padding: '4px 8px',
                      }}>
                      MAX
                    </Button>
                    {statInc[stat] > 0 && (
                      <IconButton
                        size="small"
                        onClick={() => updateStatInc(stat, 0)}
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
                  <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                    <Typography>
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
                  let totalWithPlanned = 0;
                  stats.forEach((stat) => {
                    totalWithPlanned += parseInt(statLevels[stat] || 0) + parseInt(statInc[stat] || 0);
                  });
                  return `${totalWithPlanned} / ${statTotal}`;
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
                      <Typography>
                        {vitals['hp']} hp, {vitals['sp']} sp, {vitals['mp']} mp
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Encumbrance</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{getEncumbrance(race, statLevels).toLocaleString('en-US')}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Weight</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{getWeight(race, statLevels).toLocaleString('en-US')}</Typography>
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
