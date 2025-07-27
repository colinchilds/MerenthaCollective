export const getPartySizeMultiplier = (partySize) => {
  if (partySize === 1) return 1;
  if (partySize === 2) return 1.5;
  if (partySize === 3) return 1.8;
  if (partySize === 4 || partySize === 5) return 2;
  return partySize / 3;
};

export const calculatePartyExperience = (mobExp, players) => {
  if (!mobExp || !players || players.length === 0) {
    return [];
  }

  const validPlayers = players.filter((player) => player.level > 0);
  if (validPlayers.length === 0) {
    return [];
  }

  const partySize = validPlayers.length;
  const partySizeMultiplier = getPartySizeMultiplier(partySize);
  const totalPartyExp = Math.floor(mobExp * partySizeMultiplier);

  const totalLevels = validPlayers.reduce((sum, player) => sum + player.level, 0);

  return validPlayers.map((player) => {
    // Step 1: Hardcore bonus (33% of original mob exp)
    const hardcoreBonus = player.isHardcore ? Math.floor(mobExp * 0.33) : 0;

    // Step 2: Party share based on level distribution
    const partyShare = Math.floor((player.level * totalPartyExp) / totalLevels);

    // Step 3: Final experience is hardcore bonus + party share
    const finalExp = hardcoreBonus + partyShare;

    return {
      ...player,
      hardcoreBonus: hardcoreBonus,
      partyShare: partyShare,
      finalExp: finalExp,
    };
  });
};

export const getTotalExperienceAwarded = (results) => {
  return results.reduce((sum, player) => sum + player.finalExp, 0);
};
