import React, { useMemo } from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { usePartyState } from './usePartyState';
import { calculatePartyExperience, getTotalExperienceAwarded, getPartySizeMultiplier } from '../Helpers/party.helpers';
import { intToString } from '../Helpers/calculator.helpers';

const breadcrumbs = [
  { label: 'Calculators', link: '/calculators' },
  { label: 'Party Experience', isActive: true },
];

const PartyCalculator = () => {
  const {
    mobExp,
    players,
    setMobExp,
    addPlayer,
    removePlayer,
    setPlayerLevel,
    setPlayerHardcore,
    canAddPlayer,
    canRemovePlayer,
  } = usePartyState();

  const expResults = useMemo(() => {
    return calculatePartyExperience(mobExp, players);
  }, [mobExp, players]);

  const totalAwarded = useMemo(() => {
    return getTotalExperienceAwarded(expResults);
  }, [expResults]);

  const totalPartyExp = useMemo(() => {
    if (players.length === 0) return 0;
    const validPlayers = players.filter((player) => player.level > 0);
    const partySize = validPlayers.length;
    const partySizeMultiplier = getPartySizeMultiplier(partySize);
    return Math.floor(mobExp * partySizeMultiplier);
  }, [mobExp, players]);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Party Experience Calculator">
      <CmtCard>
        <CmtCardHeader title="Mob Experience" />
        <CmtCardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              type="number"
              value={mobExp}
              onChange={(e) => setMobExp(e.target.value)}
              inputProps={{ min: 0, step: 1000 }}
              variant="outlined"
              sx={{ width: '200px' }}
            />
            <Typography variant="body2" color="textSecondary">
              Total experience to be distributed among party members
            </Typography>
          </Box>
        </CmtCardContent>

        <CmtCardHeader title="Party Members" />
        <CmtCardContent>
          <Grid container spacing={2}>
            {players.map((player, index) => (
              <Grid item xs={12} key={player.id}>
                <Box display="flex" alignItems="center" gap={2} p={2} border={1} borderColor="divider" borderRadius={1}>
                  <Typography variant="body2" sx={{ minWidth: '80px' }}>
                    Player {index + 1}
                  </Typography>
                  <TextField
                    label="Level"
                    type="number"
                    value={player.level}
                    onChange={(e) => setPlayerLevel(player.id, e.target.value)}
                    inputProps={{ min: 1, max: 250 }}
                    size="small"
                    sx={{ width: '100px' }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={player.isHardcore}
                        onChange={(e) => setPlayerHardcore(player.id, e.target.checked)}
                        size="small"
                      />
                    }
                    label="Hardcore"
                    sx={{ marginLeft: 1 }}
                  />
                  <Box flexGrow={1} />
                  {canRemovePlayer && (
                    <IconButton
                      size="small"
                      onClick={() => removePlayer(player.id)}
                      color="error"
                      sx={{
                        border: '1px solid',
                        borderColor: 'error.main',
                        borderRadius: 1,
                      }}>
                      <Delete fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box mt={2}>
            <Button variant="outlined" startIcon={<Add />} onClick={addPlayer} disabled={!canAddPlayer} size="small">
              Add Player
            </Button>
          </Box>
        </CmtCardContent>

        <CmtCardHeader title="Experience Distribution" />
        <CmtCardContent>
          {expResults.length > 0 ? (
            <>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Player</TableCell>
                      <TableCell align="center">Level</TableCell>
                      <TableCell align="center">Hardcore</TableCell>
                      <TableCell align="right">Hardcore Bonus</TableCell>
                      <TableCell align="right">Party Share</TableCell>
                      <TableCell align="right">Final Experience</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expResults.map((result, index) => (
                      <TableRow key={result.id}>
                        <TableCell>Player {index + 1}</TableCell>
                        <TableCell align="center">{result.level}</TableCell>
                        <TableCell align="center">{result.isHardcore ? '✓' : ''}</TableCell>
                        <TableCell align="right">
                          {result.hardcoreBonus > 0 ? (
                            <Tooltip title={`${result.hardcoreBonus.toLocaleString('en-US')} exp (33% of original)`}>
                              <span style={{ color: '#1976d2' }}>{intToString(result.hardcoreBonus, 2)}</span>
                            </Tooltip>
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title={`${result.partyShare.toLocaleString('en-US')} exp (level-based share)`}>
                            <span>{intToString(result.partyShare, 2)}</span>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title={`${result.finalExp.toLocaleString('en-US')} exp`}>
                            <Typography variant="body2" fontWeight="bold">
                              {intToString(result.finalExp, 2)}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ height: '16px' }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <strong>Party Pool Experience:</strong>{' '}
                    <Tooltip title={`${totalPartyExp.toLocaleString('en-US')} exp (after party size bonus)`}>
                      <span>{intToString(totalPartyExp, 2)}</span>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2">
                    <strong>Total Experience Awarded:</strong>{' '}
                    <Tooltip title={`${totalAwarded.toLocaleString('en-US')} exp (includes hardcore bonuses)`}>
                      <span>{intToString(totalAwarded, 2)}</span>
                    </Tooltip>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">
                    Party size bonus: {players.length} players ={' '}
                    {mobExp > 0 ? ((totalPartyExp / mobExp - 1) * 100).toFixed(0) : 0}% bonus
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography color="textSecondary">Enter mob experience and player levels to see distribution</Typography>
          )}
        </CmtCardContent>
      </CmtCard>
    </PageContainer>
  );
};

export default PartyCalculator;
