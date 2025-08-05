// Game time constants based on actual game engine
export const GAME_TIME_CONSTANTS = {
  MONTHS_PER_YEAR: 10,
  DAYS_PER_MONTH: 20,
  HOURS_PER_DAY: 20, // Merentha has 20-hour days
  MINUTES_PER_HOUR: 60,
  SECONDS_PER_MINUTE: 20, // Game engine: MINUTE = 20 real seconds

  // Game engine time constants (in real seconds)
  THE_BEGINNING: 720561600, // Unix timestamp baseline
  GAME_SECOND: 1, // 1 game second = 1 real second
  GAME_MINUTE: 20, // 1 game minute = 20 real seconds
  GAME_HOUR: 1200, // 1 game hour = 1200 real seconds = 20 real minutes
  GAME_DAY: 24000, // 1 game day = 24000 real seconds = 400 real minutes = 6.67 real hours
  GAME_MONTH: 480000, // 1 game month = 480000 real seconds
  GAME_YEAR: 4800000, // 1 game year = 4800000 real seconds

  // Month names
  MONTH_NAMES: ['Roki', 'Praxi', 'Altki', 'Ketralki', 'Aenterki', 'Kepki', 'Kortki', 'Kantki', 'Sartki', 'Denki'],
};

// Reference point: Tue Aug 5 10:29:31 2025 MDT = 18th day of Ketralki in year 198 NM, 1:28 AM
// MDT is UTC-6 (daylight saving time), so 10:29:31 MDT = 16:29:31 UTC
// In 20-hour system: 1:28 AM = hour 1, minute 28
export const REFERENCE_POINT = {
  realTime: new Date('2025-08-05T16:29:31.000Z'),
  gameTime: {
    year: 198,
    month: 3, // Ketralki (4th month, 0-indexed as 3)
    day: 18,
    hour: 1, // 1 AM in 20-hour system
    minute: 28,
  },
};

// Calculate the effective beginning timestamp based on our reference point
const calculateEffectiveBeginning = () => {
  const refRealUnix = Math.floor(REFERENCE_POINT.realTime.getTime() / 1000);
  const refGameSeconds =
    (REFERENCE_POINT.gameTime.year - 1) * GAME_TIME_CONSTANTS.GAME_YEAR +
    REFERENCE_POINT.gameTime.month * GAME_TIME_CONSTANTS.GAME_MONTH +
    (REFERENCE_POINT.gameTime.day - 1) * GAME_TIME_CONSTANTS.GAME_DAY +
    REFERENCE_POINT.gameTime.hour * GAME_TIME_CONSTANTS.GAME_HOUR +
    REFERENCE_POINT.gameTime.minute * GAME_TIME_CONSTANTS.GAME_MINUTE;

  return refRealUnix - refGameSeconds;
};

export const EFFECTIVE_BEGINNING = calculateEffectiveBeginning();

export function realTimeToGameTime(realTime) {
  const realTimestamp = new Date(realTime);

  // Convert to Unix timestamp (seconds since epoch)
  const unixTimestamp = Math.floor(realTimestamp.getTime() / 1000);

  // Calculate game seconds using our calibrated beginning point
  const gameSeconds = unixTimestamp - EFFECTIVE_BEGINNING;

  // Use the game engine formulas to extract time components
  const year = Math.floor(gameSeconds / GAME_TIME_CONSTANTS.GAME_YEAR);
  const remainingAfterYears = gameSeconds % GAME_TIME_CONSTANTS.GAME_YEAR;

  const month = Math.floor(remainingAfterYears / GAME_TIME_CONSTANTS.GAME_MONTH);
  const remainingAfterMonths = remainingAfterYears % GAME_TIME_CONSTANTS.GAME_MONTH;

  const day = Math.floor(remainingAfterMonths / GAME_TIME_CONSTANTS.GAME_DAY);
  const remainingAfterDays = remainingAfterMonths % GAME_TIME_CONSTANTS.GAME_DAY;

  const hour = Math.floor(remainingAfterDays / GAME_TIME_CONSTANTS.GAME_HOUR);
  const remainingAfterHours = remainingAfterDays % GAME_TIME_CONSTANTS.GAME_HOUR;

  const minute = Math.floor(remainingAfterHours / GAME_TIME_CONSTANTS.GAME_MINUTE);

  return {
    year: year + 1, // Game years start at 1, not 0
    month: month, // 0-indexed months
    day: day + 1, // Game days start at 1, not 0
    hour: hour, // 0-indexed hours (0-19)
    minute: minute, // 0-indexed minutes (0-59)
  };
}

export function gameTimeToRealTime(gameTime) {
  const { year, month, day, hour, minute } = gameTime;

  // Convert game time back to total game seconds since THE_BEGINNING
  const totalGameSeconds =
    (year - 1) * GAME_TIME_CONSTANTS.GAME_YEAR +
    month * GAME_TIME_CONSTANTS.GAME_MONTH +
    (day - 1) * GAME_TIME_CONSTANTS.GAME_DAY +
    hour * GAME_TIME_CONSTANTS.GAME_HOUR +
    minute * GAME_TIME_CONSTANTS.GAME_MINUTE;

  // Convert back to Unix timestamp using our calibrated beginning point
  const unixTimestamp = totalGameSeconds + EFFECTIVE_BEGINNING;

  // Convert to JavaScript Date (milliseconds)
  return new Date(unixTimestamp * 1000);
}

export function formatGameTime(gameTime) {
  const { year, month, day, hour, minute } = gameTime;
  const monthName = GAME_TIME_CONSTANTS.MONTH_NAMES[month];

  // Convert internal hour (0-19) to display format (1-10 + AM/PM)
  // 10 AM = hour 0, 1-9 AM = hours 1-9, 10 PM = hour 10, 1-9 PM = hours 11-19
  let displayHour, period;
  if (hour === 0) {
    displayHour = 10;
    period = 'AM';
  } else if (hour <= 9) {
    displayHour = hour;
    period = 'AM';
  } else if (hour === 10) {
    displayHour = 10;
    period = 'PM';
  } else {
    displayHour = hour - 10;
    period = 'PM';
  }

  return `${day}${getOrdinalSuffix(day)} day of ${monthName} in year ${year} NM, ${displayHour}:${minute
    .toString()
    .padStart(2, '0')} ${period}`;
}

export function formatRealTime(realTime) {
  return realTime.toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// Validation functions
export function isValidGameTime(gameTime) {
  const { year, month, day, hour, minute } = gameTime;

  return (
    Number.isInteger(year) &&
    year >= 0 &&
    Number.isInteger(month) &&
    month >= 0 &&
    month < GAME_TIME_CONSTANTS.MONTHS_PER_YEAR &&
    Number.isInteger(day) &&
    day >= 1 &&
    day <= GAME_TIME_CONSTANTS.DAYS_PER_MONTH &&
    Number.isInteger(hour) &&
    hour >= 0 &&
    hour < GAME_TIME_CONSTANTS.HOURS_PER_DAY && // Now validates 0-19 for 20-hour day
    Number.isInteger(minute) &&
    minute >= 0 &&
    minute < GAME_TIME_CONSTANTS.MINUTES_PER_HOUR
  );
}

export function isValidRealTime(realTime) {
  return realTime instanceof Date && !isNaN(realTime.getTime());
}
