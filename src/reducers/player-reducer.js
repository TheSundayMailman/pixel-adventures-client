const initialState = {
  id: '000000000000000000000000',
  name: 'ERROR',
  job: 'KNIGHT',
  level: 1,
  hp: {
    current: 1,
    max: 1
  },
  mp: {
    current: 1,
    max: 1
  },
  stats: {
    attack: 1,
    defense: 1,
    intelligence: 1
  },
  equipment: {
    weapon: 'WEAPON',
    armor: 'ARMOR',
    accessory: 'ACCESSORY'
  },
  skills: [
    'SHIELD-BASH'
  ],
  items: [
    {id: 1, name: 'POTION', quantity: 1}
  ],
  exp: 0,
  gold: 0,
  nextLevel: 1
};

export const playerReducer = (state = initialState, action) => {
  if (action.type === 'POPULATE_PLAYER_OBJECT') {
    return {
      ...state,
      id: action.player.id,
      name: action.player.name,
      job: action.player.job,
      level: action.player.level,
      hp: {...action.player.hp},
      mp: {...action.player.mp},
      stats: {...action.player.stats},
      equipment: {...action.player.equipment},
      skills: [...action.player.skills],
      items: [...action.player.items],
      exp: action.player.exp,
      gold: action.player.gold,
      nextLevel: action.player.nextLevel
    };
  }
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
      skills: action.newSkills,
      nextLevel: action.newNextLevel
    };
  }
  return state;
};

export default playerReducer;
