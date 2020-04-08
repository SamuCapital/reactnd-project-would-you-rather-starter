import { createStore, combineReducers, compose } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import * as reducers from './ducks';
import sessionReducer from './ducks/Session/reducers'; // TODO: REMOVE ONCE NEXT REDUCER IS READY
import middleware from './Middleware';

const rootReducer = combineReducers(reducers, loadingBarReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(middleware));

export default Store;
