import React, { Fragment } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Grid, Divider } from '@mui/material';

const SPECIALIZABLE_SKILLS = ['attack', 'two handed', 'axe', 'blade', 'blunt', 'knife', 'flail', 'projectile'];

const WarriorSpecializations = ({ warriorSpecializations = {}, onUpdate }) => {
  const { newbie, elite, legend } = warriorSpecializations;

  const handleSpecializationChange = (tier, value) => {
    const updatedSpecializations = {
      ...warriorSpecializations,
      [tier]: value || null,
    };
    onUpdate(updatedSpecializations);
  };

  // Get available skills for each tier
  const getAvailableSkills = (tier) => {
    switch (tier) {
      case 'newbie':
      case 'elite':
        // Can select any skill except already specialized ones
        const usedSkills = [tier === 'newbie' ? elite : newbie, legend].filter(Boolean);
        return SPECIALIZABLE_SKILLS.filter((skill) => !usedSkills.includes(skill));

      case 'legend':
        // Can only select from already specialized skills
        return [newbie, elite].filter(Boolean);

      default:
        return [];
    }
  };

  const formatSkillName = (skill) => {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  };

  const getSpecializationDescription = (tier) => {
    switch (tier) {
      case 'newbie':
        return 'no requirements';
      case 'elite':
        return 'level ≥50, deeds ≥15, str/dex ≥100';
      case 'legend':
        return 'level ≥90, deeds ≥30, str/dex ≥200';
      default:
        return '';
    }
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small" sx={{ mt: 1.5 }}>
            <InputLabel>Newbie Specialization</InputLabel>
            <Select
              value={newbie || ''}
              label="Newbie Specialization"
              onChange={(e) => handleSpecializationChange('newbie', e.target.value)}>
              <MenuItem value="">None</MenuItem>
              {getAvailableSkills('newbie').map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {formatSkillName(skill)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
            {getSpecializationDescription('newbie')}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small" sx={{ mt: 1.5 }}>
            <InputLabel>Elite Specialization</InputLabel>
            <Select
              value={elite || ''}
              label="Elite Specialization"
              onChange={(e) => handleSpecializationChange('elite', e.target.value)}>
              <MenuItem value="">None</MenuItem>
              {getAvailableSkills('elite').map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {formatSkillName(skill)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
            {getSpecializationDescription('elite')}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small" sx={{ mt: 1.5 }}>
            <InputLabel>Legend Specialization</InputLabel>
            <Select
              value={legend || ''}
              label="Legend Specialization"
              onChange={(e) => handleSpecializationChange('legend', e.target.value)}
              disabled={getAvailableSkills('legend').length === 0}>
              <MenuItem value="">None</MenuItem>
              {getAvailableSkills('legend').map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {formatSkillName(skill)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
            {getSpecializationDescription('legend')}
            {getAvailableSkills('legend').length === 0 && ' (requires prior specialization)'}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2 }} />
    </Fragment>
  );
};

export default WarriorSpecializations;
