const initialState = {
  id: 1,
  name: 'Ghoul',
  level: 3,
  currentHp: 20,
  maxHp: 20,
  stats: {attack: 15, defense: 5},
  reward: {experience: 12, gold: 33}
};

export const enemyReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_ENEMY_STATS') {
    const newHp = state.currentHp - action.damage;
    return {
      ...state,
      hp: newHp
    };
  }
  return state;
};

export default enemyReducer;
