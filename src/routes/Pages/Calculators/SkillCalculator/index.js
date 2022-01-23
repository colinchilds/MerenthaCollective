import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import { useStickyState } from '@jumbo/utils/commonHelper';
import { classes, intToString } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';
import CharacterInfo from '../Components/character-info.component';
import { getSkillMax, getSkills } from '../Helpers/skills.helpers';
import { Divider, Grid, InputAdornment, TextField, Tooltip, Typography } from '@mui/material';

const breadcrumbs = [{ label: 'Calculators', link: '/calculators' }, { label: 'Stats' }];

const SkillCalculator = () => {
  const [charClass, setCharClass] = useStickyState('statCalc_charClass', classes[0]);
  const [race, setRace] = useStickyState('statCalc_race', races[0]);
  const [level, setLevel] = useStickyState('statCalc_level', 1);
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const s = getSkills(charClass, 'bard', race);
    setSkills(s);
    console.log(s);
  }, [charClass, race]);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Skill Calculator">
      <CmtCard>
        <CharacterInfo
          level={level}
          setLevel={setLevel}
          charClass={charClass}
          setCharClass={setCharClass}
          race={race}
          setRace={setRace}
        />
        {Object.keys(skills).map((skill, index) => (
          // <Typography key={index}>{skill}: {getSkillMax(skills, skill, level)}</Typography>
          <Fragment key={index}>
            <Grid container direction="row" alignItems="center" spacing={2} style={{ padding: 10 }}>
              <Grid item xs={6} sm={3}>
                <Typography>{skill}</Typography>
              </Grid>
              <Grid item xs={6} sm={3} align={{ xs: 'left', sm: 'center' }}>
                <TextField
                  size="small"
                  type="number"
                  inputProps={{ min: 0, max: 500 }}
                  style={{ minWidth: '115px' }}
                  // value={statLevels[stat]}
                  variant="outlined"
                  // onChange={(event) => updateStatLevels(stat, event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" size="small">
                        <Typography>{`/ ${getSkillMax(skills, skill, level)}`}</Typography>
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
                  // value={statInc[stat]}
                  variant="outlined"
                  // onChange={(event) => updateStatInc(stat, event.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }}>
                <Tooltip title={parseInt(0).toLocaleString('en-US') + ' exp'}>
                  <Typography>
                    {intToString(parseInt(0), 2)}
                    {' exp'}
                  </Typography>
                </Tooltip>
              </Grid>
            </Grid>
            <Divider />
          </Fragment>
        ))}
      </CmtCard>
    </PageContainer>
  );
};

export default SkillCalculator;
