import React from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import { Box, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { classes, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';

export default function CharacterInfo(props) {
  const { level, charClass, subclass, race, setLevel, setCharClass, setSubclass, setRace } = props;

  return (
    <div>
      <CmtCardContent>
        <Box pb={{ xs: 3, md: 4, xl: 6 }}>
          <GridContainer>
            <Grid item xs={6} sm={3}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel>Class</InputLabel>
                <Select label="Class" value={charClass} onChange={(event) => setCharClass(event.target.value)}>
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
                <Select label="Race" value={race} onChange={(event) => setRace(event.target.value)}>
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
                  inputProps={{ max: 250 }}
                />
              </FormControl>
            </Grid>
          </GridContainer>
        </Box>
      </CmtCardContent>
    </div>
  );
}
