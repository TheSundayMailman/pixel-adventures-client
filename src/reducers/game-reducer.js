const initialState = {
  currentLocation: 'Forest',
  hubMode: false,
  townMode: false,
  exploreMode: false,
  battleMode: true,
  playerTurn: true,
  enemyTurn: false,
  victoryMode: false,
  defeatMode: false,
  currentMessages: [
    'Ghoul attacked!',
    'It was a critcal hit!',
    'Erdrick received 17 damage points!',
    'Ghoul started laughing uncontrollably...',
    'What will you do next?'
  ]
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_DAMAGE_DEALT_MESSAGES') {
    return {
      ...state,
      playerTurn: false,
      enemyTurn: true,
      currentMessages: action.messages
    };
  }
  if (action.type === 'UPDATE_DAMAGE_RECEIVED_MESSAGES') {
      return {
        ...state,
        playerTurn: true,
        enemyTurn: false,
        currentMessages: action.messages
      };
    }
  return state;
};


export default gameReducer;
