const initialState = {
  name: 'ERDRICK',
  job: 'KNIGHT',
  level: 3,
  hp: {
    current: 1,
    max: 128
  },
  mp: {
    current: 1,
    max: 21
  },
  stats: {
    attack: 21,
    defense: 10,
    intelligence: 7
  },
  skills: [
    'SHIELD-BASH',
    'X-STRIKE',
    'METEOR-SLASH',
    'HELM-SPLITTER'
  ],
  items: [
    // {id: 1, name: 'POTION', quantity: 1},
    // {id: 2, name: 'HI-POTION', quantity: 1},
    // {id: 3, name: 'ETHER', quantity: 1},
    // {id: 4, name: 'HI-ETHER', quantity: 1},
    // {id: 5, name: 'ELIXIR', quantity: 3}
  ],
  exp: 634,
  gold: 999,
  nextLevel: 1
};

export const playerReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_PLAYER_HP') {
    return {
      ...state,
      hp: {...state.hp, current: action.newHp}
    };
  }
  if (action.type === 'UPDATE_PLAYER_MP') {
    return {
      ...state,
      mp: {...state.mp, current: action.newMp}
    };
  }
  if (action.type === 'UPDATE_PLAYER_ITEMS') {
    return {
      ...state,
      items: action.newItems
    };
  }
  if (action.type === 'UPDATE_PLAYER_GOLD') {
    return {
      ...state,
      gold: action.newGold
    };
  }
  if (action.type === 'COLLECT_BATTLE_REWARDS') {
    const oldExp = state.exp;
    const newExp = oldExp + action.exp;
    const oldGold = state.gold;
    const newGold = oldGold + action.gold;
    const newNextLevel = action.newNextLevel;
    return {
      ...state,
      exp: newExp,
      gold: newGold,
      nextLevel: newNextLevel
    };
  }
  if (action.type === 'LEVEL_UP_PLAYER') {
    return {
      ...state,
      level: action.newLevel,
      hp: {...state.hp, max: action.newMaxHp},
      mp: {...state.mp, max: action.newMaxMp},
      stats: {...state.stats, attack: action.newAttack, defense: action.newDefense, intelligence: action.newIntelligence},
      nextLevel: action.newNextLevel
    };
  }
  return state;
};

export default playerReducer;
