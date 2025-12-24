import React, { useState, useMemo } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
  TableContainer,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { useSharedCharacterState } from '../Calculators/shared/useSharedCharacterState';
import { tames } from 'data/Tames';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Tames', isActive: true },
];

const Tames = () => {
  const { characters, characterList } = useSharedCharacterState();

  // Filter to only Druid/Ranger characters
  const druidRangerCharacters = useMemo(() => {
    return characterList.filter((char) => char.subclass === 'Druid' || char.subclass === 'Ranger');
  }, [characterList]);

  // Local state for selected character (separate from global active character)
  const [selectedCharacterId, setSelectedCharacterId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [areaFilter, setAreaFilter] = useState('');

  // Get the selected character
  const selectedCharacter = selectedCharacterId ? characters[selectedCharacterId] : null;

  // Calculate tame capability: nature + charisma
  const tameCapability = useMemo(() => {
    if (!selectedCharacter) return null;
    const nature = parseInt(selectedCharacter.skillLevels?.nature, 10) || 0;
    const charisma = parseInt(selectedCharacter.statLevels?.Charisma, 10) || 0;
    return nature + charisma;
  }, [selectedCharacter]);

  // Get unique areas for filter dropdown
  const uniqueAreas = useMemo(() => {
    return [...new Set(tames.map((t) => t.area))].sort();
  }, []);

  // Filter and sort tames
  const filteredTames = useMemo(() => {
    return tames.filter((mob) => {
      // Search filter (name and area)
      const term = searchTerm.toLowerCase();
      const matchesSearch = mob.name.toLowerCase().includes(term) || mob.area.toLowerCase().includes(term);

      // Area filter
      const matchesArea = !areaFilter || mob.area === areaFilter;

      // Tameable filter (only when character is selected)
      const matchesTameable = !tameCapability || tameCapability >= mob.tameMin;

      return matchesSearch && matchesArea && matchesTameable;
    });
    // Already sorted by tameMax descending from the data file
  }, [searchTerm, areaFilter, tameCapability]);

  const getCharacterDisplayName = (character) => {
    const raceName = (character.race && character.race.name) || character.race || 'Unknown';
    return `${character.name} (${character.subclass}/${raceName})`;
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Tameable Mobs">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Tameable Mobs">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <FormControl size="small" sx={{ minWidth: 250 }}>
                  <InputLabel id="character-select-label">Character</InputLabel>
                  <Select
                    labelId="character-select-label"
                    value={selectedCharacterId}
                    label="Character"
                    onChange={(e) => setSelectedCharacterId(e.target.value)}>
                    <MenuItem value="">
                      <em>Show All Mobs</em>
                    </MenuItem>
                    {druidRangerCharacters.map((char) => (
                      <MenuItem key={char.id} value={char.id}>
                        {getCharacterDisplayName(char)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  size="small"
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ minWidth: 150 }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel id="area-filter-label">Area</InputLabel>
                  <Select
                    labelId="area-filter-label"
                    value={areaFilter}
                    label="Area"
                    onChange={(e) => setAreaFilter(e.target.value)}>
                    <MenuItem value="">
                      <em>All Areas</em>
                    </MenuItem>
                    {uniqueAreas.map((area) => (
                      <MenuItem key={area} value={area}>
                        {area}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </CmtCardHeader>

            <CmtCardContent>
              {druidRangerCharacters.length === 0 && (
                <Alert severity="info" sx={{ mb: 2 }}>
                  No Druids or Rangers found. Create a Druid or Ranger character in the Skill Calculator to filter by tame
                  capability.
                </Alert>
              )}

              {selectedCharacter && tameCapability !== null && (
                <Typography sx={{ mb: 2 }}>
                  <strong>{selectedCharacter.name}</strong> - Tame Capability: <strong>{tameCapability}</strong> (Nature:{' '}
                  {parseInt(selectedCharacter.skillLevels?.nature, 10) || 0} + Charisma:{' '}
                  {parseInt(selectedCharacter.statLevels?.Charisma, 10) || 0})
                </Typography>
              )}

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                <strong>Tame requirements:</strong>
                <br />
                1. Nature + Charisma must be &gt;= tame value
                <br />
                2. Must not be in combat and mob cannot be aggressive toward you
              </Typography>

              <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Mob Name
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Area
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="bold">
                          Tame
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filteredTames.map((mob, idx) => (
                      <TableRow key={`${mob.name}-${mob.area}-${idx}`} hover>
                        <TableCell>
                          <Typography variant="body2">{mob.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{mob.area}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2">~{Math.round((mob.tameMin + mob.tameMax) / 2)}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredTames.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} align="center">
                          <Typography variant="body2" color="text.secondary">
                            No mobs found matching your criteria.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Showing {filteredTames.length} of {tames.length} mobs
              </Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Tames;
