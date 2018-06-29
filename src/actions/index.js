export const UPDATE_PLAYER_HP = 'UPDATE_PLAYER_HP';
export const updatePlayerHp = (newHp) => {
  return {
    type: UPDATE_PLAYER_HP,
    newHp,
  };
};

export const UPDATE_ENEMY_HP = 'UPDATE_ENEMY_HP';
export const updateEnemyHp = (newHp) => {
  return {
    type: UPDATE_ENEMY_HP,
    newHp,
  };
};

export const FINISH_PLAYER_TURN = 'FINISH_PLAYER_TURN';
export const finishPlayerTurn = (messages) => {
  return {
    type: FINISH_PLAYER_TURN,
    messages
  }
};

export const FINISH_ENEMY_TURN = 'FINISH_ENEMY_TURN';
export const finishEnemyTurn = (messages) => {
  return {
    type: FINISH_ENEMY_TURN,
    messages
  }
};

export const COLLECT_BATTLE_REWARDS = 'COLLECT_BATTLE_REWARDS';
export const collectBattleRewards = (exp, gold) => {
  return {
    type: COLLECT_BATTLE_REWARDS,
    exp,
    gold
  }
};

export const TOGGLE_EXPLORE_MODE = 'TOGGLE_EXPLORE_MODE';
export const toggleExploreMode = (messages) => {
  return {
    type: TOGGLE_EXPLORE_MODE,
    messages
  }
};

export const TOGGLE_VICTORY_MODE = 'TOGGLE_VICTORY_MODE';
export const toggleVictoryMode = (messages) => {
  return {
    type: TOGGLE_VICTORY_MODE,
    messages
  }
};

export const TOGGLE_DEFEAT_MODE = 'TOGGLE_DEFEAT_MODE';
export const toggleDefeatMode = (messages) => {
  return {
    type: TOGGLE_DEFEAT_MODE,
    messages
  }
};