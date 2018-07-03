const initialState = {
  name: 'ERDRICK',
  job: 'KNIGHT',
  level: 3,
  hp: {current: 1, max: 128},
  mp: {current: 1, max: 21},
  stats: {attack: 20, defense: 10, intelligence: 10},
  skills: {BASH: 5},
  exp: 634,
  gold: 101,
  items: {potions: 2},
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
