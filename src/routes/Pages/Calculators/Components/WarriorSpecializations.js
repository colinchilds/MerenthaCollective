import React, { Fragment, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Grid, Divider } from '@mui/material';

const SPECIALIZABLE_SKILLS = ['attack', 'two handed', 'axe', 'blade', 'blunt', 'knife', 'flail', 'projectile'];

const WarriorSpecializations = ({ warriorSpecializations = {}, onUpdate }) => {
  const { newbie, elite, legend } = warriorSpecializations;

  const handleSpecializationChange = (tier, value) => {
    let updatedSpecializations = {
      ...warriorSpecializations,
      [tier]: value || null,
    };

    // If we're updating newbie or elite and it conflicts with legend, clear legend
    if ((tier === 'newbie' || tier === 'elite') && updatedSpecializations.legend) {
      const otherTier = tier === 'newbie' ? updatedSpecializations.elite : updatedSpecializations.newbie;
      if (value === otherTier && value === updatedSpecializations.legend) {
        updatedSpecializations.legend = null;
      }
    }

    onUpdate(updatedSpecializations);
  };

  // Get available skills for each tier
  const getAvailableSkills = (tier) => {
    switch (tier) {
      case 'newbie':
      case 'elite':
        // Can select any skill except the other tier's selection (legend can overlap)
        // Always include the current tier's selection so it doesn't disappear
        const currentTierSkill = tier === 'newbie' ? newbie : elite;
        const otherTierSkill = tier === 'newbie' ? elite : newbie;
        const availableSkills = SPECIALIZABLE_SKILLS.filter(
          (skill) => skill === currentTierSkill || !otherTierSkill || skill !== otherTierSkill,
        );
        return availableSkills;

      case 'legend':
        // Can only select from skills specialized in newbie OR elite, but not both
        const availableForLegend = [];
        if (newbie && newbie !== elite) {
          availableForLegend.push(newbie);
        }
        if (elite && elite !== newbie) {
          availableForLegend.push(elite);
        }
        return availableForLegend;

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

  // Clear legend if it becomes invalid
  useEffect(() => {
    if (legend) {
      const availableForLegend = [];
      if (newbie && newbie !== elite) {
        availableForLegend.push(newbie);
      }
      if (elite && elite !== newbie) {
        availableForLegend.push(elite);
      }

      if (!availableForLegend.includes(legend)) {
        onUpdate({
          ...warriorSpecializations,
          legend: null,
        });
      }
    }
  }, [newbie, elite, legend, onUpdate, warriorSpecializations]);

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
