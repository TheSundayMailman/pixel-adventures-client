const initialState = {
  id: 1,
  name: 'GHOUL',
  level: 3,
  currentHp: 20,
  maxHp: 20,
  stats: {attack: 15, defense: 5},
  rewards: {exp: 999, gold: 999}
};

export const enemyReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_ENEMY_HP') {
    return {
      ...state,
      currentHp: action.newHp
    };
  }
  return state;
};

export default enemyReducer;
