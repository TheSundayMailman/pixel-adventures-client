const initialState = {
  id: '000000000000000000000001',
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
  equipment: {
    weapon: 'BROAD-SWORD',
    armor: 'STEEL-PLATE',
    accessory: 'MEDALLION'
  },
  skills: [
    'SHIELD-BASH',
    'X-STRIKE',
    'METEOR-SLASH',
    'HELM-SPLITTER'
  ],
  items: [
    {id: 1, name: 'POTION', quantity: 7},
    {id: 2, name: 'HI-POTION', quantity: 10},
    {id: 3, name: 'ETHER', quantity: 5},
    {id: 4, name: 'HI-ETHER', quantity: 1},
    {id: 5, name: 'ELIXIR', quantity: 3}
  ],
  exp: 634,
  gold: 50,
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
