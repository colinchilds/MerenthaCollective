import React, { useEffect, useCallback } from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Switch,
  Typography,
} from '@mui/material';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { classes, subclasses } from '../Helpers/calculator.helpers';
import { races } from 'data/Races';

// Classes with nature skill access
const natureClasses = {
  Dragon: true, // All dragon subclasses
  Mage: ['Druid', 'Healer', 'Wizard'],
  Fighter: ['Ranger'],
  Monk: ['Healer', 'Priest', 'Scholar', 'Shaman'],
  Cleric: false,
  Rogue: ['Bard'],
};

export default function CharacterInfo(props) {
  const {
    level,
    charClass,
    subclass,
    race,
    isWerewolf,
    werewolfTimeOfDay,
    setLevel,
    setCharClass,
    setSubclass,
    setRace,
    setWerewolf,
    setWerewolfTime,
    showWerewolf = true,
  } = props;

  // Check if current class/subclass has nature access
  const hasNatureAccess = useCallback(() => {
    if (!natureClasses[charClass]) return false;
    if (natureClasses[charClass] === true) return true;
    return natureClasses[charClass].includes(subclass);
  }, [charClass, subclass]);

  // Check if race can be werewolf
  // Exclude Dragon and Lich
  // Include all Drow-elf
  // Include all Nature subclasses
  const canBeWerewolf = useCallback(() => {
    if (level < 20) return false;
    if (race === 'Dragon' || race === 'Lich') return false;
    if (race === 'Drow-elf') return true;
    return hasNatureAccess();
  }, [race, hasNatureAccess]);

  // Automatically clear werewolf when conditions are no longer met
  useEffect(() => {
    if (isWerewolf && !canBeWerewolf()) {
      setWerewolf(false);
    }
  }, [charClass, subclass, race, isWerewolf, setWerewolf, canBeWerewolf]);

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
                  inputProps={{ max: 140 }}
                />
              </FormControl>
            </Grid>
            {showWerewolf && canBeWerewolf() && (
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isWerewolf}
                        onChange={(event) => setWerewolf(event.target.checked)}
                        name="werewolf"
                      />
                    }
                    label="Werewolf"
                  />
                  {isWerewolf && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2">Day</Typography>
                      <Switch
                        checked={werewolfTimeOfDay === 'night'}
                        onChange={(event) => setWerewolfTime(event.target.checked ? 'night' : 'day')}
                        size="small"
                      />
                      <Typography variant="body2">Night</Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            )}
          </GridContainer>
        </Box>
      </CmtCardContent>
    </div>
  );
}
