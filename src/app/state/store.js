import { createStore, combineReducers, compose } from 'redux';
import * as reducers from './ducks';
import middleware from './Middleware';

const rootReducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(middleware));

export default Store;
