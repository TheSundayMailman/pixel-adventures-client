const initialState = {
  currentLocation: 'FOREST',
  hubMode: false,
  townMode: false,
  exploreMode: false,
  battleMode: true,
  playerTurn: true,
  enemyTurn: false,
  victoryMode: false,
  defeatMode: false,
  currentMessages: [
    'As you explore the FOREST, a GHOUL suddenly',
    'draws near...',
    'It prepares for battle!',
    'What will you do next?'
  ]
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === 'FINISH_PLAYER_TURN') {
    return {
      ...state,
      playerTurn: false,
      enemyTurn: true,
      currentMessages: action.messages
    };
  }
  if (action.type === 'FINISH_ENEMY_TURN') {
    return {
      ...state,
      playerTurn: true,
      enemyTurn: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_EXPLORE_MODE') {
    return {
      ...state,
      hubMode: false,
      townMode: false,
      exploreMode: true,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_VICTORY_MODE') {
    return {
      ...state,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: true,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_DEFEAT_MODE') {
    return {
      ...state,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: true,
      currentMessages: action.messages
    };
  }
  return state;
};

export default gameReducer;
