const initialState = {
  currentLocation: 'BLANK',
  statusMode: false,
  npcDisplay: false,
  enemyDisplay: false,
  hubMode: false,
  townMode: false,
  convoMode: false,
  innMode: false,
  disengageInnMode: false,
  shopMode: false,
  buyMode: false,
  sellMode: false,
  disengageShopMode: false,
  exploreMode: false,
  battleMode: false,
  playerTurn: false,
  enemyTurn: false,
  itemMode: false,
  skillMode: false,
  victoryMode: false,
  levelUpMode: false,
  defeatMode: false,
  currentMessages: [
    'IF YOU SEE THIS, THERE IS AN ERROR'
  ]
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === 'REINITIALIZE_GAME_STATE') {
    return {
      ...state,
      currentLocation: 'ASTERA',
      statusMode: false,
      npcDisplay: false,
      enemyDisplay: false,
      hubMode: true,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      itemMode: false,
      skillMode: false,
      victoryMode: false,
      levelUpMode: false,
      defeatMode: false,
      currentMessages: [
        'You are now back in the world of ASTERA! Pick',
        'a place to go! Visit the TOWN for some rest,',
        'or venture into the wilderness to hunt for',
        'some monsters or treasures!'
      ]
    };
  }
  if (action.type === 'TOGGLE_STATUS_MODE') {
    return {
      ...state,
      statusMode: !state.statusMode
    };
  }
  if (action.type === 'ENABLE_NPC_DISPLAY') {
    return {
      ...state,
      npcDisplay: true,
      enemyDisplay: false
    };
  }
  if (action.type === 'ENABLE_ENEMY_DISPLAY') {
    return {
      ...state,
      npcDisplay: false,
      enemyDisplay: true
    };
  }
  if (action.type === 'DISABLE_SPRITE_DISPLAY') {
    return {
      ...state,
      npcDisplay: false,
      enemyDisplay: false
    };
  }
  if (action.type === 'ENTER_HUB_MODE') {
    return {
      ...state,
      currentLocation: 'ASTERA',
      hubMode: true,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
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
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_CONVO_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: true,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_INN_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: true,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'DISENGAGE_INN_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: true,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_SHOP_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: true,
      buyMode: false,
      sellMode: false,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_BUY_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: true,
      sellMode: false,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_SELL_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: true,
      disengageShopMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'DISENGAGE_SHOP_MODE') {
    return {
      ...state,
      townMode: false,
      convoMode: false,
      innMode: false,
      disengageInnMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
      disengageShopMode: true,
      currentMessages: action.messages
    };
  }
  if (action.type === 'ENTER_EXPLORE_MODE') {
    return {
      ...state,
      currentLocation: action.location,
      hubMode: false,
      townMode: false,
      convoMode: false,
      innMode: false,
      shopMode: false,
      buyMode: false,
      sellMode: false,
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
      exploreMode: false,
      battleMode: true,
      playerTurn: true,
      enemyTurn: false,
      victoryMode: false,
      defeatMode: false,
      currentMessages: action.messages
    };
  }
  if (action.type === 'TOGGLE_ITEM_MODE') {
    return {
      ...state,
      itemMode: !state.itemMode
    };
  }
  if (action.type === 'TOGGLE_SKILL_MODE') {
    return {
      ...state,
      skillMode: !state.skillMode
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
  if (action.type === 'TOGGLE_LEVEL_UP_MODE') {
    return {
      ...state,
      exploreMode: false,
      battleMode: false,
      playerTurn: false,
      enemyTurn: false,
      victoryMode: false,
      levelUpMode: true,
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
      levelUpMode: false,
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
