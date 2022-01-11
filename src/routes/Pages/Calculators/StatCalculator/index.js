import React, { useEffect, useState } from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { useStickyState } from '@jumbo/utils/commonHelper';
import { getEncumbrance, getVitals, getWeight } from './vitals';
import { classes, stats, getAdvanceExp, getMaxExp, getStatCost, getMaxStat, intToString } from './calculator.helpers';
import { races } from 'data/Races';
import LevelInfo from './level-info.component';
import CharacterInfo from './character-info.component';

const breadcrumbs = [{ label: 'Calculators', link: '/calculators' }, { label: 'Stats' }];

const StatCalculator = () => {
  const [charClass, setCharClass] = useStickyState('statCalc_charClass', classes[0]);
  const [race, setRace] = useStickyState('statCalc_race', races[0]);
  const [level, setLevel] = useStickyState('statCalc_level', 1);
  const [advExp, setAdvExp] = useState(0);
  const [maxExp, setMaxExp] = useState(0);

  const initStats = stats.reduce((result, stat) => ({ ...result, [stat]: 0 }), {});
  const [statLevels, setStatLevels] = useStickyState('statCalc_statLevels', {
    ...initStats,
  });
  const [statInc, setStatInc] = useState({ ...initStats });
  const [statCost, setStatCost] = useState(initStats);

  const [charStatTotal, setCharStatTotal] = useState(0);
  const [statTotal, setStatTotal] = useState(0);
  const [expTotal, setExpTotal] = useState(0);

  const [vitals, setVitals] = useState({});

  const updateCharClass = c => {
    if (c === 'Dragon') {
      setRace(c);
    } else if (race === 'Dragon') {
      setRace(races[0]);
    }
    setCharClass(c);
  };

  const updateRace = r => {
    if (r === 'Dragon') {
      setCharClass(r);
    } else if (charClass === 'Dragon') {
      setCharClass(classes[0]);
    }
    setRace(r);
  };

  const updateStatLevels = (k, v) => {
    if (!v || v < 0) {
      v = 0;
    } else if (v > 500) {
      v = 500;
    }
    setStatLevels(statLevels => ({
      ...statLevels,
      [k]: v,
    }));
  };

  const updateStatInc = (k, v) => {
    if (!v || v < 0) {
      v = 0;
    } else if (v > 500) {
      v = 500;
    }
    setStatInc(statInc => ({
      ...statInc,
      [k]: v,
    }));
  };

  useEffect(() => {
    var cst = 0;
    var st = 0;
    var et = 0;
    stats.forEach(stat => {
      const cost = getStatCost(stat, charClass, race, statLevels[stat], statInc[stat]);
      setStatCost(statCost => ({
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
    var v = getVitals(charClass, race, level, statLevels);
    setVitals(v);
  }, [charClass, race, level, statLevels]);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Stat Calculator">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CharacterInfo
              level={level}
              setLevel={setLevel}
              charClass={charClass}
              updateCharClass={updateCharClass}
              race={race}
              updateRace={updateRace}
            />
            <LevelInfo level={level} advExp={advExp} maxExp={maxExp} />
            <CmtCardHeader title="Stat Information" />
            <CmtCardContent>
              <Box pb={{ xs: 6, md: 10, xl: 16 }}>
                <TableContainer>
                  <Table style={{ maxWidth: '800px' }} size="small">
                    <TableBody>
                      {stats.map((stat, index) => (
                        <TableRow key={index}>
                          <TableCell size="small">
                            <Typography variant="body2" component="div">
                              {stat}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              size="small"
                              type="number"
                              inputProps={{ min: 0, max: 500 }}
                              value={statLevels[stat]}
                              variant="outlined"
                              onChange={event => updateStatLevels(stat, event.target.value)}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end" size="small">
                                    <Typography component="div" variant="body2">
                                      {`/ ${getMaxStat(stat, charClass, race, level)}`}
                                    </Typography>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              type="number"
                              label="+"
                              inputProps={{ min: 0, max: 500 }}
                              value={statInc[stat]}
                              variant="outlined"
                              onChange={event => updateStatInc(stat, event.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                              <Typography component="div" variant="body2">
                                {intToString(parseInt(statCost[stat]), 2)}
                                {' exp'}
                              </Typography>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell />
                        <TableCell align="right" size="normal">
                          <Typography component="div" variant="body2" style={{ paddingRight: '22px' }}>
                            {charStatTotal} / {statTotal}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Tooltip title={parseInt(expTotal).toLocaleString('en-US') + ' exp'}>
                            <Typography component="div" variant="body2" style={{ paddingLeft: '14px' }}>
                              {intToString(parseInt(expTotal), 2)}
                              {' exp'}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell />
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CmtCardContent>
            <CmtCardHeader title="Character Information" />
            <CmtCardContent>
              <Box pb={{ xs: 6, md: 10, xl: 16 }}>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography component="p">Vitals</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography component="p">
                            {vitals['hp']} hp, {vitals['sp']} sp, {vitals['mp']} mp
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography component="p">Encumbrance</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography component="p">{getEncumbrance(race, statLevels)}</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography component="p">Weight</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography component="p">{getWeight(race, statLevels)}</Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default StatCalculator;
