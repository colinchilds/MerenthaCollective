export const sectionStyles = {
  padding: '20px 24px 20px 32px',
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  borderRadius: 1,
};

export const makeId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const LEVEL_CONFIG = [
  { match: 'newbie', props: { bgcolor: '#2e7d32', color: '#fff' } }, // Green
  { match: 'late legend', props: { bgcolor: '#f57f17', color: '#000' } }, // Dark Yellow/Gold
  { match: ['legendary', 'legend'], props: { bgcolor: '#fbc02d', color: '#000' } }, // Yellow
  { match: 'late elite', props: { bgcolor: '#7b1fa2', color: '#fff' } }, // Dark Purple
  { match: 'elite', props: { bgcolor: '#9c27b0', color: '#fff' } }, // Purple
  { match: 'high mortal', props: { bgcolor: '#00838f', color: '#fff' } }, // Bluish Teal
  { match: 'late mid', props: { bgcolor: '#c62828', color: '#fff' } }, // Dark Red
  { match: 'mid', props: { bgcolor: '#e53935', color: '#fff' } }, // Red
];

export const getLevelChipProps = (level) => {
  const lowerLevel = level?.toLowerCase() || '';

  const config = LEVEL_CONFIG.find(({ match }) => {
    if (Array.isArray(match)) {
      return match.some((m) => lowerLevel.includes(m));
    }
    return lowerLevel.includes(match);
  });

  return config ? config.props : { variant: 'outlined' };
};

export const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
