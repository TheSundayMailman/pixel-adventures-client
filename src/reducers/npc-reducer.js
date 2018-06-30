const initialState = {
  id: 1,
  name: 'MISSINGNO',
  messages: [
    'IF YOU SEE THIS,',
    'SOMETHING WENT WRONG.'
  ]
};

export const npcReducer = (state = initialState, action) => {
  if (action.type === 'POPULATE_NPC_OBJECT') {
    return {
      ...state,
      id: action.npc.id,
      name: action.npc.name,
      messages: action.npc.messages
    };
  }
  return state;
};

export default npcReducer;
