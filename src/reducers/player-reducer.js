const initialState = {
  name: 'ERDRICK',
  job: 'KNIGHT',
  level: 3,
  hp: {current: 1, max: 128},
  mp: {current: 1, max: 21},
  stats: {attack: 20, defense: 10, intelligence: 10},
  exp: 634,
  gold: 101,
  items: {potions: 2}
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
    return {
      ...state,
      exp: newExp,
      gold: newGold
    };
  }
  return state;
};

export default playerReducer;
