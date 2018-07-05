export const TOGGLE_STATUS_MODE = 'TOGGLE_STATUS_MODE';
export const toggleStatusMode = () => {
  return {
    type: TOGGLE_STATUS_MODE
  };
};

export const ENABLE_NPC_DISPLAY = 'ENABLE_NPC_DISPLAY';
export const enableNpcDisplay = () => {
  return {
    type: ENABLE_NPC_DISPLAY
  };
};

export const ENABLE_ENEMY_DISPLAY = 'ENABLE_ENEMY_DISPLAY';
export const enableEnemyDisplay = () => {
  return {
    type: ENABLE_ENEMY_DISPLAY
  };
};

export const DISABLE_SPRITE_DISPLAY = 'DISABLE_SPRITE_DISPLAY';
export const disableSpriteDisplay = () => {
  return {
    type: DISABLE_SPRITE_DISPLAY
  };
};


export const ENTER_HUB_MODE = 'ENTER_HUB_MODE';
export const enterHubMode = (messages) => {
  return {
    type: ENTER_HUB_MODE,
    messages
  }
};

export const ENTER_TOWN_MODE = 'ENTER_TOWN_MODE';
export const enterTownMode = (messages) => {
  return {
    type: ENTER_TOWN_MODE,
    messages
  }
};

export const TOGGLE_CONVO_MODE = 'TOGGLE_CONVO_MODE';
export const toggleConvoMode = (messages) => {
  return {
    type: TOGGLE_CONVO_MODE,
    messages
  }
};

export const TOGGLE_INN_MODE = 'TOGGLE_INN_MODE';
export const toggleInnMode = (messages) => {
  return {
    type: TOGGLE_INN_MODE,
    messages
  }
};

export const POPULATE_NPC_OBJECT = 'POPULATE_NPC_OBJECT';
export const populateNpcObject = (npc) => {
  return {
    type: POPULATE_NPC_OBJECT,
    npc
  };
};

// export const GET_NEW_NPC = 'GET_NEW_NPC';
// export const getNewNPC = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken; // need to setup and import auth
//   fetch('api/address/here', {
//     method: 'GET',
//     header: {Authorization: `Bearer ${authToken}`}
//   })
//     .then(res => res.json())
//     .then(enemy => disptach(populateNpcObject(enemy)))
//     .catch(err => console.error(err));
// };

export const ENTER_EXPLORE_MODE = 'ENTER_EXPLORE_MODE';
export const enterExploreMode = (location, messages) => {
  return {
    type: ENTER_EXPLORE_MODE,
    location,
    messages
  }
};

export const POPULATE_ENEMY_OBJECT = 'POPULATE_ENEMY_OBJECT';
export const populateEnemyObject = (enemy) => {
  return {
    type: POPULATE_ENEMY_OBJECT,
    enemy,
  };
};

// export const GET_NEW_ENEMY = 'GET_NEW_ENEMY';
// export const getNewEnemy = () => (dispatch, getState) => {
//   const authToken = getState().auth.authToken; // need to setup and import auth
//   fetch('api/address/here', {
//     method: 'GET',
//     header: {Authorization: `Bearer ${authToken}`}
//   })
//     .then(res => res.json())
//     .then(enemy => disptach(populateEnemyObject(enemy)))
//     .catch(err => console.error(err));
// };

export const TOGGLE_BATTLE_MODE = 'TOGGLE_BATTLE_MODE';
export const toggleBattleMode = (messages) => {
  return {
    type: TOGGLE_BATTLE_MODE,
    messages
  }
};

export const UPDATE_PLAYER_HP = 'UPDATE_PLAYER_HP';
export const updatePlayerHp = (newHp) => {
  return {
    type: UPDATE_PLAYER_HP,
    newHp,
  };
};

export const UPDATE_PLAYER_MP = 'UPDATE_PLAYER_MP';
export const updatePlayerMp = (newMp) => {
  return {
    type: UPDATE_PLAYER_MP,
    newMp,
  };
};

export const UPDATE_PLAYER_GOLD = 'UPDATE_PLAYER_GOLD';
export const updatePlayerGold = (newGold) => {
  return {
    type: UPDATE_PLAYER_GOLD,
    newGold,
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
export const collectBattleRewards = (exp, gold, newNextLevel) => {
  return {
    type: COLLECT_BATTLE_REWARDS,
    exp,
    gold,
    newNextLevel
  }
};

export const LEVEL_UP_PLAYER = 'LEVEL_UP_PLAYER';
export const levelUpPlayer = (newLevel, newMaxHp, newMaxMp, newAttack, newDefense, newIntelligence, newNextLevel) => {
  return {
    type: LEVEL_UP_PLAYER,
    newLevel,
    newMaxHp,
    newMaxMp,
    newAttack,
    newDefense,
    newIntelligence,
    newNextLevel
  };
}

export const TOGGLE_LEVEL_UP_MODE = 'TOGGLE_LEVEL_UP_MODE';
export const toggleLevelUpMode = (messages) => {
  return {
    type: TOGGLE_LEVEL_UP_MODE,
    messages
  };
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
