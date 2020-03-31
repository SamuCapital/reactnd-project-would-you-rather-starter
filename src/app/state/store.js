import { createStore, combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import * as reducers from './ducks';
import sessionReducer from './ducks/session/reducers'; // TODO: REMOVE ONCE NEXT REDUCER IS READY
import middleware from './middleware';

const rootReducer = combineReducers(reducers, loadingBarReducer);
const Store = createStore(sessionReducer, middleware);

export default Store;
