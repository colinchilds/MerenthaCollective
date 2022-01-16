import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
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
  Divider,
} from '@mui/material';
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

  const updateCharClass = (c) => {
    if (c === 'Dragon') {
      setRace(c);
    } else if (race === 'Dragon') {
      setRace(races[0]);
    }
    setCharClass(c);
  };

  const updateRace = (r) => {
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
    setStatLevels((statLevels) => ({
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
    setStatInc((statInc) => ({
      ...statInc,
      [k]: v,
    }));
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
    var v = getVitals(charClass, race, level, statLevels);
    setVitals(v);
  }, [charClass, race, level, statLevels]);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Stat Calculator">
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
                    style={{ minWidth: '115px' }}
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
            <Grid item xs={6} sm={3} order={{ xs: 1, sm: 0 }} align={{ xs: 'left', sm: 'center' }}>
              <Typography align="left" sx={{ paddingLeft: { xs: 0, sm: '30px' } }}>
                {charStatTotal} / {statTotal}
              </Typography>
            </Grid>
            <Grid item xs={0} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Grid item xs={6} sm={3} order={{ xs: 0, sm: 1 }}>
              <Tooltip title={parseInt(expTotal).toLocaleString('en-US') + ' exp'}>
                <Typography>
                  {intToString(parseInt(expTotal), 2)}
                  {' exp'}
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
