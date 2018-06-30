import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './reducers/game-reducer.js';
import playerReducer from './reducers/player-reducer.js';
import enemyReducer from './reducers/enemy-reducer.js';
import npcReducer from './reducers/npc-reducer.js';

const store = createStore(
  combineReducers({
    game: gameReducer,
    player: playerReducer,
    enemy: enemyReducer,
    npc: npcReducer
  }),
  applyMiddleware(thunk)
);

export default store;
