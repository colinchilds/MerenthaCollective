import { useState, useEffect } from 'react';
import { useStickyState } from '../../../../@jumbo/utils/commonHelper';

const createDefaultPlayer = (id) => ({
  id,
  level: 1,
  isHardcore: false,
});

const createDefaultPartyState = () => ({
  mobExp: 100000,
  players: [createDefaultPlayer(1), createDefaultPlayer(2)],
});

export const usePartyState = () => {
  const [partyState, setPartyState] = useStickyState('partyCalc_state', createDefaultPartyState());
  const [nextPlayerId, setNextPlayerId] = useState(3);

  useEffect(() => {
    const maxId = Math.max(...partyState.players.map((p) => p.id), 0);
    setNextPlayerId(maxId + 1);
  }, [partyState.players]);

  const setMobExp = (exp) => {
    const parsedExp = parseInt(exp) || 0;
    setPartyState((prev) => ({
      ...prev,
      mobExp: Math.max(0, parsedExp),
    }));
  };

  const addPlayer = () => {
    if (partyState.players.length >= 6) return;

    const newPlayer = createDefaultPlayer(nextPlayerId);
    setPartyState((prev) => ({
      ...prev,
      players: [...prev.players, newPlayer],
    }));
    setNextPlayerId((prev) => prev + 1);
  };

  const removePlayer = (playerId) => {
    if (partyState.players.length <= 2) return;

    setPartyState((prev) => ({
      ...prev,
      players: prev.players.filter((p) => p.id !== playerId),
    }));
  };

  const updatePlayer = (playerId, updates) => {
    setPartyState((prev) => ({
      ...prev,
      players: prev.players.map((player) => (player.id === playerId ? { ...player, ...updates } : player)),
    }));
  };

  const setPlayerLevel = (playerId, level) => {
    const parsedLevel = parseInt(level) || 1;
    const validatedLevel = Math.max(1, Math.min(250, parsedLevel));
    updatePlayer(playerId, { level: validatedLevel });
  };

  const setPlayerHardcore = (playerId, isHardcore) => {
    updatePlayer(playerId, { isHardcore });
  };

  return {
    mobExp: partyState.mobExp,
    players: partyState.players,
    setMobExp,
    addPlayer,
    removePlayer,
    setPlayerLevel,
    setPlayerHardcore,
    canAddPlayer: partyState.players.length < 6,
    canRemovePlayer: partyState.players.length > 2,
  };
};
