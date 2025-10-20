import React, { useState, useEffect } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Box, Button, TextField, Typography, Card, Select, MenuItem, FormControl, InputLabel, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import {
  realTimeToGameTime,
  gameTimeToRealTime,
  formatGameTime,
  formatRealTime,
  isValidGameTime,
  isValidRealTime,
  GAME_TIME_CONSTANTS,
} from '../Helpers/time.helpers';

const breadcrumbs = [
  { label: 'Calculators', link: '/calculators' },
  { label: 'Time Converter', isActive: true },
];

const TimeCalculator = () => {
  // Helper function to format Date object for datetime-local input
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // Real time state
  const [realTimeInput, setRealTimeInput] = useState('');
  const [realTimeResult, setRealTimeResult] = useState(null);

  // Game time state - will be initialized with current game time
  const [gameTimeInput, setGameTimeInput] = useState({
    year: 198,
    month: 3, // Ketralki
    day: 18,
    hour: 1, // 1 AM in 20-hour system
    minute: 28,
  });
  const [amPm, setAmPm] = useState('AM');
  const [gameTimeResult, setGameTimeResult] = useState('');

  // Error states
  const [realTimeError, setRealTimeError] = useState('');
  const [gameTimeError, setGameTimeError] = useState('');

  // Initialize with current time
  useEffect(() => {
    const now = new Date();
    setRealTimeInput(formatDateForInput(now));

    // Inline the conversion logic to avoid dependency warning
    if (!isValidRealTime(now)) {
      setRealTimeError('Please enter a valid date and time');
      setGameTimeResult('');
      return;
    }

    setRealTimeError('');
    const gameTime = realTimeToGameTime(now);
    setGameTimeResult(formatGameTime(gameTime));

    // Set game time input to current game time and convert to real time
    // Convert internal hour (0-19) to display format (1-10 + AM/PM)
    // 10 AM = hour 0, 1-9 AM = hours 1-9, 10 PM = hour 10, 1-9 PM = hours 11-19
    let displayHour, period;
    if (gameTime.hour === 0) {
      displayHour = 10;
      period = 'AM';
    } else if (gameTime.hour <= 9) {
      displayHour = gameTime.hour;
      period = 'AM';
    } else if (gameTime.hour === 10) {
      displayHour = 10;
      period = 'PM';
    } else {
      displayHour = gameTime.hour - 10;
      period = 'PM';
    }
    setGameTimeInput({ ...gameTime, hour: displayHour });
    setAmPm(period);
    const realTime = gameTimeToRealTime(gameTime);
    setRealTimeResult(realTime);
  }, []);

  const handleRealTimeConversion = (inputTime = null) => {
    const timeToConvert = inputTime || new Date(realTimeInput);

    if (!isValidRealTime(timeToConvert)) {
      setRealTimeError('Please enter a valid date and time');
      setGameTimeResult('');
      return;
    }

    setRealTimeError('');
    const gameTime = realTimeToGameTime(timeToConvert);
    setGameTimeResult(formatGameTime(gameTime));
  };

  const handleRealTimeInputChange = (event) => {
    const value = event.target.value;
    setRealTimeInput(value);
    if (value) {
      handleRealTimeConversion(new Date(value));
    }
  };

  const handleGameTimeInputChange = (field, value) => {
    const numValue = parseInt(value) || 0;
    const newGameTime = {
      ...gameTimeInput,
      [field]: numValue,
    };
    setGameTimeInput(newGameTime);

    // Convert display hour + AM/PM to internal hour (0-19)
    // 10 AM = hour 0, 1-9 AM = hours 1-9, 10 PM = hour 10, 1-9 PM = hours 11-19
    const displayHour = field === 'hour' ? numValue : newGameTime.hour;
    const currentAmPm = amPm;
    let internalHour;
    if (currentAmPm === 'AM') {
      internalHour = displayHour === 10 ? 0 : displayHour;
    } else {
      internalHour = displayHour === 10 ? 10 : displayHour + 10;
    }

    const gameTimeForValidation = {
      ...newGameTime,
      hour: internalHour,
    };

    // Automatically convert to real time
    if (isValidGameTime(gameTimeForValidation)) {
      setGameTimeError('');
      const realTime = gameTimeToRealTime(gameTimeForValidation);
      setRealTimeResult(realTime);
    } else {
      setGameTimeError('Please check all game time fields are valid');
      setRealTimeResult(null);
    }
  };

  const handleAmPmChange = (newAmPm) => {
    setAmPm(newAmPm);

    // Convert display hour + new AM/PM to internal hour (0-19)
    // 10 AM = hour 0, 1-9 AM = hours 1-9, 10 PM = hour 10, 1-9 PM = hours 11-19
    let internalHour;
    if (newAmPm === 'AM') {
      internalHour = gameTimeInput.hour === 10 ? 0 : gameTimeInput.hour;
    } else {
      internalHour = gameTimeInput.hour === 10 ? 10 : gameTimeInput.hour + 10;
    }

    const gameTimeForValidation = {
      ...gameTimeInput,
      hour: internalHour,
    };

    // Automatically convert to real time
    if (isValidGameTime(gameTimeForValidation)) {
      setGameTimeError('');
      const realTime = gameTimeToRealTime(gameTimeForValidation);
      setRealTimeResult(realTime);
    } else {
      setGameTimeError('Please check all game time fields are valid');
      setRealTimeResult(null);
    }
  };

  const setToNow = () => {
    const now = new Date();
    setRealTimeInput(formatDateForInput(now));
    handleRealTimeConversion(now);
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Time Converter" icon={AccessTimeIcon}>
      <Grid container spacing={3}>
        {/* Real Time to Game Time */}
        <Grid item xs={12} md={6}>
          <CmtCard sx={{ height: '320px', minWidth: '340px', display: 'flex', flexDirection: 'column' }}>
            <CmtCardHeader title="Real Time → Game Time" />
            <CmtCardContent sx={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mt: 2, mb: 3 }}>
                <TextField
                  fullWidth
                  type="datetime-local"
                  label="Real Time"
                  value={realTimeInput}
                  onChange={handleRealTimeInputChange}
                  error={!!realTimeError}
                  helperText={realTimeError}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Button variant="outlined" size="medium" onClick={setToNow}>
                    Current Time
                  </Button>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="h6" gutterBottom>
                  Game Time Result:
                </Typography>
                <Card variant="outlined" sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Typography variant="body1" sx={{ fontFamily: 'monospace', wordBreak: 'break-word' }}>
                    {gameTimeResult || 'Enter a real time above'}
                  </Typography>
                </Card>
              </Box>
            </CmtCardContent>
          </CmtCard>
        </Grid>

        {/* Game Time to Real Time */}
        <Grid item xs={12} md={6}>
          <CmtCard sx={{ height: '320px', minWidth: '340px', display: 'flex', flexDirection: 'column' }}>
            <CmtCardHeader title="Game Time → Real Time" />
            <CmtCardContent sx={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Year"
                      value={gameTimeInput.year}
                      onChange={(e) => handleGameTimeInputChange('year', e.target.value)}
                      inputProps={{ min: 0 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Month</InputLabel>
                      <Select
                        value={gameTimeInput.month}
                        label="Month"
                        onChange={(e) => handleGameTimeInputChange('month', e.target.value)}>
                        {GAME_TIME_CONSTANTS.MONTH_NAMES.map((month, index) => (
                          <MenuItem key={index} value={index}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Day"
                      value={gameTimeInput.day}
                      onChange={(e) => handleGameTimeInputChange('day', e.target.value)}
                      inputProps={{ min: 1, max: 20 }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Hour"
                      value={gameTimeInput.hour}
                      onChange={(e) => handleGameTimeInputChange('hour', e.target.value)}
                      inputProps={{ min: 1, max: 10 }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Minute"
                      value={gameTimeInput.minute}
                      onChange={(e) => handleGameTimeInputChange('minute', e.target.value)}
                      inputProps={{ min: 0, max: 59 }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel>AM/PM</InputLabel>
                      <Select value={amPm} label="AM/PM" onChange={(e) => handleAmPmChange(e.target.value)}>
                        <MenuItem value="AM">AM</MenuItem>
                        <MenuItem value="PM">PM</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {gameTimeError && (
                  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {gameTimeError}
                  </Typography>
                )}
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="h6" gutterBottom>
                  Real Time Result:
                </Typography>
                <Card variant="outlined" sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                    {realTimeResult ? formatRealTime(realTimeResult) : 'Adjust game time values above'}
                  </Typography>
                </Card>
              </Box>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TimeCalculator;
