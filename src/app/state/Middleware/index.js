import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from './logger';
import fetchInitialData from './fetchInitialData';

const middleware = applyMiddleware(
  thunk,
  logger,
  // fetchInitialData
);

export default middleware;
