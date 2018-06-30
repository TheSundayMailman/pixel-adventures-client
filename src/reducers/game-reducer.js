const initialState = {
  currentLocation: 'ASTERA',
  hubMode: true,
  townMode: false,
  exploreMode: false,
  battleMode: false,
  playerTurn: false,
  enemyTurn: false,
  victoryMode: false,
  defeatMode: false,
  currentMessages: [
    'You are now back in the world of ASTERA! Pick',
    'a place to go! Visit the TOWN for some rest,',
    'or venture into the wilderness to hunt for',
    'some monsters or treasures!'
  ]
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === 'ENTER_HUB_MODE') {
    return {
      ...state,
      currentLocation: 'ASTERA',
      hubMode: true,
      townMode: false,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'ENTER_TOWN_MODE') {
    return {
      ...state,
      currentLocation: 'TOWN',
      hubMode: false,
      townMode: true,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'ENTER_EXPLORE_MODE') {
    return {
      ...state,
      currentLocation: action.location,
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
  if (action.type === 'TOGGLE_BATTLE_MODE') {
    return {
      ...state,
      hubMode: false,
      townMode: false,
      exploreMode: false,
      battleMode: true,
      playerTurn: true,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
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
