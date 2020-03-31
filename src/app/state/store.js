import { createStore, combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import * as reducers from './ducks';
import sessionReducer from './ducks/Session/reducers'; // TODO: REMOVE ONCE NEXT REDUCER IS READY
import middleware from './Middleware';

const rootReducer = combineReducers(reducers, loadingBarReducer);
const Store = createStore(rootReducer, middleware);

export default Store;
