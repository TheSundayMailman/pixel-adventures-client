const initialState = {
  name: 'Erdrick',
  level: 5,
  currentHp: 108,
  maxHp: 125,
  stats: {attack: 10, defense: 10},
  experience: 634,
  gold: 796,
  items: {potions: 2}
};

export const playerReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_PLAYER_STATS') {
    const newHp = state.currentHp - action.damage;
    return {
      ...state,
      currentHp: newHp
    };
  }
  return state;
};

export default playerReducer;
