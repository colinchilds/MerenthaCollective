import React from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import { Box, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { classes, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';

export default function CharacterInfo(props) {
  const { level, setLevel, charClass, setCharClass, subclass, setSubclass, race, setRace } = props;

  const updateCharClass = (c) => {
    if (c === 'Dragon') {
      setRace(c);
    } else if (race === 'Dragon') {
      setRace(races[0]);
    }
    setCharClass(c);
    setSubclass(subclasses[c][0]);
  };

  const updateRace = (r) => {
    if (r === 'Dragon') {
      setCharClass(r);
      setSubclass(subclasses[r][0]);
    } else if (charClass === 'Dragon') {
      const c = classes[0];
      setCharClass(c);
      setSubclass(subclasses[c][0]);
    }
    setRace(r);
  };

  return (
    <div>
      <CmtCardContent>
        <Box pb={{ xs: 6, md: 10, xl: 16 }}>
          <GridContainer>
            <Grid item xs={6} sm={3}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Class</InputLabel>
                <Select label="Class" value={charClass} onChange={(event) => updateCharClass(event.target.value)}>
                  {classes.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Subclass</InputLabel>
                <Select label="Class" value={subclass} onChange={(event) => setSubclass(event.target.value)}>
                  {subclasses[charClass].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Race</InputLabel>
                <Select label="Race" value={race} onChange={(event) => updateRace(event.target.value)}>
                  <ListSubheader disableSticky={true}>Regular</ListSubheader>
                  {races.map((item) => {
                    return item === 'Dragon' ? (
                      [
                        <ListSubheader>Special</ListSubheader>,
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>,
                      ]
                    ) : (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl style={{ width: '100%' }} variant="outlined">
                <TextField
                  label="Level"
                  type="number"
                  value={level}
                  onChange={(event) => setLevel(parseInt(event.target.value))}
                />
              </FormControl>
            </Grid>
          </GridContainer>
        </Box>
      </CmtCardContent>
    </div>
  );
}
