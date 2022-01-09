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
} from '@material-ui/core';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { useStickyState } from '@jumbo/utils/commonHelper';
import { getVitals } from './vitals';
import { classes,
  races,
  stats,
  getAdvanceExp,
  getMaxExp,
  getStatCost,
  getMaxStat,
  intToString,
} from './calculator.helpers'
import LevelInfo from './level-info.component';
import CharacterInfo from './character-info.component'

const breadcrumbs = [{ label: 'Calculators', link: '/calculators' }, { label: 'Stats' }];

const StatCalculator = () => {
  const [charClass, setCharClass] = useStickyState('statCalc_charClass', classes[0]);
  const [race, setRace] = useStickyState('statCalc_race', races[0]);
  const [level, setLevel] = useStickyState('statCalc_level', 1);
  const [advExp, setAdvExp] = useState(0);
  const [maxExp, setMaxExp] = useState(0);

  const initStats = stats.reduce((result, stat) => ({ ...result, [stat]: 1 }), {});
  const [statLevels, setStatLevels] = useStickyState('statCalc_statLevels', {
    ...initStats,
  });
  const [statInc, setStatInc] = useState({ ...initStats });
  const [statCost, setStatCost] = useState(initStats);

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
      v = 1;
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
      v = 1;
    } else if (v > 500) {
      v = 500;
    }
    setStatInc(statInc => ({
      ...statInc,
      [k]: v,
    }));
  };

  useEffect(() => {
    stats.forEach(stat => {
      setStatCost(statCost => ({
        ...statCost,
        [stat]: getStatCost(stat, charClass, race, statLevels[stat], statInc[stat]),
      }));
    });
  }, [statLevels, statInc]);

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
            <LevelInfo
              level={level}
              advExp={advExp}
              maxExp={maxExp}
            />
            <CmtCardHeader title="Stat Information" />
            <CmtCardContent>
              <Box pb={{ xs: 6, md: 10, xl: 16 }}>
                <TableContainer>
                  <Table style={{ maxWidth: '800px' }} size="small">
                    <TableBody>
                      {stats.map(stat => (
                        <TableRow>
                          <TableCell>
                            <Typography component="p">{stat}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <TextField
                              size="small"
                              type="number"
                              inputProps={{ min: 1, max: 500 }}
                              value={statLevels[stat]}
                              variant="outlined"
                              onChange={event => updateStatLevels(stat, event.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography component="p">/{getMaxStat(stat, charClass, race, level)}</Typography>
                          </TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              type="number"
                              label="+"
                              inputProps={{ min: 1, max: 500 }}
                              value={statInc[stat]}
                              variant="outlined"
                              onChange={event => updateStatInc(stat, event.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <Tooltip title={parseInt(statCost[stat]).toLocaleString('en-US') + ' exp'}>
                              <Typography component="p">
                                {intToString(parseInt(statCost[stat]), 2)}
                                {' exp'}
                              </Typography>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
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
