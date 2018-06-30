const initialState = {
  id: 0,
  name: 'MISSINGNO',
  level: 1,
  hp: {current: 1, max: 1},
  stats: {attack: 20, defense: 10},
  rewards: {exp: 1, gold: 1}
  
};

export const enemyReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_ENEMY_HP') {
    return {
      ...state,
      hp: {...state.hp, current: action.newHp}
    };
  }
  if (action.type === 'POPULATE_ENEMY_OBJECT') {
    return {
      ...state,
      id: action.enemy.id,
      name: action.enemy.name,
      level: action.enemy.level,
      hp: {current: action.enemy.hp.current, max: action.enemy.hp.max},
      stats: {attack: action.enemy.stats.attack, defense: action.enemy.stats.defense},
      rewards: {exp: action.enemy.rewards.exp, gold: action.enemy.rewards.gold}
    };
  }
  return state;
};

export default enemyReducer;
