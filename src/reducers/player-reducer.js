const initialState = {
  name: 'ERDRICK',
  level: 3,
  currentHp: 128,
  maxHp: 128,
  stats: {attack: 20, defense: 10},
  exp: 634,
  gold: 796,
  items: {potions: 2}
};

export const playerReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_PLAYER_HP') {
    const newHp = action.newHp
    return {
      ...state,
      currentHp: newHp
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
