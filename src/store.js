import { createStore } from 'redux';
import gameReducer from './reducers/reducer-index.js'

const store = createStore(gameReducer);

export default store;
