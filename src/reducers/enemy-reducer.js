const initialState = {
  id: 1,
  name: 'SLIME',
  level: 1,
  currentHp: 5,
  maxHp: 5,
  stats: {attack: 20, defense: 10},
  rewards: {exp: 999, gold: 999},
};

export const enemyReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_ENEMY_HP') {
    return {
      ...state,
      currentHp: action.newHp
    };
  }
  if (action.type === 'POPULATE_ENEMY_OBJECT') {
    return {
      ...state,
      id: action.enemy.id,
      name: action.enemy.name,
      level: action.enemy.level,
      currentHp: action.enemy.currentHp,
      maxHp: action.enemy.maxHp,
      stats: {attack: action.enemy.stats.attack, defense: action.enemy.stats.defense},
      rewards: {exp: action.enemy.rewards.exp, gold: action.enemy.rewards.gold}
    };
  }
  return state;
};

export default enemyReducer;
