import React from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import { Box, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@material-ui/core';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { classes } from './calculator.helpers';
import { races } from 'data/Races';

export default function CharacterInfo(props) {
  const { level, setLevel, charClass, updateCharClass, race, updateRace } = props;
  return (
    <div>
      <CmtCardContent>
        <Box pb={{ xs: 6, md: 10, xl: 16 }}>
          <GridContainer>
            <Grid item xs={12} sm={4}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Class</InputLabel>
                <Select label="Class" value={charClass} onChange={event => updateCharClass(event.target.value)}>
                  {classes.map(item => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Race</InputLabel>
                <Select label="Race" value={race} onChange={event => updateRace(event.target.value)}>
                  <ListSubheader>Regular</ListSubheader>
                  {races.map(item => {
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
            <Grid item xs={12} sm={4}>
              <FormControl style={{ width: '100%' }} variant="outlined">
                <TextField
                  label="Level"
                  type="number"
                  value={level}
                  onChange={event => setLevel(parseInt(event.target.value))}
                />
              </FormControl>
            </Grid>
          </GridContainer>
        </Box>
      </CmtCardContent>
    </div>
  );
}
